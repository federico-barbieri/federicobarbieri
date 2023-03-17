"use strict";



// grab the main title and change its inner html through functions

let mainTitle = document.querySelector('.forward-title');


// vinyl

const vinyl = document.querySelector('.projects-vinyl');


window.onload = () => {
    vinyl.classList.add("vinyl-spins");
  
}

// danishcript btn

const danishBtn = document.querySelector('.danishcript-btn');

function changeToDanish(){
    danishBtn.textContent = "Se projekt";
}

function changeToEnglish(){
    danishBtn.textContent = "See project";
}

danishBtn.addEventListener('mouseenter', changeToDanish);
danishBtn.addEventListener('mouseout', changeToEnglish);

// shadow dog

const shadowBtn = document.querySelector('.shadow-btn');

const bone1 = document.querySelector('.bone1');
const bone2 = document.querySelector('.bone2');
const bone3 = document.querySelector('.bone3');
const bone4 = document.querySelector('.bone4');
const bone5 = document.querySelector('.bone5');
const bone6 = document.querySelector('.bone6');

shadowBtn.addEventListener('mouseover', () =>{
    bone1.style.opacity = 0.5;
    bone2.style.opacity = 0.5;
    bone3.style.opacity = 0.5;
    bone4.style.opacity = 0.5;
    bone5.style.opacity = 0.5;
    bone6.style.opacity = 0.5;
})

shadowBtn.addEventListener('mouseout', () =>{
    bone1.style.opacity = 0;
    bone2.style.opacity = 0;
    bone3.style.opacity = 0;
    bone4.style.opacity = 0;
    bone5.style.opacity = 0;
    bone6.style.opacity = 0;
})


