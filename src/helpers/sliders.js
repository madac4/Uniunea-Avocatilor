document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.slider-hero__body')) {
        new Swiper('.slider-hero__body', {
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            touchRatio: 0,
            simulateTouch: false,
            loop: true,
            preloadImages: false,
            lazy: true,
            pagination: {
                el: '.slider-hero-controls__dots',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-hero-controls .slider-arrow__next',
                prevEl: '.slider-hero-controls .slider-arrow__prev',
            },
        });
    }
});
