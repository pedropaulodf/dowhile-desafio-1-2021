ScrollReveal().reveal('.reveal-on-scroll');
$('.js-tilt').tilt({
  glare: true,
  maxGlare: .5
})

function menuToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}