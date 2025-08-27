function createCatalogPage(menuItem, catalogData, currentLanguage, styles) {
  let navContainer = document.getElementById("nav-container");
  let footerContainer = document.getElementById("footer-container");
  const existingContent = document.querySelector(".main-content");

  if (!catalogData.titles || !catalogData.titles[currentLanguage]) {
    console.warn(`Translations for '${currentLanguage}' are undefined or missing in catalogData, creating empty container`);
    const emptyContainer = document.createElement("div");
    emptyContainer.className = "main-content";
    document.body.appendChild(emptyContainer);
    return emptyContainer;
  }

  if (!navContainer) {
    navContainer = document.createElement("div");
    navContainer.id = "nav-container";
    document.body.appendChild(navContainer);
  }

  if (!footerContainer) {
    footerContainer = document.createElement("div");
    footerContainer.id = "footer-container";
    document.body.appendChild(footerContainer);
  }

  const contentContainer = document.createElement("div");
  contentContainer.className = "main-content";
  applyStyles(contentContainer, styles.contentContainer);

  const pageTitle = (catalogData.titles[currentLanguage]?.[0]) || 
                   menuItem?.text || 
                   (catalogData.titles['ru']?.[0]);
  document.title = pageTitle;

  const catalogTitle = document.createElement("h1");
  catalogTitle.textContent = pageTitle;
  applyStyles(catalogTitle, styles.catalogTitle);

  contentContainer.appendChild(catalogTitle);

  const hasTranslations = catalogData.titles[currentLanguage] && 
                         catalogData.titles[currentLanguage].length - 1 >= catalogData.pdfPaths.length;
  const hasPreviews = catalogData.previewImages && 
                      catalogData.previewImages.length === catalogData.pdfPaths.length;

  catalogData.pdfPaths.forEach((pdfPath, i) => {
    const catalogBlock = document.createElement("div");
    
    const hasItemTranslation = hasTranslations && 
                             catalogData.titles[currentLanguage][i + 1] !== undefined;

    if (hasItemTranslation) {
      applyStyles(catalogBlock, styles.catalogBlock);

      const scrollContainer = document.createElement("div");
      applyStyles(scrollContainer, styles.scrollContainer);
      scrollContainer.classList.add("custom-scroll");

      const styleSheet = document.createElement("style");
      styleSheet.textContent = styles.scrollbarStyles;
      document.head.appendChild(styleSheet);

      const pdfPreview = document.createElement("img");
      pdfPreview.src = hasPreviews && catalogData.previewImages[i] ? 
                       catalogData.previewImages[i] : 
                       "src/assets/pictures/placeholder.jpg";
      pdfPreview.alt = catalogData.titles[currentLanguage][i + 1] || "Catalog Preview";
      applyStyles(pdfPreview, styles.pdfPreview);

      const footerElement = document.createElement("div");
      applyStyles(footerElement, styles.footerElement);

      const titleElement = document.createElement("span");
      titleElement.textContent = catalogData.titles[currentLanguage][i + 1] || 
                                pdfPath.split('/').pop().replace('.pdf', '');

      const downloadContainer = document.createElement("div");
      applyStyles(downloadContainer, styles.downloadContainer);

      const downloadIcon = document.createElement("img"); // Изменено с span на img
      downloadIcon.src = catalogData.downloadIcon; // Используем изображение из catalogData
      downloadIcon.alt = "Download";
      applyStyles(downloadIcon, styles.downloadIcon);

      downloadContainer.addEventListener("mouseenter", function () {
        applyStyles(downloadIcon, styles.downloadIconHover);
      });

      downloadContainer.addEventListener("mouseleave", function () {
        applyStyles(downloadIcon, styles.downloadIconDefault);
      });

      downloadContainer.addEventListener("click", function (event) {
        event.stopPropagation();
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = pdfPath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      catalogBlock.addEventListener("click", function (event) {
        if (!downloadContainer.contains(event.target)) {
          window.open(pdfPath, "_blank");
        }
      });

      catalogBlock.addEventListener("mouseenter", function () {
        applyStyles(this, styles.catalogBlockHover);
      });

      catalogBlock.addEventListener("mouseleave", function () {
        applyStyles(this, styles.catalogBlockDefault);
      });

      downloadContainer.appendChild(downloadIcon);
      footerElement.appendChild(titleElement);
      footerElement.appendChild(downloadContainer);
      scrollContainer.appendChild(pdfPreview);
      catalogBlock.appendChild(scrollContainer);
      catalogBlock.appendChild(footerElement);
    }

    contentContainer.appendChild(catalogBlock);
  });

  document.body.insertBefore(contentContainer, footerContainer);
}