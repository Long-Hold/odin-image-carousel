const CAROUSEL_CONTAINER = document.querySelector('.carousel-outer');
const CAROUSEL = document.querySelector('.carousel');
const CAROUSEL_INDICATOR = document.querySelector('.carousel-indicator');

export function controlCarouselTransitions() {
    CAROUSEL_CONTAINER.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
            transitionCarouselImage(event.target.dataset.direction);
        }

        if (event.target instanceof HTMLLIElement) {
            displayIndicatedImage(event.target, event.target.dataset.slideTo)
        }
    });
}

function transitionCarouselImage(transitionTo) {
    const currentImage = CAROUSEL.querySelector('.active');
    if (transitionTo === 'next') {
        currentImage.classList.remove('active');
        const nextActiveImage = getNextActiveImageElement(currentImage, transitionTo);
        nextActiveImage.classList.add('active');
    }

    if (transitionTo === 'previous') {
        currentImage.classList.remove('active');
        const previousActiveImage = getNextActiveImageElement(currentImage, transitionTo);
        previousActiveImage.classList.add('active');
    }
}

function getNextActiveImageElement(currentImage, transitionTo) {
    if (transitionTo === 'next' && currentImage.nextElementSibling === null) {
        return CAROUSEL.querySelector('.carousel-img-container');
    }

    if (transitionTo === 'previous' && currentImage.previousElementSibling === null) {
        return CAROUSEL.querySelector(':last-child.carousel-img-container');
    }

    if (transitionTo === 'next') {
        return currentImage.nextElementSibling;
    }

    if (transitionTo === 'previous') {
        return currentImage.previousElementSibling;
    }
}

function displayIndicatedImage(indicatorElement, slideTo) {
    const activeImage = CAROUSEL.querySelector('.active');
    const activeIndicator = CAROUSEL_INDICATOR.querySelector('.active');
    const imagesArray = [...CAROUSEL.querySelectorAll('.carousel-img-container')];

    activeImage.classList.remove('active');
    activeIndicator.classList.remove('active');

    imagesArray[slideTo - 1].classList.add('active');
    indicatorElement.classList.add('active');
}