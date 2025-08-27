// Функция для создания главной страницы
function createMainPage() {
    getInitialLanguage(belhardSiteData.languages);

    // Устанавливаем заголовок страницы, используя значение из объекта belhardSiteData
    document.title = belhardSiteData.title[belhardSiteData.currentLanguage];

    // Создаём навигационную панель, используя данные из belhardSiteData
    createNavBar(belhardSiteData.navBar, belhardSiteData.currentLanguage);
    
    createLanguageSelect(belhardSiteData.languages);

    // Создаём слайдер, передавая стили из window.defaultStyles.sliderStyles и изображения из belhardSiteData.images
    createSlider(window.defaultStyles.sliderStyles, belhardSiteData.images);

    createImageBlocks(
        belhardSiteData.blocksImages,
        window.defaultStyles.imageBlockStyles,
        belhardSiteData.navBar,
        belhardSiteData.currentLanguage
    );
    
    createContactForm(belhardSiteData.currentLanguage);
    
    // Создаём подвал (footer), используя данные из belhardSiteData и стили из window.defaultStyles.footerStyles
    createFooter(belhardSiteData, window.defaultStyles.footerStyles, belhardSiteData.currentLanguage);
    
    // Применяем глобальные стили, используя объект globalStyles
    applyGlobalStyles(globalStyles);
    
    // Применяем стили для навигационной панели, используя объект navBarCss
    applyGlobalStyles(navBarCss);
    
    // Создаём кнопку прокрутки страницы вверх, используя стили из window.defaultStyles.buttonStyles и иконку из belhardSiteData.controlElements.scrollPageUpIcon
    createScrollToTopButton(window.defaultStyles.buttonStyles, belhardSiteData.controlElements.scrollPageUpIcon);

    // Устанавливаем фавикон для сайта, используя путь из belhardSiteData.favicon
    addFavicon(belhardSiteData.favicon);  
}

// Добавляем обработчик события загрузки DOM-контента
document.addEventListener("DOMContentLoaded", function () {
    createMainPage();
    initializeNavigation();
});

// Добавляем предупреждение при попытке обновления или закрытия страницы
window.addEventListener('beforeunload', function (e) {
    // Текст сообщения (в современных браузерах может не отображаться, заменяется стандартным сообщением браузера)
    const confirmationMessage = 'Вы уверены, что хотите обновить страницу? Все несохраненные изменения будут потеряны.';
    
    // Стандартный способ активации предупреждения
    (e || window.event).returnValue = confirmationMessage; // Для старых браузеров
    return confirmationMessage; // Для современных браузеров
});