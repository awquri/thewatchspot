window.onload = function() {
    window.scrollTo(0, 0);
  };

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
  
        modal.style.display = 'block';  
        overlay.style.display = 'block';  
        document.body.style.overflow = 'hidden'; 
      });
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';  
      overlay.style.display = 'none'; 
      document.body.style.overflow = 'auto'; 
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === overlay) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; 
      }
    });
  });
  

const burgerButton = document.getElementById('burger-button'); 
const burgerMenu = document.getElementById('burger-menu'); 
const burgerClose = document.getElementById('burger-close'); 
const overlay = document.getElementById('burger-overlay'); 
const links = document.querySelectorAll('.burger-link');

const openMenu = () => {
  burgerMenu.classList.add('header__burger-menu--open'); 
  overlay.classList.add('active'); 
};

const closeMenu = () => {
  burgerMenu.classList.remove('header__burger-menu--open'); 
  overlay.classList.remove('active'); 
};

burgerButton.addEventListener('click', openMenu); 
burgerClose.addEventListener('click', closeMenu); 
overlay.addEventListener('click', closeMenu);
links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

