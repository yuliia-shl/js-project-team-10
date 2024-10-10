const form = document.getElementById('contactForm');

// Відправка форми та обробка відповіді сервера
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    email: document.getElementById('email').value,
    comment: document.getElementById('message').value,
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.title && data.message) {
        document.querySelector('#successPopup h3').textContent = data.title;
        document.querySelector('#successPopup p').textContent = data.message;
        document.getElementById('successPopup').style.display = 'flex';
        form.reset(); // Очищення форми при успішній відправці
      } else {
        document.getElementById('errorPopup').style.display = 'flex';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('errorPopup').style.display = 'flex';
      // Підтримка введених даних при невдалій відправці
      document.getElementById('email').value = formData.email;
      document.getElementById('message').value = formData.comment;
    });
});

// Закриття попап-вікон
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function () {
    button.closest('.popup').style.display = 'none';
  });
});

// Закриття попап-вікна при натисканні поза його межами
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// Елементи для відкриття та закриття модального меню
const menuToggle = document.getElementById('menuToggle');
const modalMenu = document.getElementById('modalMenu');
const closeMenu = document.getElementById('closeMenu');

// Відкриття меню при натисканні на кнопку гамбургер-меню
menuToggle.addEventListener('click', () => {
  modalMenu.classList.add('active');
});

// Закриття меню при натисканні на хрестик
closeMenu.addEventListener('click', () => {
  modalMenu.classList.remove('active');
});

// Закриття меню при натисканні поза межами меню
modalMenu.addEventListener('click', event => {
  if (event.target === modalMenu) {
    modalMenu.classList.remove('active');
  }
});
