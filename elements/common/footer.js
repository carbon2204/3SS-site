function createFooter(data, style, currentLanguage) {
    try {
        // Определяем дефолтный язык
        const defaultLanguage = 'ru';

        // Создаем элемент футера
        var footer = createElement('footer', { id: 'footer', class: 'footer-relative' });

        // Создаем контейнер для колонок
        var footerContainer = createElement('div', {}, footer);
        applyStyles(footerContainer, style.container);

        // Создаем левую колонку с изображением
        var leftColumn = createElement('div', {}, footerContainer);
        applyStyles(leftColumn, style.leftColumn);

        var image = createElement('img', { src: data.footer.image }, leftColumn);
        applyStyles(image, style.footerImage);

        // Создаем правую колонку с данными
        var rightColumn = createElement('div', {}, footerContainer);
        applyStyles(rightColumn, style.rightColumn);

        // Выбираем данные для текущего языка, если его нет — используем дефолтный
        const langData = data.footer[currentLanguage] && Array.isArray(data.footer[currentLanguage])
            ? data.footer[currentLanguage]
            : data.footer[defaultLanguage];

        // Добавляем данные из массива в правую колонку
        for (let i = 0; i < langData.length - 2; i++) {
            if (i === 5) continue; // Пропускаем копирайт (индекс 5), он будет внизу

            var dataDiv = createElement('div', {}, rightColumn);

            if (i === 0) { // Телефон (индекс 0)
                var phoneLink = createElement('a', { href: `tel:${langData[i].replace(/\s/g, '')}` }, dataDiv);
                phoneLink.textContent = langData[i];
                applyStyles(phoneLink, style.columnText);
            } else if (i === 1) { // Email (индекс 1)
                var emailLink = createElement('a', { href: `mailto:${langData[i]}?subject=${encodeURIComponent(langData[6])}&body=${encodeURIComponent(langData[7])}` }, dataDiv);
                emailLink.textContent = langData[i];
                applyStyles(emailLink, style.columnText);
            } else { // Остальные элементы (адрес, УНП/ИНН, свидетельство)
                dataDiv.textContent = langData[i];
                applyStyles(dataDiv, style.columnText);
            }
        }

        // Создаем полосу с копирайтом внизу
        var copyrightDiv = createElement('div', {}, footer);
        copyrightDiv.textContent = langData[5]; // Копирайт из массива (индекс 5)
        applyStyles(copyrightDiv, style.copyright);
        applyStyles(copyrightDiv, style.copyrightText);

        // Добавляем футер в тело документа
        document.body.appendChild(footer);

        // Функция для применения адаптивных стилей
        function applyResponsiveStyles() {
            if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.footer) {
                applyStyles(rightColumn, style.rightColumnMobile);
                applyStyles(footerContainer, style.containerMobile);
                applyStyles(leftColumn, style.leftColumnMobile);
                applyStyles(image, style.footerImageMobile);
                applyStyles(copyrightDiv, style.textMobile);
            } else {
                applyStyles(rightColumn, style.rightColumn);
                applyStyles(footerContainer, style.container);
                applyStyles(leftColumn, style.leftColumn);
                applyStyles(image, style.footerImage);
                applyStyles(copyrightDiv, style.copyrightText);
            }
        }

        // Функция для корректировки положения футера
        function adjustFooterPosition() {
            var footer = document.getElementById('footer');
            if (!footer) return;

            var body = document.body;
            var html = document.documentElement;
            var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

            // Если высота страницы меньше или равна высоте окна, делаем футер фиксированным
            if (pageHeight <= window.innerHeight) {
                footer.classList.remove("footer-relative");
                footer.classList.add("footer-fixed");
            } else {
                footer.classList.remove("footer-fixed");
                footer.classList.add("footer-relative");
            }
        }

        // Применяем адаптивные стили и корректируем положение футера
        applyResponsiveStyles();
        adjustFooterPosition();

        // Обработчики событий для адаптации
        window.addEventListener("resize", function () {
            applyResponsiveStyles();
            adjustFooterPosition();
        });

        window.addEventListener("load", adjustFooterPosition);

    } catch (error) {
        console.error("Ошибка в createFooter:", error);
    }
}


function adjustFooterPosition() {
    // Получаем элемент футера по его ID
    const footer = document.getElementById('footer');
    // Если футер не найден, выходим из функции
    if (!footer) return;

    // Получаем элементы body и html
    const body = document.body;
    const html = document.documentElement;
    // Получаем максимальную высоту страницы среди всех возможных значений
    const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    // Если высота страницы меньше или равна высоте окна, фиксируем футер внизу окна
    if (pageHeight <= window.innerHeight) {
        footer.classList.remove("footer-relative");
        footer.classList.add("footer-fixed");
    } else { // Иначе делаем футер относительным, чтобы он находился внизу страницы
        footer.classList.remove("footer-fixed");
        footer.classList.add("footer-relative");
    }
}