
// const paragraph = d;
// console.log(paraph.innerText);ocument.getElementById("paragraph")
// console.log(paragragraph);
// console.log(paragraph.classList); 


// const elements = document.getElementsByClassName("element");
// console.log(elements); // [div1, div2, div3]
// console.log(elements[1].innerText);

// const paragraphAgain = document.getElementsByTagName('p');
// console.log(paragraphAgain[0].innerText)

// const secondElement = document.querySelector('.element.par');
// console.log(secondElement.innerText);

// const elementsAgain = document.querySelectorAll('div.element');
// console.log(elementsAgain);

// secondElement.innerText = 1;
// setInterval(() => {
//     secondElement.innerText = Number(secondElement.innerText) + 1;
// }, 100)

const welcomeText = 'Hello!';
const element3 = document.getElementsByClassName('element')[2];
element3.innerHTML = `<p>${welcomeText}</p><p>${welcomeText}</p>`


{/* <input type="checkbox" id="scales" name="scales" /> */}
setInterval(() => {
    const checkbox = document.getElementById('scales');
    const checkboxNewValue = !checkbox.checked;
    checkbox.checked = checkboxNewValue;
}, 300)

const input = document.getElementById('myInput');
input.value = 'new value'


// function renderOrange() {
//     // ...
// }

// const data = [
//     {
//         position: 2,
//         size: "small",
//     },
//     {
//         position: 3,
//         size: "big",
//     }, {
//         position: 4,
//         size: "small"
//     }
// ]






