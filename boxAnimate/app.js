const box = document.querySelector('.box');
const trigger = document.querySelector('.trigger');
let animationDirection ="";

// Randomly select the animation direction
function getRandomDirection() {
  const directions = ['grow-up', 'grow-down', 'grow-left', 'grow-right'];
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}
//check whether a direction is generated or not
function checkDirection(){
    if (!(animationDirection ==="")){
        return true;
    }else return false;
}

// Toggle animation classes based on the current state

function toggleAnimation() {
    const directionAvailable = checkDirection();
    if ( directionAvailable === false){
        animationDirection = getRandomDirection();
            box.classList.remove('shrink-right', 'shrink-up', 'shrink-down', 'shrink-left');
            box.classList.add(animationDirection);
            box.classList.remove('original');
    }else{
        if (!(box.classList.contains('original'))){
            box.classList.remove('shrink-up', 'shrink-down', 'shrink-left', 'shrink-right');
            if(animationDirection==='grow-up'){
                box.classList.remove('grow-up');
                box.classList.add('shrink-up');
                box.classList.add('original');
                } 
            else if(animationDirection=== 'grow-down'){
                box.classList.remove('grow-down');
                box.classList.add('shrink-down');
                box.classList.add('original');
                } 
            else if(animationDirection==='grow-left'){
                box.classList.remove('grow-left');
                box.classList.add('shrink-left');
                box.classList.add('original');
                } 
            else if(animationDirection==='grow-right'){
                box.classList.remove('grow-right');
                box.classList.add('shrink-right');
                box.classList.add('original');
                }   
            animationDirection =""; //reset
        }
    }
}


// Event listener
trigger.addEventListener('click', toggleAnimation);