const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




const titles = document.querySelectorAll('.ard');
const items = document.querySelectorAll('.acardion__item');


titles.forEach(label => {
    label.addEventListener('click', (e) => {
        const cleackedTitles = e.currentTarget;
        const element = cleackedTitles.parentNode;
        if (element.classList.contains('acardion__item--active')) {
            element.classList.remove('acardion__item--active');
        } else {
            items.forEach(element => {
                if (element.classList.contains('acardion__item--active')) {
                    element.classList.remove('acardion__item--active');
                }
            });
            element.classList.add('acardion__item--active');
        }
    });
})