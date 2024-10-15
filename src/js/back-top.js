// Отримуємо кнопку
export const backToTopButton = document.getElementById('backToTop');

// Відстежуємо прокручування
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.75) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Плавне повернення догори при натисканні
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
