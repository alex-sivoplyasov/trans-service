let button = document.querySelector('.nav__burger-wrapper');
button.addEventListener('click', onClickPrimaryButton);
let first = document.querySelector('.nav__burger-first');
let second = document.querySelector('.nav__burger-second');
let third = document.querySelector('.nav__burger-third');
let fourth = document.querySelector('.nav__burger-fourth');

let  isActive = false;

function onClickPrimaryButton() {
    let element = document.querySelector('.nav__list');


      if(!isActive) {
        element.classList.add('nav__is-active');
        first.classList.add('nav__burger-first-active');
        second.classList.add('nav__burger-second-active');
        third.classList.add('nav__burger-third-active');
        fourth.classList.add('nav__burger-fourth-active');
        isActive = true;
    } else {
        let first = document.querySelector('.nav__burger-first');
        element.classList.remove('nav__is-active');
        first.classList.remove('nav__burger-first-active');
        second.classList.remove('nav__burger-second-active');
        third.classList.remove('nav__burger-third-active');
        fourth.classList.remove('nav__burger-fourth-active');
        isActive = false;
    }




}

