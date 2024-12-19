document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const overlay = document.getElementById('overlay');
    const closeModalButton = document.querySelector('.catalog__modal--close');
    const catalogItems = document.querySelectorAll('.catalog__item');
  
    catalogItems.forEach(item => {
      item.addEventListener('click', () => {
        const imageSrc = item.querySelector('.catalog__image').src;
        const name = item.querySelector('.catalog__name').textContent;
        const price = item.querySelector('.catalog__price').textContent;
  
        modal.querySelector('.catalog__image').src = imageSrc;
        modal.querySelector('.catalog__name').textContent = name;
        modal.querySelector('.catalog__price').textContent = price;
  
        modal.style.display = 'block';  // Показываем модальное окно
        overlay.style.display = 'block';  // Показываем оверлей
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
      });
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';  // Скрываем модальное окно
      overlay.style.display = 'none';  // Скрываем оверлей
      document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === overlay) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
      }
    });
  });
  