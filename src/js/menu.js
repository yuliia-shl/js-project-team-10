export const initHeader = () => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    if (anchors.length === 0) return;
    if (!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener('click', toggleMenu);
      });
      return;
    }
    anchors.forEach(anchor => {
      anchor.removeEventListener('click', toggleMenu);
    });
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
  document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset =
        document.querySelector('.header-navigation').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  // Theme
  const themeToggle = document.getElementById('switch');

  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggle.checked = true;
    }
  });

  // let checkbox = document.querySelector('#switch');
  // let body = document.querySelector('body');
  // let localStorageTheme = localStorage.getItem('theme');
  // const setThemeColor = () => {
  //   localStorageTheme === 'dark' ? setDarkMode() : setLightMode();
  // };
  // const checkModeSeting = () => {
  //   window
  //     .matchMedia('(prefers-color-scheme: dark')
  //     .addEventListener('change', () => {
  //       checkThemeChange();
  //     });
  // };
  // const checkThemeChange = () => {
  //   if (
  //     localStorageTheme == null &&
  //     window.matchMedia('(prefers-color-scheme: dark').matches
  //   ) {
  //     setDarkMode();
  //   } else if (
  //     localStorageTheme &&
  //     window.matchMedia('(prefers-color-scheme: dark').matches
  //   ) {
  //     setDarkMode();
  //   } else {
  //     setLightMode();
  //   }
  // };
  // const setDarkMode = () => {
  //   body.classList = 'dark';
  //   localStorage.setItem('theme', 'dark');
  //   checkbox.checked = true;
  // };
  // const setLightMode = () => {
  //   body.classList = 'light';
  //   localStorage.setItem('theme', 'light');
  //   checkbox.checked = false;
  // };
  // checkModeSeting();
  // checkThemeChange();
  // setThemeColor();
  // checkbox.addEventListener('click', () =>
  //   checkbox.checked ? setDarkMode() : setLightMode()
  // );
};

/* =====   menu options   ===== */


export const menu = document.addEventListener('DOMContentLoaded', function() {
  const openMenuButton = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.js-close-menu');
  const menuContainer = document.getElementById('mobile-menu');

  // Відкриває меню
  openMenuButton.addEventListener('click', function() {
    menuContainer.classList.add('active');
    openMenuButton.setAttribute('aria-expanded', 'true');
  });

  // Закриває меню
  closeMenuButton.addEventListener('click', function() {
    menuContainer.classList.remove('active');
    openMenuButton.setAttribute('aria-expanded', 'false');
  });

  // Закриває меню при кліку поза межами меню
  document.addEventListener('click', function(event) {
    if (!menuContainer.contains(event.target) && !openMenuButton.contains(event.target)) {
      menuContainer.classList.remove('active');
      openMenuButton.setAttribute('aria-expanded', 'false');
    }
  });
});
