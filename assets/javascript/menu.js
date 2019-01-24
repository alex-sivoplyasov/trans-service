activeMenu();

let button = document.querySelector('.nav__burger-wrapper');
console.log(button);
button.addEventListener('click', onClickPrimaryButton);
let  isActive = false;

function onClickPrimaryButton() {
    let element = document.querySelector('.nav__list');


    console.log(isActive);
    if(!isActive) {
        element.classList.add('nav__is-active');
        let first = document.querySelector('.nav__burger-first');
        // console.log(first);
        first.classList.add('nav__burger-first-active');
        // console.log(first);


        let second = document.querySelector('.nav__burger-second');
        second.classList.add('nav__burger-second-active');

        let third = document.querySelector('.nav__burger-third');
        third.classList.add('nav__burger-third-active');

        let fourth = document.querySelector('.nav__burger-fourth');
        fourth.classList.add('nav__burger-fourth-active');
        isActive = true;
    } else {
        let first = document.querySelector('.nav__burger-first');
        console.log(first);
        first.classList.remove('nav__burger-first-active');
        console.log(first);


        let second = document.querySelector('.nav__burger-second');
        second.classList.remove('nav__burger-second-active');

        let third = document.querySelector('.nav__burger-third');
        third.classList.remove('nav__burger-third-active');

        let fourth = document.querySelector('.nav__burger-fourth');
        fourth.classList.remove('nav__burger-fourth-active');
        element.classList.remove('nav__is-active');
        isActive = false;
    }




}

function activeMenu() {
    let currentlyUrl = location.href;
    console.log(currentlyUrl);
    // var b = location.href;
    //
    let link = document.querySelectorAll('.nav__link');
    let linkArray = Array.prototype.slice.call(link);
    // console.log(element);
    // console.log(ar);

    for(let i = 0; i < linkArray.length; i++) {
        console.log("Страница ссылки: " + linkArray[i].href);
        // console.log(b);
        console.log("Текущая" + currentlyUrl);
        if(linkArray[i].href == currentlyUrl) {

            console.log(linkArray[i].classList);
            // linkArray[i].classList.add('active');
        }
    }
}



//
// let button = document.querySelector('.nav__burger-wrapper');
// console.log(button);
// button.addEventListener('click', onClickPrimaryButton);
// let  isActive = false;
//
// function onClickPrimaryButton() {
//     let element = document.querySelector('.nav__list');
//     // console.log("First " + element);
//     //
//     // console.log("Second " + element);
//     console.log(isActive);
//     if(!isActive) {
//         element.classList.add('nav__is-active');
//         isActive = true;
//     } else {
//         element.classList.remove('nav__is-active');
//         isActive = false;
//     }
// }
