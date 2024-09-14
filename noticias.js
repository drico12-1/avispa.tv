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