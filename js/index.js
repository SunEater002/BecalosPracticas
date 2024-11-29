const sections = document.querySelectorAll('.seccion1');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        const totalSections = sections.length;
        sections.forEach((section, index) => {
            section.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : sections.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < sections.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Inicializa el carrusel
    updateCarousel();