function createInputGroup(labelText, type, name, form, inputGroups) {
    var group = createElement('div', { class: 'form-group' }, form);
    applyStyles(group, window.defaultStyles.contactFormStyles.formGroup);
    
    var label = createElement('label', {}, group);
    label.innerHTML = labelText;
    applyStyles(label, window.defaultStyles.contactFormStyles.formGroupLabel);
    
    var input = createElement('input', { type: 'type', name: name, required: 'required' }, group);
    applyStyles(input, window.defaultStyles.contactFormStyles.formGroupInput);
    
    inputGroups.push({ group: group, label: label, input: input });
}

function createSubmitButton(buttonText, form) {
    var submitBtn = createElement('button', { type: 'submit', class: 'submit-btn' }, form);
    submitBtn.innerHTML = buttonText;
    applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtn);
    
    submitBtn.addEventListener('mouseover', function() {
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtnHover);
    });
    submitBtn.addEventListener('mouseout', function() {
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtn);
    });

    return submitBtn;
}

// Новая функция для обновления переводов навигационного бара
function updateNavbarTranslations(currentLanguage) {
    const navbarTranslations = belhardSiteData.navbar?.[currentLanguage];
    
    // Если переводов для навбара нет, выводим ошибку и выходим
    if (!navbarTranslations) {
        return;
    }

    // Предполагаем, что navbarTranslations - это массив объектов с { text, href, id }
    // Например: [{ text: 'Главная', href: '/', id: 'nav-home' }, ...]
    const navbarLinks = document.querySelectorAll('.navbar a'); // Выбираем все ссылки в навбаре
    
    if (navbarLinks.length === 0) {
        console.warn('Не найдены элементы навигационного бара для обновления');
        return;
    }

    navbarLinks.forEach((link, index) => {
        if (navbarTranslations[index]) {
            link.textContent = navbarTranslations[index].text; // Обновляем текст
            if (navbarTranslations[index].href) {
                link.setAttribute('href', navbarTranslations[index].href); // Обновляем href, если есть
            }
        } else {
            console.warn(`Перевод для ссылки ${index} отсутствует в языке ${currentLanguage}`);
        }
    });
}

function createContactForm(currentLanguage) {
    // Получаем переводы для текущего языка
    const formTranslations = belhardSiteData.contactForm[currentLanguage];
    
    // Создаем пустой wrapper независимо от наличия переводов
    var wrapper = createElement('div', { class: 'contact-wrapper parallax-background' }, document.body);
    
    // Если переводов нет или они неполные, возвращаем только wrapper
    if (!formTranslations) {
        console.error('Ошибка: Переводы для языка ' + currentLanguage + ' отсутствуют');
        return { wrapper };
    }

    const [titleText, nameLabel, phoneLabel, emailLabel, messageLabel, buttonText] = formTranslations;

    if (!titleText || !nameLabel || !phoneLabel || !emailLabel || !messageLabel || !buttonText) {
        console.error('Ошибка: Отсутствует один или несколько переводов для контактной формы на языке ' + currentLanguage);
        return { wrapper };
    }

    // Обновляем переводы навигационного бара
    updateNavbarTranslations(currentLanguage);

    // Применяем стили и создаем форму только если все переводы есть
    applyStyles(wrapper, window.defaultStyles.contactFormStyles.contactWrapper);
    
    var form = createElement('form', { class: 'contact-form' }, wrapper);
    applyStyles(form, window.defaultStyles.contactFormStyles.contactForm);
    
    var title = createElement('h2', {}, form);
    title.innerHTML = titleText;
    applyStyles(title, window.defaultStyles.contactFormStyles.contactFormH2);
    
    var inputGroups = [];
    
    createInputGroup(nameLabel, 'text', 'name', form, inputGroups);
    createInputGroup(phoneLabel, 'tel', 'phone', form, inputGroups);
    createInputGroup(emailLabel, 'email', 'email', form, inputGroups);
    createInputGroup(messageLabel, 'text', 'message', form, inputGroups);
    
    // Добавляем honeypot для защиты от спама
    var honeypot = createElement('input', { type: 'text', name: 'hp', style: 'display:none;' }, form);

    var submitBtn = createSubmitButton(buttonText, form);
    
    if (form.elements.length > 0) {
        form.onsubmit = function(e) {
            e.preventDefault();
            var formData = {};
            for (var i = 0; i < form.elements.length; i++) {
                var element = form.elements[i];
                if (element.name) {
                    formData[element.name] = element.value.trim();
                }
            }

            var errors = [];

            if (formData.hp) {
                console.log('Скорее всего, это бот');
                return false;
            }

            if (!formData.name) {
                errors.push('Поле ФИО не может быть пустым или содержать только пробелы');
            } else if (!/^[a-zA-Zа-яА-Я-]{2,}$/.test(formData.name)) {
                errors.push('ФИО должно содержать минимум 2 буквы и только буквы или дефис (пробелы игнорируются)');
            }

            if (!formData.phone) {
                errors.push('Поле телефона не может быть пустым или содержать только пробелы');
            } else {
                formData.phone = formData.phone.replace(/[\s\-\(\)]/g, '');
                var phoneRegex = /^\+?[0-9]{10,15}$/;
                if (!phoneRegex.test(formData.phone)) {
                    errors.push('Пожалуйста, введите корректный номер телефона (10-15 цифр, можно с +)');
                }
            }

            if (!formData.email) {
                errors.push('Поле email не может быть пустым или содержать только пробелы');
            } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(formData.email)) {
                errors.push('Пожалуйста, введите корректный email');
            }

            if (formData.message && formData.message.length < 5) {
                errors.push('Сообщение, если заполнено, должно содержать минимум 5 символов (пробелы игнорируются)');
            }

            if (errors.length > 0) {
                alert(errors.join('\n'));
                return false;
            }

            onFormSuccess(formData);
            for (var i = 0; i < form.elements.length; i++) {
                form.elements[i].value = '';
            }
            return false;
        };
    }
    
    applyResponsiveStyles(form, inputGroups, submitBtn);
    
    window.addEventListener('resize', function() {
        applyResponsiveStyles(form, inputGroups, submitBtn);
    });
    
    return { wrapper, form, inputGroups, submitBtn };
}

function applyResponsiveStyles(form, inputGroups, submitBtn) {
    var width = document.documentElement.clientWidth;
    var i;
    if (width <= belhardSiteData.mobileSizes.contactFormMobile) {
        applyStyles(form, window.defaultStyles.contactFormStyles.contactFormMobile);
        for (i = 0; i < inputGroups.length; i++) {
            applyStyles(inputGroups[i].group, window.defaultStyles.contactFormStyles.formGroupMobile);
            applyStyles(inputGroups[i].input, window.defaultStyles.contactFormStyles.formGroupInputMobile);
        }
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtnMobile);
    } else {
        applyStyles(form, window.defaultStyles.contactFormStyles.contactForm);
        for (i = 0; i < inputGroups.length; i++) {
            applyStyles(inputGroups[i].group, window.defaultStyles.contactFormStyles.formGroup);
            applyStyles(inputGroups[i].input, window.defaultStyles.contactFormStyles.formGroupInput);
        }
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtn);
    }
    if (width <= belhardSiteData.mobileSizes.contactFormSmallMobile) {
        for (i = 0; i < inputGroups.length; i++) {
            applyStyles(inputGroups[i].group, window.defaultStyles.contactFormStyles.formGroupSmallMobile);
            applyStyles(inputGroups[i].input, window.defaultStyles.contactFormStyles.formGroupInputSmallMobile);
        }
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtnSmallMobile);
    }
}

// Внешний обработчик успеха
function onFormSuccess(formData) {
    alert("Успех");
    console.log(formData);
}

