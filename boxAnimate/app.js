// const box = document.querySelector('.box');
// const trigger = document.querySelector('.trigger');

// trigger.addEventListener('click',function(){
//     if (box.classList.contains("growleft") && !(box.classList.contains("shrink-left")) ){
//         box.classList.remove('growleft');
//         box.classList.add('shrink-left');
//     }
//     else if (box.classList.contains("shrink-left") && !(box.classList.contains("growleft")) ){
//         box.classList.add('growleft');
//         box.classList.remove('shrink-left')
//     }else if (!(box.classList.contains("shrink-left")) && !(box.classList.contains("growleft")) ){
//         box.classList.add('growleft');
//     }
// })

const box = document.querySelector('.box');
const trigger = document.querySelector('.trigger');

//arguments 

const growRight = () => animate("grow-right", "shrink-right");
const growLeft = () => animate("grow-left", "shrink-left");
const growUp = () => animate("grow-up", "shrink-up");
const growDown = () => animate("grow-down", "shrink-down");

//functions

function animate(grow,shrink){
    if (box.classList.contains(grow) && !(box.classList.contains(shrink)) ){
        box.classList.remove(grow);
        box.classList.add(shrink);
    }
    else if (box.classList.contains(shrink) && !(box.classList.contains(grow)) ){
        box.classList.add(grow);
        box.classList.remove(shrink)
    }else if (!(box.classList.contains(shrink)) && !(box.classList.contains(grow)) ){
        box.classList.add(grow);
    }
}


function removeAllClassesExceptOne(keepClass) {
    const classNames = box.className.split(' ');
    for (let i = classNames.length - 1; i >= 0; i--) {
      if (classNames[i] !== keepClass) {
        box.classList.remove(classNames[i]);
      }
    }
  }



//event listner

trigger.addEventListener('click',function(){
    let rand = Math.floor(Math.random() * 2);
    growUp();
})


