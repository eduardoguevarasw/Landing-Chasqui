document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.imagen-container');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            imagenes.forEach(item => item.classList.remove('expandido'));
            imagen.classList.add('expandido');
        });
    });
});

// Añade estos scripts al final del archivo JS existente

document.getElementById("navbar-toggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
  });
  