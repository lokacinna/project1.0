// tooltip attempt

$(".pie-chart").tooltipster({
  contentCloning: true
});

// slide jQuery (slick)

$(".single-item").slick({
  arrows: true,
  autoplay: true,
  dots: false,
  prevArrow: $('.i-caret-left'),
  nextArrow: $('.i-caret-right')
});



// // sets variable to one
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// // next / previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//
// // determines where the user is in the slideshow
//
//   if (n > slides.length){
//     slideIndex=1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i=0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//
//   // displays slide
//
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//
// }
