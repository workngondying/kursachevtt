const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];
let sliderWidth;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
    sliderWidth = slides[0].clientWidth;
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

addPagination();