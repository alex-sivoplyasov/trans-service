var el = document.querySelector('.hero__list-wrapper');

// console.log(el);

var swiper = new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // breakpoints: {
    //   // when window width is <= 320px
    //   320: {
    //     slidesPerView: 1
    //   },
    //   // when window width is <= 480px
    //   480: {
    //     slidesPerView: 2
    //   },
    //   // when window width is <= 640px
    //   640: {
    //     slidesPerView: 3
    //   }
    // }
});