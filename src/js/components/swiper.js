var swiper = new Swiper(".slider-inner", {
    slidesPerView: 'auto',
});
// slider-mob
var swiper6 = new Swiper(".slider-mob", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
        },
        next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
        },
    },
});
// end slider-mob