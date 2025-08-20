const formDiv = document.getElementById("element");
console.log(formDiv.classList);

formDiv.classList.add("scaled");
console.log(formDiv.classList);


// У вас есть несколько кнопок и блок текста. При клике на каждую кнопку, добавьте класс "active" к блоку текста. Если у блока уже есть этот класс, оставьте его без изменений.
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const text = document.getElementById("text");
const activeClass = "active";

// -----varian 1 ----
// button1.addEventListener('click', () => {
//     text.classList.add("active");
// });
// button2.addEventListener('click', () => {
//     text.classList.add("active");
// });
// button3.addEventListener('click', () => {
//     text.classList.add("active");
// });

// -----varian 2 ----
// const addActive = () => {
//     const isClassActiveExist = text.classList.contains(activeClass); 
//     if (isClassActiveExist) {
//         text.classList.remove(activeClass);
//     } else {
//         text.classList.add(activeClass);
//     }
// };

// button1.addEventListener('click', addActive);
// button2.addEventListener('click', addActive);
// button3.addEventListener('click', addActive);

// -----varian 3 ----
// const addActive = () => {
//     text.classList.add("active");
// };

// const elem = [button1, button2, button3];
// elem.forEach((button) => button.addEventListener('click', addActive));

//<div class="element light" id="element">
//      <input type="text" placeholder="Поле ввода" id="input" />
//      <p>Сообщение: <span id="span" class="empty">Hello</span></p>
//</div>
const input = document.getElementById("input");
const span = document.getElementById("span");
input.addEventListener('input', () => {
    span.classList.toggle('active')
});

// -----varian 2 ----
const addActive = () => text.classList.toggle(activeClass);

button1.addEventListener('click', addActive);
button2.addEventListener('click', addActive);
button3.addEventListener('click', addActive);

// У вас есть блок текста. При двойном клике на блок текста, замените класс "original" на "changed". Если класс "changed" уже присутствует, замените его обратно на "original". Решите с помощью addEventListener и атрибута ondblclick.
text.addEventListener('dblclick', () => {
    // change class on text element
    text.classList.toggle('changed');
});


// У вас есть кнопка и блок текста. При каждом клике на кнопку, переключайте видимость блока текста. Если блок виден, скройте его, и наоборот.
const button5 = document.getElementById("button5");
const textBlock = document.getElementById("textBlock");
button5.addEventListener('click', (event) => {
    textBlock.classList.toggle('invisible');
    console.log(event)
})