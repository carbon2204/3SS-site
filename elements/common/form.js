function createPageContent(data, pageStyles, menuItem) {
  const contentContainer = document.createElement("div");
  applyStyles(contentContainer, pageStyles.contentContainer);
  document.body.appendChild(contentContainer);

  document.title = menuItem.text || data.form.defaultTitle;
  const mainTitleContainer = createMainTitle(menuItem.text, pageStyles);
  contentContainer.appendChild(mainTitleContainer);

  const leftColumn = document.createElement("div");
  applyStyles(leftColumn, pageStyles.leftColumn);

  const servicesDiv = createServicesDiv(data.navBar, pageStyles, menuItem.id);
  leftColumn.appendChild(servicesDiv);

  const newsDiv = createNewsDiv(data.news.leftColumn, pageStyles);
  if (newsDiv) leftColumn.appendChild(newsDiv);

  const rightColumn = document.createElement("div");
  applyStyles(rightColumn, pageStyles.rightColumn);

  const testingDiv = createRightTopgDiv(data, pageStyles, menuItem.formId, menuItem.source);
  rightColumn.appendChild(testingDiv);

  const twoColumnsContainer = document.createElement("div");
  applyStyles(twoColumnsContainer, pageStyles.twoColumns);
  twoColumnsContainer.appendChild(leftColumn);
  twoColumnsContainer.appendChild(rightColumn);

  contentContainer.appendChild(twoColumnsContainer);

  function applyResponsiveStyles() {
      const mainTitle = document.getElementById('mainTitle');
      const mainTitleContainer = document.querySelector(".mainTitleContainer");
      if (!mainTitle || !mainTitleContainer || !leftColumn) return;

      if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.formLeftColumn) {
          applyStyles(leftColumn, pageStyles.leftColumnMobile);
          applyStyles(mainTitle, pageStyles.mainTitleMobile);
      } else {
          applyStyles(leftColumn, pageStyles.leftColumn);
          applyStyles(mainTitle, pageStyles.mainTitle);
      }

      var fontSize = parseInt(window.getComputedStyle(mainTitle).fontSize);
      while (mainTitle.scrollWidth > document.documentElement.clientWidth && fontSize > 24) {
          fontSize -= 1;
          mainTitle.style.fontSize = `${fontSize}px`;
      }
  }

  applyResponsiveStyles();
  window.addEventListener("resize", applyResponsiveStyles);

  // Добавляем анимацию прокрутки вверх
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная прокрутка
  });
}

function createMainTitle(titvarext, pageStyles) {
  // Создаем контейнер для заголовка
  const container = document.createElement("div");
  container.className = "mainTitleContainer";
  applyStyles(container, pageStyles.mainTitleContainer);

  // Создаем элемент фона заголовка
  const backgroundImage = document.createElement("div");
  backgroundImage.className = "backgroundImage";
  applyStyles(backgroundImage, pageStyles.backgroundImage);
  container.appendChild(backgroundImage);

  // Создаем заголовок h1
  const mainTitle = createElement('h1', { id: 'mainTitle' }, null);

  // Устанавливаем текст заголовка, если он есть, иначе берем из data.form.defaultTitle
  mainTitle.textContent = titvarext || belhardSiteData.form.defaultTitle;
  applyStyles(mainTitle, pageStyles.mainTitle);
  container.appendChild(mainTitle);

  return container;
}

function getItemsByParent(items, parentId) {
  // Фильтруем элементы, оставляя только те, у которых parent равен parentId и state равно "1"
  return items.filter(function (item) {
    return item.parent === parentId && item.state === "1";
  });
}

function generateLink(item, pageStyles) {
  // Создаем ссылку
  const a = document.createElement("a");
  a.textContent = item.text;
  applyStyles(a, pageStyles.link);
  return a; // Не добавляем href, так как обработка кликов выполняется в buildMenu
}

function renderItems(items, list, pageStyles) {
  // Перебираем элементы и добавляем их в список
  for (var i = 0; i < items.length; i++) {
    const item = items[i];
    const listItem = document.createElement("li");
    listItem.appendChild(generateLink(item, pageStyles));
    list.appendChild(listItem);
  }
}

function createServicesDiv(navItems, pageStyles, currentId) {
  // Создаем контейнер для списка услуг
  const container = document.createElement("div");
  applyStyles(container, pageStyles.servicesDiv);

  // Создаем заголовок и добавляем его в контейнер
  const title = document.createElement("h2");
  container.appendChild(title);

  // Создаем список ul и применяем стили
  const list = document.createElement("ul");
  applyStyles(list, { ...pageStyles.servicesList, listStyvarype: "disc" });

  // Получаем дочерние элементы текущего пункта или верхнего уровня, если нет дочерних
  const childItems = getItemsByParent(navItems, currentId);
  var itemsToRender;
  if (childItems.length > 0) {
    itemsToRender = childItems;
  } else {
    itemsToRender = getItemsByParent(navItems, "0");
  }

  renderItems(itemsToRender, list, pageStyles);

  // Добавляем список в контейнер
  container.appendChild(list);
  return container;
}

function createRightTopgDiv(data, pageStyles, formId, source) {
  const container = document.createElement("div");
  applyStyles(container, pageStyles.testingDiv);

  var formData = null;
  if (formId && source) {
      if (source === "news") {
          for (var i = 0; i < data.form.data.news.length; i++) {
              if (data.form.data.news[i].id === formId) {
                  formData = data.form.data.news[i];
                  break;
              }
          }
      } else if (source === "announcement") {
          for (var i = 0; i < data.form.data.announcement.length; i++) {
              if (data.form.data.announcement[i].id === formId) {
                  formData = data.form.data.announcement[i];
                  break;
              }
          }
      } else if (source === "navigation") {
          for (var i = 0; i < data.form.data.navigation.length; i++) {
              if (data.form.data.navigation[i].id === formId) {
                  formData = data.form.data.navigation[i];
                  break;
              }
          }
      }
  }

  const title = document.createElement("h2");
  title.textContent = formData ? formData.title : data.form.defaultTitle;
  container.appendChild(title);

  if (formData && formData.elements && formData.elements.length > 0) {
      for (var i = 0; i < formData.elements.length; i++) {
          const element = formData.elements[i];
          if (element.type === "text") {
              createTextElement(element, container, pageStyles);
          } else if (element.type === "list") {
              createListElement(element, container, pageStyles);
          } else if (element.type === "image") {
              createImageElement(element, container, pageStyles);
          }
      }
  }

  return container;
}

function createNewsDiv(newsData, pageStyles) {
  if (belhardSiteData.news.amountOfShownNews.formPageAmount <= 0) return null;

  const container = document.createElement("div");
  applyStyles(container, pageStyles.newsDiv);

  const title = document.createElement("h2");
  title.textContent = newsData.title;
  container.appendChild(title);

  var shownCount = 0;
  for (var i = newsData.items.length - 1; i >= 0 && shownCount < belhardSiteData.news.amountOfShownNews.formPageAmount; i--) {
      const newsItem = newsData.items[i];
      newsItem.source = "news"; // Добавляем source
      const newsBlock = document.createElement("div");
      applyStyles(newsBlock, pageStyles.newsBlock);

      const newsLink = document.createElement("a");
      newsLink.textContent = newsItem.text;
      applyStyles(newsLink, pageStyles.newsText);

      (function (item) {
          newsLink.addEventListener('click', function (event) {
              event.preventDefault();
              if (item.type === "rebuild") {
                  document.body.innerHTML = "";
                  applyStyles(document.body, window.defaultStyles.churchForm.bodyStyleScroll);
              }
              if (item.scripts) {
                  try {
                      for (const scriptId of item.scripts) {
                          const scriptFn = belhardSiteData.scriptsConfig[scriptId];
                          if (typeof scriptFn === 'function') {
                              scriptFn(item);
                          } else {
                              console.warn(`Script ${scriptId} is not a function`);
                          }
                      }
                  } catch (e) {
                      console.error('Error executing scripts:', e);
                  }
              }
          });
      })(newsItem);

      newsBlock.appendChild(newsLink);
      const newsDate = document.createElement("span");
      newsDate.textContent = newsItem.date;
      applyStyles(newsDate, pageStyles.newsDate);
      newsBlock.appendChild(newsDate);

      container.appendChild(newsBlock);
      shownCount++;
  }

  return container;
}

function createTextElement(element, container, pageStyles) {
  // Создаем абзац с текстом
  const p = document.createElement("p");
  p.textContent = element.content;
  // Применяем стили, если они указаны
  if (element.style && pageStyles[element.style]) {
    applyStyles(p, pageStyles[element.style]);
  }
  container.appendChild(p);
}

function createListElement(element, container, pageStyles) {
  // Создаем список ul
  const ul = document.createElement("ul");
  // Применяем стили, если они указаны
  if (element.style && pageStyles[element.style]) {
    applyStyles(ul, pageStyles[element.style]);
  }
  // Добавляем элементы списка
  for (var i = 0; i < element.content.length; i++) {
    const itemText = element.content[i];
    const li = document.createElement("li");
    li.textContent = itemText;
    ul.appendChild(li);
  }
  container.appendChild(ul);
}

function createImageElement(element, container, pageStyles) {
  // Создаем элемент изображения
  const img = document.createElement("img");
  img.src = element.content;
  img.alt = element.alt || "Image";
  // Применяем стили, если они указаны
  if (element.style && pageStyles[element.style]) {
    applyStyles(img, pageStyles[element.style]);
  }
  container.appendChild(img);
}
