function createProductionContainer(navBar, currentLanguage, navItemId, styles, catalogData) {
    let contentArea = document.getElementById("content-area");
    if (!contentArea) {
        contentArea = document.createElement("div");
        contentArea.id = "content-area";
        document.body.appendChild(contentArea);
    }
    contentArea.innerHTML = "";

    if (!navBar || !navBar.navBarText || !currentLanguage) {
        const container = document.createElement("div");
        contentArea.appendChild(container);
        return container;
    }

    const lang = currentLanguage;
    let itemId = navItemId ? String(navItemId.id || navItemId) : "1";

    const navElement = navBar.navBarElements.find((el) => String(el.id) === itemId);
    const navIndex = navElement ? navBar.navBarElements.indexOf(navElement) : -1;

    let pageTitle = "";
    if (navIndex !== -1 && navBar.navBarText[lang] && navBar.navBarText[lang][navIndex]) {
        pageTitle = navBar.navBarText[lang][navIndex];
    } else if (itemId === "1") {
        pageTitle = navBar.navBarText[lang][0] || "Home";
    } else {
        pageTitle = lang === "ru" ? "Страница не настроена" :
                    lang === "en" ? "Page not configured" :
                    "Старонка не настроена";
    }

    document.title = pageTitle;
    const contentTitle = itemId === "1" ? "" : pageTitle;

    const container = document.createElement("div");
    container.className = "production-container";
    if (styles && styles.container) {
        applyStyles(container, styles.container);
    }

    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    if (styles && styles.sidebar) {
        applyStyles(sidebar, styles.sidebar);
    }

    const parentId = navElement ? navElement.parent : "0";
    const parentElement = navBar.navBarElements.find((el) => String(el.id) === String(parentId));
    const parentIndex = parentElement ? navBar.navBarElements.indexOf(parentElement) : -1;

    if (parentIndex !== -1 && parentId !== "0") {
        const parentTitle = document.createElement("h3");
        parentTitle.textContent = navBar.navBarText[lang][parentIndex];
        if (styles && styles.titleElement) {
            applyStyles(parentTitle, styles.titleElement);
        }
        sidebar.appendChild(parentTitle);
    }

    const siblingList = document.createElement("ul");
    if (styles && styles.siblingList) {
        applyStyles(siblingList, styles.siblingList);
    }
    const siblingElements = navBar.navBarElements.filter((el) => String(el.parent) === String(parentId));
    siblingElements.forEach((sibling) => {
        const siblingIndex = navBar.navBarElements.indexOf(sibling);
        const siblingItem = document.createElement("li");
        const siblingLink = document.createElement("a");
        siblingLink.href = `#${sibling.id}`;
        siblingLink.textContent = navBar.navBarText[lang][siblingIndex];
        if (styles && styles.siblingLink) {
            applyStyles(siblingItem, styles.siblingLink);
        }
        if (styles && styles.textElement) {
            applyStyles(siblingLink, styles.textElement);
        }
        if (String(sibling.id) === itemId && styles && styles.boldLink) {
            applyStyles(siblingLink, styles.boldLink);
        }
        siblingItem.appendChild(siblingLink);
        siblingList.appendChild(siblingItem);
    });
    sidebar.appendChild(siblingList);

    if (String(parentId) === "16" && catalogData && catalogData.pdfPaths && catalogData.titles) {
        const downloadSection = document.createElement("div");
        downloadSection.className = "download-section";
        if (styles && styles.downloadSection) {
            applyStyles(downloadSection, styles.downloadSection);
        }

        const downloadWrapper = document.createElement("div");
        downloadWrapper.className = "download-wrapper";
        if (styles && styles.downloadWrapper) {
            applyStyles(downloadWrapper, styles.downloadWrapper);
        }

        const downloadList = document.createElement("ul");
        if (styles && styles.downloadList) {
            applyStyles(downloadList, styles.downloadList);
        }
        const veltexCatalogIndexes = [1, 2, 3, 4];
        veltexCatalogIndexes.forEach((index) => {
            const pdfPath = catalogData.pdfPaths[index];
            if (pdfPath) {
                const downloadItem = document.createElement("li");
                const downloadLink = document.createElement("a");
                downloadLink.href = pdfPath;
                downloadLink.download = pdfPath.split("/").pop();
                downloadLink.textContent = catalogData.titles[lang][index];
                if (styles && styles.downloadLink) {
                    applyStyles(downloadItem, styles.downloadLink);
                }
                if (styles && styles.textElement) {
                    applyStyles(downloadLink, styles.textElement);
                }

                if (catalogData.downloadIcon) {
                    const icon = document.createElement("img");
                    icon.src = catalogData.downloadIcon;
                    icon.alt = "Download";
                    if (styles && styles.downloadIcon) {
                        applyStyles(icon, styles.downloadIcon);
                    }
                    icon.style.width = "20px";
                    icon.style.filter = "grayscale(100%) brightness(0%)";
                    downloadLink.prepend(icon);
                }
                downloadItem.appendChild(downloadLink);
                downloadList.appendChild(downloadItem);
            }
        });
        downloadWrapper.appendChild(downloadList);
        downloadSection.appendChild(downloadWrapper);
        sidebar.appendChild(downloadSection);
    }

    const contentColumn = document.createElement("div");
    contentColumn.className = "content-column";
    if (styles && styles.contentColumn) {
        applyStyles(contentColumn, styles.contentColumn);
    }

    if (contentTitle) {
        const titleElement = document.createElement("h2");
        titleElement.textContent = contentTitle;
        if (styles && styles.titleElement) {
            applyStyles(titleElement, styles.titleElement);
        }
        contentColumn.appendChild(titleElement);
    }

    container.appendChild(sidebar);
    container.appendChild(contentColumn);

    contentArea.appendChild(container);

    return container;
}