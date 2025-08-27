const globalStyles = `
:root {
    --hiddenMenuColor: #2C4A6E; /* Цвет скрытого меню */
    --counter: rgb(250, 252, 255); /* Цвет для счетчиков */
    /* Основные цвета страницы */
    --primary-color: #232F3E; /* Основной цвет для меню навигации */
    --hover-color: #5A789A; /* Цвет фона пункта меню при наведении */
    --child-color: #2C4A6E; /* Цвет фона для вложенных элементов первого уровня */
    --grandChild-color: #3E5C7F; /* Цвет фона для вложенных элементов второго уровня */
    --text-color: rgb(250, 252, 255); /* Основной цвет текста */
    --footer-color: #232f3e;
}

* {
    margin: 0; /* Убираем внешние отступы у всех элементов */
    padding: 0; /* Убираем внутренние отступы */
    box-sizing: border-box; /* Границы и отступы не увеличивают размеры элементов */
}

a{
    cursor: pointer;                /* Устанавливает курсор указателя при наведении */
}

.dot {
    display: inline-block; /* Точка отображается как встроенный блочный элемент */
    width: 5px; /* Ширина точки */
    height: 5px; /* Высота точки */
    margin: 0 5px; /* Отступы слева и справа */
    border-radius: 50%; /* Делает точку круглой */
    cursor: pointer; /* Курсор в виде указателя при наведении */
    background-color: #b7bcc3; /* Цвет неактивной точки */
    transition: background-color 0.3s ease; /* Плавное изменение цвета точки */
}

/* Активная точка */
.dot.active-dot {
    background-color: #0C4DA2; /* Цвет активной точки */
}

/* Класс для фиксированного футера */
.footer-fixed {
    width: 100%; /* Ширина футера */
    background-color: var(--footer-color); /* Цвет фона футера */
    padding: 10px 0; /* Отступы внутри футера */
    position: fixed; /* Фиксированное позиционирование */
    left: 0; /* Слева прижато */
    bottom: 0; /* Снизу прижато */
}

/* Класс для обычного футера */
.footer-relative {
    width: 100%; /* Ширина футера */
    background-color: var(--footer-color); /* Цвет фона футера */
    padding: 10px 0; /* Отступы внутри футера */
    position: relative; /* Относительное позиционирование */
    margin-top: auto; /* Для того чтобы футер располагался внизу */
    left: 0; /* Слева прижато */
    bottom: 0; /* Снизу прижато */
}

body {
    background-image: url("src/assets/pictures/back.jpg"); /* Путь к изображению */
    background-repeat: no-repeat; /* Фон не повторяется */
    background-size: cover; /* Фон покрывает весь экран */
    background-position: center; /* Фон по центру */
    background-attachment: fixed; /* Фиксирует фон при прокрутке */
    background-color: rgb(248, 248, 248); /* Цвет фона страницы как запасной вариант */
    padding-top: 50px; /* Отступ сверху для других элементов, чтобы они не перекрывались навбаром */
    overflow-y: auto; /* Вертикальная прокрутка при необходимости */
    min-height: 100vh; /* Минимальная высота на весь экран */
    position: relative; /* Относительное позиционирование для правильной слойности */
}

/* Затемненный фон для оверлея */
#overlay {
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
}

/* Основные стили для меню навигации */
nav {
    font-size: 13pt; /* Размер шрифта */
}

/* Стили для ссылок в меню */
nav a {
    padding: 1em 2em; /* Внутренние отступы */
    transition: background-color 150ms ease; /* Плавное изменение цвета при наведении */
}

/* Стрелка вниз для пунктов меню с вложенными элементами */
nav li.has-children > a::after {
    border-left: 4px solid transparent; /* Делаем треугольник (стрелку) вниз */
    border-right: 4px solid transparent; /* Левая и правая стороны треугольника прозрачные */
    border-top: 6px solid var(--text-color); /* Цвет стрелки */
    margin-left: 8px; /* Отступ от текста */
    transition: transform 0.3s ease-in-out; /* Плавный поворот стрелки */
    transform: translateY(2px); /* Смещение вниз */
}

/* Стили для подменю */
nav li ul {
    border: 1px solid var(--hover-color); /* Граница подменю */
    transition: transform 0.3s ease, opacity 0.3s ease, max-height 0.3s ease; /* Плавное появление */
    transform: scaleY(0); /* Скрываем подменю, уменьшая его по оси Y */
    transform-origin: top; /* Устанавливаем точку трансформации в верхнюю часть */
}

/* Стрелка вправо для вложенных подменю */
nav li ul li.has-children > a::after {
    border-top: 4px solid transparent; /* Верхняя часть треугольника прозрачная */
    border-bottom: 4px solid transparent; /* Нижняя часть треугольника прозрачная */
    border-left: 6px solid var(--text-color); /* Треугольник-стрелка вправо */
    margin-left: 8px; /* Отступ от текста */
    transform: translateY(2px); /* Смещение вниз */
}

.language-selector-container {
    user-select: none;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 13px;
    right: 10px;
    z-index: 11;
    color: white;
    background-color: transparent; 
    transition: right 0.3s ease-in-out;
}

.language-selector-container.language-selector-shifted {
    right: 85px;
}

.language-selector-container.language-selector-mobile {
    top: 18px;
    right: 65px;
    z-index: 8;
    color: black;
    background-color: white; 
}

.language-selector-box {
    border: 1px solid #ccc;
    padding: 2px 4px;
    width: 50px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    
}

.language-selector-flag {
    width: 20px;
    height: auto;
}

.language-selector-arrow {
    font-size: 9px;
    line-height: 1;
    transition: transform 0.3s ease; /* Added arrow rotation transition */
}

.language-selector-arrow.open {
    transform: rotate(180deg) translateY(1px); /* Rotate arrow when open */
}

.language-selector-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
    border: 1px solid #ccc;
    background: white;
    width: 50px;
    z-index: 10;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.language-selector-dropdown.open {
    display: block;
    max-height: 200px;
    opacity: 1;
}

.language-selector-item {
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
}

.language-selector-item-img {
    width: 20px;
    height: auto;
}

.profile-icon {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 10px;
    right: 67px;  
    z-index: 11;
    transition: right 0.3s ease-in-out; /* Добавляет плавный переход для смещения вправо */
}

.profile-icon.search-shifted {
    right: 142px;                    /* Сдвигает контейнер поиска вправо на 80 пикселей */
}

.profile-icon.search-mobile {
    top: 15px;                      /* Располагает контейнер на 13 пикселей от верха в мобильной версии */
    right: 122px;                    /* Располагает контейнер на 60 пикселей от правого края */
    z-index: 8;                     /* Устанавливает уровень слоя ниже десктопной версии */
}

/* Десктопная версия (ширина экрана больше 1500px) */
@media screen and (min-width: 1201px) {
    nav li:hover > ul {
        max-height: 5000px; /* Показываем подменю, устанавливая большую высоту */
    }
}

/* Мобильная версия (ширина экрана меньше или равна 1500px) */
@media screen and (max-width: 1200px) {
    nav {
        font-size: 16pt; /* Увеличенный размер шрифта для мобильной версии */
        width: min(15em, 100%); /* Ограничиваем максимальную ширину меню */
    }

    nav.show {
        transition: right 400ms ease-out; /* Плавное появление меню */
    }

    nav li ul {
        transition: transform 0.25s ease, max-height 0.25s ease, opacity 0.25s ease; /* Плавная анимация появления подменю */
    }
}
`;

window.defaultStyles = {
    visibilityOfElement: {
        visibleElement: [
            ['visibility', ''],         // Устанавливает видимость элемента (пустое значение означает "visible" по умолчанию)
            ['pointerEvents', 'auto'],  // Разрешает взаимодействие с элементом через указатель мыши
        ],
        invisibleElement: [
            ['visibility', 'hidden'],   // Скрывает элемент, делая его невидимым
            ['pointerEvents', 'none'],  // Отключает взаимодействие с элементом через указатель мыши
        ],
    },

    countriesModal: {
        modalStyle: [
            ['position', 'fixed'],          // Фиксирует модальное окно на экране
            ['top', '0'],                   // Прижимает верхнюю часть окна к верху экрана
            ['left', '0'],                  // Прижимает левую часть окна к левому краю экрана
            ['right', '0'],                 // Прижимает правую часть окна к правому краю экрана
            ['bottom', '0'],                // Прижимает нижнюю часть окна к низу экрана
            ['background', 'rgba(0, 0, 0, 0.7)'], // Устанавливает полупрозрачный черный фон
            ['display', 'flex'],            // Использует flexbox для размещения содержимого
            ['justify-content', 'center'],  // Центрирует содержимое по горизонтали
            ['align-items', 'center'],      // Центрирует содержимое по вертикали
            ['z-index', '1000'],            // Устанавливает высокий уровень слоя для отображения поверх других элементов
            ['overflow', 'hidden'],         // Скрывает любой контент, выходящий за границы окна
        ],
        modalContentStyle: [
            ['position', 'relative'],       // Устанавливает относительное позиционирование для содержимого
            ['display', 'inline-block'],    // Делает содержимое встроенно-блочным элементом
            ['background', 'white'],        // Устанавливает белый фон для содержимого
            ['padding', '20px'],            // Добавляет внутренний отступ 20 пикселей со всех сторон
            ['max-width', '90%'],           // Ограничивает максимальную ширину до 90% от родителя
            ['max-height', '90%'],          // Ограничивает максимальную высоту до 90% от родителя
            ['overflow', 'hidden'],         // Скрывает контент, выходящий за границы блока
            ['border-radius', '10px'],      // Закругляет углы содержимого на 10 пикселей
        ],
        imageStyle: [
            ['width', '100%'],              // Устанавливает ширину изображения на 100% от контейнера
            ['height', 'auto'],             // Автоматически подстраивает высоту изображения
            ['display', 'block'],           // Отображает изображение как блочный элемент
            ['transition', 'transform 0.2s ease-in-out'], // Добавляет плавное масштабирование за 0.2 секунды
            ['cursor', 'zoom-in'],          // Устанавливает курсор увеличения при наведении
        ],
        closeButtonStyle: [
            ['position', 'absolute'],       // Абсолютное позиционирование кнопки закрытия
            ['top', '10px'],                // Отступ 10 пикселей от верха контейнера
            ['right', '10px'],              // Отступ 10 пикселей от правого края контейнера
            ['background', 'red'],          // Устанавливает красный фон кнопки
            ['color', 'white'],             // Устанавливает белый цвет текста кнопки
            ['border', 'none'],             // Убирает границу кнопки
            ['padding', '5px 10px'],        // Устанавливает внутренние отступы: 5px сверху/снизу, 10px слева/справа
            ['font-size', '16px'],          // Устанавливает размер шрифта 16 пикселей
            ['cursor', 'pointer'],          // Устанавливает курсор указателя при наведении
            ['border-radius', '5px'],       // Закругляет углы кнопки на 5 пикселей
        ]
    },

    formElements: {
        // Стили для текста (text)
        text: [
            ["color", "gray"], // Синий цвет текста
            ["font-size", "20px"], // Размер шрифта — 24 пикселя
            ["font-weight", "normal"] // Обычный вес шрифта
        ],
        // Стили для другого текста (text1)
        text1: [
            ["color", "blue"], // Синий цвет текста
            ["font-size", "30px"], // Размер шрифта — 30 пикселей
            ["font-weight", "800"] // Жирный шрифт (вес 800)
        ],
        // Стили для ссылки (link)
        link: [
            ["color", "blue"], // Синий цвет ссылки
            ["text-decoration", "none"], // Без подчеркивания
            ["font-size", "16px"] // Размер шрифта — 16 пикселей
        ],
        // Стили для изображения (image)
        image: [
            ["width", "100%"], // Ширина изображения — 100% от родительского элемента
            ["border-radius", "8px"] // Скругленные углы изображения с радиусом 8 пикселей
        ],
        // Стили для списка (list)
        list: [
            ["list-style-type", "disc"], // Использование круглыми маркерами (диски) для элементов списка
            ["padding-left", "20px"] // Отступ слева для списка — 20 пикселей
        ]
    },

    buttonStyles: {
        // Стили для кнопки
        button: [
            ["position", "fixed"], // Фиксированное позиционирование кнопки
            ["bottom", "20px"], // Расположение кнопки на 20 пикселей выше от нижнего края
            ["right", "20px"], // Расположение кнопки на 20 пикселей от правого края
            ["z-index", "9"], // Устанавливаем высокий z-index, чтобы кнопка была поверх других элементов
            ["background-color", "#4A4A4A"], // Черный цвет фона кнопки
            ["border", "none"], // Без рамки для кнопки
            ["padding", "10px"], // Отступы внутри кнопки — 10 пикселей
            ["width", "50px"],  // Ширина кнопки
            ["height", "50px"], // Высота кнопки
            ["border-radius", "10px"],  // Скругленные углы для кнопки
            ["display", "none"],  // Кнопка скрыта по умолчанию
            ["cursor", "pointer"], // Указатель мыши при наведении
            ["text-align", "center"], // Выравнивание текста по центру кнопки
            ["font-size", "30px"]  // Размер шрифта (стрелки) на кнопке
        ],
        // Стили для стрелки на кнопке
        arrow: [
            ['width', '24px'],  // Ширина изображения стрелки
            ['height', '24px'], // Высота изображения стрелки
        ],
        // Стили для скрытия кнопки, когда нет прокрутки
        noScroll: [
            ['display', 'none'] // Кнопка скрыта, если нет прокрутки
        ],
        // Стили для отображения кнопки, когда есть прокрутка
        withScroll: [
            ['display', 'block'] // Кнопка отображается, если есть прокрутка
        ],
    },

    footerStyles: {
        leftColumn: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["textAlign", "left"],
            ["gap", "5px"],
            ["width", "35%"],        // Ширина левой колонки 35%
            ["marginBottom", "10px"]
        ],
        rightColumn: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["textAlign", "left"],
            ["gap", "5px"],
            ["width", "65%"],        // Ширина правой колонки 65%
            ["marginBottom", "10px"]
        ],
        copyright: [
            ["textAlign", "center"],
            ["paddingTop", "10px"],
            ["borderTop", "1px solid #848484"]
        ],
        textMobile: [
            ["fontSize", "14px"]
        ],
        container: [
            ["display", "flex"],
            ["flexDirection", "row"],
            ["justifyContent", "flex-end"],
            ["padding", "0 20px"]
        ],
        columnText: [
            ["color", "#848484"],
            ["fontSize", "16px"],
            ["transition", "color 0.3s ease"] // Плавное изменение цвета
        ],
        copyrightText: [
            ["color", "#848484"],
            ["fontSize", "16px"]
        ],
        footerImage: [
            ["width", "50%"],
            ["height", "auto"],
            ["display", "block"],
            ["margin", "0 auto"]
        ],
        footerImageMobile: [
            ["width", "90%"],
            ["height", "auto"],
            ["display", "block"],
            ["margin", "0 auto"]
        ],
        containerMobile: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["justifyContent", "flex-end"],
            ["padding", "0 20px"]
        ],
        leftColumnMobile: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["textAlign", "left"],
            ["gap", "10px"],
            ["width", "100%"]         // Полная ширина на мобильных
        ],
        rightColumnMobile: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["textAlign", "left"],
            ["gap", "10px"],
            ["width", "100%"]         // Полная ширина на мобильных
        ],
    },

    sliderStyles: {
        extraContainer: [
          ["position", "relative"],
          ["width", "100%"],
          ["height", "auto"],
          ["margin", "0"],
          ["padding", "0"],
          ["marginTop", "2px"],
        ],
        sliderContainer: [
          ["overflow", "hidden"],
          ["position", "relative"],
          ["width", "100%"],
        ],
        sliderWrapper: [
          ["display", "flex"],
          ["transition", "transform 0.5s ease"],
          ["userSelect", "none"],
          ["flexWrap", "nowrap"],
        ],
        arrowWrapper: [
          ["position", "absolute"],
          ["top", "50%"],
          ["width", "100%"],
          ["left", "0"],
          ["right", "0"],
          ["transform", "translateY(-50%)"],
          ["padding", "0 5px"], // 5px от краёв
          ["boxSizing", "border-box"],
          ["zIndex", "2"],
        ],
        innerArrowContainer: [
          ["display", "flex"],
          ["justifyContent", "space-between"],
          ["width", "100%"],
          ["pointerEvents", "none"],
        ],
        arrow: [
          ["width", "40px"], // Увеличено с 30px до 40px
          ["height", "40px"], // Увеличено с 30px до 40px
          ["position", "relative"],
          ["cursor", "pointer"],
          ["userSelect", "none"],
          ["pointerEvents", "auto"],
        ],
        arrowImage: [
          ["width", "100%"],
          ["height", "100%"],
          ["objectFit", "contain"],
          ["maxWidth", "40px"], // Увеличено с 30px до 40px
          ["maxHeight", "40px"], // Увеличено с 30px до 40px
        ],
        dotsContainer: [
          ["textAlign", "center"],
          ["position", "relative"],
          ["width", "100%"],
          ["marginTop", "0"],
          ["marginBottom", "50px"],
          ["padding", "5px 0"],
          ["backgroundColor", "rgba(0, 0, 0, 0.1)"],
          ["zIndex", "2"],
        ],
        dot: [
          ["display", "inline-block"],
          ["width", "10px"],
          ["height", "10px"],
          ["backgroundColor", "#bbb"],
          ["borderRadius", "50%"],
          ["margin", "0 5px"],
          ["cursor", "pointer"],
          ["transition", "background-color 0.3s ease"],
        ],
        activeDot: [["backgroundColor", "#fff"]],
        slide: [
          ["flex", "0 0 auto"],
          ["width", "100vw"],
          ["minWidth", "100vw"],
          ["boxSizing", "border-box"],
          ["position", "relative"],
          ["display", "flex"],
          ["justifyContent", "center"],
        ],
        slideEven: [
          ["marginLeft", "0px"],
          ["marginRight", "0px"],
          ["transform", "none"],
        ],
        image: [
          ["width", "100%"],
          ["height", "auto"],
          ["objectFit", "cover"],
          ["display", "block"],
          ["userSelect", "none"],
        ],
        mobile: {
          extraContainer: [
            ["width", "100%"],
            ["height", "auto"],
            ["overflow", "hidden"],
            ["marginTop", "20px"],
          ],
          arrowWrapper: [
            ["position", "absolute"],
            ["top", "50%"],
            ["width", "100%"],
            ["padding", "0 5px"], // 5px от краёв на мобильных
            ["transform", "translateY(-50%)"],
            ["zIndex", "2"],
          ],
          slide: [
            ["flex", "0 0 auto"],
            ["width", "100vw"],
            ["minWidth", "100vw"],
            ["display", "flex"],
            ["justifyContent", "center"],
          ],
          image: [
            ["width", "100%"],
            ["height", "auto"],
            ["objectFit", "cover"],
            ["display", "block"],
          ],
          dotsContainer: [
            ["width", "100%"],
            ["marginTop", "0"],
            ["padding", "5px 0"],
          ]
        }
    },

    pageStyles: {
        contentContainer: [ // Основной контейнер для контента
            ["display", "flex"], // Используется flexbox для выравнивания
            ["flexDirection", "column"], // Элементы внутри будут располагаться по вертикали
            ["alignItems", "center"], // Выравнивание элементов по центру
            ["margin", "0 auto"], // Центрируем контейнер на странице
            ["fontFamily", "'Helvetica Neue', sans-serif"], // Шрифт для текста
            ["position", "relative"], // Для дальнейшей настройки позиционирования
            ["minHeight", "100vh"], // Минимальная высота — на всю высоту экрана
            ["width", "100%"], // Ширина контейнера на всю доступную ширину
            ["maxWidth", "100%"], // Максимальная ширина тоже 100%
        ],
        backgroundImage: [ // Стиль для фона с изображением
            ["position", "absolute"], // Фиксируем фон относительно родительского элемента
            ["top", "0"], // Начинаем с верхней части
            ["left", "0"], // И с левой стороны
            ["width", "100%"], // Фон на всю ширину
            ["height", "200px"], // Высота фона 200px
            ["backgroundImage", "url('src/assets/pictures/back.jpg')"], // Путь к изображению
            ["backgroundSize", "cover"], // Фон покрывает весь контейнер
            ["backgroundPosition", "center"], // Центрируем изображение по фону
            ["backgroundRepeat", "no-repeat"], // Не повторяем фон
            ["zIndex", "-1"], // Фон будет на заднем плане
        ],
        mainTitleContainer: [ // Контейнер для основного заголовка
            ["position", "relative"], // Позиционирование относительно родителя
            ["width", "100%"], // Ширина 100%
            ["margin", "0"], // Убираем отступы
            ["padding", "0"], // Убираем отступы
            ["height", "200px"], // Высота 200px
        ],
        mainTitle: [ // Стиль для основного заголовка
            ["fontSize", "50px"], // Размер шрифта
            ["fontWeight", "10"], // Степень жирности текста
            ["textAlign", "left"], // Выравнивание текста по левому краю
            ["color", "#0000ff"], // Цвет текста — синий
            ["padding", "20px"], // Отступы вокруг текста
            ["margin", "0"], // Убираем отступы
            ["boxSizing", "border-box"], // Учитываем отступы и границы в расчете ширины/высоты
            ["position", "absolute"], // Абсолютное позиционирование
            ["top", "50%"], // Центрируем по вертикали
            ["left", "70px"], // Отступ от левого края
            ["transform", "translateY(-50%)"], // Центрируем вертикально с учетом трансформации
            ["zIndex", "1"], // Позиционируем текст на переднем плане
        ],
        servicesDiv: [ // Контейнер для блоков услуг
            ["flex", "0 0 30%"], // Фиксированная ширина 30% от родителя
            ["lineHeight", "1.7"], // Межстрочный интервал
            ["padding", "20px 40px"], // Отступы внутри блока
            ["backgroundColor", "#ffffff"], // Белый фон
            ["borderRadius", "10px"], // Скругленные углы
            ["boxShadow", "0 2px 6px rgba(0, 0, 0, 0.1)"], // Тень для блока
        ],
        servicesList: [ // Стиль для списка услуг
            ["listStyleType", "none"], // Убираем стандартные маркеры списка
            ["padding", "0 10px"], // Отступы слева и справа
            ["margin", "0"], // Убираем маргинальные отступы
            ["lineHeight", "1.8"], // Межстрочный интервал
            ["fontSize", "16px"], // Размер шрифта
        ],
        link: [ // Стиль для ссылок
            ["textDecoration", "none"], // Убираем подчеркивание
            ["color", "#007BFF"], // Цвет ссылки — синий
            ["transition", "color 0.3s"], // Плавный переход цвета
            ["listStyleType", "none"], // Убираем маркеры в списке
            ["padding", "0"], // Убираем отступы
            ["margin", "0"], // Убираем маргинальные отступы
        ],
        testingDiv: [ // Контейнер для тестирования
            ["flex", "1"], // Занимает оставшееся пространство
            ["padding", "20px"], // Отступы внутри
            ["margin", "0px 10px"], // Отступы снаружи
            ["backgroundColor", "#ffffff"], // Белый фон
            ["borderRadius", "10px"], // Скругленные углы
            ["boxShadow", "0 2px 6px rgba(0, 0, 0, 0.1)"], // Тень
        ],
        solutionsDiv: [ // Контейнер для решения
            ["flex", "1"], // Занимает оставшееся пространство
            ["padding", "20px"], // Отступы внутри
            ["margin", "10px"], // Отступы снаружи
            ["backgroundColor", "#ffffff"], // Белый фон
            ["borderRadius", "10px"], // Скругленные углы
            ["boxShadow", "0 2px 6px rgba(0, 0, 0, 0.1)"], // Тень
        ],
        leftColumn: [ // Стили для левой колонки
            ["flex", "0 0 30%"], // Ширина 30% от родителя
            ["paddingRight", "20px"], // Отступ справа
            ["marginTop", "20px"], // Отступ сверху
            ["margin-left", "70px"], // Отступ слева
            ["display", "block"], // Блочный элемент
        ],
        rightColumn: [ // Стили для правой колонки
            ["flex", "1"], // Занимает оставшееся пространство
            ["paddingLeft", "20px"], // Отступ слева
            ["marginTop", "20px"], // Отступ сверху
        ],
        twoColumns: [ // Стили для контейнера с двумя колонками
            ["display", "flex"], // Используем flexbox
            ["gap", "20px"], // Отступы между колонками
        ],
        newsDiv: [ // Контейнер для новостей
            ["padding", "20px"], // Отступы внутри
            ["margin", "20px 0px"], // Отступы сверху и снизу
            ["backgroundColor", "#e8f4fc"], // Голубой фон
            ["borderRadius", "10px"], // Скругленные углы
            ["boxShadow", "0 2px 6px rgba(0, 0, 0, 0.1)"], // Тень
        ],
        newsBlock: [ // Блок новостей
            ["marginBottom", "20px"], // Отступ снизу
            ["padding", "10px"], // Отступы внутри
            ["borderBottom", "1px solid #ccc"], // Нижняя граница
        ],
        newsText: [ // Стиль для текста новостей
            ["fontSize", "14px"], // Размер шрифта
            ["fontWeight", "bold"], // Жирный шрифт
            ["marginBottom", "5px"], // Отступ снизу
        ],
        newsDate: [ // Стиль для даты новости
            ["fontSize", "12px"], // Размер шрифта
            ["color", "#777"], // Цвет текста — серый
            ["display", "block"], // Отображение блока
            ["marginBottom", "10px"], // Отступ снизу
        ],
        newsTags: [ // Контейнер для тегов новостей
            ["display", "flex"], // Используем flexbox
            ["gap", "5px"], // Отступы между тегами
            ["flexWrap", "wrap"], // Перенос тегов на новую строку
        ],
        newsTag: [ // Стиль для каждого тега
            ["backgroundColor", "#007BFF"], // Синий фон
            ["color", "#fff"], // Белый текст
            ["padding", "2px 5px"], // Отступы вокруг текста
            ["borderRadius", "3px"], // Скругленные углы
            ["fontSize", "12px"], // Размер шрифта
        ],
        subListContainer: [ // Контейнер для подсписков
            ["listStyleType", "circle"], // Круглый маркер
            ["marginLeft", "20px"], // Отступ слева
        ],
        testingList: [ // Стили для списка в разделе тестирования
            ["listStyleType", "disc"], // Дискобразный маркер
            ["marginLeft", "20px"], // Отступ слева
        ],
        leftColumnMobile: [ // Стили для левой колонки на мобильных устройствах
            ["display", "none"], // Скрываем колонку на мобильных устройствах
        ],
        mainTitleMobile: [ // Стили для заголовка на мобильных устройствах
            ["fontSize", "24px"], // Меньший размер шрифта
            ["textAlign", "center"], // Центрируем заголовок
            ["left", "0"], // Убираем отступы слева
        ],
    },

    contactFormStyles: {
        contactWrapper: [ // Styles for .login-wrapper
            ["backgroundSize", "cover"],
            ["minHeight", "60vh"],
            ["display", "flex"],
            ["justifyContent", "center"],
            ["alignItems", "center"],
            ["padding", "20px"],
            ["position", "relative"],
            ["backgroundAttachment", "fixed"],
            ["overflow", "hidden"],
            ["backgroundPosition", "right"],
            ["userSelect", "none"],
        ],
        contactWrapperParallax: [ // Styles for .login-wrapper.parallax-background
            ["willChange", "background-position"],
        ],
        contactForm: [ // Styles for .login-form
            ["background", "rgba(255, 255, 255, 0.2)"],
            ["backdropFilter", "blur(10px) saturate(180%)"],
            ["webkitBackdropFilter", "blur(10px) saturate(180%)"],
            ["padding", "30px"],
            ["borderRadius", "8px"],
            ["boxShadow", "0 0 20px rgba(0, 0, 0, 0.2)"],
            ["width", "100%"],
            ["maxWidth", "400px"],
            ["border", "1px solid rgba(255, 255, 255, 0.3)"],
            ["minHeight", "200px"],
            ["maxHeight", "none"],
            ["overflow", "auto"],
        ],
        contactFormH2: [ // Styles for .login-form h2
            ["textAlign", "center"],
            ["color", "#fff"],
            ["marginBottom", "20px"],
            ["fontSize", "18px"],
            ["fontFamily", "Arial, sans-serif"],
            ["wordWrap", "break-word"],
            ["overflowWrap", "break-word"],
            ["whiteSpace", "normal"],
        ],
        formGroup: [ // Styles for .form-group
            ["marginBottom", "15px"],
            ["minHeight", "50px"],
            ["maxHeight", "none"],
            ["overflow", "visible"],
        ],
        formGroupLabel: [ // Styles for .form-group label
            ["display", "block"],
            ["marginBottom", "5px"],
            ["color", "#fff"],
            ["fontSize", "14px"],
            ["fontFamily", "Arial, sans-serif"],
            ["wordWrap", "break-word"],
            ["overflowWrap", "break-word"],
            ["whiteSpace", "normal"],
        ],
        formGroupInput: [ // Styles for .form-group input
            ["width", "100%"],
            ["padding", "10px"],
            ["border", "1px solid rgba(255, 255, 255, 0.5)"],
            ["borderRadius", "4px"],
            ["boxSizing", "border-box"],
            ["fontSize", "14px"],
            ["fontFamily", "Arial, sans-serif"],
            ["background", "rgba(255, 255, 255, 0.1)"],
            ["color", "white"],
            ["maxWidth", "none"],
            ["minHeight", "40px"],
            ["maxHeight", "none"],
            ["overflow", "visible"],
            ["wordWrap", "break-word"],
            ["overflowWrap", "break-word"],
            ["whiteSpace", "normal"],
            ["resize", "horizontal"],
        ],
        submitBtn: [ // Styles for .submit-btn
            ["width", "100%"],
            ["padding", "12px"],
            ["backgroundColor", "#007bff"],
            ["color", "white"],
            ["border", "none"],
            ["borderRadius", "4px"],
            ["cursor", "pointer"],
            ["fontSize", "16px"],
            ["fontFamily", "Arial, sans-serif"],
            ["marginTop", "10px"],
            ["minWidth", "280px"],
            ["maxWidth", "none"],
            ["overflow", "visible"],
            ["wordWrap", "break-word"],
            ["overflowWrap", "break-word"],
            ["whiteSpace", "normal"],
            ["transition", "background-color 0.5s ease"],
        ],
        submitBtnHover: [ // Hover styles for .submit-btn
            ["backgroundColor", "#0056b3"],
        ],
        // Mobile-specific styles
        contactFormMobile: [ // Mobile styles for .login-form
            ["margin", "20px"],
            ["padding", "20px"],
            ["minWidth", "250px"],
        ],
        formGroupMobile: [ // Mobile styles for .form-group
            ["minWidth", "240px"],
        ],
        formGroupInputMobile: [ // Mobile styles for .form-group input
            ["minWidth", "240px"],
        ],
        submitBtnMobile: [ // Mobile styles for .submit-btn
            ["minWidth", "240px"],
        ],
        // Smaller mobile styles
        loginFormSmallMobile: [ // Smaller mobile styles for .login-form
            ["margin", "10px"],
            ["padding", "15px"],
            ["minWidth", "200px"],
        ],
        formGroupSmallMobile: [ // Smaller mobile styles for .form-group
            ["minWidth", "190px"],
        ],
        formGroupInputSmallMobile: [ // Smaller mobile styles for .form-group input
            ["minWidth", "190px"],
        ],
        submitBtnSmallMobile: [ // Smaller mobile styles for .submit-btn
            ["minWidth", "190px"],
        ],
    },

    imageBlockStyles: {
        blockStyles: [
            ["position", "relative"],
            ["width", "400px"],
            ["height", "400px"],
            ["display", "block"],
            ["overflow", "hidden"],
            ["transition", "border 0.3s ease"],
            ["border", "1px solid white"]
        ],
        imageStyles: [
            ["width", "100%"],
            ["height", "100%"],
            ["objectFit", "cover"],
            ["display", "block"],
            ["transition", "filter 0.3s ease, opacity 0.8s ease-out"],
            ["filter", "brightness(100%)"]
        ],
        textStyles: [
            ["position", "absolute"],
            ["top", "50%"],
            ["left", "50%"],
            ["transform", "translate(-50%, -50%)"],
            ["color", "white"],
            ["fontSize", "30px"],
            ["opacity", "0"],
            ["transition", "opacity 0.3s ease, transform 0.8s ease-out"],
            ["textAlign", "center"],
            ["pointerEvents", "none"],
            ["zIndex", "5"],
            ["width", "auto"],
            ["maxWidth", "90%"]
        ],
        containerStyles: [
            ["display", "grid"],
            ["gridTemplateColumns", "repeat(3, 400px)"], // Updated to 3 blocks per row
            ["justifyContent", "center"],
            ["gap", "40px"],
            ["width", "100%"],
            ["maxWidth", "1280px"],
            ["marginLeft", "auto"],
            ["marginRight", "auto"],
            ["marginTop", "20px"],
            ["marginBottom", "20px"],
            ["padding", "20px 0"]
        ],
        mobileStyles: {
            tablet: [
                ["display", "grid"],
                ["gridTemplateColumns", "repeat(2, 400px)"],
                ["gap", "40px"],
                ["padding", "20px 0"],
                ["margin", "0 auto"],
                ["width", "fit-content"]
            ],
            phoneContainer: [
                ["display", "grid"],
                ["gridTemplateColumns", "1fr"],
                ["gap", "20px"],
                ["padding", "10px 0"],
                ["margin", "0"],
                ["width", "100%"]
            ],
            phoneBlock: [
                ["width", "90%"],
                ["height", "auto"],
                ["margin", "0 auto"],
                ["maxWidth", "400px"],
                ["position", "relative"],
                ["overflow", "hidden"],
                ["display", "block"]
            ],
            phoneTextStyles: [
                ["opacity", "1"],
                ["pointerEvents", "auto"],
                ["fontSize", "16px"],
                ["width", "100%"],
                ["maxWidth", "90%"],
                ["whiteSpace", "normal"],
                ["overflowWrap", "break-word"]
            ],
            phoneImageStyles: [
                ["filter", "brightness(50%)"]
            ]
        },
        ulStyles: [
            ["listStyle", "none"],
            ["padding", "10px 20px"],
            ["margin", "0"],
            ["position", "relative"],
            ["zIndex", "10"],
            ["background", "transparent"],
            ["textAlign", "left"]
        ],
        linkStyles: [
            ["color", "white"],
            ["display", "block"],
            ["padding", "5px 0"],
            ["fontSize", "18px"],
            ["textDecoration", "none"],
            ["cursor", "pointer"],
            ["zIndex", "11"],
            ["position", "relative"],
            ["background", "transparent"]
        ],
        linkHoverStyles: [
            ["textDecoration", "underline"],
            ["color", "#00BFFF"]
        ],
        linkDefaultStyles: [
            ["textDecoration", "none"],
            ["color", "white"]
        ],
        blockHoverStyles: [
            ["border", "3px solid #00BFFF"]
        ],
        blockDefaultStyles: [
            ["border", "1px solid white"]
        ],
        imageHoverStyles: [
            ["filter", "brightness(50%)"]
        ],
        imageDefaultStyles: [
            ["filter", "brightness(100%)"]
        ],
        textVisibleStyles: [
            ["opacity", "1"],
            ["pointerEvents", "auto"]
        ],
        textHiddenStyles: [
            ["opacity", "0"],
            ["pointerEvents", "none"]
        ],
        dynamicContainerStyles: [
            ["display", "grid"],
            ["gridTemplateColumns", "repeat(3, 400px)"], // Updated to 3 blocks per row
            ["justifyContent", "center"],
            ["gap", "40px"],
            ["width", "100%"],
            ["maxWidth", "1280px"],
            ["marginLeft", "auto"],
            ["marginRight", "auto"],
            ["marginTop", "20px"],
            ["marginBottom", "20px"],
            ["padding", "20px 0"]
        ],
        dynamicBlockStyles: [
            ["position", "relative"],
            ["width", "100%"],
            ["height", "400px"],
            ["overflow", "hidden"],
            ["transition", "border 0.3s ease, opacity 0.8s ease-out, transform 0.8s ease-out"],
            ["maxWidth", "400px"],
            ["border", "1px solid white"]
        ],
        singleColumnStyles: [
            ["width", "90%"],
            ["maxWidth", "400px"],
            ["margin", "0 auto"],
            ["height", "auto"]
        ],
        desktopLinkStyles: [
            ["whiteSpace", "nowrap"]
        ]
    },

    catalogStyles: {
        contentContainer: [
          ["maxWidth", "1200px"],
          ["margin", "0 auto"],
          ["padding", "20px"],
          ["minHeight", "calc(100vh - 200px)"],
          ["display", "flex"],
          ["flexWrap", "wrap"],
          ["gap", "20px"],
          ["justifyContent", "center"],
        ],
        catalogTitle: [
          ["fontSize", "32px"],
          ["fontWeight", "bold"],
          ["color", "#ffffff"],
          ["marginBottom", "20px"],
          ["textAlign", "center"],
          ["width", "100%"],
        ],
        catalogBlock: [
          ["width", "300px"],
          ["height", "350px"],
          ["position", "relative"],
          ["borderRadius", "10px"],
          ["boxShadow", "0 2px 5px rgba(0,0,0,0.1)"],
          ["transition", "transform 0.3s ease, box-shadow 0.3s ease"],
          ["cursor", "pointer"],
          ["overflow", "hidden"],
          ["backgroundColor", "rgba(255, 255, 255, 0.1)"],
          ["transformOrigin", "center"],
        ],
        scrollContainer: [
          ["width", "calc(100% - 20px)"],
          ["height", "290px"],
          ["margin", "10px 10px 0 10px"],
          ["borderRadius", "10px"],
          ["overflowX", "auto"],
          ["overflowY", "hidden"],
          ["display", "flex"],
          ["alignItems", "center"],
          ["backgroundColor", "#fff"],
          ["position", "relative"],
        ],
        pdfPreview: [
          ["minWidth", "100%"],
          ["height", "100%"],
          ["border", "none"],
          ["backgroundColor", "#fff"],
          ["overflow", "hidden"],
          ["pointerEvents", "none"],
          ["scrolling", "no"],
          ["overflowX", "hidden"],
          ["overflowY", "hidden"],
          ["transform", "translateZ(0)"],
          ["willChange", "transform"],
        ],
        footerElement: [
          ["width", "100%"],
          ["height", "60px"],
          ["display", "flex"],
          ["alignItems", "center"],
          ["justifyContent", "space-between"],
          ["padding", "0 10px"],
          ["color", "#ffffff"],
          ["fontSize", "16px"],
          ["borderRadius", "0 0 10px 10px"],
        ],
        downloadContainer: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["alignItems", "center"],
            ["position", "relative"],
            ["padding", "5px"],
        ],
        downloadIcon: [
            ["width", "30px"],  // Увеличил с 20px до 30px
            ["height", "30px"], // Увеличил с 20px до 30px
            ["transition", "filter 0.3s ease"],
            ["cursor", "pointer"],
            ["zIndex", "10"],
        ],
        downloadIconHover: [
            ["filter", "invert(62%) sepia(98%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%)"], // Чистый голубой цвет
        ],
        downloadIconDefault: [
            ["filter", "none"],
        ],
        catalogBlockHover: [
            ["transform", "scale(1.05)"],
            ["boxShadow", "0 4px 15px rgba(0,0,0,0.2)"],
        ],
        catalogBlockDefault: [
            ["transform", "scale(1)"],
            ["boxShadow", "0 2px 5px rgba(0,0,0,0.1)"],
        ],
    },

    aboutStyles: {
        // Базовые стили для всех страниц
        base: {
          container: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["alignItems", "center"],
          ],
          contentDiv: [
            ["background", "#ffffff"],
            ["padding", "20px"],
            ["width", "100%"],
            ["display", "flex"],
            ["flexDirection", "column"],
            ["alignItems", "center"],
            ["borderRadius", "10px"],
          ],
          logoImage: [
            ["width", "300px"],
            ["marginBottom", "20px"],
          ],
          contentWrapper: [
            ["display", "flex"],
            ["flexDirection", "row"],
            ["justifyContent", "space-between"],
            ["width", "100%"],
            ["maxWidth", "1200px"],
            ["margin", "0 auto"],
          ],
          formElement: [
            ["textAlign", "left"],
            ["width", "50%"],
          ],
          rightSpace: [
            ["width", "50%"],
            ["background", "rgb(255, 255, 255)"],
          ],
          titleElement: [
            ["color", "#232F3E"],
            ["fontSize", "28px"],
          ],
          textElement: [
            ["color", "#000000"],
            ["fontSize", "20px"],
          ],
          listElement: [
            ["color", "#000000"],
            ["fontSize", "20px"],
          ],
          contactsTitle: [
            ["color", "#232F3E"],
            ["fontSize", "32px"],
          ],
          emailLink: [
            ["color", "#00f"],
            ["fontSize", "20px"],
            ["textDecoration", "none"],
          ],
          phoneLink: [
            ["fontSize", "20px"],
            ["textDecoration", "none"],
          ],
          emailContainer: [
            ["display", "flex"],
            ["alignItems", "center"],
            ["gap", "5px"],
          ],
          phoneContainer: [
            ["display", "flex"],
            ["alignItems", "center"],
            ["gap", "5px"],
          ],
        },
        // Специфические стили для определенных страниц
        byId: {
          "8": { // Контакты
            contactsTitle: [
              ["color", "#FF4500"], // Оранжевый заголовок для "Контакты"
              ["fontSize", "36px"],
            ],
            rightSpace: [
              ["width", "50%"],
              ["background", "#f0f0f0"], // Светло-серый фон для карты
            ],
          },
          "9": { // О компании
            textElement: [
              ["color", "#333333"],
              ["fontSize", "22px"],
              ["lineHeight", "1.5"], // Увеличенный межстрочный интервал
            ],
            titleElement: [
              ["color", "#1E90FF"], // Синий заголовок для "О компании"
              ["fontSize", "30px"],
            ],
          },
          "10": { // Реквизиты
            textElement: [
              ["fontSize", "18px"],
              ["fontFamily", "Courier New, monospace"], // Моноширинный шрифт для реквизитов
            ],
          },
        },
    },

    productionStyles: {
        container: [
            ["display", "flex"],
            ["minHeight", "200px"],
            ["backgroundColor", "#f0f0f0"]
        ],
        sidebar: [
            ["width", "20%"],
            ["padding", "10px"],
            ["backgroundColor", "#e0e0e0"]
        ],
        siblingList: [
            ["listStyleType", "none"],
            ["padding", "0"],
            ["margin", "0"]
        ],
        siblingLink: [
            ["margin", "10px 0"]
        ],
        downloadSection: [
            ["marginTop", "80px"] // Увеличиваем до 80px для заметности
        ],
        downloadWrapper: [
            ["marginTop", "30px"] // Увеличиваем до 30px
        ],
        downloadList: [
            ["listStyleType", "none"],
            ["padding", "0"],
            ["margin", "0"]
        ],
        downloadLink: [
            ["margin", "10px 0"],
            ["fontSize", "24px"]
        ],
        downloadIcon: [
            ["width", "20px"],
            ["marginRight", "5px"],
            ["verticalAlign", "middle"],
            ["filter", "grayscale(100%) brightness(0%)"]
        ],
        contentColumn: [
            ["width", "80%"],
            ["padding", "10px"],
            ["backgroundColor", "#ffffff"]
        ],
        boldLink: [
            ["fontWeight", "bold"]
        ]
    },
////////////////////////////////////////////////
    churchForm: {
        bodyStyle: [
            ['overflow', 'hidden'],         // Скрывает любой контент, выходящий за пределы body
        ],
        bodyStyleScroll: [
            ['overflow', ''],               // Сбрасывает overflow (по умолчанию auto или visible)
        ],
        container: [
            ['width', '60%'],               // Устанавливает ширину контейнера 60% от родителя
            ['height', '90vh'],             // Устанавливает высоту контейнера 90% от высоты экрана
            ['overflow-y', 'auto'],         // Включает вертикальную прокрутку при необходимости
            ['padding', '20px'],            // Добавляет внутренний отступ 20 пикселей со всех сторон
            ['background-color', '#fff'],   // Устанавливает белый фон контейнера
            ['border', '1px solid #ccc'],   // Добавляет серую границу толщиной 1 пиксель
            ['box-shadow', '0px 4px 8px rgba(0, 0, 0, 0.1)'], // Добавляет легкую тень для эффекта глубины
            ['border-radius', '8px'],       // Закругляет углы контейнера на 8 пикселей
            ['position', 'fixed'],          // Фиксирует контейнер на экране
            ['top', '50%'],                 // Центрирует контейнер по вертикали (до трансформации)
            ['left', '50%'],                // Центрирует контейнер по горизонтали (до трансформации)
            ['transform', 'translate(-50%, -50%)'], // Смещает контейнер на половину его размеров для точного центрирования
            ['z-index', '1000'],            // Устанавливает высокий уровень слоя для отображения поверх других элементов
        ],
        title: [
            ['font-size', '24px'],          // Устанавливает размер шрифта заголовка 24 пикселя
            ['margin-bottom', '10px'],      // Добавляет отступ снизу 10 пикселей
            ['font-weight', 'normal'],      // Устанавливает нормальную толщину шрифта
        ],
        description: [
            ['font-size', '18px'],          // Устанавливает размер шрифта описания 18 пикселей
            ['margin-bottom', '20px'],      // Добавляет отступ снизу 20 пикселей
        ],
        text: [
            ['font-size', '16px'],          // Устанавливает размер шрифта текста 16 пикселей
            ['margin-bottom', '20px'],      // Добавляет отступ снизу 20 пикселей
        ],
        closeButton: [
            ['position', 'sticky'],         // Делает кнопку прилипающей внутри контейнера
            ['top', '0'],                   // Прижимает кнопку к верху контейнера
            ['margin-left', 'auto'],        // Прижимает кнопку к правому краю
            ['padding', '10px 20px'],       // Устанавливает внутренние отступы: 10px сверху/снизу, 20px слева/справа
            ['background-color', 'rgb(229 48 48)'], // Устанавливает красный фон кнопки
            ['color', '#fff'],              // Устанавливает белый цвет текста кнопки
            ['border', 'none'],             // Убирает границу кнопки
            ['border-radius', '4px'],       // Закругляет углы кнопки на 4 пикселя
            ['cursor', 'pointer'],          // Устанавливает курсор указателя при наведении
            ['z-index', '10'],              // Устанавливает уровень слоя кнопки выше содержимого контейнера
            ['display', 'block'],           // Делает кнопку блочным элементом
        ],
        mobile: {
            container: [
                ['width', '90%'],           // Устанавливает ширину контейнера 90% для мобильных устройств
                ['height', '80vh'],         // Устанавливает высоту контейнера 80% от высоты экрана для мобильных
            ],
            imageWrapper: [
                ['flex-direction', 'column'], // Располагает изображение и информацию вертикально
                ['align-items', 'stretch'],   // Растягивает дочерние элементы на всю доступную ширину
            ],
            image: [
                ['width', '100%'],          // Устанавливает ширину изображения 100% на мобильных
                ['height', 'auto'],         // Автоматически подстраивает высоту изображения
                ['margin-bottom', '10px'],  // Добавляет отступ снизу 10 пикселей между изображением и информацией
            ],
            imageInfo: [
                ['width', '100%'],          // Устанавливает ширину блока информации 100% под изображением
                ['height', 'auto'],         // Автоматически подстраивает высоту под содержимое
                ['margin-bottom', '20px'],  // Добавляет отступ снизу 20 пикселей под блоком информации
            ],
        },
        overlay: [
            ['position', 'fixed'],           // Фиксирует оверлей на экране
            ['top', '0'],                    // Прижимает оверлей к верху экрана
            ['left', '0'],                   // Прижимает оверлей к левому краю экрана
            ['width', '100%'],               // Устанавливает ширину оверлея 100%
            ['height', '100%'],              // Устанавливает высоту оверлея 100%
            ['background-color', 'rgba(0, 0, 0, 0.5)'], // Устанавливает полупрозрачный черный фон
            ['z-index', '999'],              // Устанавливает уровень слоя оверлея ниже контейнера, но выше остального контента
        ],
        image: [
            ['height', '65%'],              // Устанавливает высоту изображения 65% от контейнера
            ['width', '68%'],               // Устанавливает ширину изображения 68% от контейнера
            ['max-height', '500px'],        // Ограничивает максимальную высоту изображения до 500 пикселей
            ['-maxwidth', '600px'],         // Ошибка в написании (правильно "max-width"), ограничивает максимальную ширину до 600 пикселей
            ['margin-bottom', '20px'],      // Добавляет отступ снизу 20 пикселей
        ],
        imageWrapper: [
            ['display', 'flex'],            // Использует flexbox для размещения изображения и информации
            ['flex-direction', 'row'],      // Располагает изображение и информацию горизонтально
            ['justify-content', 'space-between'], // Распределяет пространство между изображением и информацией
            ['align-items', 'flex-start'],  // Выравнивает элементы по верхнему краю
            ['margin-bottom', '20px'],      // Добавляет отступ снизу 20 пикселей
            ['width', '100%'],              // Устанавливает ширину обертки 100%
        ],
        imageInfo: [
            ['width', '30%'],               // Устанавливает ширину блока информации 30% рядом с изображением
            ['font-size', '14px'],          // Устанавливает размер шрифта информации 14 пикселей
            ['padding', '10px'],            // Добавляет внутренний отступ 10 пикселей со всех сторон
            ['background-color', '#f9f9f9'], // Устанавливает светло-серый фон блока информации
            ['border-radius', '4px'],       // Закругляет углы блока информации на 4 пикселя
            ['height', '65%'],              // Устанавливает высоту блока равной высоте изображения (65%)
            ['overflow-y', 'auto'],         // Включает вертикальную прокрутку при превышении содержимого
        ],
        imageInfoField: [
            ['font-size', '14px'],          // Устанавливает размер шрифта поля информации 14 пикселей
            ['margin-bottom', '10px'],      // Добавляет отступ снизу 10 пикселей между полями
            ['color', '#333'],              // Устанавливает темно-серый цвет текста
            ['line-height', '1.4'],         // Устанавливает высоту строки для лучшей читаемости
        ],
    },

    newsStyles: {
        container: [ // Стили для основного контейнера новостей  
            ["display", "flex"], // Используем flexbox для размещения колонок  
            ["gap", "20px"], // Добавляем промежуток между колонками  
            ["maxWidth", "1100px"], // Ограничиваем максимальную ширину блока  
            ["margin", "auto"], // Центрируем контейнер на странице  
            ["padding", "20px"], // Добавляем отступы внутри контейнера  
            ["flex-direction", "row"], // Располагаем элементы в ряд  
        ],
        column: [ // Стили для колонок  
            ["width", "50%"], // Каждая колонка занимает 50% ширины контейнера  
            ["height", "100%"], // Высота колонки на 100%  
            ["display", "flex"], // Используем flexbox для размещения содержимого  
            ["flexDirection", "column"], // Располагаем элементы вертикально  
            ["gap", "10px"], // Добавляем промежуток между элементами 
        ],
        section: [ // Стили для секций внутри колонок 
            ["background", "transparent"],
            ["border", "none"], // Убираем границы  
            ["padding", "10px"], // Добавляем внутренние отступы  
            ["fontSize", "16px"], // Размер шрифта 16 пикселей  
            ["color", "blue"], // Синий цвет текста  
            ["textAlign", "center"], // Выравниваем текст по центру  
        ],
        image: [ // Стили для изображений внутри секций  
            ["width", "60px"], // Устанавливаем ширину 60 пикселей  
            ["height", "60px"], // Устанавливаем высоту 60 пикселей  
            ["userSelect", "none"], // Устанавливаем высоту 60 пикселей  
        ],
        newsItem: [ // Стили для элемента новости  
            ["display", "flex"], // Используем flexbox для выравнивания элементов  
            ["alignItems", "center"], // Выравниваем элементы по центру  
            ["marginBottom", "10px"], // Добавляем отступ снизу  
            ["border-bottom", "solid"], // Добавляем нижнюю границу  
            ["border-width", "1px"], // Устанавливаем ширину границы 1 пиксель  
            ["padding-bottom", "10px"], // Добавляем нижний внутренний отступ  
            ["border-color", "#0C4DA"], // Светло-серый цвет границы  
            ["textAlign", "left"], // Выравниваем текст по левому краю  
            ["position", "relative"], // Устанавливаем относительное позиционирование  
        ],
        newsImage: [ // Стили для изображений в новостях  
            ["width", "60px"], // Ширина изображения 50 пикселей  
            ["height", "60px"], // Высота изображения 50 пикселей  
            ["marginRight", "10px"], // Отступ справа 10 пикселей  
            ["border", "solid"], // Добавляем границу  
            ["border-width", "1px"], // Ширина границы 1 пиксель  
            ["border-color", "lightgray"], // Светло-серый цвет границы  
            ["padding", "2px"], // Внутренний отступ 2 пикселя  
            ["userSelect", "none"], // Устанавливаем высоту 60 пикселей  
        ],
        newsText: [ // Стили для текста новостей  
            ["flex", "1"], // Растягиваем текст на всю доступную ширину  
            ["font-size", "10px"], // Размер шрифта 10 пикселей  
            ["position", "absolute"], // Абсолютное позиционирование  
            ["top", "0"], // Размещаем текст вверху блока  
        ],
        newsDate: [ // Стили для даты новости  
            ["fontSize", "12px"], // Размер шрифта 12 пикселей  
            ["color", "#303030"], // Серый цвет текста  
            ["line-height", "25px"], // Межстрочный интервал 25 пикселей  
        ],
        textDescription: [ // Стили для описания текста в правой колонке  
            ["fontSize", "16px"], // Размер шрифта 14 пикселей  
            ["color", "#000"], // Чёрный цвет текста  
            ["textAlign", "left"], // Выравнивание текста по левому краю  
            ["line-height", "25px"], // Межстрочный интервал 25 пикселей  
        ],
        linkTitle: [ // Стили для ссылок  
            ["text-decoration", "none"], // Убираем подчеркивание ссылки
            ["color", "#0c4da2"], // Синий цвет ссылки  
        ],
        containerMobile: [ // Стили для мобильной версии контейнера  
            ["flex-direction", "column"], // Располагаем элементы вертикально  
        ],
        leftColumnMobile: [ // Стили для мобильной версии левой колонки  
            ["width", "100%"], // Занимает всю ширину контейнера  
        ],
        rightColumnMobile: [ // Стили для мобильной версии правой колонки  
            ["width", "100%"], // Занимает всю ширину контейнера  
            ["margin-bottom", "60px"], // Отступ снизу 60 пикселей  
        ],
        textTitle: [ // Стили для ссылок  
            ["text-decoration", "none"], // Убираем подчеркивание ссылки
            ["color", "#4A4A4A"], // Синий цвет ссылки  
            ["font-size", "24px"], 
            ["font-family", "Georgia, Times New Roman , serif "], 
        ],
    },

    companyStyles: {
        // Стили для основного контейнера компании
        container: [
            ["display", "flex"], // Использование flexbox для выравнивания элементов
            ["align-items", "stretch"], // Элементы растягиваются по высоте
            ["flex-direction", "row"], // Элементы располагаются в строку
            ["align-items", "flex-start"], // Выравнивание элементов по верхнему краю
            ["position", "relative"], // Относительное позиционирование контейнера
            ["left", "15%"], // Смещение контейнера на 15% слева
            ["width", "70%"], // Ширина контейнера — 70% от родительского элемента
            ["height", "auto"], // Высота контейнера — автоматическая, зависит от содержимого
            ["marginBottom", "1px"], // Небольшой отступ снизу
        ],

        // Стили для изображения компании
        image: [
            ["object-fit", "cover"], // Изображение заполняет контейнер без искажения пропорций
            ["width", "100%"], // Ширина изображения — 100% от контейнера
            ["height", "200px"], // Высота изображения — 200 пикселей
            ["display", "block"], // Блочное отображение изображения
            ["userSelect", "none"], // Отключение выделения изображения
        ],

        // Стили для логотипа компании
        logo: [
            ["transform", "none"], // Без трансформации
            ["position", "absolute"], // Абсолютное позиционирование логотипа
            ["top", "10px"], // Логотип располагается на 10 пикселей ниже от верхнего края
            ["left", "10px"], // Логотип располагается на 10 пикселей от левого края
            ["width", "50px"], // Ширина логотипа — 50 пикселей
            ["height", "50px"], // Высота логотипа — 50 пикселей
            ["z-index", "2"], // Логотип находится выше других элементов
            ["userSelect", "none"], // Отключение выделения логотипа
        ],

        // Стили для текста компании
        text: [
            ["flex", "1"], // Текст занимает оставшееся пространство внутри контейнера
            ["transform", "none"], // Без трансформации
            ["position", "absolute"], // Абсолютное позиционирование текста
            ["top", "10px"], // Текст располагается на 10 пикселей ниже от верхнего края
            ["left", "70px"], // Текст располагается на 70 пикселей от левого края
            ["width", "90%"], // Ширина текста — 90% от родительского элемента
            ["color", "black"], // Черный цвет текста
            ["fontSize", "16px"], // Размер шрифта — 16 пикселей
            ["line-height", "20px"], // Межстрочный интервал — 20 пикселей
            ["text-align", "left"], // Выравнивание текста по левому краю
            ["z-index", "2"], // Текст находится выше других элементов
        ],

        // Стили для изображения на мобильных устройствах
        imageMobile: [
            ["width", "100%"], // Ширина изображения — 100% от родительского элемента
            ["height", "auto"], // Автоматическая высота изображения
            ["display", "block"], // Блочное отображение изображения
        ],

        // Стили для контейнера компании на мобильных устройствах
        containerMobile: [
            ["display", "flex"], // Использование flexbox для выравнивания элементов
            ["flex-direction", "column"], // Элементы располагаются в колонку
            ["align-items", "center"], // Элементы выравниваются по центру по горизонтали
            ["position", "relative"], // Относительное позиционирование контейнера
            ["left", "5%"], // Смещение контейнера на 5% слева
            ["width", "90%"], // Ширина контейнера — 90% от родительского элемента
            ["height", "auto"], // Высота контейнера — автоматическая
            ["marginBottom", "60px"], // Отступ снизу — 60 пикселей
        ],

        // Стили для логотипа компании на мобильных устройствах
        logoMobile: [
            ["position", "absolute"], // Абсолютное позиционирование логотипа
            ["top", "10px"], // Логотип располагается на 10 пикселей ниже от верхнего края
            ["left", "50%"], // Логотип располагается по центру по горизонтали
            ["transform", "translateX(-50%)"], // Сдвигаем логотип на половину его ширины для центрирования
            ["width", "30px"], // Ширина логотипа — 30 пикселей на мобильных устройствах
            ["height", "30px"], // Высота логотипа — 30 пикселей на мобильных устройствах
            ["z-index", "2"], // Логотип находится выше других элементов
        ],

        // Стили для текста компании на мобильных устройствах
        textMobile: [
            ["position", "absolute"], // Абсолютное позиционирование текста
            ["top", "50px"], // Текст располагается на 50 пикселей ниже от верхнего края
            ["left", "50%"], // Текст располагается по центру по горизонтали
            ["width", "95%"], // Ширина текста — 95% от родительского элемента
            ["transform", "translateX(-50%)"], // Сдвигаем текст на половину его ширины для центрирования
            ["color", "black"], // Черный цвет текста
            ["fontSize", "12px"], // Размер шрифта — 12 пикселей на мобильных устройствах
            ["text-align", "center"], // Выравнивание текста по центру
            ["line-height", "20px"], // Межстрочный интервал — 20 пикселей
            ["z-index", "2"], // Текст находится выше других элементов
        ],
    },

    tableStyles: {
        table: [
            ["width", "70%"], // Устанавливаем ширину таблицы в 70% от родительского контейнера  
            ["borderCollapse", "collapse"], // Убираем промежутки между границами ячеек  
            ["border", "1px solid black"], // Добавляем черную рамку для всей таблицы  
            ["margin", "auto"], // Центрируем таблицу  
            ["display", "table"], // Указываем, что элемент является таблицей  
            ["table-layout", "fixed"], // Фиксируем ширину столбцов таблицы  
            ["margin-bottom", "20px"], // Добавляем отступ снизу  
        ],
        cell: [
            ["border", "1px solid black"], // Добавляем границу для каждой ячейки  
            ["padding", "8px"], // Устанавливаем отступ внутри ячеек  
            ["textAlign", "center"], // Выравниваем текст по центру  
        ],
        row: [
            ["borderBottom", "1px solid black"], // Добавляем границу снизу для каждой строки  
        ],
        tabsContainer: [
            ["display", "flex"], // Размещаем элементы в строку с помощью flexbox  
            ["justifyContent", "flex-start"], // Выравниваем элементы в начале контейнера  
            ["marginLeft", "15%"], // Отступ слева 15%  
            ["width", "70%"], // Устанавливаем ширину контейнера вкладок 70%  
            ["marginTop", "-4px"], // Поднимаем контейнер немного вверх  
        ],
        tabButton: [
            ["backgroundColor", "#f1f1f1"], // Светло-серый фон кнопки вкладки  
            ["border", "1px solid #ccc"], // Серый бордер  
            ["border-bottom", "none"], // Убираем нижнюю границу, чтобы кнопка выглядела активной  
            ["padding", "10px 20px"], // Внутренний отступ сверху/снизу 10px, слева/справа 20px  
            ["cursor", "pointer"], // Курсор меняется на указатель при наведении  
            ["fontSize", "16px"], // Размер шрифта 16px  
            ["fontWeight", "bold"], // Делаем шрифт жирным  
            ["color", "black"], // Черный цвет текста  
        ],
        tabButtonHover: [
            ["backgroundColor", "#ddd"], // Цвет фона при наведении — темнее, чем обычный  
        ],
        tabButtonActive: [
            ["color", "blue"], // Синий цвет текста для активной вкладки  
        ],
        linkCell: [
            ["textAlign", "center"], // Выравниваем текст в центре  
            ["display", "block"], // Блочное отображение ссылки (на всю ширину)  
            ["width", "100%"], // Ссылка занимает всю ширину ячейки  
            ["textDecoration", "none"], // Убираем подчеркивание ссылки  
            ["color", "blue"], // Цвет ссылки синий  
            ["padding", "8px"], // Внутренний отступ 8px  
            ["border", "none"], // Убираем границы  
        ],
    },

    mapStyles: {
        // Стили для контейнера карты
        mapContainer: [
            ["width", "70%"], // Ширина контейнера карты — 70% от родительского элемента
            ["height", "500px"], // Высота контейнера карты — 500 пикселей
            ["margin", "20px auto"], // Отступы: сверху и снизу 20 пикселей, по центру слева и справа
            ["border", "2px solid #4A4A4A"], // Черная рамка шириной 5 пикселей
            ["borderRadius", "10px"], // Скругленные углы с радиусом 15 пикселей
            ["overflow", "hidden"], // Скрытие содержимого, выходящего за пределы контейнера
            ["position", "relative"], // Позиционирование относительно родительского контейнера
        ],
        // Стили для контейнера карты на мобильных устройствах
        mapContainerMobile: [
            ["width", "90%"], // Ширина контейнера карты — 90% от родительского элемента на мобильных устройствах
        ]
    },
};