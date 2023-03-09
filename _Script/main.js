// defining elements 
const navbar = document.querySelector('.navbar');
const intro = document.querySelector('.intro');
const pageTop = document.querySelector('.page-top');

window.addEventListener('scroll', () => {
  // Navbar scroll toggle
  let windowHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (windowHeight > navbarHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  // Back to top button-toggle for visibility
  const introHeight = intro.getBoundingClientRect().height;
  const contentHeight = introHeight + navbarHeight;
  if (windowHeight > contentHeight) {
    pageTop.classList.add('page-top-active');
  } else {
    pageTop.classList.remove('page-top-active');
  }
});
 


//Recipie of the day - array
const rotdArray = [{
  title: 'Cupcakes',
  prep: '30 mins',
  bakeTime: '15 mins',
  ingredients: ['225g butter', '225g caster sugar', '3 large eggs', '2 tsp vanilla extract', '225g self-raising flour', '1.5 tsp baking powder', '50ml whole milk'],
  method: [{
    1: 'preheat oven to 180 celcius (fan)',
    2: 'mix butter until lighter in colour & homogeneous',
    3: 'add sugar & conintue to mix until a homogenous mixture',
    4: 'gradually add eggs, followed by vanilla extract and mix - overmixing will result in a curdled mixture so mix gently',
    5: 'sift in remaining dry ingredients and slowly mix until a consistent texture',
    6: 'gradually add milk into batter, combining until the batter becomes smooth'
  }]
}]
/* map function - TEST
arrays within objects need to be mapped out accordingly
*/ 
window.addEventListener('DOMContentLoaded', rotdMap(rotdArray))
  
  function rotdMap(objArray) {
    let rotdMap = rotdArray.map((objArray) => {

    return ` <div class="rotd-content-section" id="ingredients">
    <p class="rotd-content-text"
      ${objArray.ingredients}
    </p>
  </div>
  <div class="rotd-content-section" id="method">
    <p class="rotd-content-text">
      <span class="rotd-spec">Prep time:</span> ${objArray.prep}
      <br>
      <span class="rotd-spec">Bake time:</span> ${objArray.bakeTime}
      <br><br>
      <ol class="rotd-method-list">
        <li class="rotd-method-list-item"> Ok</li>
      </ol>
    </p>
  </div>
  <div class="rotd-content-section" id="tips">
    <p class="rotd-content-text">
      Tips Section
    </p>
  </div>`
    });

    const rotdContentSection = document.querySelector('.rotd-content-section-container');
    rotdContentSection.innerHTML = rotdMap;
  }
// Recipie of the day - tabs function
const rotd = document.querySelector('.rotd');
const rotdTabs = document.querySelectorAll('.rotd-btn');
const rotdContent = document.querySelectorAll('.rotd-content-section')

rotd.addEventListener('click', (e) => {
  const rotdId = e.target.dataset.id;

  if (rotdId) {
    rotdTabs.forEach((rotdItem) => {
      rotdItem.classList.remove('rotd-active');
      e.target.classList.add('rotd-active');
    });
    rotdContent.forEach((contentItem) => {
      contentItem.classList.remove('rotd-active');
    });
    const activeRotd = document.getElementById(rotdId);
    activeRotd.classList.add('rotd-active');
  }
});
 
// on load: map out array to hmtl
window.addEventListener('DOMContentLoaded', () => {
  rotdLoad(rotdArray);
})  

// mapping function test
function rotdLoad(objArray) {
  let rotdDisplay = objArray.m

}

