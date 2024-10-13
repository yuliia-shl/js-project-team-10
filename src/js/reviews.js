import { Swiper, Navigation, Keyboard, axios, iziToast } from './libs';
const refs = {
swiper: document.querySelector('.reviews-container'),
swiperNext: document.querySelector('.review-button-next'),
swiperPrev: document.querySelector('.review-button-prev'),
reviewsList: document.querySelector('.reviews-list'),
};
document.addEventListener('DOMContentLoaded', renderReviews);
const swiperForReviews = new Swiper(refs.swiper, {
grabCursor: true,
direction: 'horizontal',
autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
},
slidesPerView: 1,
spaceBetween: 16,
breakpoints: {
    768: {
    slidesPerView: 1,
    },
    1440: {
    slidesPerView: 2,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    },
},
modules: [Navigation, Keyboard],
navigation: {
    nextEl: refs.swiperNext,
    prevEl: refs.swiperPrev,
},
keyboard: {
    enabled: true,
},
});
async function getReviews() {
const response = (
    await axios.get('https://portfolio-js.b.goit.study/api/reviews')
).data;
return response;
}
async function renderReviews() {
    try {
        const reviewsData = await getReviews();
        const markup = reviewsData
            .map(({ author, last_name, avatar_url, review }) => {
                if (author === "Natalia" && last_name === "Shevchenko") {
                    return `
                        <li class="reviews-list-item swiper-slide">
                            <p class="reviews-text">Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were
                                completed on time and the result exceeded my expectations</p>
                            <div class="reviewer-info">
                                <img class="reviewers-avatar" src="/mnt/data/2d39cdc7457392ed8725fff74b7f7ab6.png" alt="reviewer avatar" loading="lazy" />
                                <h3 class="reviewers-name">Natalia Shevchenko</h3>
                            </div>
                        </li>`;
                } else if (author === "Dmytro" && last_name === "Nazarenko") {
                    return `
                        <li class="reviews-list-item swiper-slide">
                            <p class="reviews-text"> I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are
                                undeniable. Cooperation with him always brings impressive results.</p>
                            <div class="reviewer-info">
                                <img class="reviewers-avatar" src="/mnt/data/5e6640d08d65d54b4b69830550340abc.png" alt="reviewer avatar" loading="lazy" />
                                <h3 class="reviewers-name">Dmytro Nazarenko</h3>
                            </div>
                        </li>`;
                } 
            })
            .join("");

        refs.reviewsList.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        refs.reviewsList.insertAdjacentHTML(
            'beforeend',
            '<li class="error-mock"><p>SORRY, NOTHING TO SHOW HERE</p></li>'
        );
        iziToast.info({
            message: 'We`re sorry, but reviews list is currently unavailable',
            position: 'bottomRight',
            timeout: 2000,
            icon: '',
        });
    }
}
