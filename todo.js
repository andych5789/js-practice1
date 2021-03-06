const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function removeToDo(target) {
    toDoList.removeChild(target);
    const cleanToDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(target.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function handleTodoClick(event) {
    removeToDo(event.target.parentNode);
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();

    delBtn.addEventListener("click", handleTodoClick);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text);
        })
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();