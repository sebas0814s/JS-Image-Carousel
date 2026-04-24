// Image Carousel - Vanilla JavaScript
(function() {
    let currentSlide = 0;
    let isPlaying = true;
    let intervalId = null;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const toggleBtn = document.getElementById('toggleBtn');
    const totalSlides = slides.length;
    
    // Auto-play carrusel
    function startCarousel() {
        intervalId = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }, 3000);
        toggleBtn.innerHTML = '⏸️ Detener';
        isPlaying = true;
    }
    
    function stopCarousel() {
        clearInterval(intervalId);
        toggleBtn.innerHTML = '▶️ Reanudar';
        isPlaying = false;
    }
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    // Change slide by +/- 1
    window.changeSlide = function(n) {
        stopCarousel();
        currentSlide = (currentSlide + n + totalSlides) % totalSlides;
        showSlide(currentSlide);
        startCarousel();
    };
    
    // Go to specific slide
    window.goToSlide = function(n) {
        stopCarousel();
        showSlide(n);
        startCarousel();
    };
    
    // Toggle play/pause
    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopCarousel();
        } else {
            startCarousel();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
    });
    
    // Start
    startCarousel();
    console.log('🎠 Carousel cargado! Usa ← → para navegar');
})();
