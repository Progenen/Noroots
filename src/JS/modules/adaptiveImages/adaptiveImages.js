function initAdaptiveImages() {
    const adaptiveImages = document.querySelectorAll("[data-mob]");

    if (adaptiveImages && window.innerWidth <= 768) {
        adaptiveImages.forEach(el => {
            el.setAttribute("src", el.getAttribute("data-mob"));
        })
    }
}

export default initAdaptiveImages;