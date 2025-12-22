const CAROUSEL_CONTAINER = document.querySelector('.carousel-outer');
const CAROUSEL_IMAGE_CONTAINER = document.querySelector('.carousel');

export function controlCarouselTransitions() {
    CAROUSEL_CONTAINER.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement || event.target instanceof HTMLOListElement) {
            transitionCarouselImage(event.target);
        }
    });
}

function transitionCarouselImage(transitionTo) {
    if (transitionTo instanceof HTMLButtonElement) {
        //TODO
    }
}