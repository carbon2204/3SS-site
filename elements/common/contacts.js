// Вспомогательная функция для слияния стилей
function mergeStyleArrays(base = {}, specific = {}) {
    return Object.keys({ ...base, ...specific }).reduce((acc, key) => {
      acc[key] = [
        ...(base[key] || []),
        ...(specific[key] || []),
      ];
      return acc;
    }, {});
}
  
function createFormAndContent(form, navBar, currentLanguage, navItemId, sourceType, styles) {
    const container = document.createElement("div");
    const contentArea = document.getElementById("content-area");
  
    if (contentArea) {
      contentArea.innerHTML = "";
    }
  
    container.className = "form-container";
  
    if (!currentLanguage || !form || !form.formSource || !form.data || !navBar || !navBar.navBarText) {
      console.warn("Missing required data, creating empty container");
      if (contentArea) contentArea.appendChild(container);
      else document.body.appendChild(container);
      return container;
    }
  
    const { formSource, data, picture } = form;
    const { navigationSource } = formSource;
    const { navBarText, navBarElements } = navBar;
    const lang = currentLanguage;
  
    let itemId = navItemId ? String(navItemId.id || navItemId) : (belhardSiteData.currentNavItemId || "8");
    belhardSiteData.currentNavItemId = itemId;
  
    const navElement = navBarElements.find((el) => String(el.id) === itemId);
    const navIndex = navElement ? navBarElements.indexOf(navElement) : -1;
  
    const sourceData = sourceType === navigationSource ? data.navigation || [] : [];
    const item = sourceData.find((entry) => String(entry.id) === itemId);
  
    let pageTitle = "";
    if (item && item.title) {
      pageTitle = typeof item.title === "object" ? (item.title[lang] || item.title.ru || "") : item.title;
    } else if (navIndex !== -1 && navBarText[lang] && navBarText[lang][navIndex]) {
      pageTitle = navBarText[lang][navIndex];
    } else if (itemId === "1") {
      pageTitle = navBarText[lang][0] || "Главная";
    } else {
      pageTitle = lang === "ru" ? "Страница не настроена" :
        lang === "en" ? "Page not configured" :
        "Старонка не настроена";
    }
  
    document.title = pageTitle;
    let contentTitle = itemId === "1" ? "" : pageTitle;
  
    let content = [];
    let hasMap = false;
  
    if (item && item.elements) {
      if (typeof item.elements === "object") {
        if (item.elements[lang] && Array.isArray(item.elements[lang])) {
          content = item.elements[lang];
        } else if (Array.isArray(item.elements.ru)) {
          content = item.elements.ru;
        } else if (Array.isArray(item.elements)) {
          content = item.elements.map((el) => el.content);
        }
        if (item.elements.map && Array.isArray(item.elements.map)) {
          const centerData = item.elements.map.find((item) => item[0] === "center");
          if (centerData && Array.isArray(centerData[1]) && centerData[1].length === 2) {
            hasMap = true;
          }
        }
      }
    }
  
    // Сливаем стили с помощью функции
    const baseStyles = styles.base || {};
    const specificStyles = styles.byId && styles.byId[itemId] ? styles.byId[itemId] : {};
    const mergedStyles = mergeStyleArrays(baseStyles, specificStyles);
  
    if (Array.isArray(mergedStyles.container)) {
      applyStyles(container, mergedStyles.container);
    } else {
      console.warn("mergedStyles.container is missing or not an array:", mergedStyles.container);
    }
  
    const contentDiv = document.createElement("div");
    if (Array.isArray(mergedStyles.contentDiv)) {
      applyStyles(contentDiv, mergedStyles.contentDiv);
    }
  
    if (picture) {
      const img = document.createElement("img");
      img.src = picture;
      img.alt = "Form Logo";
      if (Array.isArray(mergedStyles.logoImage)) {
        applyStyles(img, mergedStyles.logoImage);
      }
      contentDiv.appendChild(img);
    }
  
    const contentWrapper = document.createElement("div");
    if (Array.isArray(mergedStyles.contentWrapper)) {
      applyStyles(contentWrapper, mergedStyles.contentWrapper);
    }
  
    const formElement = document.createElement("form");
    formElement.className = "content-form";
    if (Array.isArray(mergedStyles.formElement)) {
      applyStyles(formElement, mergedStyles.formElement);
    }
  
    const titleElement = document.createElement("h2");
    const contactTitles = { ru: "КОНТАКТЫ", en: "CONTACTS", by: "КАНТАКТЫ" };
    const requisitesTitles = { ru: "РЕКВИЗИТЫ", en: "REQUISITES", by: "РЭКВІЗІТЫ" };
  
    if (contentTitle.toUpperCase() === contactTitles[lang]) {
      titleElement.textContent = contentTitle;
      if (Array.isArray(mergedStyles.contactsTitle)) {
        applyStyles(titleElement, mergedStyles.contactsTitle);
      }
    } else if (contentTitle.toUpperCase() === requisitesTitles[lang]) {
      titleElement.textContent = contentTitle;
      if (Array.isArray(mergedStyles.titleElement)) {
        applyStyles(titleElement, mergedStyles.titleElement);
      }
    } else {
      titleElement.textContent = contentTitle;
      if (Array.isArray(mergedStyles.titleElement)) {
        applyStyles(titleElement, mergedStyles.titleElement);
      }
    }
    formElement.appendChild(titleElement);
  
    if (content.length > 0) {
      content.forEach((textContent) => {
        if (!textContent) return;
  
        if (typeof textContent === "string") {
          if (textContent.toLowerCase().includes("e-mail") && textContent.includes("3ss-pro@mail.ru")) {
            const emailContainer = document.createElement("div");
            if (Array.isArray(mergedStyles.emailContainer)) {
              applyStyles(emailContainer, mergedStyles.emailContainer);
            }
  
            const emailLabel = document.createElement("span");
            emailLabel.textContent = "e-mail:";
            if (Array.isArray(mergedStyles.textElement)) {
              applyStyles(emailLabel, mergedStyles.textElement);
            }
            emailContainer.appendChild(emailLabel);
  
            const emailLink = document.createElement("a");
            emailLink.href = "mailto:3ss-pro@mail.ru";
            emailLink.textContent = "3ss-pro@mail.ru";
            if (Array.isArray(mergedStyles.emailLink)) {
              applyStyles(emailLink, mergedStyles.emailLink);
            }
            emailContainer.appendChild(emailLink);
  
            formElement.appendChild(emailContainer);
          } else if (textContent.match(/^\+375\(\d{2}\)\s?\d{3}-\d{2}-\d{2}/) || textContent.match(/^\+375\(\d{2}\)\s?\d{2}-\d{2}-\d{3}/)) {
            const phoneContainer = document.createElement("div");
            if (Array.isArray(mergedStyles.phoneContainer)) {
              applyStyles(phoneContainer, mergedStyles.phoneContainer);
            }
  
            const phoneLink = document.createElement("a");
            const cleanNumber = textContent.replace(/\s|\(тел\.\/факс\)|\(tel\.\/fax\)|\(тэл\.\/факс\)/g, "");
            phoneLink.href = `tel:${cleanNumber}`;
            phoneLink.textContent = textContent;
            if (Array.isArray(mergedStyles.phoneLink)) {
              applyStyles(phoneLink, mergedStyles.phoneLink);
            }
            phoneContainer.appendChild(phoneLink);
  
            formElement.appendChild(phoneContainer);
          } else {
            const p = document.createElement("p");
            p.className = "text";
  
            if (itemId === "9" && (textContent.includes("ТриСС") || textContent.includes("TriSS"))) {
              const parts = textContent.split(/(ТриСС|TriSS|Про|Pro)/);
              parts.forEach((part) => {
                if (part === "ТриСС" || part === "TriSS") {
                  const span = document.createElement("span");
                  span.textContent = part;
                  span.style.color = "#808080";
                  p.appendChild(span);
                } else if (part === "Про" || part === "Pro") {
                  const span = document.createElement("span");
                  span.textContent = part;
                  span.style.color = "#FF0000";
                  p.appendChild(span);
                } else {
                  p.appendChild(document.createTextNode(part));
                }
              });
            } else {
              p.textContent = textContent;
            }
  
            if (Array.isArray(mergedStyles.textElement)) {
              applyStyles(p, mergedStyles.textElement);
            }
            formElement.appendChild(p);
          }
        } else if (typeof textContent === "object" && textContent.content) {
          const p = document.createElement("p");
          p.textContent = textContent.content;
          p.className = "text";
          if (Array.isArray(mergedStyles.textElement)) {
            applyStyles(p, mergedStyles.textElement);
          }
          formElement.appendChild(p);
        }
      });
    } else {
      const p = document.createElement("p");
      p.textContent = lang === "ru" ? "Контент для этой страницы пока не добавлен." :
        lang === "en" ? "Content for this page has not been added yet." :
        "Кантэнт для гэтай старонкі пакуль не дададзены.";
      p.className = "text";
      if (Array.isArray(mergedStyles.textElement)) {
        applyStyles(p, mergedStyles.textElement);
      }
      formElement.appendChild(p);
    }
  
    let rightSpace;
    if (hasMap) {
      rightSpace = createMap(form, currentLanguage, itemId);
      if (typeof rightSpace === "function") {
        rightSpace = document.createElement("div");
        console.warn("Map creation failed, using empty div for rightSpace");
      }
    } else if (item && item.picture) {
      rightSpace = document.createElement("div");
      const rightImg = document.createElement("img");
      rightImg.src = item.picture;
      rightImg.alt = "Page Image";
      rightImg.style.maxWidth = "100%";
      rightSpace.appendChild(rightImg);
    } else {
      rightSpace = document.createElement("div");
    }
  
    if (Array.isArray(mergedStyles.rightSpace)) {
      applyStyles(rightSpace, mergedStyles.rightSpace);
    }
  
    contentWrapper.appendChild(formElement);
    contentWrapper.appendChild(rightSpace);
    contentDiv.appendChild(contentWrapper);
    container.appendChild(contentDiv);
  
    if (contentArea) contentArea.appendChild(container);
    else document.body.appendChild(container);
  
    return container;
}       
  