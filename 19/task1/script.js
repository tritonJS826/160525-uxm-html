// const dayString = prompt(); 
// const dayNumber = Number(dayString); 

// if  (dayNumber === 1) {
//     console.log("Monday");
// } else if (dayNumber === 2) {
//     console.log("Tuesday");
// } else if (dayNumber === 3) {
//     console.log("Wednesday");
// } else if (dayNumber === 4) {
//     console.log("Thursday");
// } else if (dayNumber === 5) {
//     console.log("Friday");
// } else if (dayNumber === 6) {
//     console.log("Saturday");
// } else if (dayNumber === 7) {
//     console.log("Sunday");
// } else {
//     console.log("Invalid day");
// }

const dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day");
}


// (dayNumber === 1) {
//     console.log("Monday");
// }

const isMonday = (dayNumber === 1) 
    ? "Monday" 
    : "Not a Monday"; 

// don't do this:
const dayName = (dayNumber === 1) 
    ? "Monday" 
    : (dayNumber === 2) 
        ? "Tuesday"
        : (dayNumber === 3)
            ? "Wednesday"
            : "Not a Monday, Tuesday, Wednesday";


const userName = null;

// ..... userName = Alex;


// only for null and undefined
const showForUser = userName ?? "Hello!"

const showForUser2 = (userName === "")
    ? "Hello!"
    : userName


// Определение положения числа:
// Объявите переменную number и присвойте ей любое число.
// Используя условия if, else if и else, определите, является ли число положительным, отрицательным или нулем.
// Выведите соответствующее сообщение в консоль.

const number = 8;
if (number > 0) {
    console.log("положительное")
} else if (number < 0) {
    console.log("отрицательное")
} else if (number === 0) {
    console.log("равно 0")
}


// Оценка студента:
// Объявите переменную grade и присвойте ей значение от 1 до 5.
// Используя условия if, else if и else, определите оценку студента (например, "Отлично", "Хорошо", "Удовлетворительно", "Неудовлетворительно").
// Выведите результат в консоль.

const grade = 5;
if (grade === 5) {
    console.log("Отлично")
} else if (grade === 4) {
    console.log("Хорошо")
} else if (grade === 3) {
    console.log("Удовлетворительно")
} else {
    console.log("Неудовлетворительно")
}


// Объявите переменную month и присвойте ей значение от 1 до 12, представляющее месяц.
// Используя конструкцию switch, определите текущий сезон (весна, лето, осень, зима) и выведите его в консоль.

const mainElement = document.getElementById("main")

const month = 7

switch (month) {
    case 3:
    case 4:
    case 5:
        mainElement.innerHTML = `<h1>Весна</h1>`
        console.log("Весна")
        break;
    case 6:
    case 7:
    case 8:
        mainElement.innerHTML = `<h2 class="green">Лето</h2>`
        console.log("Лето")
        break;
    case 9:
    case 10:
    case 11:
        mainElement.innerHTML = `<h3 class="red">Осень</h3>`
        console.log("Осень")
        break;
    case 12:
    case 1:
    case 2:
        mainElement.innerHTML = `<h4>Зима</h4>`
        console.log("Зима")
        break;
    default:
        console.error("Not valid value")
}

