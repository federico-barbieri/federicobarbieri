
// sa image 

let saImg = document.querySelector('.sa-img');

let width = window.innerWidth;

if (width < 500){
    saImg.src = "exports/mobile/sa-mobile.png";
}
    else {
        saImg.src = "exports/sa.png"; 
    }


// imperativ image 

let imperativImg = document.querySelector('.imperativ-img');

if (width < 500){
    imperativImg.src = "exports/mobile/imperativ-mobile.png";
}
    else {
        imperativImg.src = "exports/imperativ.png"; 
    }


// adjektiver image 

let adjektiverImg = document.querySelector('.adjektiver-img');

if (width < 500){
    adjektiverImg.src = "exports/mobile/adjektiver-mobile.png";
}
    else {
        adjektiverImg.src = "exports/adjektiver-desk.png"; 
    }
