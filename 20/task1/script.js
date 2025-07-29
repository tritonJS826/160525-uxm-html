// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }



// let i = 0;
// while (i < 5) {
//   i = i + 1;
//   if (i === 3) {
//     break;
//   }
//   console.log(i)
// }

// let i = 0;
// do {
//   i = i + 1;
//   if (i === 3) {
//     break;
//   }
//   console.log(i)
// } while (i < 5)

// Вывести числа от 1 до 5, прервать цикл, если текущее число равно 3.
// for (let i = 1; i <= 5 ; i++) {
    // if (i === 3) {
//        continue;
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 5 ; i++) {
//     if (i !== 3) {
//       console.log(i)
//     }
// }

// Вывести только нечетные числа от 1 до 6, используя continue.

// for (let i = 1; i <= 6 ; i++) {
//     if (i % 2 === 0) {
//        continue;
//     }
//     console.log(i)
// }

// Вывести числа от 1 до 10, прервать цикл, если текущее число больше 7.
// for (let i = 1; i <= 10 ; i++) {
//    if (i === 7) {
//     break;
//    }
//    console.log(i)
// }

// Вывести числа от 1 до 5, пропустить вывод числа 3 с использованием continue.
// for (let i = 1; i <= 5; i++) {
//    if (i === 3) {
//     continue;
//    }
//    console.log(i) 
// }


// Напишите программу для оценки студентов в зависимости от их баллов. Программа должна принимать на вход количество баллов (целое число) и выводить оценку в виде буквенного символа по следующей шкале:
// 90 и выше: 'A'
// 80-89: 'B'
// 70-79: 'C'
// 60-69: 'D'
// Меньше 60: 'F'

// const gradeString = prompt("Enter your grade")
// const grade = Number(gradeString)

// if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7, представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее).
// Используя конструкцию switch, определите текущий день недели и выведите его в консоль. (Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)
// const dayOfWeek = 2;

// switch (dayOfWeek) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Invalid day");
// }



const text = "long text! long text! long text! long text! long text!";
const mainElement = document.getElementById("main");

for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
        mainElement.lastElementChild?.classList.toggle('big-letter', false)
        mainElement.innerHTML = mainElement.innerHTML + `<span class="big-letter">${text[i]}</span>`;
    }, i*50);
}

