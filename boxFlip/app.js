const trigger = document.querySelector('.trigger');
const box = document.querySelector('.box');

trigger.addEventListener('mouseover',function(e){
    box.classList.add('animate');  
})

trigger.addEventListener('mouseout',function(e){
    box.classList.remove('animate');  
   
})

