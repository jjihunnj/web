// Кнопка «Наверх»
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Порог появления (в пикселях)
const SHOW_AFTER = 300;

// Следим за прокруткой и показываем/скрываем кнопку
window.addEventListener('scroll', () => {
  if (window.scrollY > SHOW_AFTER) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

// Плавно прокручиваем к началу страницы
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
