const main = document.getElementById("main");
console.log(main.style.color);
main.style.color = "green";

main.setAttribute(
    "style",
    "color: yellow; font-size: 20px;",
);


main.style.cssText = "border: 2px solid pink; background: lightblue";



// 1. У вас есть элемент. При клике на кнопку измените его ширину на 100px с использованием setAttribute.
const element1 = document.getElementById("element1");
const button1 = document.getElementById("button1");

button1.addEventListener('click', () => {
    element1.setAttribute("style", "width: 100px; background-color: yellow");
})

// 2. У вас есть элемент. При клике на кнопку примените несколько произвольных стилей с использованием cssText.
const element2 = document.getElementById("element2");
const button2 = document.getElementById("button2");

button2.addEventListener('click', () => {
    element2.style.cssText = "border: 2px solid pink; background: lightblue";
})


// 3. У вас есть текст. При клике на кнопку измените цвет текста с использованием объекта style.
const element3 = document.getElementById("element3");
const button3 = document.getElementById("button3");
button3.addEventListener('click', () => {
    element3.style.color = "green";
});

// 4. У вас есть элемент, например, <div id="styledElement"></div>.
// При клике на кнопку, динамически добавьте следующие стили к этому элементу:
// Ширина: 150 пикселей,
// Высота: 150 пикселей,
// Фон: светло-розовый.
const styledElement = document.getElementById("styledElement");
const button4 = document.getElementById("button4");
button4.addEventListener('click', () => {
    styledElement.style.width = "150px";
    styledElement.style.height = "150px";
    styledElement.style.backgroundColor = "lightpink";
});



// 5.У вас есть пустая HTML-страница.
// При загрузке страницы через JS создайте элемент div с id "dynamicElement".
// При клике на кнопку, добавьте следующие стили к этому элементу:
// Ширина: 200 пикселей,
// Высота: 200 пикселей,
// Фон: голубой.
// Добавьте текст "Динамический элемент" внутри этого элемента.

// + get body from DOM
// add dynamic element with button to body
// handle button click
const bodies = document.getElementsByTagName('body')
const body = bodies[0];

body.innerHTML = body.innerHTML 
    + `<div id="dynamicElement">dynamic element</div>`
    + `<button id="button5">change dynamic element</button>`;

const dynamicElement = document.getElementById("dynamicElement");
const button5 = document.getElementById("button5");
button5.addEventListener('click', () => {
    dynamicElement.style.width = "200px";
    dynamicElement.style.height = "200px";
    dynamicElement.style.backgroundColor = "blue";
    dynamicElement.innerHTML = dynamicElement.innerHTML + "Динамический элемент"; 
});
