const adaptiveElements = document.querySelectorAll('[data-screen]');

const screenChecker = () => {
    const windowWidth = window.innerWidth;
    adaptiveElements.forEach((element) => {
        if (
            windowWidth <= Number(element.getAttribute('data-screen')) &&
            element.getAttribute('data-this')
        ) {
            element.style.display = 'none';
        } else if (
            windowWidth <= Number(element.getAttribute('data-screen')) &&
            !element.getAttribute('data-this')
        ) {
            const span = element.querySelector('span');
            span ? (span.style.display = 'none') : '';
        } else {
            const span = element.querySelector('span');
            span ? (span.style.display = 'block') : '';
        }
    });
};

window.addEventListener('DOMContentLoaded', screenChecker);

const burger = document.querySelector('.burger-filled');
const header = document.querySelector('.header');
const menu = document.querySelector('.header__nav');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
        header ? (menu.style.top = `${header.offsetHeight}px`) : '';
    });
}

const copyrightElements = document.querySelectorAll('.copyright time');

if (copyrightElements.length > 0) {
    const currentYear = new Date().getFullYear();

    copyrightElements.forEach((element) => {
        const existingYear = parseInt(element.textContent);
        if (existingYear !== currentYear) {
            element.textContent = currentYear;
        }
    });
}

function sliders() {
    let sliders = document.querySelectorAll('.swiper');
    if (sliders) {
        for (let index = 0; index < sliders.length; index++) {
            let slider = sliders[index];
            if (!slider.classList.contains('swiper-bild')) {
                let slider_items = slider.children;
                if (slider_items) {
                    for (let index = 0; index < slider_items.length; index++) {
                        let el = slider_items[index];
                        el.classList.add('swiper-slide');
                    }
                }
                let slider_content = slider.innerHTML;
                let slider_wrapper = document.createElement('div');
                slider_wrapper.classList.add('swiper-wrapper');
                slider_wrapper.innerHTML = slider_content;
                slider.innerHTML = '';
                slider.appendChild(slider_wrapper);
                slider.classList.add('swiper-bild');

                if (slider.classList.contains('swiper_scroll')) {
                    let sliderScroll = document.createElement('div');
                    sliderScroll.classList.add('swiper-scrollbar');
                    slider.appendChild(sliderScroll);
                }
            }
            if (slider.classList.contains('gallery')) {
                // slider.data('lightGallery').destroy(true);
            }
        }
        sliders_bild_callback();
    }

    function sliders_bild_callback(params) {}

    let sliderScollItems = document.querySelectorAll('.swiper-scroll');
    if (sliderScollItems.length > 0) {
        for (let index = 0; index < sliderScollItems.length; index++) {
            const sliderScrollItem = sliderScollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false,
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }

    function sliders_bild_callback(params) {}
}

sliders();
