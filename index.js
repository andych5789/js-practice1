const title = document.querySelector("#title");
title.innerText = "Hello My name is js.";
title.style.color = "red";

const content = document.querySelector("#content");
console.dir(title);
console.dir(content.parentNode);
console.log(content.parentNode.childNodes[0])

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === "red") {
        title.style.color = "blue";
    } else {
        title.style.color = "red";
    }
}

function handleResize(e) {
    console.log(e);
}

window.addEventListener("mouseenter", handleClick);
window.addEventListener("resize", handleResize);