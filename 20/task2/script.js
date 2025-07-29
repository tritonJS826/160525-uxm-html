//  0 1 2
const names = ["Viktar", "Ivan", "Kate"];

console.log(names[0]) // Viktar
console.log(names[1]) // Ivan


const kateName = names[names.length - 1];



const array1 = []; // array: ->link 
array1[0] = "Viktar";

// const array2 = new Array(3).fill(undefined);
// array[0] = "Viktar";
// array[1] = "Ivan";
// array[2] = "Kate";


console.log(names.length) // 3
console.log(array1.length) // 1

// show all names
for (let i = 0;i <= names.length - 1;i++) {
    console.log(names[i] + "!")
} // "Viktar!", "Ivan!", "Kate!"



// Создайте массив с вашими любимыми цветами и выведите его в консоль.
const colors = ["красный", "черный", "белый"];
console.log(colors)

// Создайте массив чисел и выведите каждый элемент в консоль.
const numbers = [1,2,3,4,5,11,6,7,8];
for (let i = 0;i <= numbers.length - 1;i++) {
    console.log(numbers[i])
}
// numbers.forEach(console.log)

console.log("Создайте массив чисел и выведите только четные числа")
for (let i = 0;i <= numbers.length - 1;i++) {
    const isCurrentNumberEven = numbers[i] % 2 === 0;
    
    if (isCurrentNumberEven) {
        console.log(numbers[i])
    }
}
// numbers.forEach((el) => {
//     const isCurrentNumberEven = numbers[i] % 2 === 0;
//     if (isCurrentNumberEven) {
//         console.log(el)
//     }
// })

console.log("Создайте массив чисел и найдите их сумму.")
let sum = 0;
for (let i = 0; i <= numbers.length - 1; i = i + 1) {
    sum = sum + numbers[i];
    // sum += numbers[i];
}
console.log(sum);
// const finalSum = numbers.reduce((sum, el) => el + sum, 0)

console.log("Создайте массив строк и выведите их в обратном порядке.") 
for (let i = colors.length - 1;i >= 0;i--) {
    console.log(colors[i])
}

console.log("Создайте массив с рандомными числами")
const randomNumbers = [];
for (let i = 0; i <= 10; i = i + 1) {
    randomNumbers[i] = Math.round(Math.random() * 100);
}
console.log(randomNumbers)





























