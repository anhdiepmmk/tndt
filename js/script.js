document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Carousel Population
    const populateCarousel = () => {
        const indicatorsContainer = document.getElementById('hero-indicators');
        const slidesContainer = document.getElementById('hero-slides');
        const totalImages = 29;

        if (!indicatorsContainer || !slidesContainer) return;

        for (let i = 1; i <= totalImages; i++) {
            // Create Indicator
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.bsTarget = '#heroCarousel';
            btn.dataset.bsSlideTo = i - 1;
            btn.ariaLabel = `Slide ${i}`;
            if (i === 1) {
                btn.classList.add('active');
                btn.ariaCurrent = 'true';
            }
            indicatorsContainer.appendChild(btn);

            // Create Slide
            const slideDiv = document.createElement('div');
            slideDiv.className = `carousel-item h-100 ${i === 1 ? 'active' : ''}`;

            const img = document.createElement('img');
            img.src = `./product-images/1 (${i}).jpg`;
            img.className = 'd-block w-100 h-100';
            img.alt = `Product Image ${i}`;
            // Error handling for missing images
            img.onerror = function () { this.parentElement.style.display = 'none'; };

            slideDiv.appendChild(img);
            slidesContainer.appendChild(slideDiv);
        }
    };

    // Initialize
    populateCarousel();

    // Populate About Carousel
    const populateAboutCarousel = () => {
        const aboutIndicators = document.querySelector('#aboutCarousel .carousel-indicators');
        const aboutSlides = document.querySelector('#aboutCarousel .carousel-inner');
        const totalImages = 29;

        if (!aboutIndicators || !aboutSlides) return;

        // Clear existing content
        aboutIndicators.innerHTML = '';
        aboutSlides.innerHTML = '';

        for (let i = 1; i <= totalImages; i++) {
            // Create Indicator
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.bsTarget = '#aboutCarousel';
            btn.dataset.bsSlideTo = i - 1;
            btn.ariaLabel = `Slide ${i}`;
            if (i === 1) {
                btn.classList.add('active');
                btn.ariaCurrent = 'true';
            }
            aboutIndicators.appendChild(btn);

            // Create Slide
            const slideDiv = document.createElement('div');
            slideDiv.className = `carousel-item ${i === 1 ? 'active' : ''}`;

            const img = document.createElement('img');
            img.src = `./product-images/1 (${i}).jpg`;
            img.className = 'img-fluid about-img w-100';
            img.alt = `Product Image ${i}`;
            // Error handling for missing images
            img.onerror = function () { this.parentElement.style.display = 'none'; };

            slideDiv.appendChild(img);
            aboutSlides.appendChild(slideDiv);
        }
    };

    // Initialize About Carousel
    populateAboutCarousel();

    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
});
