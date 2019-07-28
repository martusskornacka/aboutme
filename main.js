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

//slider


const slideList = [{
    img: "images/blueberry.jpg",
    text: 'Pierwszy tekst'
},
{
    img: "images/pancake.jpg",
    text: 'Drugi tekst'
},
{
    img: "images/main.jpg",
    text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 3000;
let active = 0; // które elementy są wyswietlane, w lewo cofamy to -1

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    changeDot()
}
let indexInteval = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInteval); //wyłaczamy interwał
        e.keyCode == 37 ? active-- : active++; //powiększamy lub zmniejszamy active 
        if (active === slideList.length) {
            active = 0; //to zerujemy wartość
        } else if (active < 0) {
            active = slideList.length - 1; //cofamy o 1 bo tyle mamy index
        }

        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        indexInteval = setInterval(changeSlide, time)
        //setInterval(changeSlide, time) //uruchomiony, ale przy następnym kliknięciu nie będzie indexu, nie wykona się, kade kliknięcie wywołuje setInterval
    }
}
// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)

$(document).ready(
    function () {
        $('#newList').click(
            function () {
                let toAdd = $('input[name=input2]').val();
                $('ol').append('<p>' + toAdd + '</p>');
            });

        $("input[name=input2]").keyup(function (event) {
            event.preventDefault();
            if (event.keyCode == 13) {
                $("#newList").click();
            }
        });

        $(document).on('dblclick', 'p', function () {
            $(this).toggleClass('strike').fadeOut('slow');
        });

        $('.texty').focus(function () {
            $(this).val('');
        });
        $('ol').sortable();

    }
);