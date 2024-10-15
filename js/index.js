// Mobile Navbar JS Start
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
var menuLinks = menu.querySelectorAll('a');
// create dom variable that selects the `a` that uses html attribute `data-index`

// create variable that contains the band member biographies in object form
menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

//add event listener for learn more buttons
//select the band memebr based on index. Populate the dom elements in the biography section

// Adding event listeners to each link in the menu
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove('active');
  });
});

// Mobile Navbar JS End

