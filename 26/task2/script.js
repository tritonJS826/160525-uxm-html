// const main = document.getElementById("main");
// main.innerHTML += `<div>Hello</div>` 

// const element = document.createElement("div");
// element.textContent = "hello"
// console.log(element);


// const pElem = document.createElement("p");
// pElem.innerText = "Созданный элемент";
// document.getElementById("paragraph").appendChild(pElem);

// let newHeader = document.createElement('h1');
// newHeader.textContent = 'Добро пожаловать на мою страницу!';
// document.body.prepend(newHeader);

// main.innerHTML = `<h3>Hello! Hello!</h3>${main.innerHTML}<h3>Super</h3>`;


// document.getElementById("block").insertAdjacentHTML('beforeend', "<p>Добавили в конец блок p</p>");
// document.getElementById("block").insertAdjacentHTML('afterend', "<p>Добавили в конец блок p (after)</p>");
// document.getElementById("block").insertAdjacentHTML('beforebegin', "<p>Добавили в конец блок p (before)</p>");
// document.getElementById("block").insertAdjacentHTML('afterbegin', "<p>Добавили в конец блок p (after)</p>");



// 1. Создайте кнопку с текстом "Нажми меня" и добавьте её на вашу веб-страницу внутри элемента с идентификатором "myDiv".
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = `<button>Нажми меня</button>`;


// 2. Создайте список (например, ul) и добавьте в него три элемента списка (li) с текстом "Пункт 1", "Пункт 2", "Пункт 3". Затем добавьте этот список на вашу веб-страницу (Делаем с преподавателем). Можно попробовать использовать циклы.
const listBlock = document.getElementById("listBlock");

let liItems = '';
for (let i = 0; i < 30; i++) {
    // liItems += '<li>li elem' + i + '</li>'
    liItems += `<li>li elem ${i}</li>`
}


listBlock.innerHTML = `
    <ul>
        <li>li elem</li>
        <li>li elem</li>
        <li>li elem</li>
        ${liItems}    
    </ul>
`;

// 3. Создайте новый элемент изображения (img) и установите ему атрибут src с ссылкой на изображение. Далее добавьте это изображение на вашу веб-страницу. Изображение может быть любым.
const pictureBlock = document.getElementById("pictureBlock");
const imgSrc = '2back.webp';
// pictureBlock.innerHTML = `<img src="2back.webp" alt="2back"/>`;
pictureBlock.innerHTML = `<img src="${imgSrc}" alt="2back"/>`;


// 4. Создайте новый элемент абзаца (p) с текстом "Этот текст добавлен перед остальными" и добавьте его перед всеми существующими элементами внутри элемента с идентификатором "contentContainer"
const contentContainer = document.getElementById("contentContainer");
contentContainer.innerHTML = `<p>Этот текст добавлен перед остальными</p>` + contentContainer.innerHTML;


// Используя метод insertAdjacentHTML, создайте новый заголовок второго уровня (h2) с текстом "Дополнительный заголовок" и вставьте его перед существующим заголовком первого уровня (h1) внутри элемента с идентификатором "headerContainer".
const headerContainer = document.getElementById("headerContainer");
headerContainer.innerHTML = `<h2>Дополнительный заголовок</h2>` + headerContainer.innerHTML;
headerContainer.insertAdjacentHTML('afterbegin', `<h2>Дополнительный заголовок</h2>`);

// beforebigin
// <a>
// afterbegin

// beforeend
// </a>
// afterend

// Создайте форму с использованием HTML, включающую поля для ввода имени и электронной почты, а также кнопку "Отправить". Используя JavaScript, создайте новый элемент <label> с текстом "Выберите страну" и выпадающим списком <select>, содержащим несколько вариантов стран (например, Япония, США, Китай). Добавьте этот элемент в конец вашей формы.

// `<img src="${imgSrc}" alt="2back"/>`

let images = '';
for (let i = 0; i < 6; i++) {
    images += `<img src="${imgSrc}" alt="2back" style="height: 50px; margin: 10px"/>`
}
pictureBlock.innerHTML = images;


const copiedBlock = document.getElementById("copiedBlock")
const copiedBlockHTML = copiedBlock.innerHTML;
// console.log(copiedBlockHTML)
// copiedBlock.insertAdjacentHTML('beforebegin', `<div>${copiedBlockHTML}</div>`);
const copiedBlockHTMLFull = copiedBlock.outerHTML;
copiedBlock.insertAdjacentHTML('beforebegin', copiedBlockHTMLFull);


const myElement1 = document.getElementById('copiedBlock');
myElement1.remove();
const myElement2 = document.getElementById('copiedBlock');
myElement2.remove();


// const parentElement = document.getElementById('parentElement');
// const childElement = document.getElementById('childElement');
// parentElement.removeChild(childElement);
// childElement.remove()


// У вас есть изображение. Под изображением есть второе изображение с id "copied-image". При загрузке страницы проверьте, существует ли второе изображение с id "copied-image". Если второго изображения нет, создайте копию первого изображения и добавьте ее под оригиналом с id "copied-image".


const imagesForCopy = document.querySelectorAll('img#copied-image')
const isCopyExist = Array.from(imagesForCopy).length >= 2;
/**copy not exist */    
if (!isCopyExist) {
    const copiedImage = document.getElementById("copied-image");
    
}



// У вас есть кнопка. При каждом клике на кнопку увеличивайте счётчик и выводите текущее значение счетчика.
const button = document.getElementById("button");
button.addEventListener('click', (event) => {
    const counter = document.getElementById("counter");
    counter.innerHTML = Number(counter.innerHTML) + 1 
});

// У вас есть абзац текста. При клике клике на абзац, измените его текст.
// У вас есть элемент, например, <p>. При клике на элементе, измените его текст. При следующем клике восстановите исходный текст.
const paragraph = document.getElementById("text");
paragraph.addEventListener('click', (event) => {
    // is className super alredy exist
    const isClassSuperAlreadyExist = paragraph.classList.contains('super') // true || false
    if (isClassSuperAlreadyExist) {
        paragraph.classList.remove('super');
    } else {
        paragraph.classList.add('super');
    }

    console.log(event.target)
    // paragraph.setAttribute()
    // paragraph.innerHTML = `<strong class="super">${paragraph.innerHTML}</strong>`
})


console.log('script.js loaded');





