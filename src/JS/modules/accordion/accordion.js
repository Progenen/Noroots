export function initAccordion(containerSelector, itemSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const accordions = container.querySelectorAll(itemSelector);

    accordions.forEach((accordion) => {
        const header = accordion.querySelector(".result__content-accordion-header");
        const content = accordion.querySelector(".result__content-accordion-content");

        if (!header || !content) return;

        header.addEventListener("click", () => {
            content.style.maxHeight = `${content.scrollHeight}px`;

            accordions.forEach((item) => {
                if (item !== accordion) {
                    item.classList.add("js-close");
                }
            });

            accordion.classList.toggle("js-close");
        });
    });
}
