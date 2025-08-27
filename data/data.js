var path = ""; // /test/mp/to_redirect_folder/3ss/

// Объект для хранения данных используемых на страницу
const belhardSiteData = {
  currentLanguage: "ru",
  languages: [
    ["ru", path + "src/assets/controlElements/ru.png"],
    ["en", path + "src/assets/controlElements/en.png"],
    ["by", path + "src/assets/controlElements/by.png"]
  ],

  currentMenuItem: 0,

  // заголовок главной страницы
  title: {
    ru: [
      'ООО "ТриСС Про"',
    ],
    en: [
      '"3SS Pro" LLC',
    ],
    by: [
      'ТАА "ТрыСС Пра"',
    ]
  },

  favicon: path + "src/assets/favicon/favicon.png", // путь для иконки страницы, папки src - assets - favicon и затем название изоюражения.расширение

  targetY: 200,     // Координата по Y (в пикселях), с которой будет доступна кнопка для прокрутки страницы вверх
  searchWidth: 300, // Ширина поля поиска (в пикселях)

  // под-объект для хранения путей к иконкам поиска, открытия, закрытия меню и кнопки прокрутки страницы вверх, а также шаблон для пустого поля поиска
  controlElements: {
    searchIcon: path + "src/assets/controlElements/searchMenuButton.png", // путь к иконке для поиска, папки src - assets - controlElements и затем название изоюражения.расширение
    scrollPageUpIcon: path + "src/assets/controlElements/scrollUpButton.png", // путь к иконке для прокрутки страницы вверх, папки src - assets - controlElements и затем название изоюражения.расширение
    openSidebarIcon: path + "src/assets/controlElements/openMenuButton.png", // путь к иконке для открытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    dotsSidebarIcon: path + "src/assets/controlElements/dots.png", // путь к иконке для открытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    closeSidebarIcon: path + "src/assets/controlElements/closeMenuButton.png", // путь к иконке для закрытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    profileIcon: path + "src/assets/controlElements/profileMenuButton.png", // путь к иконке для закрытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    searchPlaceholder: {
      ru: [
        "Поиск...", // шаблонный текст, который будет содежать пустое поле поиска
      ],
      en: [
        "Search...",
      ],
      by: [
        "Пошук...",
      ],
    },
  },

  // под-объект для хранения размеров иконок поиска, открытия, закрытия меню
  controlElementsSizes: {
    //должны быть указаны еденицы измерения
    searchIcon: "24px", //размер иконки поиска
    openSidebarIcon: "40px", //размер иконки открытия меню
    closeSidebarIcon: "32px", //размер иконки закрытия меню
    profileIcon: "36px", //размер иконки закрытия меню
  },

  navBar: {
    navBarElements: [
      { "id": "1", "parent": "0", "state": "1", "formId": "0", "scripts": [0, 13], "type": "rebuild" },
      { "id": "2", "parent": "0", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "3", "parent": "0", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "4", "parent": "0", "state": "1", "formId": "0", "scripts": [1, 17, 18, 9, 13], "type": "rebuild" },
      { "id": "5", "parent": "0", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "6", "parent": "0", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "7", "parent": "0", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "8", "parent": "0", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "9", "parent": "7", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "10", "parent": "7", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "11", "parent": "5", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "12", "parent": "5", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "13", "parent": "5", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "14", "parent": "5", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "15", "parent": "5", "state": "1", "formId": "0", "scripts": [1, 19, 18, 9, 13], "type": "rebuild" },
      { "id": "16", "parent": "2", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "17", "parent": "2", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "18", "parent": "2", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "19", "parent": "2", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "20", "parent": "2", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "21", "parent": "16", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "22", "parent": "16", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "23", "parent": "16", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "24", "parent": "16", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "25", "parent": "16", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "26", "parent": "16", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "27", "parent": "16", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "28", "parent": "17", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "29", "parent": "17", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "30", "parent": "17", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "31", "parent": "17", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "32", "parent": "17", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "33", "parent": "18", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "34", "parent": "18", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "35", "parent": "18", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "36", "parent": "18", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "37", "parent": "18", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "38", "parent": "18", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "39", "parent": "18", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "40", "parent": "20", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "41", "parent": "20", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "42", "parent": "20", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "43", "parent": "20", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "44", "parent": "19", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "45", "parent": "19", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "46", "parent": "19", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "47", "parent": "19", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "48", "parent": "19", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
      { "id": "49", "parent": "19", "state": "1", "formId": "0", "scripts": [1, 20, 18, 9, 13], "type": "rebuild" },
    ],
    navBarText: {
      ru: [
        "Главная", // id: 1
        "Продукция", // id: 2
        "Магазин", // id: 3
        "Каталоги", // id: 4
        "Клиентам", // id: 5
        "Сервис", // id: 6
        "О компании", // id: 7
        "Контакты", // id: 8
        "О компании", // id: 9
        "Реквизиты", // id: 10
        "Доставка и самовывоз", // id: 11
        "Оплата", // id: 12
        "Отсрочка и рассрочка", // id: 13
        "Лизинг", // id: 14
        "Договор публичной оферты", // id: 15
        "Вэлтекс", // id: 16
        "Globalclimat", // id: 17
        "ТСС", // id: 18
        "Kan-therm", // id: 19
        "Volzhanin", // id: 20
        "Азотные станции", // id: 21
        "Воздушные станции", // id: 22
        "Компрессоры", // id: 23
        "Воздухоочистки", // id: 24
        "Генераторы азота", // id: 25
        "Подготовка воздуха", // id: 26
        "Оригинальные запасные части и масла", // id: 27
        "Приточные и приточно-вытяжные установки", // id: 28
        "Взрывозащищенные кондиционеры", // id: 29
        "Автоматизация", // id: 30
        "Вентиляционное оборудование", // id: 31
        "Системы водоочистки и водоподготовки", // id: 32
        "Электростанции", // id: 33
        "Блок-контейнеры", // id: 34
        "Строительное оборудование", // id: 35
        "Сварочное оборудование", // id: 36
        "Материалы и комплектующие", // id: 37
        "Двигатели", // id: 38
        "Синхронные генераторы", // id: 39
        "Volzhanin", // id: 40
        "Volzhanin CNC", // id: 41
        "Volzhanin ECO", // id: 42
        "Дополнительное оборудование", // id: 43
        "Система Kan-therm Ultraline", // id: 44
        "Система Kan-therm Push", // id: 45
        "Система Kan-therm UltraPress", // id: 46
        "Система Kan-therm PP", // id: 47
        "Система Kan-therm Steal", // id: 48
        "Система Kan-therm Inox", // id: 49
        "Кабинет", // id: 50
        "Юридические лица", // id: 51
        "Физические лица", // id: 52
      ],
      en: [
        "Home", // id: 1
        "Products", // id: 2
        "Store", // id: 3
        "Catalogs", // id: 4
        "For Clients", // id: 5
        "Service", // id: 6
        "About Us", // id: 7
        "Contacts", // id: 8
        "About Us", // id: 9
        "Requisites", // id: 10
        "Delivery and Pickup", // id: 11
        "Payment", // id: 12
        "Deferred and Installment Payment", // id: 13
        "Leasing", // id: 14
        "Public Offer Agreement", // id: 15
        "Veltex", // id: 16
        "Globalclimat", // id: 17
        "TSS", // id: 18
        "Kan-therm", // id: 19
        "Volzhanin", // id: 20
        "Nitrogen Stations", // id: 21
        "Air Stations", // id: 22
        "Compressors", // id: 23
        "Air Purification", // id: 24
        "Nitrogen Generators", // id: 25
        "Air Preparation", // id: 26
        "Original Spare Parts and Oils", // id: 27
        "Supply and Exhaust Units", // id: 28
        "Explosion-Proof Air Conditioners", // id: 29
        "Automation", // id: 30
        "Ventilation Equipment", // id: 31
        "Water Treatment and Purification Systems", // id: 32
        "Power Plants", // id: 33
        "Block Containers", // id: 34
        "Construction Equipment", // id: 35
        "Welding Equipment", // id: 36
        "Materials and Components", // id: 37
        "Engines", // id: 38
        "Synchronous Generators", // id: 39
        "Volzhanin", // id: 40
        "Volzhanin CNC", // id: 41
        "Volzhanin ECO", // id: 42
        "Additional Equipment", // id: 43
        "Kan-therm Ultraline System", // id: 44
        "Kan-therm Push System", // id: 45
        "Kan-therm UltraPress System", // id: 46
        "Kan-therm PP System", // id: 47
        "Kan-therm Steal System", // id: 48
        "Kan-therm Inox System", // id: 49
        "Account", // id: 50
        "Legal entities", // id: 51
        "Physical persons", // id: 52
      ],
      by: [
        "Галоўная", // id: 1
        "Прадукцыя", // id: 2
        "Крама", // id: 3
        "Каталогі", // id: 4
        "Кліентам", // id: 5
        "Сэрвіс", // id: 6
        "Пра кампанію", // id: 7
        "Кантакты", // id: 8
        "Пра кампанію", // id: 9
        "Рэквізіты", // id: 10
        "Дастаўка і самавываз", // id: 11
        "Аплата", // id: 12
        "Адтэрміноўка і растэрміноўка", // id: 13
        "Лізінг", // id: 14
        "Дагавор публічнай аферты", // id: 15
        "Вэлтэкс", // id: 16
        "Globalclimat", // id: 17
        "ТСС", // id: 18
        "Kan-therm", // id: 19
        "Volzhanin", // id: 20
        "Азотныя станцыі", // id: 21
        "Паветраныя станцыі", // id: 22
        "Кампрэсары", // id: 23
        "Паветраачысткі", // id: 24
        "Генератары азоту", // id: 25
        "Падрыхтоўка паветра", // id: 26
        "Арыгінальныя запасныя часткі і масла", // id: 27
        "Прыточныя і прыточно-выцяжныя ўстаноўкі", // id: 28
        "Выбухаабароненыя кандыцыянеры", // id: 29
        "Аўтаматызацыя", // id: 30
        "Вентыляцыйнае абсталяванне", // id: 31
        "Сістэмы водаачысткі і водападрыхтоўкі", // id: 32
        "Электрастанцыі", // id: 33
        "Блок-кантэйнеры", // id: 34
        "Будаўнічае абсталяванне", // id: 35
        "Зварачнае абсталяванне", // id: 36
        "Матэрыялы і камплектуючыя", // id: 37
        "Рухавікі", // id: 38
        "Сінхронныя генератары", // id: 39
        "Volzhanin", // id: 40
        "Volzhanin CNC", // id: 41
        "Volzhanin ECO", // id: 42
        "Дадатковае абсталяванне", // id: 43
        "Сістэма Kan-therm Ultraline", // id: 44
        "Сістэма Kan-therm Push", // id: 45
        "Сістэма Kan-therm UltraPress", // id: 46
        "Сістэма Kan-therm PP", // id: 47
        "Сістэма Kan-therm Steal", // id: 48
        "Сістэма Kan-therm Inox", // id: 49
        "Кабінет", // id: 50
        "Юр. асобы", // id: 51
        "Фіз. асобы", // id: 52
      ]
    },
    searchConfig: [1, 16, 9, 13],
    searchResultText: {
      ru: "Результаты поиска",
      en: "Search results",
      by: "Вынікі пошуку"
    },
    searchType: {
      ru: [
        "Новость",
        "Анонс"
      ],
      en: [
        "News",
        "Announcement"
      ],
      by: [
        "Навіна",
        "Анонс"
      ]
    },
    searchMessages: {
      ru: [
        "Введите текст для поиска",
        "Ничего не найдено"
      ],
      en: [
        "Enter the search text",
        "Nothing to show"
      ],
      by: [
        "Увядзіце тэкст для пошуку",
        "Нічога не знойдзена"
      ]
    },
    profileScripts: [1, 9, 13],
  },

  scriptsConfig: {
    0: function () {
      createMainPage();
      scrollToTop();
    },
    1: function () {
      createNavBar(belhardSiteData.navBar, belhardSiteData.currentLanguage);
    },
    2: function () {
      createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 0);
    },
    3: function () {
      createTimeline(belhardSiteData.timeLine, window.defaultStyles.timeLineStyles);
    },
    4: function () {
      createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 1);
    },
    5: function () {
      createSaintsSlider(belhardSiteData.saintsData, belhardSiteData.currentLanguage);
    },
    6: function () {
      createMap();
    },
    7: function () {
      createNews(window.defaultStyles.newsStyles, belhardSiteData.news, belhardSiteData.currentLanguage);
    },
    8: function () {
      createSlider(window.defaultStyles.sliderStyles, belhardSiteData.images);
    },
    9: function () {
      createFooter(belhardSiteData, window.defaultStyles.footerStyles, belhardSiteData.currentLanguage);
    },
    10: function () {
      applyGlobalStyles(globalStyles);
    },
    11: function () {
      applyGlobalStyles(navBarCss);
    },
    12: function () {
      createScrollToTopButton(window.defaultStyles.buttonStyles, belhardSiteData.controlElements.scrollPageUpIcon);
    },
    13: function () {
      createLanguageSelect(belhardSiteData.languages);
      initializeNavigation();
    },
    14: function () {
      showCountries(belhardSiteData.currentLanguage);
    },
    15: function (menuItem) {
      createPageContent(belhardSiteData, window.defaultStyles.pageStyles, menuItem, belhardSiteData.currentLanguage);
    },
    16: function (itemData) {
      createPageContent(itemData.data, window.defaultStyles.pageStyles, itemData, belhardSiteData.currentLanguage);
    },
    17: function (menuItem) {
      createCatalogPage(menuItem, belhardSiteData.catalogData, belhardSiteData.currentLanguage, window.defaultStyles.catalogStyles);
    },
    18: function (menuItem) {
      createContactForm(belhardSiteData.currentLanguage);
    },
    19: function (navItemId) {
      createFormAndContent(belhardSiteData.form, belhardSiteData.navBar, belhardSiteData.currentLanguage, navItemId, belhardSiteData.form.formSource.navigationSource, window.defaultStyles.aboutStyles);
    },
    20: function (navItemId) {
      createProductionContainer(
        belhardSiteData.navBar,
        belhardSiteData.currentLanguage,
        navItemId,
        window.defaultStyles.productionStyles,
        belhardSiteData.catalogData
    );
    },
  },

  catalogData: {
    downloadIcon: "src/assets/controlElements/downloadArrow.png",
    pdfPaths: [
      "src/assets/catalogPgf/АЗОТНЫЕ И ВОЗДУШНЫЕ СТАНЦИИ НА ШАССИ.pdf",
      "src/assets/catalogPgf/АЗОТНЫЕ КОМПРЕССОРНЫЕ СТАНЦИИ.pdf",
      "src/assets/catalogPgf/АЗОТНЫЕ УСТАНОВКИ В ВИНОДЕЛИИ.pdf",
      "src/assets/catalogPgf/ВЭЛТЕКС.pdf",
      "src/assets/catalogPgf/ГЕНЕРАТОРЫ АЗОТА.pdf",
      "src/assets/catalogPgf/ДИЗЕЛЬНЫЕ ЭЛЕКТРОСТАНЦИИ.pdf",
      "src/assets/catalogPgf/КАТАЛОГ ОБОРУДОВАНИЯ КОМПАНИИ ООО «ВЭЛТЕКС».pdf",
      "src/assets/catalogPgf/ПОРТАТИВНЫЕ И СВАРОЧНЫЕ ГЕНЕРАТОРЫ.pdf",
      "src/assets/catalogPgf/РЕВЕРСИВНЫЕ РУБИЛЬНИКИ.pdf",
      "src/assets/catalogPgf/СВАРОЧНОЕ ОБОРУДОВАНИЕ.pdf",
      "src/assets/catalogPgf/СТРОИТЕЛЬНОЕ ОБОРУДОВАНИЕ.pdf",
      "src/assets/catalogPgf/ТСС.pdf"
    ],
    previewImages: [
      "src/assets/pictures/pgfPrev/АЗОТНЫЕ И ВОЗДУШНЫЕ СТАНЦИИ НА ШАССИ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/АЗОТНЫЕ КОМПРЕССОРНЫЕ СТАНЦИИ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/АЗОТНЫЕ УСТАНОВКИ В ВИНОДЕЛИИ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/ВЭЛТЕКС_page-0001.jpg",
      "src/assets/pictures/pgfPrev/ГЕНЕРАТОРЫ АЗОТА_page-0001.jpg",
      "src/assets/pictures/pgfPrev/ДИЗЕЛЬНЫЕ ЭЛЕКТРОСТАНЦИИ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/КАТАЛОГ ОБОРУДОВАНИЯ КОМПАНИИ ООО «ВЭЛТЕКС»_page-0001.jpg",
      "src/assets/pictures/pgfPrev/ПОРТАТИВНЫЕ И СВАРОЧНЫЕ ГЕНЕРАТОРЫ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/РЕВЕРСИВНЫЕ РУБИЛЬНИКИ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/СВАРОЧНОЕ ОБОРУДОВАНИЕ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/СТРОИТЕЛЬНОЕ ОБОРУДОВАНИЕ_page-0001.jpg",
      "src/assets/pictures/pgfPrev/ТСС_page-0001.jpg"
    ],
    titles: {
      ru: [
        "Каталоги", // Page title (index 0)
        "Азотные и воздушные станции на шасси",
        "Азотные компрессорные станции",
        "Азотные установки в виноделии",
        "ВЭЛТЕКС",
        "Генераторы азота",
        "Дизельные электростанции",
        "Каталог оборудования ООО «ВЭЛТЕКС»",
        "Портативные и сварочные генераторы",
        "Реверсивные рубильники",
        "Сварочное оборудование",
        "Строительное оборудование",
        "ТСС"
      ],
      en: [
        "Catalogs", // Page title (index 0)
        "Nitrogen and Air Stations on Chassis",
        "Nitrogen Compressor Stations",
        "Nitrogen Installations in Winemaking",
        "VELTEX",
        "Nitrogen Generators",
        "Diesel Power Plants",
        "Equipment Catalog of LLC «VELTEX»",
        "Portable and Welding Generators",
        "Reversible Switches",
        "Welding Equipment",
        "Construction Equipment",
        "TSS"
      ],
      by: [
        "Каталогі", // Page title (index 0)
        "Азотныя і паветраныя станцыі на шасі",
        "Азотныя кампрэсарныя станцыі",
        "Азотныя ўстаноўкі ў вінаробстве",
        "ВЭЛТЕКС",
        "Генератары азоту",
        "Дызельныя электрастанцыі",
        "Каталог абсталявання ТАА «ВЭЛТЕКС»",
        "Партатыўныя і зварачныя генератары",
        "Рэверсіўныя рубільнікі",
        "Зварачнае абсталяванне",
        "Будаўнічае абсталяванне",
        "ТСС"
      ]
    }
  },

  //Промежуток времени через который картинка в слайдере измениться
  sliderTimer: {
    time: 5000,
  },

  images: {
    slider: [
      path + "src/assets/pictures/slider/1.jpg",
      path + "src/assets/pictures/slider/2.jpg",
      path + "src/assets/pictures/slider/3.jpg",
      path + "src/assets/pictures/slider/4.jpg",
    ],
    arrows: {
      left: path + "src/assets/controlElements/leftArrow.png",
      right: path + "src/assets/controlElements/rightArrow.png"
    }
  },

  blocksImages: [
    { image: path + "src/assets/pictures/linksBlock/i1.png", text: '' },
    { image: path + "src/assets/pictures/linksBlock/i2.png", text: '' },
    { image: path + "src/assets/pictures/linksBlock/i3.jpeg", text: '' },
    { image: path + "src/assets/pictures/linksBlock/i4.jpeg", text: '' },
    { image: path + "src/assets/pictures/linksBlock/i7.jpeg", text: '' },
    { image: path + "src/assets/pictures/linksBlock/i8.jpeg", text: '' },
    { image: path + "src/assets/pictures/linksBlock/i9.jpeg", text: '' },
    { image: path + "src/assets/pictures/linksBlock/i10.png", text: '' },
  ],

  footer: {
    ru: [
      "+375 (17) 325 10 11",
      "3ss-pro@mail.ru",
      "Республика Беларусь, 220088, г.Минск, ул.Первомайская, 24/2, пом.102Б",
      "УНП 193656007",
      "Свидетельство о государственной регистрации №193656007 выдано Минским городским исполнительным комитетом 08.11.2022",
      "Все права лицензированы © 2025",
      "Запрос с сайта",
      "Здравствуйте,\n\nСвяжитесь со мной по поводу ваших услуг.\n\nС уважением,"
    ],
    en: [
      "+375 (17) 325 10 11",
      "3ss-pro@mail.ru",
      "Republic of Belarus, 220088, Minsk, Pervomaiskaya str., 24/2, room 102B",
      "TIN 193656007",
      "Certificate of state registration No. 193656007 issued by the Minsk City Executive Committee on 08.11.2022",
      "All rights reserved © 2025",
      "Request from the website",
      "Hello,\n\nPlease contact me regarding your services.\n\nBest regards,"
    ],
    by: [
      "+375 (17) 325 10 11",
      "3ss-pro@mail.ru",
      "Рэспубліка Беларусь, 220088, г. Мінск, вул. Першамайская, 24/2, пам.102Б",
      "УНП 193656007",
      "Пасведчанне аб дзяржаўнай рэгістрацыі №193656007 выдадзена Мінскім гарадскім выканаўчым камітэтам 08.11.2022",
      "Усе правы абаронены © 2025",
      "Запыт з сайта",
      "Добры дзень,\n\nЗвяжыцеся са мной па пытанні вашых паслуг.\n\nЗ павагай,"
    ],
    image: path + "src/assets/pictures/logo.jpg"
  },

  //Размер экрна при котором активируються стили для телефона
  mobileSizes: {
    footer: 800,
    navBar: 1200,
    slider: 900,
    news: 800,
    table: 800,
    formLeftColumn: 900,
    map: 1200,
    timeline: 800,
    contactFormMobile: 800,
    contactFormSmallMobile: 480,
  },

  countriesForm: {
    closeText: 'Х',     // Текст, отображаемый на кнопке закрытия формы
    maxScale: 5,        // Максимальное значение масштаба для формы
  },

  form: {
    "formSource": {
      "navigationSource": "navigation"
    },
    "picture": "src/assets/pictures/form_logo.png",
    "data": {
      "navigation": [
        {
          "id": "6",
          "title": {
            "ru": "Сервис",
            "en": "Service",
            "by": "Сэрвіс"
          },
          "picture": "src/assets/pictures/formImg/servis.png",
          "elements": {
            "ru": [
              "Компания \"ТриСС Про\" гарантирует профессиональное решение любой технической проблемы на поставляемое оборудование.",
              "В деятельность компании входит:",
              "- техническое обслуживание;",
              "- гарантийное и пост-гарантийное обслуживание;",
              "- техническая поддержка;",
              "- пусконаладочные работы;",
              "- обеспечение склада запасными частями и расходными материалами."
            ],
            "en": [
              "TriSS Pro Company guarantees professional resolution of any technical issues with the supplied equipment.",
              "The company’s activities include:",
              "- technical maintenance;",
              "- warranty and post-warranty service;",
              "- technical support;",
              "- commissioning works;",
              "- provision of a warehouse with spare parts and consumables."
            ],
            "by": [
              "Кампанія \"ТрыСС Про\" гарантуе прафесійнае вырашэнне любой тэхнічнай праблемы на пастаўленае абсталяванне.",
              "У дзейнасць кампаніі ўваходзіць:",
              "- тэхнічнае абслугоўванне;",
              "- гарантыйнае і паслягарантыйнае абслугоўванне;",
              "- тэхнічная падтрымка;",
              "- пусканаладачныя работы;",
              "- забеспячэнне склада запаснымі часткамі і расходнымі матэрыяламі."
            ]
          }
        },
        {
          "id": "8",
          "title": {
            "ru": "Контакты",
            "en": "Contacts",
            "by": "Кантакты"
          },
          "elements": {
            "ru": [
              "ТЕЛЕФОНЫ:",
              "+375(17) 325-10-11 (тел./факс)",
              "+375(29) 27-10-100",
              "+375(44) 756-11-31",
              "+375(17) 232-92-30",
              "e-mail: 3ss-pro@mail.ru",
              "АДРЕС: Республика Беларусь, 220088, г. Минск, ул. Первомайская, д. 24, корп. 2, пом.102Б.",
              "ВРЕМЯ РАБОТЫ:",
              "Пн.- Пт. с 9.00 до 18.00."
            ],
            "en": [
              "PHONES:",
              "+375(17) 325-10-11 (tel./fax)",
              "+375(29) 27-10-100",
              "+375(44) 756-11-31",
              "+375(17) 232-92-30",
              "e-mail: 3ss-pro@mail.ru",
              "ADDRESS: Republic of Belarus, 220088, Minsk, Pervomayskaya str., 24/2, room 102B",
              "WORKING HOURS:",
              "Mon.-Fri. from 9:00 to 18:00"
            ],
            "by": [
              "ТЭЛЕФОНЫ:",
              "+375(17) 325-10-11 (тэл./факс)",
              "+375(29) 27-10-100",
              "+375(44) 756-11-31",
              "+375(17) 232-92-30",
              "e-mail: 3ss-pro@mail.ru",
              "АДРАС: Рэспубліка Беларусь, 220088, г. Мінск, вул. Першамайская, 24/2, пам.102Б",
              "ЧАС ПРАЦЫ:",
              "Пн.-Пт. з 9.00 да 18.00"
            ],
            "map": [
              ["type", "map"],
              ["center", [53.901175, 27.578135]]
            ]
          }
        
        },
        {
          "id": "9",
          "title": {
            "ru": "О компании",
            "en": "About the company",
            "by": "Аб кампаніі"
          },
          "picture": "src/assets/pictures/formImg/about.png",
          "elements": {
            "ru": [
              "Компания ТриСС Про - это коллектив людей, увлеченных общей целью. Мы являемся многопрофильной компанией, ориентированной на экспорт, импорт, розничную торговлю и сервисное обслуживание. Честность является главной чертой компании, и мы можем предложить хороший продукт для Клиента, у которого, также как и у нас, качество с надежностью являются основными критериями при выборе. ТриСС Про - это надежный бренд, которому можно доверять."
            ],
            "en": [
              "TriSS Pro Company is a team of people passionate about a common goal. We are a multidisciplinary company focused on export, import, retail trade, and service. Honesty is the main trait of our company, and we can offer a good product to a Client who, like us, values quality and reliability as the primary criteria for selection. TriSS Pro is a reliable brand you can trust."
            ],
            "by": [
              "Кампанія ТрыСС Про - гэта калектыў людзей, захапленых агульнай мэтай. Мы з'яўляемся шматпрофільнай кампаніяй, арыентаванай на экспарт, імпарт, рознічны гандаль і сэрвіснае абслугоўванне. Сумленнасць з'яўляецца галоўнай рысай кампаніі, і мы можам прапанаваць добры прадукт для Кліента, у якога, як і ў нас, якасць з надзейнасцю з'яўляюцца асноўнымі крытэрыямі пры выбары. ТрыСС Про - гэта надзейны брэнд, якому можна давяраць."
            ]
          }
        },
        {
          "id": "10",
          "title": {
            "ru": "Реквизиты",
            "en": "Requisites",
            "by": "Рэквізіты"
          },
          "elements": {
            "ru": [
              "ООО \"ТриСС Про\"",
              "Республика Беларусь, 220088, г. Минск, ул. Первомайская, д. 24, корп. 2, пом.102Б.",
              "тел/факс +375(17) 325-10-11",
              "e-mail: 3ss-pro@mail.ru",
              "IBAN: BY43MTBK30120001093300117152 (BYN)",
              "IBAN: BY95MTBK30120001084000117153 (USD)",
              "IBAN: BY42MTBK30120001015600117154 (CNY)",
              "IBAN: BY02MTBK30120001097800117155 (EUR)",
              "IBAN: BY76MTBK30120001064300117156 (RUB)",
              "в ЗАО «МТБанк», г. Минск, ул. Толстого, 10",
              "BIC MTBKBY22, УНП 193656007",
              "ОКПО 506562895000",
              "Директор Трайкович Сергей Станиславович, действующий на основании Устава."
            ],
            "en": [
              "LLC \"TriSS Pro\"",
              "Republic of Belarus, 220088, Minsk, Pervomayskaya str., 24/2, room 102B",
              "tel/fax +375(17) 325-10-11",
              "e-mail: 3ss-pro@mail.ru",
              "IBAN: BY43MTBK30120001093300117152 (BYN)",
              "IBAN: BY95MTBK30120001084000117153 (USD)",
              "IBAN: BY42MTBK30120001015600117154 (CNY)",
              "IBAN: BY02MTBK30120001097800117155 (EUR)",
              "IBAN: BY76MTBK30120001064300117156 (RUB)",
              "at CJSC «MTBank», Minsk, Tolstoy str., 10",
              "BIC MTBKBY22, UNP 193656007",
              "OKPO 506562895000",
              "Director Traykovich Sergey Stanislavovich, acting on the basis of the Charter."
            ],
            "by": [
              "ТАА \"ТрыСС Про\"",
              "Рэспубліка Беларусь, 220088, г. Мінск, вул. Першамайская, 24/2, пам.102Б",
              "тэл/факс +375(17) 325-10-11",
              "e-mail: 3ss-pro@mail.ru",
              "IBAN: BY43MTBK30120001093300117152 (BYN)",
              "IBAN: BY95MTBK30120001084000117153 (USD)",
              "IBAN: BY42MTBK30120001015600117154 (CNY)",
              "IBAN: BY02MTBK30120001097800117155 (EUR)",
              "IBAN: BY76MTBK30120001064300117156 (RUB)",
              "у ЗАТ «МТБанк», г. Мінск, вул. Талстога, 10",
              "BIC MTBKBY22, УНП 193656007",
              "ОКПО 506562895000",
              "Дырэктар Трайковіч Сяргей Станіслававіч, які дзейнічае на падставе Статута."
            ]
          }
        },
        {
          "id": "11",
          "title": {
            "ru": "Контакты и доставка",
            "en": "Contacts and Delivery",
            "by": "Кантакты і дастаўка"
          },
          "picture": "src/assets/pictures/formImg/delivery.png",
          "elements": {
            "ru": [
              "КОНТАКТЫ",
              "ТЕЛЕФОНЫ:",
              "+375(17) 325-10-11 (тел./факс)",
              "+375(29) 27-10-100",
              "+375(44) 756-11-31",
              "+375(17) 232-92-30",
              "e-mail: 3ss-pro@mail.ru",
              "АДРЕС:",
              "Республика Беларусь, 220088, г. Минск, ул. Первомайская, д. 24, корп. 2, пом.102Б.",
              "ВРЕМЯ РАБОТЫ:",
              "Пн.-Пт. с 9.00 до 18.00.",
              "ДОСТАВКА И САМОВЫВОЗ",
              "ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ",
              "Доставка осуществляется транспортными компаниями. Стоимость уточняется у менеджера.",
              "Адрес для самовывоза:",
              "Республика Беларусь, г. Минск, ул. Первомайская, 24/2."
            ],
            "en": [
              "CONTACTS",
              "PHONES:",
              "+375(17) 325-10-11 (tel./fax)",
              "+375(29) 27-10-100",
              "+375(44) 756-11-31",
              "+375(17) 232-92-30",
              "e-mail: 3ss-pro@mail.ru",
              "ADDRESS:",
              "Republic of Belarus, 220088, Minsk, Pervomayskaya str., 24/2, room 102B",
              "WORKING HOURS:",
              "Mon.-Fri. from 9:00 to 18:00",
              "DELIVERY AND PICKUP",
              "FOR LEGAL ENTITIES",
              "Delivery is carried out by transport companies. The cost is clarified with the manager.",
              "Pickup address:",
              "Republic of Belarus, Minsk, Pervomayskaya str., 24/2."
            ],
            "by": [
              "КАНТАКТЫ",
              "ТЭЛЕФОНЫ:",
              "+375(17) 325-10-11 (тэл./факс)",
              "+375(29) 27-10-100",
              "+375(44) 756-11-31",
              "+375(17) 232-92-30",
              "e-mail: 3ss-pro@mail.ru",
              "АДРАС:",
              "Рэспубліка Беларусь, 220088, г. Мінск, вул. Першамайская, 24/2, пам.102Б",
              "ЧАС ПРАЦЫ:",
              "Пн.-Пт. з 9.00 да 18.00",
              "ДАСТАЎКА І САМАВЫВАЗ",
              "ДЛЯ ЮРЫДЫЧНЫХ АСОБ",
              "Дастаўка ажыццяўляецца транспартнымі кампаніямі. Кошт удакладняецца ў менеджара.",
              "Адрас для самавывазу:",
              "Рэспубліка Беларусь, г. Мінск, вул. Першамайская, 24/2."
            ]
          }
        },
        {
          "id": "12",
          "title": {
            "ru": "Оплата",
            "en": "Payment",
            "by": "Аплата"
          },
          "picture": "src/assets/pictures/formImg/oplata.png",
          "elements": {
            "ru": [
              "ОПЛАТА",
              "ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ",
              "Безналичный расчет.",
              "Юридическим лицам для оплаты заказа выставляется счет. Счет на оплату действителен в течение 2 банковских дней.",
              "Отгрузка товара осуществляется по факту поступления средств на расчетный счет."
            ],
            "en": [
              "PAYMENT",
              "FOR LEGAL ENTITIES",
              "Cashless payment.",
              "Legal entities are issued an invoice for order payment. The invoice is valid for 2 banking days.",
              "Shipment of goods is carried out upon receipt of funds to the settlement account."
            ],
            "by": [
              "АПЛАТА",
              "ДЛЯ ЮРЫДЫЧНЫХ АСОБ",
              "Безнаяўны разлік.",
              "Юрыдычным асобам для аплаты заказу выстаўляецца рахунак. Рахунак на аплату дзейнічае на працягу 2 банкаўскіх дзён.",
              "Адгрузка тавару ажыццяўляецца па факце паступлення сродкаў на разліковы рахунак."
            ]
          }
        },
        {
          "id": "14",
          "title": {
            "ru": "Лизинг",
            "en": "Leasing",
            "by": "Лізінг"
          },
          "picture": "src/assets/pictures/formImg/photo_2025-03-21_15-46-23.jpg",
          "elements": {
            "ru": [
              "ЛИЗИНГ",
              "ПРЕИМУЩЕСТВА ЛИЗИНГА",
              "По сравнению с традиционной формой финансирования дорогостоящих приобретений - банковскими кредитами или собственными накоплениями, лизинг имеет целый ряд существенных преимуществ. Внимательный анализ и сравнение альтернатив позволяет сделать вывод в пользу лизинга и использовать преимущества лизинга для своей выгоды.",
              "Ниже приведены некоторые преимущества:",
              "- Лизингополучатель в рамках законодательства значительно минимизирует налогообложение: лизинговые платежи в полной сумме относятся на себестоимость продукции. Размер амортизации объекта лизинга определяется договором лизинга;",
              "- Амортизация на объект лизинга начисляется на первоначальную стоимость согласно графика лизинговых платежей сразу после получения и ввода объекта в эксплуатацию Лизингополучателем, т.е. объект лизинга, участвуя в производстве и, создавая при этом амортизационный фонд, сам себя окупает;",
              "- Возможность «свободной» амортизации позволяет в рамках законодательства осуществлять наиболее быстрое техническое перевооружение и обновлять основные фонды предприятия;",
              "- Весь лизинговый платеж (без НДС), не только стоимость объекта лизинга, относится на себестоимость продукции в составе прочих элементов затрат, за исключением выкупной стоимости, которая выплачивается из прибыли предприятия;",
              "- Ускоренная амортизация имущества позволяет по истечении срока действия договора лизинга учитывать на балансе лизингополучателя полностью самортизированное имущество;",
              "- Рассрочка по оплате приобретаемого через лизинг оборудования и техники дает возможность инвестиции незадействованных денежных средств в развитие производственной базы или для пополнения оборотных активов;",
              "- Защита от инфляции и девальвации, т.к. лизинговая сделка позволяет уберечь собственные денежные средства от процессов инфляционных и девальвационных процессов;",
              "- Гибкая система формирования графика лизинговых платежей позволяет планировать и адаптировать платежи под реально формирующиеся денежные потоки;",
              "- Срок действия договора лизинга существенно выше практикуемого срока предоставления банковских кредитов;",
              "- Фиксированный график позволяет координировать затраты на финансирование капитальных вложений и поступления от реализации продукции, обеспечивая тем самым большую стабильность финансовых планов."
            ],
            "en": [
              "LEASING",
              "ADVANTAGES OF LEASING",
              "Compared to traditional forms of financing expensive purchases—such as bank loans or personal savings—leasing offers a number of significant advantages. A thorough analysis and comparison of alternatives lead to the conclusion that leasing is preferable, allowing you to leverage its benefits to your advantage.",
              "Below are some of the advantages:",
              "- The lessee, within the framework of legislation, significantly minimizes taxation: leasing payments are fully attributed to the cost of production. The depreciation amount of the leased asset is determined by the leasing agreement;",
              "- Depreciation of the leased asset is calculated based on its initial cost according to the leasing payment schedule, starting immediately after the lessee receives and puts the asset into operation. In other words, the leased asset, by participating in production and creating an amortization fund, pays for itself;",
              "- The possibility of 'flexible' depreciation allows, within legal limits, for the fastest technical re-equipment and renewal of the enterprise’s fixed assets;",
              "- The entire leasing payment (excluding VAT), not just the cost of the leased asset, is attributed to the production cost as part of other expense elements, except for the buyout cost, which is paid from the enterprise’s profit;",
              "- Accelerated depreciation of the property allows the lessee to account for fully depreciated assets on their balance sheet after the leasing agreement expires;",
              "- Installment payments for equipment and machinery acquired through leasing provide the opportunity to invest unused funds into developing the production base or replenishing working capital;",
              "- Protection against inflation and devaluation, as a leasing deal helps shield your own funds from inflationary and devaluation processes;",
              "- A flexible system for scheduling leasing payments allows planning and adapting payments to actual cash flows;",
              "- The duration of a leasing agreement is significantly longer than the typical term of bank loans;",
              "- A fixed payment schedule enables coordination of capital investment financing costs with revenue from product sales, ensuring greater stability in financial planning."
            ],
            "by": [
              "ЛІЗІНГ",
              "ПЕРАВАГІ ЛІЗІНГУ",
              "У параўнанні з традыцыйнай формай фінансавання дарагіх набыткаў - банкаўскімі крэдытамі або ўласнымі назапашваннямі, лізінг мае цэлы шэраг значных пераваг. Уважлівы аналіз і параўнанне альтэрнатыў дазваляе зрабіць выбар на карысць лізінгу і выкарыстоўваць перавагі лізінгу для сваёй выгады.",
              "Ніжэй прыведзены некаторыя перавагі:",
              "- Лізінгаатрымальнік у рамках заканадаўства значна мінімізуе падаткаабкладанне: лізінгавыя плацяжы ў поўнай суме адносяцца на сабекошт прадукцыі. Памер амартызацыі аб'екта лізінгу вызначаецца дамовай лізінгу;",
              "- Амартызацыя на аб'ект лізінгу налічваецца на першапачатковы кошт згодна з графікам лізінгавых плацяжоў адразу пасля атрымання і ўвядзення аб'екта ў эксплуатацыю Лізінгаатрымальнікам, г.зн. аб'ект лізінгу, удзельнічаючы ў вытворчасці і ствараючы пры гэтым амартызацыйны фонд, сам сябе акупляе;",
              "- Магчымасць «гнуткай» амартызацыі дазваляе ў рамках заканадаўства ажыццяўляць найбольш хуткае тэхнічнае перааснашчэнне і абнаўляць асноўныя фонды прадпрыемства;",
              "- Увесь лізінгавы плацёж (без ПДВ), не толькі кошт аб'екта лізінгу, адносяцца на сабекошт прадукцыі ў складзе іншых элементаў затрат, за выключэннем выкупной кошту, якая выплачваецца з прыбытку прадпрыемства;",
              "- Пачашчаная амартызацыя маёмасці дазваляе па заканчэнні тэрміну дзеяння дамовы лізінгу ўлічваць на балансе лізінгаатрымальніка цалкам амартызаванае маёмасць;",
              "- Рассрочка па аплаце набываецца праз лізінг абсталявання і тэхнікі дае магчымасць інвестыцыі незаангажаваных грашовых сродкаў у развіццё вытворчай базы або для папаўнення абаротных актываў;",
              "- Абарона ад інфляцыі і дэвальвацыі, паколькі лізінгавая здзелка дазваляе зберагчы ўласныя грашовыя сродкі ад працэсаў інфляцыйных і дэвальвацыйных працэсаў;",
              "- Гнуткая сістэма фарміравання графіка лізінгавых плацяжоў дазваляе планаваць і адаптаваць плацяжы пад рэальна які фарміруецца грашовыя патокі;",
              "- Тэрмін дзеяння дамовы лізінгу істотна вышэй практыкуемага тэрміну прадастаўлення банкаўскіх крэдытаў;",
              "- Фіксаваны графік дазваляе каардынаваць выдаткі на фінансаванне капітальных укладанняў і паступлення ад рэалізацыі прадукцыі, забяспечваючы тым самым вялікую стабільнасць фінансавых планаў."
            ]
          }
        },
        {
          "id": "15",
          "title": {
            "ru": "Договор публичной оферты",
            "en": "Public Offer Agreement",
            "by": "Дагавор публічнай аферты"
          },
          "picture": "src/assets/pictures/formImg/photo_2025-03-21_15-46-57.jpg",
          "elements": {
            "ru": [
              "ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ",
              "ПУБЛИЧНАЯ ОФЕРТА (ПРЕДЛОЖЕНИЕ)",
              "на заключение договора розничной купли-продажи",
              "Настоящий документ, размещенный в сети Интернет на веб-сайте по адресу www.3ss-pro.by Обществом с ограниченной ответственностью «ТриСС Про», именуемым в дальнейшем Продавец, является публичной офертой, то есть предложением Продавца заключить договор розничной купли-продажи (далее - Договор) с физическим лицом, являющимся пользователем интернет сайта www.3ss-pro.by, именуемым в дальнейшем Покупатель. Продавец считает себя на условиях, указанных в настоящем предложении, заключившим Договор с Покупателем, который при соблюдении условий настоящего предложения и в порядке, им предусмотренном, отзовется на настоящее предложение (акцептует предложение). Договор считается заключенным между Продавцом и Покупателем в момент акцепта Покупателем публичной оферты Продавца.",
              "1. ОБЩИЕ ПОЛОЖЕНИЯ",
              "1.1. Настоящий Договор определяет порядок розничной купли-продажи Товара через Интернет-магазин в соответствии с действующим законодательством Республики Беларусь. Продавец и Покупатель упомянутые в данном договоре далее именуются Стороны, а каждый по отдельности Сторона.",
              "1.2. В настоящем договоре используются следующие термины:",
              "интернет-магазин - сайт, содержащий информацию о товарах, продавце, позволяющий осуществить выбор, заказ и (или) приобретение товара;",
              "покупатель - физическое лицо, имеющее намерение заказать или приобрести либо заказывающее, приобретающее или использующее товары исключительно для личных, бытовых, семейных, домашних и иных нужд, не связанных с осуществлением предпринимательской деятельности;",
              "продавец – Общество с ограниченной ответственностью «ТриСС Про», реализующее товары покупателю по договору розничной купли-продажи вне торгового объекта посредством глобальной компьютерной сети Интернет через интернет-магазин;",
              "получатель – физическое лицо, указанное или упомянутое Покупателем при заказе в интернет-магазине;",
              "сайт – совокупность информационных ресурсов, размещенных в Интернете по адресу: www.3ss-pro.by. Сайт принадлежит Продавцу и администрируется последним;",
              "заказ – запрос, отправленный Покупателем посредством сети Интернет на сайте Продавца либо посредством телефонного звонка на покупку товара, выбранного в интернет-магазине;",
              "товар – объект купли-продажи (вещь приобретаемая исключительно для личных, бытовых, семейных, домашних и иных нужд, не связанных с осуществлением предпринимательской деятельности), представленный в интернет-магазине Продавца, имеющийся в наличии у продавца в момент заключения договора, будет приобретен продавцом в будущем, если иное не установлено законодательством или не вытекает из характера товара;",
              "адрес – сведения места доставки Товара с точным наименованием населенного пункта, улицы, номера здания и номера квартиры или офиса.",
              "2. ПОРЯДОК ЗАКЛЮЧЕНИЯ ДОГОВОРА",
              "2.1. Настоящий текст Договора размещен на сайте Продавца по адресу: www.3ss-pro.by и является Публичной офертой Продавца, направленным неопределенному кругу лиц (ст. 405 Гражданского кодекса Республики Беларусь).",
              "2.2. Заключение договора и фактом принятия (акцепта) Покупателем условий Договора происходит в момент осуществления Заказа (ст. 408 Гражданского кодекса Республики Беларусь).",
              "2.3. Датой осуществления акцепта считается дата совершения Заказа Покупателем.",
              "2.4. Осуществляя Заказ Товара через Интернет-магазин, Покупатель принимает и соглашается со всеми условиями, изложенными в настоящем договоре, и с информацией, размещенной на Сайте в момент принятия Продавцом Заказа.",
              "3. ПРАВА И ОБЯЗАННОСТИ СТОРОН",
              "3.1. Обязанности Продавца:",
              "3.1.1. передать Покупателю Товар, который соответствует его образцу или описанию и качество которого соответствует информации, представленной Покупателю в Договоре, а также информации, доведенной до его сведения при передаче Товара.",
              "3.1.2. передать Покупателю Товар свободным от обременений третьих лиц.",
              "3.1.3. одновременно с передачей Товара передать Покупателю необходимые документы, подтверждающие качество Товара и гарантийный талон (книжку) (при условии, что это предусмотрено заводом-изготовителем).",
              "3.1.4. известить Покупателя не позднее 2 (двух) суток с момента возникновения обстоятельств непреодолимой силы, препятствующих исполнению Продавцом принятых на себя обязательств по Договору.",
              "3.1.5. предоставить Покупателю возможность расчета за приобретаемый Товар путем дистанционного перечисления денежных средств.",
              "3.2. Обязанности Покупателя:",
              "3.2.1. принять Товар по адресу и в срок, указанный в Договоре и Заказе.",
              "3.2.2. оплатить Товар в порядке и сроки, установленные в Договоре и Заказе.",
              "3.2.3. известить Продавца не позднее 2 (двух) суток с момента возникновения обстоятельств непреодолимой силы, препятствующих исполнению Покупателем принятых на себя обязательств по настоящему Договору.",
              "3.3. Продавец вправе:",
              "3.3.1. предложить Покупателю замену Товара в случае отсутствия выбранного по образцам Товара на складе Продавца;",
              "3.3.2. вносить изменения в настоящий договор и в информацию на Сайте, в связи с чем Покупатель обязуется на момент обращения к Продавцу с Заказом на Товар учитывать возможные изменения.",
              "3.3.3. в случае невыполнения Покупателем взятых на себя обязательств по приемке и оплате ранее заказанного товара, Продавец может приостановить выполнение текущих заказов на неопределенный срок.",
              "3.3.4. отказаться от исполнения настоящего договора (аннулировать заказ) в случае, когда товар не может быть доставлен в оговоренные сроки либо товар закончился у поставщика Продавца (снят с производства и т.д.)",
              "3.4. Покупатель вправе:",
              "3.4.1. отказаться от выполнения настоящего Договора при условии возмещения Продавцу расходов, понесенных в связи с совершением действий по его выполнению, расходов по доставке товара.",
              "4. ОФОРМЛЕНИЕ И СРОКИ ВЫПОЛНЕНИЯ ЗАКАЗА",
              "4.1. Заказ Покупателя может быть оформлен по телефону и/или через Сайт.",
              "4.1.1. При оформлении Заказа по телефону Покупатель предоставляет Продавцу следующую необходимую информацию для оформления Заказа: фамилию, имя, отчество Покупателя либо Получателя Заказа, Адрес доставки Товара, контактный телефон.",
              "4.1.2. При оформлении Заказа через Сайт Покупатель заполняет электронную форму Заказа на Товар и отправляет сформированный Заказ Продавцу посредством сети Интернет.",
              "4.2. Информация в Заказе, полученном Продавцом, принимается как верная. В случае необходимости уточнения, согласования представитель Продавца связывается с Покупателем либо Получателем по контактному телефону или электронной почте с целью уточнения, в том числе, конкретной даты и времени доставки Товара. Конкретная дата и время доставки зависят от места доставки и времени, необходимого Продавцу на обработку Заказа.",
              "4.3. Если при Комплектации Заказа обнаруживается, что на складе Продавца отсутствует необходимый Товар или его количество, Продавец информирует об этом Покупателя письмом на электронный адрес, внесенный при регистрации или при помощи телефонного звонка. Покупатель вправе согласиться принять Товар в количестве, имеющемся в наличии у Продавца, либо отказаться (аннулировать) от Заказа.",
              "4.4. В случае возникновения у Покупателя вопросов, касающихся описания, свойств и характеристик Товара, перед оформлением Заказа Покупатель должен обратиться к Продавцу по телефону, указанному в разделе «Информация» на Сайте Интернет-магазина.",
              "5. ДОСТАВКА ТОВАРА",
              "5.1. При Заказе Товара Покупателем на условиях доставки Продавец приложит все усилия, чтобы соблюсти сроки доставки Товара, указанные на Сайте, при этом не исключая причин, которые могут возникнуть и повлиять на сроки доставки в виде непредвиденных событий и обстоятельств, произошедших не по вине Продавца.",
              "5.2. Риск случайной гибели или случайного повреждения Товара переходит к Покупателю или Получателю в момент передачи Товара или проставления Покупателем или Получателем Товара личной подписи в документах, подтверждающих доставку Товара.",
              "5.3. Сроки и условия доставки Заказа размещены на сайте Продавца в разделе «Доставка и самовывоз».",
              "6. ОПЛАТА ТОВАРА",
              "6.1. Цена Товара указывается рядом с определенным наименованием товара на Сайте Интернет-магазина.",
              "6.2. Публикация на Сайте информации, очевидно не соответствующей Товару, в том числе цены, фото и описания Товара, признается технической ошибкой и не подлежит для реализации.",
              "6.3. Цена Товара на Сайте Интернет-магазина может быть изменена Продавцом в одностороннем порядке. При этом цена на Товар, на который оформлен Заказ, изменению не подлежит.",
              "6.4. Оплата Товара Покупателем или Получателем производится в белорусских рублях в форме и способами, указанными Продавцом в разделе «Оплата», форма оплаты может быть изменена Продавцом в одностороннем порядке.",
              "6.5. Продавец вправе предоставлять Покупателю или Получателю скидки на Товары и устанавливать программу бонусов. Виды скидок, порядок и условия начисления и предоставления бонусов указываются на Сайте Интернет-магазина в публичном доступе и могут быть изменены Продавцом в одностороннем порядке.",
              "7. ВОЗВРАТ ТОВАРА",
              "7.1. Покупатель или Получатель вправе в течение четырнадцати дней с момента передачи ему непродовольственного Товара отказаться от получения Товара. Возврат Товара надлежащего качества возможен в случае, если сохранен товарный вид и потребительские свойства Товара, а также Продавцу представлен документ, подтверждающий факт и условия покупки данного Товара. Согласно Закону о защите прав потребителей, возврат Товара бывшего в употреблении невозможен.",
              "7.2. Покупатель или Получатель не имеет права возвратить Товар надлежащего качества, согласно Перечню непродовольственных товаров надлежащего качества, не подлежащих обмену и возврату, утвержденному Постановлением Совета Министров Республики Беларусь № 778 от 14.06.2002 года.",
              "7.3. Обмен и возврат Товара производится по месту нахождения Продавца.",
              "7.4. Покупатель или Получатель, которому продан Товар ненадлежащего качества, если это не было оговорено Продавцом, вправе по своему выбору потребовать:",
              "- замены недоброкачественного Товара Товаром надлежащего качества из ассортимента Товара, представленного на сайте Продавца;",
              "- соразмерного уменьшения покупной цены Товара;",
              "- расторгнуть договор розничной купли-продажи и потребовать возврата уплаченной за Товар денежной суммы.",
              "7.5. В случае отказа Покупателя или Получателя от договора, согласно условиям пункта 7.1 настоящего договора, и одновременного предъявления требования о возврате уплаченной за Товар денежной суммы, стоимость Товара подлежит возврату Покупателю или Получателю в течение 5 (пять) рабочих дней, исключая субботу и воскресенье, с момента получения Продавцом письменного заявления Покупателя или Получателя в месте нахождения Продавца.",
              "7.6. Возврат Товара на условиях пункта 7.1 настоящего договора осуществляется силами и за счет Покупателя.",
              "7.7. Возврат денежных средств осуществляется Продавцом тем способом, которым была произведена оплата Товара.",
              "7.8. Возврат денежных средств на банковскую карту Покупателя производится на условиях, указанных на сайте Продавца.",
              "7.9. Если Покупатель приобрел товар со скидкой, на распродаже или по подарочному сертификату, имеет право в течение 14 дней, если более длительный срок не объявлен продавцом на выбор (ст. 472 ГК, п. 1 ст. 28 Закона от 09.01.2002 N 90-З):",
              "- возвратить непродовольственный товар надлежащего качества;",
              "- обменять его на аналогичный товар других размера, формы, габарита, фасона, расцветки или комплектации, если такой товар есть в наличии. После окончания акции или распродажи товар замене не подлежит, возможен только возврат денежных средств, уплаченных за товар. Обменять товар можно в месте его приобретения или иных местах, указанных продавцом. Продавец в случае возврата Покупателем товара надлежащего качества обязан выплатить ему денежную сумму, уплаченную за товар на момент приобретения товара. Если акция или распродажа предусматривает покупку нескольких единиц товара и скидка распространяется только на 1 из них, то возврат товара надлежащего качества должен происходить с учетом условий приобретения товара, т.е. с учетом условий акции.",
              "8. ГАРАНТИИ И ОТВЕТСТВЕННОСТЬ",
              "8.1. Продавец не несет ответственности за ущерб, причиненный Покупателю или Получателю вследствие ненадлежащего использования последними Товара, приобретенного в Интернет-магазине Продавца.",
              "8.2. Продавец не несет ответственности за содержание и функционирование других сайтов Интернета.",
              "8.3. Продавец не несет ответственности за последствия, связанные с действиями Покупателя или Получателя в случае использования Товара, приобретенного у Продавца, в предпринимательских целях.",
              "8.4. Продавец не отвечает за убытки Покупателя или Получателя, возникшие в результате:",
              "- предоставления не достоверной информации при согласовании Заказа, в т.ч. неправильного указания идентификационных сведений;",
              "- неправомерных действий третьих лиц.",
              "8.5. Покупатель или Получатель несет полную ответственность за достоверность идентификационных сведений, указанных им при Заказе Товара в Интернет-магазине.",
              "8.6. Стороны освобождаются от ответственности за полное или частичное неисполнение своих обязательств, если такое неисполнение явилось следствием действия обстоятельств непреодолимой силы, возникших после вступления в силу настоящего договора и/или в результате событий чрезвычайного характера, которые Стороны не могли предвидеть и предотвратить разумными мерами.",
              "8.7. В иных случаях, не предусмотренных пунктом 8.6 настоящего договора, за неисполнение или ненадлежащее исполнение своих обязательств, Стороны несут ответственность в соответствии с действующим законодательством Республики Беларусь.",
              "9. КОНФИДЕНЦИАЛЬНОСТЬ И ЗАЩИТА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ",
              "9.1. Предоставление информации Покупателем.",
              "9.1.1. При формировании Заказа на Товар через Сайт Интернет-магазина или по телефону, Покупатель предоставляет Продавцу информацию, позволяющая Продавцу идентифицировать Покупателя и добросовестно и в срок исполнить условия настоящего договора.",
              "9.1.2. Предоставляя свои персональные данные при заказе Товара, Покупатель соглашается на их обработку Продавцом.",
              "9.2. Использование информации, предоставленной Покупателем и полученной Продавцом.",
              "9.2.1. Продавец использует информацию:",
              "- для выполнения своих обязательств перед Покупателем;",
              "- для оценки и анализа работы Сайта;",
              "- для проведения акций.",
              "9.2.2 Продавец вправе направлять Покупателю сообщения рекламно-информационного характера. В случае если Покупатель не желает получать рассылки от Продавца, он должен известить об этом Продавца через форму «Обратной связи» на Сайте Интернет-магазина или самостоятельно в личном аккаунте отписаться от рекламно-информационных сообщений.",
              "9.5. Разглашение информации, полученной Продавцом:",
              "9.5.1. Продавец обязуется не разглашать полученную от Покупателя информацию. Не считается нарушением предоставление Продавцом информации агентам и третьим лицам, действующим на основании договора с Продавцом, для исполнения обязательств перед Покупателем или Получателем.",
              "9.5.2. Не считается нарушением обязательств разглашение информации в соответствии с обоснованными и применимыми требованиями законодательства.",
              "9.6. Продавец не несет ответственности за сведения, предоставленные Покупателем на Сайте Интернет-магазина в общедоступной форме.",
              "10. ПРОЧИЕ УСЛОВИЯ",
              "10.1. К отношениям между Покупателем и Продавцом применяется право Республики Беларусь.",
              "10.2. В случае возникновения вопросов и претензий со стороны Покупателя или Получателя, он должен обратиться к Продавцу по телефону или через форму «Обратной связи» на Сайте Интернет-магазина.",
              "10.3. Все возникающее споры Стороны будут стараться решить путем переговоров. При недостижении обоюдовыгодного соглашения, спор между Сторонами будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством Республики Беларусь.",
              "10.4. Признание судом недействительности какого-либо положения настоящего договора не влечет за собой недействительность его остальных положений.",
              "11. РЕКВИЗИТЫ ПРОДАВЦА",
              "ООО «ТриСС Про»",
              "Республика Беларусь, 220088, г. Минск, ул. Первомайская, д. 24, корп. 2, пом.102Б.",
              "тел. +375(29) 27-10-100, +375(44) 756-11-31, тел/факс +375(17) 325-10-11",
              "e-mail: 3ss-pro@mail.ru",
              "Р/с BY43MTBK30120001093300117152 в ЗАО «МТБанк», г. Минск, ул. Толстого, 10",
              "БИК MTBKBY22, УНП 193656007, ОКПО 506562895000"
            ],
            "en": [
              "PUBLIC OFFER AGREEMENT",
              "PUBLIC OFFER (PROPOSAL)",
              "for concluding a retail sale contract",
              "This document, posted on the Internet at the website www.3ss-pro.by by the Limited Liability Company 'TriSS Pro,' hereinafter referred to as the Seller, constitutes a public offer, i.e., a proposal by the Seller to conclude a retail sale contract (hereinafter referred to as the Contract) with an individual who is a user of the website www.3ss-pro.by, hereinafter referred to as the Buyer. The Seller considers itself to have concluded the Contract with the Buyer under the terms specified in this proposal, provided the Buyer, in compliance with the terms of this proposal and the procedure outlined herein, accepts this proposal (accepts the offer). The Contract is deemed concluded between the Seller and the Buyer at the moment the Buyer accepts the Seller’s public offer.",
              "1. GENERAL PROVISIONS",
              "1.1. This Contract governs the procedure for the retail sale of Goods through the Online Store in accordance with the current legislation of the Republic of Belarus. The Seller and the Buyer mentioned in this Contract are hereinafter referred to as the Parties, and individually as a Party.",
              "1.2. The following terms are used in this Contract:",
              "online store - a website containing information about goods, the seller, enabling the selection, ordering, and/or purchase of goods;",
              "buyer - an individual intending to order or purchase, or ordering, purchasing, or using goods solely for personal, household, family, home, or other needs not related to entrepreneurial activities;",
              "seller – Limited Liability Company 'TriSS Pro,' which sells goods to the buyer under a retail sale contract outside a retail facility via the global Internet network through the online store;",
              "recipient – an individual specified or mentioned by the Buyer when placing an order in the online store;",
              "website – a collection of information resources located on the Internet at www.3ss-pro.by. The website is owned and administered by the Seller;",
              "order – a request sent by the Buyer via the Internet on the Seller’s website or via a phone call to purchase goods selected in the online store;",
              "goods – the object of the sale (an item purchased exclusively for personal, household, family, home, or other needs not related to entrepreneurial activities), presented in the Seller’s online store, available at the Seller’s disposal at the time of concluding the contract, or to be acquired by the Seller in the future unless otherwise stipulated by law or evident from the nature of the goods;",
              "address – details of the delivery location of the Goods, including the exact name of the locality, street, building number, and apartment or office number.",
              "2. PROCEDURE FOR CONCLUDING THE CONTRACT",
              "2.1. The text of this Contract is posted on the Seller’s website at www.3ss-pro.by and constitutes the Seller’s Public Offer addressed to an indefinite group of persons (Article 405 of the Civil Code of the Republic of Belarus).",
              "2.2. The conclusion of the contract and the fact of the Buyer’s acceptance of the Contract’s terms occur at the moment the Order is placed (Article 408 of the Civil Code of the Republic of Belarus).",
              "2.3. The date of acceptance is considered the date the Buyer places the Order.",
              "2.4. By placing an Order for Goods through the Online Store, the Buyer accepts and agrees to all the terms set forth in this Contract and the information posted on the Website at the time the Seller accepts the Order.",
              "3. RIGHTS AND OBLIGATIONS OF THE PARTIES",
              "3.1. Obligations of the Seller:",
              "3.1.1. Deliver to the Buyer Goods that conform to their sample or description and whose quality matches the information provided to the Buyer in the Contract, as well as the information brought to their attention upon delivery of the Goods.",
              "3.1.2. Deliver to the Buyer Goods free from third-party encumbrances.",
              "3.1.3. Simultaneously with the delivery of the Goods, provide the Buyer with necessary documents confirming the quality of the Goods and a warranty certificate (if provided by the manufacturer).",
              "3.1.4. Notify the Buyer no later than 2 (two) days from the occurrence of force majeure circumstances preventing the Seller from fulfilling its obligations under the Contract.",
              "3.1.5. Provide the Buyer with the option to pay for the purchased Goods via remote transfer of funds.",
              "3.2. Obligations of the Buyer:",
              "3.2.1. Accept the Goods at the address and within the timeframe specified in the Contract and Order.",
              "3.2.2. Pay for the Goods in the manner and within the timeframe established in the Contract and Order.",
              "3.2.3. Notify the Seller no later than 2 (two) days from the occurrence of force majeure circumstances preventing the Buyer from fulfilling its obligations under this Contract.",
              "3.3. Rights of the Seller:",
              "3.3.1. Offer the Buyer a replacement for the Goods if the selected sample is unavailable in the Seller’s warehouse;",
              "3.3.2. Amend this Contract and the information on the Website, whereby the Buyer is obliged to consider possible changes at the time of placing an Order with the Seller.",
              "3.3.3. In case the Buyer fails to fulfill its obligations to accept and pay for previously ordered goods, the Seller may suspend the fulfillment of current orders for an indefinite period.",
              "3.3.4. Refuse to execute this Contract (cancel the order) if the goods cannot be delivered within the agreed timeframe or if the goods are no longer available from the Seller’s supplier (discontinued, etc.).",
              "3.4. Rights of the Buyer:",
              "3.4.1. Refuse to execute this Contract, provided the Buyer reimburses the Seller for expenses incurred in connection with actions taken to fulfill it, including delivery costs.",
              "4. ORDER PLACEMENT AND FULFILLMENT TERMS",
              "4.1. The Buyer’s Order may be placed by phone and/or through the Website.",
              "4.1.1. When placing an Order by phone, the Buyer provides the Seller with the following necessary information: the Buyer’s or Recipient’s full name, delivery address of the Goods, and contact phone number.",
              "4.1.2. When placing an Order through the Website, the Buyer completes an electronic Order form for the Goods and submits the completed Order to the Seller via the Internet.",
              "4.2. The information in the Order received by the Seller is deemed accurate. If clarification or coordination is needed, a Seller’s representative contacts the Buyer or Recipient via the contact phone number or email to confirm details, including the specific date and time of delivery. The specific delivery date and time depend on the delivery location and the time required by the Seller to process the Order.",
              "4.3. If, during Order fulfillment, it is discovered that the required Goods or their quantity are unavailable in the Seller’s warehouse, the Seller informs the Buyer via email (provided during registration) or phone call. The Buyer may agree to accept the Goods in the available quantity or cancel the Order.",
              "4.4. If the Buyer has questions regarding the description, properties, or characteristics of the Goods, they should contact the Seller by phone, as indicated in the 'Information' section of the Online Store’s Website, before placing the Order.",
              "5. DELIVERY OF GOODS",
              "5.1. When the Buyer orders Goods with delivery, the Seller will make every effort to adhere to the delivery timelines indicated on the Website, while not excluding reasons that may arise and affect delivery timelines due to unforeseen events and circumstances beyond the Seller’s control.",
              "5.2. The risk of accidental loss or damage to the Goods passes to the Buyer or Recipient at the moment of delivery or upon the Buyer or Recipient signing the documents confirming delivery.",
              "5.3. The terms and conditions of Order delivery are posted on the Seller’s Website in the 'Delivery and Pickup' section.",
              "6. PAYMENT FOR GOODS",
              "6.1. The price of the Goods is indicated next to the specific product name on the Online Store’s Website.",
              "6.2. Information published on the Website that obviously does not correspond to the Goods, including price, photos, and descriptions, is considered a technical error and is not subject to fulfillment.",
              "6.3. The price of Goods on the Online Store’s Website may be unilaterally changed by the Seller. However, the price of Goods for which an Order has been placed is not subject to change.",
              "6.4. Payment for the Goods by the Buyer or Recipient is made in Belarusian rubles in the form and manner specified by the Seller in the 'Payment' section, and the payment method may be unilaterally changed by the Seller.",
              "6.5. The Seller may offer discounts on Goods to the Buyer or Recipient and establish a bonus program. Types of discounts, the procedure, and conditions for accruing and providing bonuses are specified on the Online Store’s Website in public access and may be unilaterally changed by the Seller.",
              "7. RETURN OF GOODS",
              "7.1. The Buyer or Recipient may, within fourteen days from the moment of receiving non-food Goods, refuse to accept the Goods. Return of Goods of proper quality is possible if their presentation and consumer properties are preserved, and the Seller is provided with a document confirming the fact and conditions of the purchase. According to the Consumer Rights Protection Law, return of used Goods is not permitted.",
              "7.2. The Buyer or Recipient may not return Goods of proper quality listed in the List of Non-Food Goods of Proper Quality Not Subject to Exchange or Return, approved by Resolution No. 778 of the Council of Ministers of the Republic of Belarus dated June 14, 2002.",
              "7.3. Exchange and return of Goods are carried out at the Seller’s location.",
              "7.4. If the Buyer or Recipient is sold Goods of improper quality, unless this was specified by the Seller, they may, at their discretion, demand:",
              "- replacement of the defective Goods with Goods of proper quality from the assortment available on the Seller’s website;",
              "- a proportional reduction in the purchase price of the Goods;",
              "- termination of the retail sale contract and a refund of the amount paid for the Goods.",
              "7.5. In case of the Buyer or Recipient’s refusal of the contract under the conditions of clause 7.1 of this Contract and simultaneous demand for a refund of the amount paid for the Goods, the cost of the Goods shall be refunded to the Buyer or Recipient within 5 (five) working days, excluding Saturdays and Sundays, from the moment the Seller receives a written statement from the Buyer or Recipient at the Seller’s location.",
              "7.6. Return of Goods under the conditions of clause 7.1 of this Contract is carried out at the Buyer’s expense and effort.",
              "7.7. Refunds are processed by the Seller using the same payment method used for the original purchase.",
              "7.8. Refunds to the Buyer’s bank card are processed under the conditions specified on the Seller’s Website.",
              "7.9. If the Buyer purchased Goods at a discount, during a sale, or with a gift certificate, they have the right, within 14 days (unless a longer period is announced by the Seller), to choose (Article 472 of the Civil Code, Clause 1 of Article 28 of Law No. 90-Z dated January 9, 2002):",
              "- return non-food Goods of proper quality;",
              "- exchange them for similar Goods of a different size, shape, dimension, style, color, or configuration, if such Goods are available. After the end of a promotion or sale, Goods are not subject to exchange, only a refund of the amount paid is possible. Goods can be exchanged at the place of purchase or other locations specified by the Seller. In case of returning Goods of proper quality, the Seller must refund the Buyer the amount paid at the time of purchase. If a promotion or sale involves purchasing multiple items with a discount applied to only one, the return of Goods of proper quality must account for the purchase conditions, i.e., the terms of the promotion.",
              "8. WARRANTIES AND LIABILITY",
              "8.1. The Seller is not liable for damage caused to the Buyer or Recipient due to improper use of Goods purchased from the Seller’s Online Store.",
              "8.2. The Seller is not responsible for the content and functioning of other Internet websites.",
              "8.3. The Seller is not liable for consequences related to the actions of the Buyer or Recipient if the Goods purchased from the Seller are used for entrepreneurial purposes.",
              "8.4. The Seller is not liable for losses incurred by the Buyer or Recipient as a result of:",
              "- providing inaccurate information when coordinating the Order, including incorrect identification details;",
              "- unlawful actions of third parties.",
              "8.5. The Buyer or Recipient bears full responsibility for the accuracy of the identification details provided when ordering Goods in the Online Store.",
              "8.6. The Parties are exempt from liability for full or partial non-fulfillment of their obligations if such non-fulfillment results from force majeure circumstances arising after the Contract takes effect and/or extraordinary events that the Parties could not foresee or prevent with reasonable measures.",
              "8.7. In cases not covered by clause 8.6 of this Contract, the Parties are liable for non-fulfillment or improper fulfillment of their obligations in accordance with the current legislation of the Republic of Belarus.",
              "9. CONFIDENTIALITY AND PROTECTION OF PERSONAL INFORMATION",
              "9.1. Provision of Information by the Buyer.",
              "9.1.1. When placing an Order for Goods through the Online Store’s Website or by phone, the Buyer provides the Seller with information enabling the Seller to identify the Buyer and fulfill the terms of this Contract diligently and on time.",
              "9.1.2. By providing personal data when ordering Goods, the Buyer consents to their processing by the Seller.",
              "9.2. Use of Information Provided by the Buyer and Received by the Seller.",
              "9.2.1. The Seller uses the information:",
              "- to fulfill its obligations to the Buyer;",
              "- to evaluate and analyze the Website’s performance;",
              "- to conduct promotions.",
              "9.2.2. The Seller may send the Buyer advertising and informational messages. If the Buyer does not wish to receive such messages from the Seller, they must notify the Seller via the 'Feedback' form on the Online Store’s Website or unsubscribe from advertising messages in their personal account.",
              "9.5. Disclosure of Information Received by the Seller:",
              "9.5.1. The Seller undertakes not to disclose information received from the Buyer. It is not considered a breach if the Seller provides information to agents and third parties acting under a contract with the Seller to fulfill obligations to the Buyer or Recipient.",
              "9.5.2. Disclosure of information in accordance with reasonable and applicable legal requirements is not considered a breach of obligations.",
              "9.6. The Seller is not liable for information provided by the Buyer on the Online Store’s Website in a publicly accessible form.",
              "10. OTHER CONDITIONS",
              "10.1. The laws of the Republic of Belarus apply to the relationship between the Buyer and the Seller.",
              "10.2. In case of questions or complaints from the Buyer or Recipient, they must contact the Seller by phone or via the 'Feedback' form on the Online Store’s Website.",
              "10.3. The Parties will attempt to resolve all disputes through negotiations. If a mutually beneficial agreement is not reached, the dispute will be referred to a judicial authority in accordance with the current legislation of the Republic of Belarus.",
              "10.4. The invalidity of any provision of this Contract, as determined by a court, does not entail the invalidity of its remaining provisions.",
              "11. SELLER’S DETAILS",
              "LLC 'TriSS Pro'",
              "Republic of Belarus, 220088, Minsk, Pervomayskaya str., 24, bldg. 2, room 102B.",
              "tel. +375(29) 27-10-100, +375(44) 756-11-31, tel/fax +375(17) 325-10-11",
              "e-mail: 3ss-pro@mail.ru",
              "Account BY43MTBK30120001093300117152 at CJSC 'MTBank', Minsk, Tolstoy str., 10",
              "BIC MTBKBY22, UNP 193656007, OKPO 506562895000"
            ],
            "by": [
              "ДАГАВОР ПУБЛІЧНАЙ АФЕРТЫ",
              "ПУБЛІЧНАЯ ПРАПАНОВА (АФЕРТА)",
              "на заключэнне дагавора рознічнага гандлю",
              "Гэты дакумент, размешчаны ў сетцы Інтэрнэт на сайце www.3ss-pro.by Таварыствам з абмежаванай адказнасцю «ТрыСС Про», далей — Прадавец, з’яўляецца публічнай афертай, г.зн. прапановай Прадаўца заключыць дагавор рознічнага гандлю (далей — Дагавор) з фізічнай асобай, якая з’яўляецца карыстальнікам сайта www.3ss-pro.by, далей — Пакупнік. Прадавец лічыць сябе такім, што заключыў Дагавор з Пакупніком на ўмовах, указаных у гэтай прапанове, пры ўмове, што Пакупнік, выконваючы ўмовы гэтай прапановы і парадак, выкладзены ў ёй, прымае гэтую прапанову (акцэптуе аферту). Дагавор лічыцца заключаным паміж Прадаўцом і Пакупніком у момант акцэпту Пакупніком публічнай аферты Прадаўца.",
              "1. АГУЛЬНЫЯ ПАЛАЖЭННІ",
              "1.1. Гэты Дагавор рэгулюе парадак рознічнага гандлю Таварамі праз Інтэрнэт-краму ў адпаведнасці з дзеючым заканадаўствам Рэспублікі Беларусь. Прадавец і Пакупнік, згаданыя ў гэтым Дагаворы, далей называюцца Бакам, а ўсе асобна — Бок.",
              "1.2. У гэтым Дагаворы выкарыстоўваюцца наступныя тэрміны:",
              "інтэрнэт-крама - вэб-сайт, які ўтрымлівае інфармацыю пра тавары, прадаўца, што дазваляе выбіраць, заказваць і/або купляць тавары;",
              "пакупнік - фізічная асоба, якая мае намер заказаць або купіць, або заказвае, купляе ці выкарыстоўвае тавары выключна для асабістых, сямейных, хатніх і іншых патрэб, не звязаных з прадпрымальніцкай дзейнасцю;",
              "прадавец – Таварыства з абмежаванай адказнасцю «ТрыСС Про», якое прадае тавары пакупніку па дагаворы рознічнага гандлю па-за гандлёвым аб’ектам праз глабальную сетку Інтэрнэт праз інтэрнэт-краму;",
              "атрымальнік – фізічная асоба, указаная ці згаданая Пакупніком пры афармленні замовы ў інтэрнэт-краме;",
              "веб–сайт - совокупность информационных ресурсов, расположенных в сети Интернет по адресу www.3ss-pro.by. Веб-сайт принадлежит Продавцу и управляется им;",
              "замова – запыт, адпраўлены Пакупніком праз Інтэрнэт на вэб-сайце Прадаўца або праз тэлефонны званок для набыцця тавараў, выбраных у інтэрнэт-краме;",
              "тавары – аб'ект продажу (прадмет, які набываецца выключна для асабістых, хатніх, сямейных, дамашніх або іншых патрэб, не звязаных з прадпрымальніцкай дзейнасцю), прадстаўлены ў інтэрнэт-краме Прадаўца, які маецца ў распараджэнні Прадаўца на момант заключэння дагавора, або які падлягае набыццю Прадаўцом у будучыні, калі іншае не прадугледжана законам або не вынікае з характару тавараў;",
              "адрас – дэталі месцазнаходжання для дастаўкі тавараў, уключаючы дакладную назву населенага пункта, вуліцу, нумар будынка і нумар кватэры або офіса.",
              "2. ПАРАДАК ЗАКЛЮЧЭННЯ ДАГАВОРА",
              "2.1. Тэкст гэтага Дагавора размешчаны на вэб-сайце Прадаўца па адрасе www.3ss-pro.by і ўяўляе сабой Публічную оферту Прадаўца, адрасаваную невядомаму колу асоб (артыкул 405 Грамадзянскага кодэкса Рэспублікі Беларусь).",
              "2.2. Заключэнне дагавора і факт прыняцця Пакупніком умоў Дагавора адбываецца ў момант афармлення Замовы (артыкул 408 Грамадзянскага кодэкса Рэспублікі Беларусь).",
              "2.3. Датай прыняцця лічыцца дата афармлення Пакупніком Замовы.",
              "2.4. Зрабіўшы Замову тавараў праз інтэрнэт-краму, Пакупнік прымае і пагаджаецца з усімі ўмовамі, выкладзенымі ў гэтым Дагаворы і інфармацыяй, размешчанай на Сайце ў момант прыёму Замовы Прадаўцом.",
              "3. ПРАВЫ І АБАВЯЗКІ БАКОЎ",
              "3.1. Абавязкі Прадаўца:",
              "3.1.1. Перадаць Пакупніку Тавары, якія адпавядаюць іх узору або апісанню, і чыя якасць адпавядае інфармацыі, якая прадстаўлена Пакупніку ў Дагаворы, а таксама інфармацыі, якая даведзена да яго ўвагі пры пастаўцы Тавараў.",
              "3.1.2. Перадаць Пакупніку Тавары, свабодныя ад абцяжаранняў трэціх асоб.",
              "3.1.3. Адначасова з пастаўкай Тавараў даць Пакупніку неабходныя дакументы, якія пацвярджаюць якасць Тавараў, і гарантыйны талон (калі ён прадугледжаны вытворцам).",
              "3.1.4. Апавясціць Пакупніка не пазней чым за 2 (два) дні з моманту ўзнікнення абставін непераадольнай сілы, якія перашкаджаюць Прадаўцу выконваць свае абавязкі па Дагаворы.",
              "3.1.5. Прадставіць Пакупніку магчымасць аплаты набытых Тавараў праз дыстанцыйны перавод сродкаў.",
              "3.2. Абавязкі Пакупніка:", 
              "3.2.1. Прыняць Тавары па адрасе і ў тэрміны, указаныя ў Дагаворы і Замове.",
              "3.2.2. Аплаціць Тавары ў парадку і ў тэрміны, устаноўленыя ў Дагаворы і Замове.",
              "3.2.3. Апавясціць Прадаўца не пазней чым за 2 (два) дні з моманту ўзнікнення абставін непераадольнай сілы, якія перашкаджаюць Пакупніку выконваць свае абавязкі па гэтым Дагаворы.",
              "3.3. Правы Прадаўца:",
              "3.3.1. Прапаноўваць Пакупніку замену Тавараў, калі выбраны ўзор адсутнічае на складзе Прадаўца;",
              "3.3.2. Уносіць змяненні ў гэты Дагавор і інфармацыю на Сайце, у сувязі з чым Пакупнік павінен улічваць магчымыя змяненні падчас афармлення Замовы ў Прадаўца.",
              "3.3.3. У выпадку, калі Пакупнік не выконвае абавязкі па прыняцці і аплаце раней замоўленых тавараў, Прадавец можа прыпыніць выкананне бягучых замоў на нявызначаны тэрмін.",
              "3.3.4. Адмовіцца ад выканання гэтага Дагавора (адмяніць замову), калі тавары не могуць быць пастаўлены ў агавораны тэрмін або калі тавары больш недаступныя ў пастаўшчыка Прадаўца (знятыя з вытворчасці і г.д.).",
              "3.4. Правы Пакупніка:", 
              "3.4.1. Адмовіцца ад выканання гэтага Дагавора, пры ўмове кампенсацыі Пакупнікам Прадаўцу выдаткаў, панесеных у сувязі з дзеяннямі па яго выкананні, уключаючы выдаткі на дастаўку.",
              "4. АФАРМЛЕННЕ ЗАМОВЫ І ЎМОВЫ ВЫКАНАННЯ", 
              "4.1. Замова Пакупніка можа быць аформлена па тэлефоне і/або праз Сайт.",
              "4.1.1. Пры афармленні Замовы па тэлефоне Пакупнік прадстаўляе Прадаўцу наступную неабходную інфармацыю: поўнае імя Пакупніка або Атрымальніка, адрас дастаўкі Тавараў, і кантактны тэлефон.",
              "4.1.2. Пры афармленні Замовы праз Сайт Пакупнік запаўняе электронную форму Замовы на Тавары і адпраўляе запоўненую Замову Прадаўцу праз Інтэрнэт.",
              "4.2. Інфармацыя ў Замове, якая атрымана Прадаўцом, лічыцца дакладнай. Пры неабходнасці ўдакладнення або ўзгаднення, прадстаўнік Прадаўца звязваецца з Пакупніком або Атрымальнікам па кантактным тэлефоне або электроннай пошце для пацвярджэння дэталяў, уключаючы дакладную дату і час дастаўкі. Дакладная дата і час дастаўкі залежаць ад месца дастаўкі і часу, неабходнага Прадаўцу для апрацоўкі Замовы.",
              "4.3. Калі пры выкананні Замовы выяўляецца, што неабходныя Тавары або іх колькасць адсутнічаюць на складзе Прадаўца, Прадавец інфармуе Пакупніка праз электронную пошту (прадстаўленую пры рэгістрацыі) або тэлефонны званок. Пакупнік можа пагадзіцца прыняць Тавары ў наяўнай колькасці або адмяніць Замову.",
              "4.4. Калі ў Пакупніка ўзнікаюць пытанні адносна апісання, уласцівасцей або характарыстык Тавараў, ён павінен звязацца з Прадаўцом па тэлефоне, паказаным у раздзеле 'Інфармацыя' на вэб-сайце інтэрнэт-крамы, да афармлення Замовы.",
              "5. ДАСТАЎКА ТАВАЎ",
              "5.1. Пры замове Пакупнікам Тавараў з дастаўкай Прадавец прыкладзе ўсе намаганні для выканання тэрмінаў дастаўкі, указаных на Сайце, аднак не выключае прычыны, якія могуць узнікнуць і паўплываць на тэрміны дастаўкі ў сувязі з непрадбачанымі падзеямі і абставінамі, якія не залежаць ад Прадаўца.",
              "5.2. Рызыка выпадковай страты або пашкоджання Тавараў пераходзіць да Пакупніка або Атрымальніка ў момант дастаўкі або пры падпісанні Пакупнікам або Атрымальнікам дакументаў, якія пацвярджаюць пастаўку.", 
              "5.3. Умовы і парадак дастаўкі Замовы размешчаны на вэб-сайце Прадаўца ў раздзеле 'Дастаўка і самавываз'.", 
              "6. АПЛАТА ТАВАЎ", "6.1. Цана Тавараў указана побач са спецыфічнай назвай прадукту на вэб-сайце інтэрнэт-крамы.", 
              "6.2. Інфармацыя, апублікаваная на Сайце, якая відавочна не адпавядае Таварам, уключаючы цану, фота і апісанні, лічыцца тэхнічнай памылкай і не падлягае выкананню.", 
              "6.3. Цана Тавараў на вэб-сайце інтэрнэт-крамы можа быць аднабакова зменена Прадаўцом. Аднак цана Тавараў, па якіх была аформлена Замова, не падлягае зменам.", 
              "6.4. Аплата Тавараў Пакупнікам або Атрымальнікам ажыццяўляецца ў беларускіх рублях у форме і парадку, указаных Прадаўцом у раздзеле 'Аплата', і спосаб аплаты можа быць аднабакова зменены Прадаўцом.", 
              "6.5. Прадавец можа прапанаваць зніжкі на Тавары Пакупніку або Атрымальніку і ўсталяваць бонусную праграму. Віды зніжак, парадак і ўмовы налічэння і прадастаўлення бонусаў указаны на вэб-сайце інтэрнэт-крамы ў адкрытым доступе і могуць быць аднабакова зменены Прадаўцом.", 
              "7. ВОЗВРАТ ТАВАЎ",
              "7.1. Пакупнік або Атрымальнік можа, на працягу чатырнаццаці дзён з моманту атрымання непродкутовых тавараў, адмовіцца ад іх прыёмкі. Вяртанне тавараў належнай якасці магчыма, калі захаваны іх таварны выгляд і спажывецкія ўласцівасці, а таксама калі Прадаўцу прадастаўлены дакумент, які пацвярджае факт і ўмовы пакупкі. Паводле Закона аб абароне правоў спажыўцоў, вяртанне выкарыстаных тавараў не дапускаецца.", 
              "7.2. Пакупнік або Атрымальнік не могуць вяртаць тавары належнай якасці, уключаныя ў спіс Непрадуктовых тавараў належнай якасці, якія не падлягаюць абмену або вяртанню, зацверджаны пастановай Савета Міністраў Рэспублікі Беларусь №778 ад 14 чэрвеня 2002 года.", 
              "7.3. Абмен і вяртанне тавараў ажыццяўляюцца па месцы знаходжання Прадаўца.", 
              "7.4. Калі Пакупніку або Атрымальніку прададзены тавары неналежнай якасці, калі гэта не было ўказана Прадаўцом, яны могуць, на свой выбар, патрабаваць:", 
              "- замены дэфектных тавараў на тавары належнай якасці з асартыменту, даступнага на сайце Прадаўца;", 
              "- прапорцыйнага змяншэння кошту тавараў;", 
              "- скасавання дагавора рознічнага продажу і вяртання сумы, выплачанай за тавары.", 
              "7.5. У выпадку адмовы Пакупніка або Атрымальніка ад дагавора на ўмовах пункта 7.1 гэтага Дагавора і адначасовага патрабавання аб вяртанні выплачанай за тавары сумы, кошт тавараў вяртаецца Пакупніку або Атрымальніку на працягу 5 (пяці) рабочых дзён, за выключэннем субот і нядзель, з моманту атрымання Прадаўцом пісьмовай заявы ад Пакупніка або Атрымальніка па месцы знаходжання Прадаўца.", 
              "7.6. Вяртанне тавараў на ўмовах пункта 7.1 гэтага Дагавора ажыццяўляецца за кошт і намаганні Пакупніка.", 
              "7.7. Вяртанне сродкаў ажыццяўляецца Прадаўцом з выкарыстаннем таго ж спосабу аплаты, які выкарыстоўваўся пры пачатковай пакупцы.", 
              "7.8. Вяртанне сродкаў на банкаўскую картку Пакупніка ажыццяўляецца на ўмовах, указаных на сайце Прадаўца.", 
              "7.9. Калі Пакупнік набыў тавары са зніжкай, падчас распродажу або з падарункавым сертыфікатам, ён мае права, на працягу 14 дзён (калі Прадавец не абвяшчае больш працяглы тэрмін), выбраць (Артыкул 472 Грамадзянскага кодэкса, Пункт 1 артыкула 28 Закона №90-З ад 9 студзеня 2002 года):", 
              "- вярнуць непродкутовыя тавары належнай якасці;", 
              "- абмяняць іх на аналагічныя тавары іншага памеру, формы, вымярэнняў, стылю, колеру або камплектацыі, калі такія тавары даступныя.", 
              "8. ГАРАНТЫІ І АДКАЗНАСЦЬ",
              "8.1. Прадавец не нясе адказнасці за шкоду, прычыненую Пакупніку або Атрымальніку ў выніку неналежнага выкарыстання Тавараў, набытых у інтэрнэт-краме Прадаўца.", 
              "8.2. Прадавец не нясе адказнасці за змест і функцыянаванне іншых інтэрнэт-сайтаў.", 
              "8.3. Прадавец не нясе адказнасці за наступствы, звязаныя з дзеяннямі Пакупніка або Атрымальніка, калі Тавары, набытыя ў Прадаўца, выкарыстоўваюцца для прадпрымальніцкіх мэтаў.", 
              "8.4. Прадавец не нясе адказнасці за страты, панесеныя Пакупнікам або Атрымальнікам у выніку:", 
              "- прадастаўлення недакладнай інфармацыі пры ўзгадненні Замовы, уключаючы няправільныя ідэнтыфікацыйныя дадзеныя;", 
              "- неправамерных дзеянняў трэціх асоб.",
              "8.5. Пакупнік або Атрымальнік нясе поўную адказнасць за дакладнасць прадастаўленых ідэнтыфікацыйных дадзеных пры заказе тавараў у інтэрнэт-краме.", 
              "8.6. Бакі вызваляюцца ад адказнасці за поўнае або частковае невыкананне сваіх абавязкаў, калі такое невыкананне з'яўляецца вынікам абставін непераадольнай сілы, якія ўзніклі пасля ўступлення ў сілу гэтага Дагавора, і/або надзвычайных падзей, якія Бакі не маглі прадбачыць або прадухіліць прыняццем разумных мер.",
              "8.7. У выпадках, не ахопленых пунктам 8.6 гэтага Дагавора, Бакі нясуць адказнасць за невыкананне або неналежнае выкананне сваіх абавязкаў у адпаведнасці з дзеючым заканадаўствам Рэспублікі Беларусь.",
              "9. КАНФІДЭНЦЫЯЛЬНАСЦЬ І АХОВА ПЕРСАНАЛЬНЫХ ДАДЗЕНЫХ",
              "9.1. Прадастаўленне інфармацыі Пакупніком.", 
              "9.1.1. Пры афармленні Замовы на Тавары праз вэб-сайт інтэрнэт-крамы або па тэлефоне Пакупнік прадастаўляе Прадаўцу інфармацыю, якая дазваляе ідэнтыфікаваць Пакупніка і добрасумленна і своечасова выконваць умовы гэтага Дагавора.", 
              "9.1.2. Прадастаўляючы персанальныя дадзеныя пры афармленні Замовы на Тавары, Пакупнік дае згоду на іх апрацоўку Прадаўцом.", 
              "9.2. Выкарыстанне інфармацыі, прадастаўленай Пакупніком, і атрыманае Прадаўцом.", 
              "9.2.1. Прадавец выкарыстоўвае інфармацыю:", 
              "- для выканання сваіх абавязкаў перад Пакупніком;", 
              "- для ацэнкі і аналізу працы вэб-сайта;", 
              "- для правядзення акцый.", 
              "9.2.2. Прадавец можа дасылаць Пакупніку рэкламныя і інфармацыйныя паведамленні. Калі Пакупнік не жадае атрымліваць такія паведамленні ад Прадаўца, ён павінен апавясціць Прадаўца праз форму 'Зваротная сувязь' на вэб-сайце інтэрнэт-крамы або адмовіцца ад рэкламных паведамленняў у асабістым кабінеце.", 
              "9.5. Раскрыццё інфармацыі, атрыманае Прадаўцом:", 
              "9.5.1. Прадавец абавязваецца не раскрываць інфармацыю, атрыманую ад Пакупніка. Не лічыцца парушэннем, калі Прадавец прадастаўляе інфармацыю агентам і трэцім асобам, якія дзейнічаюць па дагаворы з Прадаўцом для выканання абавязкаў перад Пакупніком або Атрымальнікам.", 
              "9.5.2. Раскрыццё інфармацыі ў адпаведнасці з разумнымі і ўжыванымі патрабаваннямі заканадаўства не лічыцца парушэннем абавязкаў.", 
              "9.6. Прадавец не нясе адказнасці за інфармацыю, прадастаўленую Пакупніком на вэб-сайце інтэрнэт-крамы ў агульнадаступнай форме.", 
              "10. ІНШАЯ УМОВЫ", 
              "10.1. Да адносін паміж Пакупніком і Прадаўцом прымяняецца заканадаўства Рэспублікі Беларусь.", 
              "10.2. У выпадку наяўнасці пытанняў або прэтэнзій з боку Пакупніка або Атрымальніка, яны павінны звязацца з Прадаўцом па тэлефоне або праз форму 'Зваротная сувязь' на вэб-сайце інтэрнэт-крамы.", 
              "10.3. Бакі будуць імкнуцца ўрэгуляваць усе спрэчкі шляхам перамоваў. Калі ўзаемавыгаднае пагадненне не будзе дасягнута, спрэчка будзе накіравана ў судовую інстанцыю ў адпаведнасці з дзеючым заканадаўствам Рэспублікі Беларусь.", 
              "10.4. Недзеянне якой-небудзь умовы гэтага Дагавора, прызнанае судом, не вядзе да недзеяння астатніх умоў.", 
              "11. РЭКВІЗІТЫ ПРАДАЎЦА", 
              "ТАА 'ТрыСС Про'", 
              "Рэспубліка Беларусь, 220088, г. Мінск, вул. Першамайская, 24, корп. 2, пак. 102Б.", 
              "тэл. +375(29) 27-10-100, +375(44) 756-11-31, тэл/факс +375(17) 325-10-11", 
              "e-mail: 3ss-pro@mail.ru", 
              "Разліковы рахунак BY43MTBK30120001093300117152 у ЗАТ 'МТБанк', г. Мінск, вул. Талстога, 10", 
              "BIC MTBKBY22, УНП 193656007, АКПО 506562895000"
            ]
          }
        },
      ]
    }
  },

  map: {

          mapZoom: 10,
          langMap: { "ru": "ru_RU", "en": "en_US", "by": "be_BY" },
          controlsToRemove: [
            'geolocationControl',
            'searchControl',
            'trafficControl',
            'typeSelector',
            'fullscreenControl',
            'zoomControl',
            'rulerControl'
          ],
  },

  contactForm: {
          ru: [
            'Оставьте свои контактные данные, мы свяжемся с вами в ближайшее время',
            'ФИО',
            'Ваш телефон',
            'Ваш Email',
            'Ваше сообщение',
            'Отправить',
          ],
          en: [
            'Leave your contact details, and we will get back to you shortly',
            'Full Name',
            'Your Phone',
            'Your Email',
            'Your Message',
            'Send',
          ],
          by: [
            'Пакіньце свае кантактныя дадзеныя, мы звяжамся з вамі ў бліжэйшы час',
            'Поўнае імя',
            'Ваш тэлефон',
            'Ваш Email',
            'Ваша паведамленне',
            'Адправіць',
          ],
  },
};