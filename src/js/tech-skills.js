document.addEventListener('DOMContentLoaded', function () {
  // Вибираємо елемент секції
  const techSkillsSection = document.querySelector('.tech-skills-section');

  const marqueeItems = document.querySelectorAll('.tech-marquee-item');

  // Функція для запуску анімації
  const startAnimation = () => {
    marqueeItems.forEach(item => {
      item.classList.add('animation-running');
      item.classList.remove('animation-paused');
    });
  };

  // Функція для зупинки анімації
  const stopAnimation = () => {
    marqueeItems.forEach(item => {
      item.classList.add('animation-paused');
      item.classList.remove('animation-running');
    });
  };

  // Використовую Intersection Observer для моніторингу секції
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation(); // Запускаю анімацію, коли секція у в'юпорті
        } else {
          stopAnimation(); // Зупиняю анімацію, коли секція виходить з в'юпорту
        }
      });
    },
    { threshold: 0.1 } // Запускати, коли секція на 10% у в'юпорті
  );

  // Стежимо за секцією
  if (techSkillsSection) {
    observer.observe(techSkillsSection);
  }
});
