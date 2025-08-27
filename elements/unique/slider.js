function preloadImages(imageUrls) {
    return Promise.all(
      imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
}

async function createSlider(styles, images) {
  await preloadImages([
    ...images.slider,
    images.arrows.left,
    images.arrows.right,
  ]).catch((err) => {
    console.error("Error preloading images:", err);
  });

  const extraContainer = createElement("div", {}, null);
  applyStyles(extraContainer, styles.extraContainer);
  document.body.insertBefore(extraContainer, document.body.firstChild);

  const sliderContainer = createElement(
    "div",
    { id: "sliderContainer" },
    extraContainer
  );
  applyStyles(sliderContainer, styles.sliderContainer);

  const sliderWrapper = createElement("div", {}, sliderContainer);
  applyStyles(sliderWrapper, styles.sliderWrapper);

  const extendedImages = [
    images.slider[images.slider.length - 1],
    ...images.slider,
    images.slider[0],
  ];
  extendedImages.forEach((url) => {
    const slide = createElement("div", {}, sliderWrapper);
    applyStyles(slide, styles.slide);
    const img = createElement("img", { src: url }, slide);
    applyStyles(img, styles.image);
  });

  const dotsContainer = createElement(
    "div",
    { id: "dotsContainer" },
    extraContainer
  );
  applyStyles(dotsContainer, styles.dotsContainer);

  images.slider.forEach((_, j) => {
    const dot = createElement("span", { class: "dot" }, dotsContainer);
    applyStyles(dot, styles.dot);
    dot.addEventListener("click", () => showSlide(j + 1));
  });

  let currentIndex = 1;
  let autoSlideInterval;
  const totalSlides = extendedImages.length;
  let isAnimating = false;

  function updateDots() {
    const dots = dotsContainer.children;
    const dotIndex = Math.min(
      Math.max(currentIndex - 1, 0),
      images.slider.length - 1
    );
    Array.from(dots).forEach((dot, k) => {
      applyStyles(dot, styles.dot);
      if (k === dotIndex) applyStyles(dot, styles.activeDot);
    });
  }

  function showSlide(index, skipTransition = false) {
    if (isAnimating) return;
    isAnimating = true;

    sliderWrapper.style.transition = skipTransition
      ? "none"
      : "transform 0.5s ease";
    sliderWrapper.style.transform = `translateX(${-index * 100}vw)`;

    const handleTransitionEnd = () => {
      sliderWrapper.removeEventListener("transitionend", handleTransitionEnd);
      if (index >= totalSlides - 1) {
        sliderWrapper.style.transition = "none";
        currentIndex = 1;
        sliderWrapper.style.transform = `translateX(${-currentIndex * 100}vw)`;
      } else if (index <= 0) {
        sliderWrapper.style.transition = "none";
        currentIndex = totalSlides - 2;
        sliderWrapper.style.transform = `translateX(${-currentIndex * 100}vw)`;
      } else {
        currentIndex = index;
      }
      isAnimating = false;
      updateDots();
    };

    if (!skipTransition) {
      sliderWrapper.addEventListener("transitionend", handleTransitionEnd);
    } else {
      handleTransitionEnd();
    }
  }

  const arrowWrapper = createElement("div", {}, sliderContainer);
  applyStyles(arrowWrapper, styles.arrowWrapper);

  const arrowContainer = createElement("div", {}, arrowWrapper);
  applyStyles(arrowContainer, styles.innerArrowContainer);

  const prevButton = createElement(
    "div",
    { class: "prev-arrow" },
    arrowContainer
  );
  applyStyles(prevButton, styles.arrow);
  const prevImg = createElement("img", { src: images.arrows.left }, prevButton);
  applyStyles(prevImg, styles.arrowImage);
  prevButton.addEventListener("click", () => showSlide(currentIndex - 1));

  const nextButton = createElement(
    "div",
    { class: "next-arrow" },
    arrowContainer
  );
  applyStyles(nextButton, styles.arrow);
  const nextImg = createElement(
    "img",
    { src: images.arrows.right },
    nextButton
  );
  applyStyles(nextImg, styles.arrowImage);
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  let isDragging = false;
  let startX = 0;
  let initialTransform = 0;

  function handleDragStart(e) {
    if (isAnimating) return;
    isDragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    initialTransform =
      parseFloat(
        sliderWrapper.style.transform
          .replace("translateX(", "")
          .replace("vw)", "")
      ) || -currentIndex * 100;
    sliderWrapper.style.transition = "none";
    stopAutoSlide();
    e.preventDefault();
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = ((currentX - startX) / window.innerWidth) * 100;
    sliderWrapper.style.transform = `translateX(${
      initialTransform + deltaX
    }vw)`;
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > window.innerWidth / 3) {
      showSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
    } else {
      showSlide(currentIndex);
    }
    startAutoSlide();
  }

  sliderWrapper.addEventListener("mousedown", handleDragStart);
  sliderWrapper.addEventListener("mousemove", handleDragMove);
  sliderWrapper.addEventListener("mouseup", handleDragEnd);
  sliderWrapper.addEventListener("mouseleave", handleDragEnd);
  sliderWrapper.addEventListener("touchstart", handleDragStart);
  sliderWrapper.addEventListener("touchmove", handleDragMove);
  sliderWrapper.addEventListener("touchend", handleDragEnd);

  function updateSliderStyles() {
    const isMobile = window.innerWidth <= 768;
    applyStyles(
      extraContainer,
      isMobile ? styles.mobile.extraContainer : styles.extraContainer
    );
    applyStyles(
      arrowWrapper,
      isMobile ? styles.mobile.arrowWrapper : styles.arrowWrapper
    );
    applyStyles(
      dotsContainer,
      isMobile ? styles.mobile.dotsContainer : styles.dotsContainer
    );
    Array.from(sliderWrapper.children).forEach((slide) => {
      applyStyles(slide, isMobile ? styles.mobile.slide : styles.slide);
      applyStyles(
        slide.children[0],
        isMobile ? styles.mobile.image : styles.image
      );
    });
  }

  window.addEventListener("resize", updateSliderStyles);
  window.addEventListener("load", () => {
    updateSliderStyles();
    showSlide(currentIndex, true);
    startAutoSlide();
  });

  updateSliderStyles();
  showSlide(currentIndex, true);
  startAutoSlide();
}