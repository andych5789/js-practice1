const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber) {
    const img = new Image();
    img.src = `/images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();