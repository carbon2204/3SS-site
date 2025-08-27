function createImageBlocks(imagesData, customStyles, navBar, currentLanguage) {
    if (!imagesData || !Array.isArray(imagesData)) {
        console.error("imagesData is undefined or not an array");
        return document.createElement('div');
    }

    const container = document.createElement('div');
    container.className = 'image-blocks-container';

    const supportedLanguages = ['ru', 'en', 'by'];
    if (!currentLanguage || !supportedLanguages.includes(currentLanguage)) {
        console.warn(`currentLanguage '${currentLanguage}' is undefined or not supported, creating empty container`);
        document.body.appendChild(container);
        return container;
    }

    const MIN_BLOCK_WIDTH = 440;
    applyStyles(container, customStyles.dynamicContainerStyles || imageBlockStyles.dynamicContainerStyles);

    const navGroups = {
        0: belhardSiteData.navBar.navBarElements.filter(item => item.parent === "16"),
        1: belhardSiteData.navBar.navBarElements.filter(item => item.parent === "18"),
        2: belhardSiteData.navBar.navBarElements.filter(item => item.parent === "20"),
        3: belhardSiteData.navBar.navBarElements.filter(item => item.parent === "17").concat([{ id: "extra", text: "Вентиляционное оборудование DIMMAX", href: path + "index.html" }]),
        8: belhardSiteData.navBar.navBarElements.filter(item => item.parent === "19")
    };

    for (let index = 0; index < imagesData.length; index++) {
        const data = imagesData[index];
        const block = document.createElement('div');
        block.className = 'image-block';
        applyStyles(block, customStyles.dynamicBlockStyles || imageBlockStyles.dynamicBlockStyles);

        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.text || 'Image';
        applyStyles(img, customStyles.imageStyles || imageBlockStyles.imageStyles);

        const text = document.createElement('div');
        text.className = 'overlay-text';
        applyStyles(text, customStyles.textStyles || imageBlockStyles.textStyles);

        const itemsToDisplay = navGroups[index] || [];
        if (itemsToDisplay.length > 0) {
            const ul = document.createElement('ul');
            applyStyles(ul, customStyles.ulStyles || imageBlockStyles.ulStyles);

            for (let j = 0; j < itemsToDisplay.length; j++) {
                const item = itemsToDisplay[j];
                const li = document.createElement('li');
                const link = document.createElement('a');

                if (item.id === "extra") {
                    link.textContent = {
                        'ru': "Вентиляционное оборудование DIMMAX",
                        'en': "DIMMAX Ventilation Equipment",
                        'by': "Вентыляцыйнае абсталяванне DIMMAX"
                    }[currentLanguage];
                } else {
                    const textIndex = parseInt(item.id) - 1;
                    try {
                        if (!belhardSiteData.navBar.navBarText) throw new Error("navBarText is undefined");
                        if (!belhardSiteData.navBar.navBarText[currentLanguage]) throw new Error(`No text data for language: ${currentLanguage}`);
                        if (!belhardSiteData.navBar.navBarText[currentLanguage][textIndex]) throw new Error(`No text at index ${textIndex} for language ${currentLanguage}`);
                        link.textContent = belhardSiteData.navBar.navBarText[currentLanguage][textIndex];
                    } catch (error) {
                        console.error(error.message);
                        link.textContent = {
                            'ru': "Текст недоступен",
                            'en': "Text not available",
                            'by': "Тэкст недаступны"
                        }[currentLanguage];
                    }
                }

                link.href = item.href || "#";
                applyStyles(link, customStyles.linkStyles || imageBlockStyles.linkStyles);

                link.addEventListener('mouseenter', function() {
                    applyStyles(this, customStyles.linkHoverStyles || imageBlockStyles.linkHoverStyles);
                });
                link.addEventListener('mouseleave', function() {
                    applyStyles(this, customStyles.linkDefaultStyles || imageBlockStyles.linkDefaultStyles);
                });

                li.appendChild(link);
                ul.appendChild(li);
            }
            text.appendChild(ul);
        } else {
            text.textContent = data.text || '';
        }

        block.appendChild(img);
        block.appendChild(text);
        container.appendChild(block);
    }

    document.body.appendChild(container);

    // Новый Intersection Observer с защитой от дергания
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const block = entry.target;
            const isVisible = entry.isIntersecting;
            const isFullyVisible = entry.intersectionRatio > 0.5; // Порог для полной видимости
            const isFullyHidden = entry.intersectionRatio === 0; // Полностью скрыт

            if (isVisible && isFullyVisible && !block.classList.contains('visible')) {
                block.classList.add('visible');
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            } else if (!isVisible && isFullyHidden && block.classList.contains('visible')) {
                block.classList.remove('visible');
                block.style.opacity = "0";
                block.style.transform = "translateY(50px)";
            }
            // Если блок частично виден (между 0 и 0.5), ничего не делаем, чтобы избежать дергания
        });
    }, {
        root: null,
        rootMargin: '-50px 0px -150px 0px', // Расширенная зона для плавности
        threshold: [0, 0.5] // Пороги: 0 (полностью скрыт) и 0.5 (половина видна)
    });

    // Инициализация блоков
    const blocks = container.querySelectorAll('.image-block');
    blocks.forEach(block => {
        block.style.opacity = "0";
        block.style.transform = "translateY(50px)";
        block.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(block);
    });

    function updateGridLayout() {
        const containerWidth = container.parentElement ? container.parentElement.clientWidth : window.innerWidth;
        const maxColumns = Math.floor(containerWidth / MIN_BLOCK_WIDTH);
        const columns = Math.max(1, Math.min(3, maxColumns, imagesData.length));

        container.style.gridTemplateColumns = `repeat(${columns}, minmax(0, ${MIN_BLOCK_WIDTH}px))`;

        const blocks = document.querySelectorAll('.image-block');
        blocks.forEach(block => {
            const img = block.querySelector('img');
            const text = block.querySelector('.overlay-text');

            if (columns === 1) {
                applyStyles(block, customStyles.singleColumnStyles || imageBlockStyles.singleColumnStyles);
                applyStyles(img, (customStyles.mobileStyles && customStyles.mobileStyles.phoneImageStyles) || imageBlockStyles.mobileStyles.phoneImageStyles);
                applyStyles(text, (customStyles.mobileStyles && customStyles.mobileStyles.phoneTextStyles) || imageBlockStyles.mobileStyles.phoneTextStyles);

                const links = block.querySelectorAll('a');
                links.forEach(link => {
                    applyStyles(link, customStyles.linkStyles || imageBlockStyles.linkStyles);
                });
            } else if (columns === 2) {
                applyStyles(block, customStyles.dynamicBlockStyles || imageBlockStyles.dynamicBlockStyles);
                applyStyles(img, (customStyles.mobileStyles && customStyles.mobileStyles.phoneImageStyles) || imageBlockStyles.mobileStyles.phoneImageStyles);
                applyStyles(text, (customStyles.mobileStyles && customStyles.mobileStyles.phoneTextStyles) || imageBlockStyles.mobileStyles.phoneTextStyles);

                const links = block.querySelectorAll('a');
                links.forEach(link => {
                    applyStyles(link, customStyles.linkStyles || imageBlockStyles.linkStyles);
                });
            } else {
                applyStyles(block, customStyles.dynamicBlockStyles || imageBlockStyles.dynamicBlockStyles);
                applyStyles(img, customStyles.imageDefaultStyles || imageBlockStyles.imageDefaultStyles);
                applyStyles(text, customStyles.textHiddenStyles || imageBlockStyles.textHiddenStyles);

                const links = block.querySelectorAll('a');
                links.forEach(link => {
                    applyStyles(link, customStyles.desktopLinkStyles || imageBlockStyles.desktopLinkStyles);
                });

                block.addEventListener('mouseenter', function() {
                    applyStyles(this, customStyles.blockHoverStyles || imageBlockStyles.blockHoverStyles);
                    applyStyles(this.querySelector('img'), customStyles.imageHoverStyles || imageBlockStyles.imageHoverStyles);
                    applyStyles(this.querySelector('.overlay-text'), customStyles.textVisibleStyles || imageBlockStyles.textVisibleStyles);
                });
                block.addEventListener('mouseleave', function() {
                    applyStyles(this, customStyles.blockDefaultStyles || imageBlockStyles.blockDefaultStyles);
                    applyStyles(this.querySelector('img'), customStyles.imageDefaultStyles || imageBlockStyles.imageDefaultStyles);
                    applyStyles(this.querySelector('.overlay-text'), customStyles.textHiddenStyles || imageBlockStyles.textHiddenStyles);
                });
            }
        });
    }

    updateGridLayout();
    const resizeObserver = new ResizeObserver(updateGridLayout);
    resizeObserver.observe(container.parentElement || document.body);
    window.addEventListener('unload', () => {
        resizeObserver.disconnect();
        observer.disconnect();
    });

    return container;
}