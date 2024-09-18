// Mobile Navbar JS Start
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
var menuLinks = menu.querySelectorAll('a');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

// Adding event listeners to each link in the menu
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove('active');
  });
});

// Mobile Navbar JS End