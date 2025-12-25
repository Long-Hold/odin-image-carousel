import { beginAutoTransition } from "./carouselAutoTransition";

const CAROUSEL_CONTAINER = document.querySelector(".carousel-outer");
const CAROUSEL = document.querySelector(".carousel");
const CAROUSEL_INDICATOR = document.querySelector(".carousel-indicator");

const IMAGES_ARRAY = [...CAROUSEL.querySelectorAll(".carousel-img-container")];
const INDICATOR_ARRAY = [...CAROUSEL_INDICATOR.querySelectorAll("li")];
let CAROUSEL_INDEX = 0;

export function controlCarouselTransitions() {
  initializeArrayIndex();
  initializeCarouselListeners();
  beginAutoTransition();
}

/**
 * Initializes the index value of the global index variable based on
 * which child indicator element has the active class.
 */
function initializeArrayIndex() {
  CAROUSEL_INDEX = INDICATOR_ARRAY.findIndex((element) => {
    return element.classList.contains("active");
  });
}

function initializeCarouselListeners() {
  CAROUSEL_CONTAINER.addEventListener("click", (event) => {
    if (event.target instanceof HTMLButtonElement) {
      const clickedButton = event.target;
      handleCarouselControlClick(clickedButton);
    }

    if (event.target instanceof HTMLLIElement) {
      const slideTo = event.target.dataset.slideTo;
      handleIndicatorClick(slideTo);
    }
  });
}

function handleIndicatorClick(slideTo) {
  removeCurrentActiveClassElements();
  CAROUSEL_INDEX = Number(slideTo) - 1;
  setActiveElements();
}

function handleCarouselControlClick(clickedButton) {
  const direction = clickedButton.dataset.direction;

  if (direction === "next") {
    removeCurrentActiveClassElements();
    incrementCarouselIndex();
    setActiveElements();
  }

  if (direction === "previous") {
    removeCurrentActiveClassElements();
    decrementCarouselIndex();
    setActiveElements();
  }
}

function removeCurrentActiveClassElements() {
  IMAGES_ARRAY[CAROUSEL_INDEX].classList.remove("active");
  INDICATOR_ARRAY[CAROUSEL_INDEX].classList.remove("active");
}

function setActiveElements() {
  IMAGES_ARRAY[CAROUSEL_INDEX].classList.add("active");
  INDICATOR_ARRAY[CAROUSEL_INDEX].classList.add("active");
}

function incrementCarouselIndex() {
  if (CAROUSEL_INDEX !== INDICATOR_ARRAY.length - 1) {
    CAROUSEL_INDEX += 1;
  } else {
    CAROUSEL_INDEX = 0;
  }
}

function decrementCarouselIndex() {
  if (CAROUSEL_INDEX > 0) {
    CAROUSEL_INDEX -= 1;
  } else {
    CAROUSEL_INDEX = INDICATOR_ARRAY.length - 1;
  }
}
