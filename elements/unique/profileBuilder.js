function buildProfilePage(scripts) {
    if (Array.isArray(scripts) && scripts.length > 0) {
        try {
            document.body.innerHTML = "";
            // Выполнение скриптов
            for (var scriptId of scripts) {
                var scriptFn = belhardSiteData.scriptsConfig[scriptId];
                if (typeof scriptFn === 'function') {
                    scriptFn();  // Прямой вызов функции без параметров
                } else {
                    console.warn(`Script ${scriptId} is not a function`);
                }
            }

            // Создаем контейнер для центрирования
            var container = document.createElement('div');
            container.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                width: 100%;
                position: fixed;
                top: 0;
                left: 0;
            `;

            // Создаем элемент с текстом
            var developmentMessage = document.createElement('div');
            developmentMessage.textContent = 'В разработке';
            developmentMessage.style.cssText = `
                font-size: 48px;
                font-weight: bold;
                color: #fff;
                text-align: center;
            `;

            // Добавляем сообщение в контейнер, а контейнер в body
            container.appendChild(developmentMessage);
            document.body.appendChild(container);
        } catch (e) {
            console.error('Error executing scripts:', e);
        }
    }
}