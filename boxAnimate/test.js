const box = document.querySelector('.box');
const trigger = document.querySelector('.trigger');

// Randomly select the animation direction
function getRandomDirection() {
  const directions = ['grow-up', 'grow-down', 'grow-left', 'grow-right'];
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}

// Toggle animation classes based on the current state
function toggleAnimation() {
    let animationDirection = getRandomDirection();
    console.log(animationDirection);
    if (!box.classList.contains('original')) {
        box.classList.remove('shrink-up', 'shrink-down', 'shrink-left', 'shrink-right');
        box.classList.remove('grow-up', 'grow-down', 'grow-left', 'grow-right');
            if(animationDirection==='grow-up'){
            box.classList.add('shrink-up');
            box.classList.add('original');
            animationDirection = null;
            } 
            else if(animationDirection=== 'grow-down'){
                box.classList.add('shrink-down');
                box.classList.add('original');
                animationDirection = null;
                } 
            else if(animationDirection==='grow-left'){
                box.classList.add('shrink-left');
                box.classList.add('original');
                animationDirection = null;
                } 
            else if(animationDirection==='grow-right'){
                box.classList.add('shrink-right');
                box.classList.add('original');
                animationDirection = null;
                }   
                
    } else {
        
        box.classList.remove('shrink-right', 'shrink-up', 'shrink-down', 'shrink-left');
        box.classList.add(animationDirection);
        box.classList.remove('original');
    }
}

// Event listener
trigger.addEventListener('click', toggleAnimation);