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
function fastScrollToTop() {
  const scrollSpeed = 1; // Висока швидкість (чим вище число, тим швидше)
  const currentScroll = window.scrollY;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - currentScroll * scrollSpeed);
    requestAnimationFrame(fastScrollToTop);
  }
}

backToTopButton.addEventListener('click', fastScrollToTop);
