
const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h4 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input.second');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    taskNumber.textContent = listItems.length;
    renderList();
}
const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + " <button>Usuń</button>";
    toDoList.push(task);
    renderList()

    ul.appendChild(task);
    input.value - "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}
const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

form.addEventListener('submit', addTask)

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    })
}


const endTime = new Date('2019-12-31 00:01:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');


setInterval(() => {
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime) / 1000);
    const time = endTime - nowTime;
    const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));


    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    // Przykład - dodanie 0 przeg godziną 
    hours = hours < 10 ? `0${hours}` : hours;

    const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);


    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;

}, 1000)

