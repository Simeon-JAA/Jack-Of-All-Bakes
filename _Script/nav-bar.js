//define elements
let hamburger = document.querySelector('.hamburger');
let hamburgerButton = document.querySelector('.material-symbols-outlined')
let btn = document.getElementsByClassName('test')

//hamburger active function
hamburger.addEventListener('click', () => {
  hamburgerButton.classList.toggle('hamburger-active');
  console.log('working')
})

