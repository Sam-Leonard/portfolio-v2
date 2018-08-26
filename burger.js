let hamBurg = document.querySelector('.hamburg');
let hamBurgBarOne = document.querySelector('.hamburg__bar1');
let hamBurgBarTwo = document.querySelector('.hamburg__bar2');
let hamBurgBarThree = document.querySelector('.hamburg__bar3');
let hamBurgMenu = document.querySelector('.hamburg__menu');

hamBurg.addEventListener('click', function() {
  hamBurgBarOne.classList.toggle('change1');
  hamBurgBarTwo.classList.toggle('change2');
  hamBurgBarThree.classList.toggle('change3');
  hamBurgMenu.classList.toggle('transition-from-top');
});

let heading = document.querySelector('.dev__heading');
let content = document.querySelector('.dev__content');
let content2 = document.querySelector('.design__content');
let content3 = document.querySelector('.team__content');

heading.addEventListener('click', function(){
  content.classList.toggle('transition-from-left');
  content2.classList.toggle('transition-from-bottom');
  content3.classList.toggle('transition-from-right');
});
