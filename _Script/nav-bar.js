const menuToggle = document.querySelector('#menu-toggle');
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');
const listItem = document.querySelectorAll('.list-item');

// Dropdown Menu Function - Start
menuToggle.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-toggle-active');
  menu.classList.toggle('menu-active');
  }
)
listItem.forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('menu-toggle-active');
    menu.classList.remove('menu-active');
  });
});


// Toggle Fixed Navbar

window.addEventListener('scroll', () => {
  let windowHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (windowHeight > navbarHeight) {
    navbar.classList.add('fixed-nav');
    menu.style.background = 'var(--grey-trans)'

  } else {
    navbar.classList.remove('fixed-nav');
    menu.style.background = 'transparent'
  }
})
