// 1. У вас есть HTML-страница с кнопкой и блоком текста. Напишите JavaScript код, который будет выполнять следующие действия:
// При клике на кнопку, добавьте класс "highlight" к блоку текста, если у него его еще нет. Если класс уже есть, удалите его.
// Если у блока текста есть класс "highlight", измените цвет фона на светло-желтый, а если класс отсутствует, верните исходный цвет фона.
const button1 = document.getElementById("button1");
const text1 = document.getElementById("text1");
button1.addEventListener('click', () => {
    text1.classList.toggle('highlight');
});


// 2. Создайте страницу, содержащую пустой список (<ul>) и кнопку "Добавить элемент". При каждом клике на кнопку, добавьте новый элемент списка (<li>) с уникальным текстом (например, "Элемент 1", "Элемент 2" и так далее). Текст может быть случайным.
// function get_random (list) {
//   return list[Math.floor((Math.random()*list.length))];
// }
// const stringVariants = ['hello', 'bue', 'day', 'night'];


const list = document.getElementById("list");
const button2 = document.getElementById("button2");
button2.addEventListener('click', () => {
    list.innerHTML = list.innerHTML + `<li>${Math.random()}</li>`
    // list.innerHTML = list.innerHTML + `<li>${get_random(stringVariants)}</li>`
});

// 3. На странице есть кнопка и элемент заголовка (<h1>). При каждом клике на кнопку, измените текст заголовка на "Новый текст {номер клика}".
const button3 = document.getElementById("button3");
const header1 = document.getElementById("header1");
let counter = 1;
button3.addEventListener('click', () => {
    header1.innerHTML = `Новый текст ` + counter;
    counter = counter + 1;
});


// 4. На странице есть список (<ul>) с несколькими элементами (<li>) и кнопка "Удалить последний элемент". При каждом клике на кнопку, удалите последний элемент из списка.
const removeElementButton = document.getElementById("removeElementButton");
removeElementButton.addEventListener('click', () => {
    list.removeChild(list.lastElementChild)
});

// 5. На странице есть кнопка "Сменить цвет фона" и блок (<div>) с текстом. При каждом клике на кнопку, измените цвет фона блока на случайный цвет.
const changeColorButton = document.getElementById('changeColorButton');
const coloredDiv = document.getElementById('coloredDiv');
changeColorButton.addEventListener('click', () => {
    coloredDiv.style.backgroundColor = '#' + Math.random().toString(16).substr(-8);
});


// 6. На странице есть кнопка "Кликни меня" и блок текста, который отображает текущее количество кликов. При каждом клике на кнопку, увеличивайте счетчик и обновляйте текст блока.
// done in #3

// 7. Создайте простой калькулятор с полем ввода для чисел и кнопками операций (сложение, вычитание, умножение, деление) и кнопкой "Вычислить". При вводе чисел и выборе операции, при нажатии на "Вычислить" отобразите результат операции.
const firstArgumentInput = document.getElementById("firstArgumentInput");
const secondArgumentInput = document.getElementById("secondArgumentInput");
const resultInput = document.getElementById("resultInput");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const devideButton = document.getElementById("devideButton");

const getSumFromInputs = () => {
    resultInput.value = Number(firstArgumentInput.value) + Number(secondArgumentInput.value) 
}
const getDifference = () => {
    resultInput.value = Number(firstArgumentInput.value) - Number(secondArgumentInput.value) 
}

plusButton.addEventListener('click', () => {
   getSumFromInputs() 
});
minusButton.addEventListener('click', getDifference);
multiplyButton.addEventListener('click', () => {
    resultInput.value = Number(firstArgumentInput.value) * Number(secondArgumentInput.value) 
});
devideButton.addEventListener('click', () => {
    if (Number(secondArgumentInput.value) === 0) {
        alert("YOU NUST NOT USE 0")
    } else {
        resultInput.value = Number(firstArgumentInput.value) / Number(secondArgumentInput.value) 
    }
});


