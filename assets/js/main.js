const accordionItems =
    document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {

    const header =
        item.querySelector('.accordion-header');

    header.addEventListener('click', () => {

        accordionItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }

        });

        item.classList.toggle('active');

    });

});

/* =========================
   ABOUT TOGGLE
========================= */

const aboutExpandable =
    document.querySelector('.about-expandable');

if (aboutExpandable) {

    const aboutToggle =
        aboutExpandable.querySelector('.about-toggle');

    aboutToggle.addEventListener('click', () => {

        aboutExpandable.classList.toggle('active');

    });

}