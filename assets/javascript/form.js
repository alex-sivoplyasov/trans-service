let formCheckbox = document.querySelector('.form__checkbox');
let formButton = document.querySelector('.form__button');

formCheckbox.addEventListener('click', onClickCheckbox);

function onClickCheckbox() {
    //
    if(formCheckbox.checked) {
        formButton.classList.remove('form__button-disactive');

    } else {
        
        formButton.classList.add('form__button-disactive');
    }


}

