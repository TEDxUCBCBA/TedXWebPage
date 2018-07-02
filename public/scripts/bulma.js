let navbarBurger = $(".navbar-burger");
let navbarMenu = $(".navbar-menu");
navbarBurger.click((event) => {
  navbarBurger.toggleClass('is-active');
  navbarMenu.toggleClass('is-active');
});

let navbar = $("#navbar");
let navbarHeight = 52;

const coverHeight = () => {
  return $("#particles-js").css("height").slice(0,-2);
};

window.onscroll = () => {
  if ($(this).scrollTop() > coverHeight() - navbarHeight) {
    navbar.css("background-color", "#F3F3F3"); 
  }
  else {
    navbar.css("background-color", "transparent");
  }
};