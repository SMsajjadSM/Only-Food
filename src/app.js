"use strict";
let slideIndex = 1;


showSlides(slideIndex);

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sliders");
  let h1slide = document.getElementsByClassName("h1slide");
  let pslide = document.getElementsByClassName("pslide");
  let ppslide = document.getElementsByClassName("ppslide");
  let btnslide = document.getElementsByClassName("btnslide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
    slides[i].classList.remove("block");
    slides[i].classList.add("opacity-0");
    slides[i].classList.remove("opacity-100");
    h1slide[i].classList.remove("animate-animation-li");
    pslide[i].classList.remove("animate-animation-li");
    ppslide[i].classList.remove("animate-animation-li");
    btnslide[i].classList.remove("animate-animation-li");
  }
  slides[slideIndex - 1].classList.add("block");
  slides[slideIndex - 1].classList.remove("hidden");
  slides[slideIndex - 1].classList.remove("opacity-1");
  slides[slideIndex - 1].classList.add("opacity-100");
  h1slide[slideIndex - 1].classList.add("animate-animation-li");
  pslide[slideIndex - 1].classList.add("animate-animation-li");
  ppslide[slideIndex - 1].classList.add("animate-animation-li");
  btnslide[slideIndex - 1].classList.add("animate-animation-li");
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) {
    slideIndex = 1;
  }

  showSlides(slideIndex);
}, 7000);

//animation scroll//
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: true,
});
sr.reveal(".leftanim2", { delay: 100 });
sr.reveal(".leftanim1", { delay: 100 });
sr.reveal(".rightanim1", { delay: 200 });
sr.reveal(".rightanim2", { delay: 200 });
sr.reveal(".navbar", { delay: 200 });
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: "2000",
  reset: true,
});
srLeft.reveal(".logo", { delay: 100 });
const srdown = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: "2000",
  reset: true,
});
srdown.reveal(".textanim", { delay: 100 });
srdown.reveal(".textanim1", { delay: 800 });
srdown.reveal(".textanim2", { delay: 1200 });
srdown.reveal(".btnclick1", { delay: 1800 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: "2000",
  reset: true,
});
srRight.reveal(".btnclick", { delay: 100 });
