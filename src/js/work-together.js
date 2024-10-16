export const form = document.getElementById('contactForm');
export const emailInput = document.getElementById('email');
export const errorMessage = document.querySelector('.error-message');

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

// Закриття попап-вікна при натисканні Esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = 'none';
    });
  }
});

/* =====   invalid   ===== */
emailInput.addEventListener('input', function () {
  if (emailInput.validity.valid) {
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }
});
