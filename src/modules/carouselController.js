const CAROUSEL_CONTAINER = document.querySelector('.carousel-outer');
const CAROUSEL = document.querySelector('.carousel');

const ACTIVE_CLASS = '.active';

export function controlCarouselTransitions() {
    CAROUSEL_CONTAINER.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target instanceof HTMLButtonElement) {
            transitionCarouselImage(event.target.dataset.direction);
        }
    });
}

function transitionCarouselImage(transitionTo) {
    const currentImage = CAROUSEL.querySelector(ACTIVE_CLASS);
    console.log(transitionTo);
    if (transitionTo === 'next') {
        currentImage.classList.remove('active');
        const nextActiveImage = currentImage.nextElementSibling;
        nextActiveImage.classList.add('active');
    }

    if (transitionTo === 'previous') {
        currentImage.classList.remove('active');
        const previousActiveImage = currentImage.previousElementSibling;
        previousActiveImage.classList.add('active');
    }
}