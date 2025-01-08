let slideIndex = 1;
let intervalId
showSlides(slideIndex);
function nextSlide(n) {
  showSlides((slideIndex += n));
 
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function changeImage(){
  setInterval(nextSlide(1),2000)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sliders");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
    slides[i].classList.remove("block");
    slides[i].classList.remove("opacity-100");
    slides[i].classList.add("opacity-0");
  }

  slides[slideIndex - 1].classList.add("block");
  slides[slideIndex - 1].classList.remove("hidden");
  slides[slideIndex - 1].classList.remove("opacity-1");
  slides[slideIndex - 1].classList.add("opacity-100");
}
