// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el icono del menú
    const menuIcon = document.getElementById('menuIcon');
    // Seleccionar la lista de navegación (el menú)
    const navMenu = document.querySelector('.menu nav ul');

    // Agregar un evento de clic al icono del menú
    menuIcon.addEventListener('click', function() {
        // Alternar la clase "show" para mostrar u ocultar el menú
        navMenu.classList.toggle('show');
    });
});

//CARRUSEL
// scripts.js

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const wrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
let index = 0;

function showSlide(n) {
  if (n >= slides.length) {
    index = 0;
  } else if (n < 0) {
    index = slides.length - 1;
  } else {
    index = n;
  }
  wrapper.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));

showSlide(index);


