'use strict';

{
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const ul = document.querySelector('.main ul');
    const slides = ul.children;
    const dots = [];
    let currentIndex = 0;

    function updateButtons() {
        prev.classList.remove('hidden');
        next.classList.remove('hidden');

        if (currentIndex === 0) {
            prev.classList.add('hidden');
        }

        // if (currentIndex === 2) {
        if (currentIndex === slides.length - 1) {
            next.classList.add('hidden');
        }
    }

    function moveSlides() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;     
    }

    function setupDots() {
        for (let i = 0; i < slides.length; i++){
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                currentIndex = i;
                updateDots();
                updateButtons();
                moveSlides();
            });            
            dots.push(button);
            document.querySelector('.carousel nav').appendChild(button);
        }

        dots[0].classList.add('current');
    }

    function updateDots() {
        dots.forEach(dot => {
            dot.classList.remove('current')
        });
        dots[currentIndex].classList.add('current');
    }

    updateButtons();
    setupDots();

    next.addEventListener('click', () => {
        currentIndex++;
        updateDots();
        updateButtons();
        moveSlides();
    });

    prev.addEventListener('click', () => {
        currentIndex--;
        updateDots();
        updateButtons();
        moveSlides();    
    });

    // I think it does not matter
    window,addEventListener('resize', () => {
        moveSlides();
    });


}