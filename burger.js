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
let dev1 = document.querySelector('.transition-from-left1');
let dev2 = document.querySelector('.transition-from-left2');
let dev3 = document.querySelector('.transition-from-left3');
let dev4 = document.querySelector('.transition-from-left4');
let dev5 = document.querySelector('.transition-from-left5');
let des1 = document.querySelector('.transition-from-bottom1');
let des2 = document.querySelector('.transition-from-bottom2');
let des3 = document.querySelector('.transition-from-bottom3');
let des4 = document.querySelector('.transition-from-bottom4');
let des5 = document.querySelector('.transition-from-bottom5');
let team1 = document.querySelector('.transition-from-right1');
let team2 = document.querySelector('.transition-from-right2');
let team3 = document.querySelector('.transition-from-right3');
let team4 = document.querySelector('.transition-from-right4');
let team5 = document.querySelector('.transition-from-right5');

heading.addEventListener('click', function(){
  dev1.classList.toggle('transition-from-left1');
  dev2.classList.toggle('transition-from-left2');
  dev3.classList.toggle('transition-from-left3');
  dev4.classList.toggle('transition-from-left4');
  dev5.classList.toggle('transition-from-left5');
  des1.classList.toggle('transition-from-bottom1');
  des2.classList.toggle('transition-from-bottom2');
  des3.classList.toggle('transition-from-bottom3');
  des4.classList.toggle('transition-from-bottom4');
  des5.classList.toggle('transition-from-bottom5');
  team1.classList.toggle('transition-from-right1');
  team2.classList.toggle('transition-from-right2');
  team3.classList.toggle('transition-from-right3');
  team4.classList.toggle('transition-from-right4');
  team5.classList.toggle('transition-from-right5');
});
