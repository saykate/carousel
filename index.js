const slidesContainer = document.querySelector('.slides-container');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const circles = document.querySelectorAll('.circle')

let currentLeft = 0;

const nextSlide = () => {
    console.log('nextSlide');
    if (currentLeft >= -2500) { 
        let nextLeft = currentLeft - 500;
        slidesContainer.style.left = nextLeft + 'px';
        currentLeft = nextLeft;
    }
        return
}

const previousSlide = () => {
    console.log('previousSlide');
    if (currentLeft <= -500){    
        let previousLeft = currentLeft + 500;
        slidesContainer.style.left = previousLeft + 'px';
        currentLeft = previousLeft;
    }
        return
}

const chooseSlide = (e) => {
    console.log('chooseSlide');
    e.preventDefault();
    for (let i = 1; i <= circles.length; i++) {
        if(e.target.id === 'circle' + i) {
          currentLeft = (i - 1) * -500;
          slidesContainer.style.left = currentLeft + 'px'; 
        } 
   } 
}
 
circles.forEach(circle => {
    circle.addEventListener("click", chooseSlide)
})
next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);




