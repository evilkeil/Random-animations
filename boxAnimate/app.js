const box = document.querySelector('.box');
const trigger = document.querySelector('.trigger');

trigger.addEventListener('click',function(){
    if (box.classList.contains("growleft") && !(box.classList.contains("shrink-left")) ){
        box.classList.remove('growleft');
        box.classList.add('shrink-left');
    }
    else if (box.classList.contains("shrink-left") && !(box.classList.contains("growleft")) ){
        box.classList.add('growleft');
        box.classList.remove('shrink-left')
    }else if (!(box.classList.contains("shrink-left")) && !(box.classList.contains("growleft")) ){
        box.classList.add('growleft');
    }
})

