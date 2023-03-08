const questions = document.querySelectorAll('.question-top-container');

questions.forEach(function (question) {
  let btn = question.querySelector('.btn');
  let unit = question.firstElementChild.nextElementSibling

  btn.addEventListener('click', (item) => {
    unit.classList.toggle('show-answer');
  })

})
