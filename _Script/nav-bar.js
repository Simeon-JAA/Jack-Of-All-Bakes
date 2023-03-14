const menuToggle = document.querySelector('#dropdown-menu-toggle');
const menuBtn = document.querySelector('#dropdown-menu-btn');
const menu = document.querySelector('#dropdown-menu');
const navbar = document.querySelector('#navbar');
const listItem = document.querySelectorAll('.list-item');

// Dropdown Menu Function - Start
menuToggle.addEventListener('click', () => {
  menuBtn.classList.toggle('dropdown-menu-toggle-active');
  menu.classList.toggle('dropdown-menu-active');
  }
)
listItem.forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('dropdown-menu-toggle-active');
    menu.classList.remove('dropdown-menu-active');
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
