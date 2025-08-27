function createMap(form, currentLanguage, sectionId) {
    // Получаем массив навигационных данных из формы
    var navigationData = form.data.navigation;
    var mapCenter = null;
    var mapLang = "ru_RU"; // Язык карты по умолчанию

    // Проверяем, есть ли соответствие языка в данных и задаем его
    if (belhardSiteData.map.langMap[currentLanguage]) {
        mapLang = belhardSiteData.map.langMap[currentLanguage];
    }

    // Ищем нужную секцию в массиве навигации по ID
    var targetSection = null;
    for (var i = 0; i < navigationData.length; i++) {
        if (navigationData[i].id === sectionId) {
            targetSection = navigationData[i];
            break; // Прерываем цикл, если нашли нужную секцию
        }
    }

    // Если секция найдена, ищем данные о центре карты
    if (targetSection && targetSection.elements && targetSection.elements.map) {
        for (var j = 0; j < targetSection.elements.map.length; j++) {
            if (targetSection.elements.map[j][0] === "center") {
                mapCenter = targetSection.elements.map[j][1]; // Получаем координаты центра
                break; // Прерываем цикл
            }
        }
    }

    // Проверяем, корректны ли данные центра карты
    if (!mapCenter || Object.prototype.toString.call(mapCenter) !== "[object Array]" || mapCenter.length !== 2) {
        console.warn("Invalid map center data or section not found for ID:", sectionId);
        return function () {}; // Возвращаем пустую функцию в случае ошибки
    }

    // Создаем контейнер для карты
    var mapContainer = createElement('div', {
        id: 'map',
        style: { width: '100%', height: '400px' } // Размеры контейнера
    });

    // Функция инициализации карты
    function initMap() {
        if (typeof ymaps === 'undefined') {
            console.error('Yandex Maps API is not loaded');
            return; // Прерываем выполнение, если API не загружен
        }

        // Дожидаемся загрузки API Яндекс.Карт
        ymaps.ready(function () {
            // Создаем объект карты
            var map = new ymaps.Map(mapContainer, {
                center: mapCenter, // Устанавливаем центр карты
                zoom: 13, // Масштаб карты
                controls: ['zoomControl', 'fullscreenControl'] // Добавляем контролы
            });

            // Создаем кастомную метку
            var placemark = new ymaps.Placemark(
                mapCenter, // Координаты метки
                { iconContent: belhardSiteData.title[currentLanguage] }, // Текст рядом с меткой
                {
                    iconLayout: 'default#imageWithContent', // Используем картинку с текстом
                    iconImageHref: path + 'src/assets/pictures/map.png', // Путь к изображению
                    iconImageSize: [40, 44], // Размер изображения
                    iconImageOffset: [0, 0], // Смещение изображения
                    iconContentOffset: [10, 10], // Смещение текста
                    iconContentSize: [180, 20], // Размер блока текста
                    iconContentFontSize: "14px", // Размер шрифта
                    iconContentFontWeight: "bold", // Жирность шрифта
                    iconContentColor: "#000" // Цвет текста (черный)
                }
            );

            // Добавляем метку на карту
            map.geoObjects.add(placemark);
        });
    }

    // Загружаем API Яндекс.Карт с нужным языком и вызываем initMap
    loadYandexMaps(mapLang, initMap);

    return mapContainer; // Возвращаем контейнер с картой
}

var yandexMapsLoaded = false;
var currentMapLanguage = null;

function loadYandexMaps(lang, callback) {
    if (yandexMapsLoaded && currentMapLanguage === lang) {
        callback();
        return;
    }

    const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');
    if (existingScript) existingScript.remove();
    if (window.ymaps) delete window.ymaps;

    yandexMapsLoaded = false;
    currentMapLanguage = lang;

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=299e1b02-6588-4ee1-8c59-2d73e896476f&lang=${lang}`;
    script.onload = () => { yandexMapsLoaded = true; callback(); };
    script.onerror = () => alert('Ошибка загрузки API Яндекс.Карт');
    document.head.appendChild(script);
}