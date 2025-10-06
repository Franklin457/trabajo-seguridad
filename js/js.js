// Archivo: js.js
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const totalSlidesElem = document.getElementById("totalSlides");
    const currentSlideElem = document.getElementById("currentSlide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove("active");
        });
        slides[index].classList.add("active");
        currentSlideElem.textContent = index + 1;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;
    }

    function changeSlide(n) {
        const newIndex = currentSlideIndex + n;
        if (newIndex >= 0 && newIndex < totalSlides) {
            currentSlideIndex = newIndex;
            showSlide(currentSlideIndex);
        }
    }
    
    totalSlidesElem.textContent = totalSlides;
    showSlide(currentSlideIndex);

    prevBtn.addEventListener("click", () => changeSlide(-1));
    nextBtn.addEventListener("click", () => changeSlide(1));

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" && !nextBtn.disabled) {
            changeSlide(1);
        } else if (event.key === "ArrowLeft" && !prevBtn.disabled) {
            changeSlide(-1);
        }
    });
});