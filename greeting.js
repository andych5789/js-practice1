const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    leaving = document.querySelector(".js-leaving");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function removeName() {
    localStorage.removeItem(USER_LS);
    location.reload();
}

function handleLeavingClick() {
    removeName();
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askforName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    leaving.classList.add(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Nice to meet you. ${text}!`;

    leaving.addEventListener("click", handleLeavingClick);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askforName();
    } else {
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();