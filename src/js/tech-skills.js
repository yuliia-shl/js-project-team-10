document.addEventListener('DOMContentLoaded', function () {
  const techSkillsSection = document.querySelector('.tech-skills-section');
  const marqueeContainerTop = document.querySelector('.tech-marquee-top');
  const marqueeContainerBottom = document.querySelector('.tech-marquee-bottom');

  // Копіюємо елементи для дублювання
  const cloneMarqueeItems = container => {
    const items = container.innerHTML;
    container.innerHTML += items;
  };

  // Викликаємо дублювання для обох контейнерів
  cloneMarqueeItems(marqueeContainerTop);
  cloneMarqueeItems(marqueeContainerBottom);

  // Запускаємо анімацію
  let marqueeSpeed = 1; // Швидкість анімації
  let positionTop = 0;
  let positionBottom = 0;

  const animateMarquee = () => {
    positionTop -= marqueeSpeed;
    positionBottom += marqueeSpeed;

    // Якщо закінчується перший контейнер
    if (Math.abs(positionTop) >= marqueeContainerTop.scrollWidth / 2) {
      positionTop = 0;
    }

    // Якщо закінчується другий контейнер
    if (Math.abs(positionBottom) >= marqueeContainerBottom.scrollWidth / 2) {
      positionBottom = 0;
    }

    marqueeContainerTop.style.transform = `translateX(${positionTop}px)`;
    marqueeContainerBottom.style.transform = `translateX(${positionBottom}px)`;

    requestAnimationFrame(animateMarquee);
  };

  // Запускаємо анімацію
  animateMarquee();
});
