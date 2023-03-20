
"use strict";


// hogwarts

// const hogwartsProject = document.querySelector('#hogwarts');

// const hogwartsTitle = document.querySelector('.hogwarts-title');

// const hogwartsP = document.querySelector('.hogwarts-p');

// hogwartsProject.addEventListener('mouseover', () =>{
    hogwartsTitle.style.color = "white";
    hogwartsP.style.color = "white";
    setTimeout(gryffindor, 100);
    setTimeout(slytherin, 300);
    setTimeout(ravenclaw, 500);
    setTimeout(hufflepuff, 700);
// })

// hogwartsProject.addEventListener('mouseout', () =>{
    hogwartsProject.style.background = "none";
    hogwartsTitle.style.color = "var(--main-font-color)";
    hogwartsP.style.color = "var(--main-font-color)";

// })

function gryffindor(){
    hogwartsProject.style.background = 'url("hogwarts/imgs/gryffindor-ok.png")';
}

function slytherin(){
    hogwartsProject.style.background = 'url("hogwarts/imgs/slytherin-ok.png")';
}

function ravenclaw(){
    hogwartsProject.style.background = 'url("hogwarts/imgs/ravenclaw-ok.png")';
}

function hufflepuff(){
    hogwartsProject.style.background = 'url("hogwarts/imgs/hufflepuff-ok.png")';
}



// grab the main title and change its inner html through functions

let mainTitle = document.querySelector('.forward-title');


// danishcript btn

const danishBtn = document.querySelector('.danishcript-btn');

function changeToDanish(){
    danishBtn.textContent = "SE PROJEKT";
}

function changeToEnglish(){
    danishBtn.textContent = "SEE PROYECT";
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


