
// for (let i = 4; i <= 10; i = i + 2) {
//     console.log(i)
//     i = i + 1;
// }
// console.log("finished")


// let a = 0;
// do {
//     console.log(a)
//     a = a + 1;
// } while (a <= 5)


// const names = ['Viktar', 'Ivan', "Anna"];

// for (let i = 0; i < 3; i++) {
//     console.log(names[i])
// }

// names.forEach((value) => console.log(value))


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// Вывести числа от 1 до 5 в консоль.
// for (let i = 1; i<=5 ; i = i + 1) {
//     console.log(i)
// }


// Вывести квадраты чисел от 1 до 3 в консоль.
// let currentNumber = 1;
// do {
//     console.log(currentNumber ** 2)
//     currentNumber = currentNumber + 1;
// } while (currentNumber <= 30)

// const numbers = [...Array(31).keys()]
// numbers.forEach(
//     (num) => console.log(num**2)
// )




// Вывести только четные числа от 2 до 8 в консоль.
// const numbers = [2,3,4,5,6,7,8,9,10]
// numbers.forEach(
//     (num) => {
//         // четное
//         if (num % 2 === 0) {
//             console.log(num)
//         }
//     }
// )


// Вывести числа от 10 до 1 в обратном порядке.
// for (let i = 10; i >= 1 ; i--) {
//     console.log(i)
// }



// Вывести таблицу умножения на 3 (от 1 до 10).
// let currentNumber = 1;
// do {
//     console.log(currentNumber * 3)
//     currentNumber = currentNumber + 1;
// } while (currentNumber <= 10)


const numbers = [...Array(11).keys()]
numbers.forEach(
    (num) => console.log(num ** 4)
)
