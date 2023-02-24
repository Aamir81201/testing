let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.replace("d-block","d-none");
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("alive", "");
//   }
  slides[slideIndex - 1].classList.replace("d-none","d-block");
//   dots[slideIndex - 1].className += " alive";
}

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
