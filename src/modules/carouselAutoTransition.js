export function beginAutoTransition() {
    const controlSection = document.querySelector('.carousel-controls');
    const nextButton = controlSection.querySelector('.next>button');
    
    setInterval(transitionCarousel, 5000, nextButton);
}

function transitionCarousel(button) {
    button.click();
}  