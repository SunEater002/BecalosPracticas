let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
    images[currentIndex].style.display = 'none'; // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % totalImages; // Incrementa el índice
    images[currentIndex].style.display = 'block'; // Muestra la nueva imagen
});

document.querySelector('.prev').addEventListener('click', () => {
    images[currentIndex].style.display = 'none'; // Oculta la imagen actual
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Decrementa el índice
    images[currentIndex].style.display = 'block'; // Muestra la nueva imagen
});