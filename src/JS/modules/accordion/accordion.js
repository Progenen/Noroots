export function initAccordion(containerSelector, itemSelector) {
    const container = document.querySelector(containerSelector);

    const accordions = container.querySelectorAll(itemSelector);

    accordions.forEach((accordion) => {
        const header = accordion.querySelector('.result__content-accordion-header');

        header.addEventListener('click', () => {
            accordions.forEach((item) => {
                if (item !== accordion) {
                    item.classList.remove('js-active');
                }
            });

            accordion.classList.toggle('js-active');
        });
    });
}
