let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const indicators = document.querySelectorAll(".indicator")

let autoslideInteral;


function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'))
    indicators.forEach(indicator => indicator.classList.remove('active'))

    currentSlide = (n + slides.length) % slides.length
    // 0 -> 3 + 3 % 3 = 6%3 = 0 -> 

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
// auto matically -> 
function autoSlide() {
    autoslideInteral = setInterval(() => {
        nextSlide()
    }, 3000)
}

function resetAutoSlide() {
    clearInterval(autoslideInteral);
    autoSlide()
}

autoSlide()



// jesi container pr hover kru vesi mera container ka interval pause hojaeye

const sliderContainer = document.querySelector('.slider-container')

sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoslideInteral)
})

sliderContainer.addEventListener('mouseleave', () => {
    autoSlide()
})


