// window.localStorage.setItem('name', ‘John’);
// window.localStorage.getItem('name'); // “John”
// window.localStorage.removeItem('name')
// window.localStorage.clear();

const TASK_1_KEY = "37.2task1"
// 1. Создадим кнопку, которая переключает значение localStorage из 1 в 0 и обратно. (key: "37.2task1")
localStorage.setItem(TASK_1_KEY, "1");
// const task1Value1 = localStorage.getItem(TASK_1_KEY) //  1
// console.log(task1Value1) // 1

localStorage.setItem(TASK_1_KEY, "0");
// const task1Value2 = localStorage.getItem(TASK_1_KEY) //  0
// console.log(task1Value2) // 0

localStorage.setItem(TASK_1_KEY, "1");
// const task1Value3 = localStorage.getItem(TASK_1_KEY) //  1
// console.log(task1Value3) // 1

// 2. Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.
const TASK_2_KEY_NAME = "37.2task2Name"
const TASK_2_KEY_SURNAME = "37.2task2Surname"

const buttonSave = document.getElementById("buttonSave");
const buttonLoad = document.getElementById("buttonLoad");
const buttonResetLocalStorage = document.getElementById("buttonResetLocalStorage");

function saveFormData() {
    const name = document.getElementById("inputName").value;
    console.log(name);
    localStorage.setItem(TASK_2_KEY_NAME, name)

    const surname = document.getElementById("inputSurname").value;
    console.log(surname);
    localStorage.setItem(TASK_2_KEY_SURNAME, surname)  
} 

buttonSave.addEventListener('click', () => {
    saveFormData();
})


// 3.  К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.
function loadCachedData() {
    const name = localStorage.getItem(TASK_2_KEY_NAME);
    console.log(name);
    document.getElementById("inputName").value = name;

    const surname = localStorage.getItem(TASK_2_KEY_SURNAME);
    console.log(surname);
    document.getElementById("inputSurname").value = surname;
}

buttonLoad.addEventListener('click', () => {
    loadCachedData();
});

// 4. Добавить кнопку, которая очищает localStorage.
function resetLocalStorage() {
    localStorage.clear();
}

buttonResetLocalStorage.addEventListener('click', () => {
    resetLocalStorage();
});


// 1. Реализовать переключение межде темной и светлой темой с сохранением выбранного значения в localStorage.
const html = document.querySelector("html");
const theme = localStorage.getItem("theme"); // dark | light
if (theme) {
    html.setAttribute("data-theme", theme);
}

const switchTheme = () => {
    // получаем текущее значение темы
    const currentTheme = localStorage.getItem("theme");
    const html = document.querySelector("html");

    const isThemeValid = (currentTheme === "light") || (currentTheme === "dark"); // true | false

    // handle first switch theme click
    if (!isThemeValid) {
        // set default 2nd theme
        localStorage.setItem("theme", "dark");
        html.setAttribute("data-theme", "dark");
        return;
    }

    // Theme exist below

    if (currentTheme === "light") {
        // если условие верно, меняем его на dark
        localStorage.setItem("theme", "dark");
        html.setAttribute("data-theme", "dark");
        return;
    } 
    
    if (currentTheme === "dark") {
        // если условие ложно, меняем его на light
        localStorage.setItem("theme", "light");
        html.setAttribute("data-theme", "light");
        return 
    }
};

const buttonSwitchTheme = document.getElementById('buttonSwitchTheme');
buttonSwitchTheme.addEventListener('click', () => {
    switchTheme();
});



// 2. Создайте простую HTML-страницу с текстовым полем ввода, кнопкой "Сохранить" и блоком, в который будет выводиться сохраненное имя (h1). При вводе имени и нажатии кнопки "Сохранить", имя должно сохраняться в Local Storage и отображаться на странице при обновлении.


// add user name input
// add button Сохранить
// update h1 block

const TASK_3_KEY_NAME = "38.1task2UserName"
// const h1Greetings = document.getElementById("h1Greetings");
// const inputUserName = document.getElementById("inputUserName");
const buttonSaveNameGreet = document.getElementById("buttonSaveNameGreet");

buttonSaveNameGreet.addEventListener('click', () => {
    // read name from input
    const userName = document.getElementById("inputUserName").value;
    // save name to Local storage
    localStorage.setItem(TASK_3_KEY_NAME, userName);
    // rerender h1 in html
    document.getElementById("h1Greetings").innerHTML = `Welcome, ${userName}!`
})

function loadGreetings() {
    const userName = localStorage.getItem(TASK_3_KEY_NAME);
    if (userName === null) {
        document.getElementById("h1Greetings").innerHTML = `Welcome!`
        return;    
    }
    document.getElementById("h1Greetings").innerHTML = `Welcome, ${userName}!`
}

loadGreetings();