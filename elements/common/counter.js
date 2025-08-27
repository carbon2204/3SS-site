function initializeNavigation() {
    // Получаем элементы навигации
    var nav = document.querySelector('nav');
    var vMenu = document.querySelector('.visible-menu'); // Видимое меню
    var hMenu = document.querySelector('.hidden-menu'); // Скрытое меню
    var burger = document.querySelector('.burger'); // Кнопка бургера
    var burgerCount = document.querySelector('.burger-count'); // Количество элементов в скрытом меню
    var searchWrapper = document.querySelector('.search-wrapper'); // Обёртка поиска
    var profileIconWrapper = document.querySelector('.profile-icon'); // Обёртка поиска
    var languageSelectorContainer = document.querySelector('.language-selector-container'); // Контейнер выбора языка

    // Функция для обновления состояния навигации в зависимости от ширины экрана
    function updateNav() {
        if (window.innerWidth <= belhardSiteData.mobileSizes.navBar) { // Если ширина экрана меньше или равна мобильному размеру
            // Перемещаем элементы из скрытого меню в видимое
            while (hMenu.children.length > 0) {
                vMenu.appendChild(hMenu.firstElementChild);
            }
            // Прячем кнопку бургера и скрытое меню
            burger.classList.add('hidden');
            hMenu.classList.remove('active');
            burgerCount.innerText = '0'; // Обнуляем счётчик в меню
        } else {
            var navWidth = nav.offsetWidth - belhardSiteData.searchWidth; // Ширина навигации без учёта поиска
            if (!burger.classList.contains('hidden')) { // Если кнопка бургера видна
                navWidth -= burger.offsetWidth; // Учитываем ширину бургера
            }

            var vMenuWidth = vMenu.offsetWidth; // Ширина видимого меню

            // Перемещаем элементы из видимого меню в скрытое меню, если оно не помещается
            for (var i = vMenu.children.length - 1; i >= 1 && vMenuWidth > navWidth; i--) {
                var lastChild = vMenu.lastElementChild;
                if (!lastChild) break; // Если нет элементов для перемещения, выходим
                hMenu.prepend(lastChild); // Перемещаем элемент в скрытое меню
                burger.classList.remove('hidden'); // Показываем кнопку бургера
                vMenuWidth = vMenu.offsetWidth; // Обновляем ширину видимого меню
                navWidth = nav.offsetWidth - belhardSiteData.searchWidth - burger.offsetWidth; // Обновляем ширину навигации
                burgerCount.innerText = hMenu.children.length; // Обновляем счётчик элементов в скрытом меню
            }

            var keepChecking = true;
            // Перемещаем элементы из скрытого меню в видимое меню, если в нем достаточно места
            for (var i = 0; hMenu.children.length > 0 && keepChecking; i++) {
                var firstChild = hMenu.firstElementChild;
                var tempWidth = vMenuWidth; // Сохраняем ширину видимого меню
                vMenu.appendChild(firstChild); // Перемещаем первый элемент в видимое меню
                vMenuWidth = vMenu.offsetWidth; // Обновляем ширину видимого меню

                navWidth = nav.offsetWidth - belhardSiteData.searchWidth; // Ширина навигации без учёта поиска
                if (hMenu.children.length > 0) { // Если в скрытом меню ещё есть элементы
                    navWidth -= burger.offsetWidth; // Учитываем ширину бургера
                }

                // Проверяем, поместится ли меню
                if (vMenuWidth > navWidth) {
                    hMenu.prepend(firstChild); // Если не помещается, возвращаем элемент в скрытое меню
                    vMenuWidth = tempWidth; // Восстанавливаем старую ширину видимого меню
                    keepChecking = false; // Прекращаем проверку
                } else {
                    burgerCount.innerText = hMenu.children.length; // Обновляем счётчик элементов в скрытом меню
                    if (hMenu.children.length === 0) { // Если скрытое меню пусто
                        burger.classList.add('hidden'); // Прячем кнопку бургера
                        hMenu.classList.remove('active'); // Убираем активный класс с меню
                        navWidth = nav.offsetWidth - belhardSiteData.searchWidth; // Обновляем ширину навигации
                        burgerCount.innerText = '0'; // Обнуляем счётчик
                    }
                }
            }
        }

        // Обновляем положение панели поиска
        updateSearchPosition();
        // Обновляем положение контейнера выбора языка
        updateLanguageSelectorPosition();
        // Обновляем положение контейнера аккаунта
        updateProfilePosition();
    }

    // Функция для обновления положения панели поиска
    function updateSearchPosition() {
        var isMobile = window.innerWidth <= belhardSiteData.mobileSizes.navBar; // Проверяем, мобильная ли версия
        var isShifted = hMenu.children.length > 0 && !isMobile; // Проверяем, если меню имеет элементы, а экран не мобильный
        searchWrapper.classList.remove('search-mobile', 'search-shifted'); // Убираем старые классы
        if (isMobile) searchWrapper.classList.add('search-mobile'); // Если мобильная версия, добавляем класс
        else if (isShifted) searchWrapper.classList.add('search-shifted'); // Если не мобильная версия и меню сдвинуто, добавляем класс
    }

    // Функция для обновления положения контейнера выбора языка
    function updateLanguageSelectorPosition() {
        var isMobile = window.innerWidth <= belhardSiteData.mobileSizes.navBar; // Проверяем, мобильная ли версия
        var isShifted = hMenu.children.length > 0 && !isMobile; // Проверяем, если меню имеет элементы, а экран не мобильный
        languageSelectorContainer.classList.remove('language-selector-mobile', 'language-selector-shifted'); // Убираем старые классы
        if (isMobile) languageSelectorContainer.classList.add('language-selector-mobile'); // Если мобильная версия, добавляем класс
        else if (isShifted) languageSelectorContainer.classList.add('language-selector-shifted'); // Если не мобильная версия и меню сдвинуто, добавляем класс
    }

    function updateProfilePosition() {
        var isMobile = window.innerWidth <= belhardSiteData.mobileSizes.navBar; // Проверяем, мобильная ли версия
        var isShifted = hMenu.children.length > 0 && !isMobile; // Проверяем, если меню имеет элементы, а экран не мобильный
        profileIconWrapper.classList.remove('search-mobile', 'search-shifted'); // Убираем старые классы
        if (isMobile) profileIconWrapper.classList.add('search-mobile'); // Если мобильная версия, добавляем класс
        else if (isShifted) profileIconWrapper.classList.add('search-shifted'); // Если не мобильная версия и меню сдвинуто, добавляем класс
    }

    // Обработчик клика по кнопке бургера
    function handleBurgerClick() {
        hMenu.classList.toggle('active'); // Переключаем класс активности скрытого меню
        burger.classList.toggle('active'); // Переключаем класс активности кнопки бургера
        updateSearchPosition(); // Обновляем положение панели поиска
        updateProfilePosition(); // Обновляем положение панели поиска
    }

    // Слушатели событий
    burger.addEventListener('click', handleBurgerClick); // Слушаем клик по кнопке бургера
    window.addEventListener('resize', updateNav); // Слушаем изменение размера окна

    // Инициализируем навигацию
    updateNav();
}
