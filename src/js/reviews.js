import { Swiper } from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.min.css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
  breakpoints: {
    768: {
      slidesPerView: 1,
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
  const response = await axios.get(
    'https://portfolio-js.b.goit.study/api/review'
  );
  if (response.status !== 200) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.data;
}

let hasError = false; // Змінна для відстеження помилки

async function renderReviews() {
  try {
    const reviewsData = await getReviews();
    const markup = reviewsData
      .map(({ author, avatar_url, review }) => {
        return `<li class="reviews-list-item swiper-slide">
                    <p class="reviews-text">${review}</p>
                    <div class="reviewer-info">
                        <img class="reviewers-avatar" src="${avatar_url}" alt=" ${author}'s photo" loading="lazy" />
                        <h3 class="reviewers-name">${author}</h3>
                    </div>
                </li>`;
      })
      .join('');
    console.dir(swiperForReviews.params.breakpoints);
    refs.reviewsList.insertAdjacentHTML('beforeend', markup);
    // console.dir(swiperForReviews);
  } catch (error) {
    hasError = true; // Встановлюємо прапорець, якщо сталася помилка
    swiperForReviews.params.breakpoints[1280].slidesPerView = 1;
    swiperForReviews.params.breakpoints[1280].spaceBetween = 16;
    swiperForReviews.update();

    console.dir(swiperForReviews.params.breakpoints);
    refs.reviewsList.insertAdjacentHTML(
      'beforeend',
      '<li class="error-mock"><p>Not found</p></li>'
    );
    console.error('Error fetching or rendering reviews:', error);
  }
}

// Функція для показу інформаційного вікна
function showErrorMessage() {
  if (hasError) {
    iziToast.error({
      message: 'No reviews were found! Please try again later.',
      position: 'bottomRight',
    });
  }
}

// Відстежуємо, коли секція відгуків стає видимою
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      showErrorMessage();
    }
  });
});

// Відстежуємо контейнер, в якому знаходяться відгуки
observer.observe(refs.swiper);
