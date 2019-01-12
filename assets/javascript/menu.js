let  elnn = document.querySelector('.primaryButton');
elnn.addEventListener('click', onClickPrimaryButton);
//elm = document.querySelector('.nav__item');
var isActive = false;
function  onClickPrimaryButton() {
    let  elm = document.querySelectorAll('.nav__item');
    let test = document.querySelector('.nav__container');
    let list = document.querySelector('.nav__list');
    // elm.classList.add('nav__is-active');
    // for(i =0; i<elm.length; i++)
    // {
    //     elm[i].classList.add('nav__is-active');
    // }
    // console.log(elm);

   let rezult = Array.from(elm);
    console.log(rezult);
    if(!isActive) {
        for(i = 0; i < rezult.length; i++)
        {
            rezult[i].classList.add('nav__is-active');
        }
        isActive = true;
        console.log("First value: " + isActive);


        console.log(test);
         test.classList.add('nav__is-active');
        list.classList.add('nav__is-active');
        console.log(test);
    } else {
        for(i = 0; i < rezult.length; i++)
        {
            rezult[i].classList.remove('nav__is-active');
        }
        test.classList.remove('nav__is-active');
        list.classList.remove('nav__is-active');

        isActive = false;
        console.log("Second value: " + isActive);

    }
}

