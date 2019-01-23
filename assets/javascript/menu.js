let button = document.querySelector('.nav__burger-wrapper');
console.log(button);
button.addEventListener('click', onClickPrimaryButton);
let  isActive = false;

function onClickPrimaryButton() {
    let element = document.querySelector('.nav__list');
    // console.log("First " + element);
    //
    // console.log("Second " + element);
    console.log(isActive);
    if(!isActive) {
        element.classList.add('nav__is-active');
        isActive = true;
    } else {
        element.classList.remove('nav__is-active');
        isActive = false;
    }
}
