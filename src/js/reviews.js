import { Swiper } from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.min.css';
import axios from 'axios';
document.addEventListener('DOMContentLoaded', renderReviews);

export const refs = {
  swiper: document.querySelector('.reviews-container'),
  swiperNext: document.querySelector('.review-button-next'),
  swiperPrev: document.querySelector('.review-button-prev'),
  reviewsList: document.querySelector('.reviews-list'),
};

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
  autoHeight: true,
  breakpoints: {
    768: {
      slidesPerView: 1,
      autoHeight: false,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  modules: [Navigation, Pagination, Keyboard],
  navigation: {
    nextEl: refs.swiperNext,
    prevEl: refs.swiperPrev,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
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
      .map(({ author, avatar_url, review }) => {
        return `<li class="reviews-list-item swiper-slide">
                    <p class="reviews-text">${review}</p>
                    <div class="reviewer-info">
                        <img class="reviewers-avatar" src="${avatar_url}" alt=" ${author} photo" loading="lazy" />
                        <h3 class="reviewers-name">${author}</h3>
                    </div>
                </li>`;
      })
      .join('');
    refs.reviewsList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    refs.reviewsList.insertAdjacentHTML(
      'beforeend',
      '<li class="error-mock"><p>SORRY, NOTHING TO SHOW HERE</p></li>'
    );
  }
}
