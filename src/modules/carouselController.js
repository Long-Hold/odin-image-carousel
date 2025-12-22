const CAROUSEL_CONTAINER = document.querySelector('.carousel-outer');
const CAROUSEL = document.querySelector('.carousel');

export function controlCarouselTransitions() {
    CAROUSEL_CONTAINER.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
            transitionCarouselImage(event.target.dataset.direction);
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