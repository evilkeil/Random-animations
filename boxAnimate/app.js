const box = document.querySelector('.box');
const trigger = document.querySelector('.trigger');

trigger.addEventListener('click',function(){
    if (box.classList.contains("growleft")){
        box.classList.toggle('growleft');
        box.classList.toggle('shrink-left');
    }
    else{
        box.classList.toggle('growleft');
    }
})

