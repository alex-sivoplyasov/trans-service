let formCheckbox = document.querySelector('.form__checkbox');
let formButton = document.querySelector('.form__button');

formCheckbox.addEventListener('click', onClickCheckbox);

console.log(formButton);
function onClickCheckbox() {
    //
    if(formCheckbox.checked) {
        console.log("TRUE");
        formButton.classList.remove('form__button-disactive');

    } else {
        console.log("NO");
        formButton.classList.add('form__button-disactive');
    }


}

// let nav  = document.querySelector('.nav');
//
//
// let  navSourceBottom = nav.getBoundingClientRect().bottom + window.pageYOffset;
// console.log(navSourceBottom);
//
// window.onscroll = function() {
//     if (nav.classList.contains('nav--fixed') && window.pageYOffset < navSourceBottom) {
//         nav.classList.remove('nav--fixed');
//     } else if (window.pageYOffset > navSourceBottom) {
//         nav.classList.add('nav--fixed');
//     }
// };