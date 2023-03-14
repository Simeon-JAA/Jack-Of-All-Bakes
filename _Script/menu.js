//defining variables, elements & array
const menuArr = [{
  id: 1,
  title: 'vanilla',
  category: 'cupcakes',
  img: '../Images/_Menu-Imgs/Vanilla.JPG', 
  price: 24.99,
  desc: 'A collection of 12 Vanilla Cupcakes, accompanied with a light American Buttercream. Subtle decor of gold leaf tops the frosting for a minimalistic professional finish.'
}, {
  id: 2,
  title: 'chocolate & orange',
  category: 'cookies',
  img: '../Images/_Menu-Imgs/chocolate-orange.jpeg', 
  price: 14.99,
  desc: 'Nothing more hearty & comforting than the fusion of chocolate & orange. These cookies are great for your morning coffee or afternoon tea. Whatever the occation the taste will always remind you of home.'
}, {
  id: 3,
  title: 'lemon drizzle',
  category: 'cookies',
  img: '../Images/_Menu-Imgs/lemon-drizzle.jpg', 
  price: 14.99,
  desc: 'A classic infusion of lemon but this time not with cake. These cookies will indulge you with their zesty flavour, making you wish you had saved some for tomorrow.'
}, {
  id: 4,
  title: 'strawberry',
  category: 'cupcakes',
  img: '../Images/_Menu-Imgs/strawberry.jpg',
  price: 24.99,
  desc: 'The perfect gift for valentines day! Fitting the theme of love with roses & red lindor to indulge in. You may fall out of love with your partner & in love with these.'
}, {
  id: 5,
  title: 'hazlenut',
  category: 'cakes',
  img: '../Images/_Menu-Imgs/cake-hazlenut.jpg',
  price: 64.99,
  desc: 'A hazlenut sensation accompanied by caramel macarons. This cake is all round nuts - with a caramel and hazlenut filling & vanilla frositng surrounding the cake'
}, {
  id: 6,
  title: '2 tier cake',
  category: 'cakes',
  img: '../Images/_Menu-Imgs/two-tier.jpg',
  price: 149.99,
  desc: 'A grande cake for a grande event; from graduations, birthdays & gender reveals, a two tiered cake is guarenteed to live up to the occasion.'
}
];
const menuContent = document.querySelector('#menu-content');
const filterBtn= document.querySelectorAll('.filter-btn');


window.addEventListener('DOMContentLoaded', () => {
  displayMenu(menuArr)
});

//filter button function
filterBtn.forEach( (btn) => {
btn.addEventListener('click',  (e) => {
  const category = e.currentTarget.dataset.id;
    console.log(category);
  const menuCategory = menuArr.filter(function(menuItem){
    if (menuItem.category === category) 
      return menuItem;

    if (category === 'all')
    return menuArr;
  })
  displayMenu(menuCategory);
});
});

function displayMenu(menuItem) {
  let displayMenu = menuItem.map((item) => {

  return `<article class="menu-item">
  <img src="${item.img}" class="photo" alt="${item.title}">
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">£ ${item.price}</h4>
    </header>
    <p class="item-text">${item.desc}</p>
  </div>
  </article>`
    });
    displayMenu = displayMenu.join('');

    menuContent.innerHTML = displayMenu
}



// FITLER 

let categoryList = menuArr.map(function(item) {
  return item.category
})

let newCategoryList = categoryList.reduce(value, 'all') 

