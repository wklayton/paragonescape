

const moreElement = document.querySelector(".more");
const lessElement = document.querySelector(".less")

function toggleOverviewOn() {
    moreElement.classList.add("active");
    lessElement.classList.add("inactive")
}

function toggleOverviewOff() {
    moreElement.classList.remove("active");
    lessElement.classList.remove("inactive");
}






let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("gallery_slide");
  const dots = document.getElementsByClassName("preview_img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}