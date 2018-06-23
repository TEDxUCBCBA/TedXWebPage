let navbarBurger = $(".navbar-burger");
let navbarMenu = $(".navbar-menu");
navbarBurger.click((event) => {
  navbarBurger.toggleClass('is-active');
  navbarMenu.toggleClass('is-active');
});