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
function slowScrollToTop() {
  const scrollSpeed = 10; // Менше значення робить прокручування повільнішим
  const currentScroll = window.scrollY;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - scrollSpeed);
    requestAnimationFrame(slowScrollToTop);
  }
}

backToTopButton.addEventListener('click', () => {
  slowScrollToTop();
});
