const form = document.querySelector('form');
const taskNumber = document.querySelector('h4 span');
const listItems = document.getElementsByClassName('task');
let ul = document.getElementById('lists');
const btn = document.querySelector('input.second');
const todoList = [];

const removeTask = (e) => {
    ul.textContent = "";
    e.target.parentnode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = listItems.length;
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })

    // renderList();
}
const addTask = (e) => {
    e.preventDefault();
    const titleTask = btn.value;
    if (titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>Usuń</button>';
    todoList.push(task);

    // renderList()

    ul.appendChild(task);
    btn.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask)
}

// const renderList = () => {
//     ul.textContent = "";
//     toDoList.forEach((toDoElement, key) => {
//         toDoElement.dataset.key = key;
//         ul.appendChild(toDoElement);
//         console.log(toDoElement)
//     })
// }
form.addEventListener('submit', addTask)