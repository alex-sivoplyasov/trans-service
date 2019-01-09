var el = document.querySelector('.header__item');
// console.log( el.classList);
// el.classList.add('active');
// console.log(el);
//
var el = document.querySelector('.primaryButton');

el.addEventListener('click', onClickPrimaryButton);

function  onClickPrimaryButton() {
    el.classList.add('active');

}