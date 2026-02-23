let currentSlide = 0;

const slides = document.querySelectorAll('.slide')
const indicators = document.querySelectorAll('.indicator')

let autoSlideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'))
    indicators.forEach(indicators => indicators.classList.remove('active'))

    currentSlide = (n + slides.length) % slides.length
    // current = 1 + 3 % 3 => 0

    slides[currentSlide].classList.add('active')
    indicators[currentSlide].classList.add('active')

}


function nextSlide() {
    showSlide(currentSlide + 1)
    // reset
    resetAutoSlide()
}


function prevSlide() {
    showSlide(currentSlide - 1)
    // reset
    resetAutoSlide()
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide()
    }, 1000)
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval)
    autoSlide();
}

autoSlide()

// pause auto-slide on hover
let slideContainer = document.querySelector(".slider-container")

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval)
})

slideContainer.addEventListener('mouseleave', () => {
    autoSlide()
})