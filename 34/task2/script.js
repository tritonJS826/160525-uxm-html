// Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.
const colors = ["red", "green", "blue"];
colors.shift()
console.log(colors)  // ["green", "blue"]


// Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".
const fruits = ["banana", "orange"];
fruits.unshift("apple")
fruits.unshift("grape")
console.log(fruits) // [grape, apple, banana, orange]


// let sum = 0;
// salaries.forEach((number) => {
//     sum = sum + number
// })
const salaries = [1000, 2000, 3000]; // 6000

const sumSalaries = salaries.reduce((accum, element) => accum + element, 0); 
console.log(sumSalaries)

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
const numbers2 = [5, 10, 15, 20];
const sum = numbers2.reduce((accum, element) => accum + element, 0); 
console.log(sum) // 50


// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
const words = ["Hello", " ", "world", "!"];
const phrase = words.reduce((accum, element) => accum + element, ""); // "Hello world!"
console.log(phrase)

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы найти максимальное число в массиве.
const numbers3 = [14, 5, 22, 8, 45, 11];
const maxNumber = numbers3.reduce((accum, element) => {
    // if (element > accum) {
    //     return element
    // } else {
    //     return accum
    // }
    // return element > accum ? element : accum;
    return Math.max(accum, element)
}, -Infinity);

// const maxNumber2 = Math.max(...numbers3);
console.log(maxNumber) // 45

const word = "Hello!"; // 'H' + 'e' + 'l' ...
const letters = Array.from(word, (letter) => `?${letter}?`);
console.log(letters); // ['?H?', '?e?'...]

const longArray = Array.from(Array(1000).keys()).fill(undefined)
console.log(longArray);

// const onlyPositiveNumbers = numbers11.filter((element) => {
//     const isPositive = element > 0;
//     if (isPositive === true) {
//         return true;
//     } else {
//         return false;
//     }

//     // return isPositive
// });
// Используя методы filter() и reduce(), вычислите сумму всех четных чисел в числовом массиве.
let numericArray2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numericArray2.filter((element) => {
    const isEvenNumber = element % 2 === 0;
    // if (isEvenNumber === true) {
    //     return true;
    // } else {
    //     return false;
    // }
    return isEvenNumber;
})

const sumEven = evenNumbers.reduce((accum, current) => {
    return accum + current
}, 0)
console.log(sumEven)

// const sumEven2 = numericArray2
//     .filter(element => element % 2 === 0)
//     .reduce((accum, current) => accum + current)


// Используя метод from(), создайте новый массив из строки, содержащий только уникальные символы.
let str = "helloasldfhasheelo";
const charsDictionary = {}
//     h: 1,
//     e: 1,
//     l: 3,
//     a: 1,
// }; // [h,e,l,a]

const charsArray = Array.from('helloasldfhasheelo');
charsArray.forEach((char) => {
    if (charsDictionary[char]) {
        charsDictionary[char] = charsDictionary[char] + 1
    } else {
        charsDictionary[char] = 1
    }
});

console.log(charsDictionary); 
const uniqueChars = Object.keys(charsDictionary);
console.log(uniqueChars); 

// Используя методы map(), sort() и filter(), вычислите сумму квадратов всех положительных чисел в числовом массиве, отсортировать массив по возрастанию, последовательно используя filter() map() и filter().
let numericArray = [-2, 3, -5, 1, 4];
// + remove negative numbers (filter)
// + sort
// + pow 2 (map)
// sum (reduce)

const positiveNumbers = numericArray.filter((number) => {
    return number > 0;
});

const sortedNumbers = positiveNumbers.sort((a, b) => a - b);

const pow2Numbers = sortedNumbers.map((element) => {
    return element * element
});

const sumNumbers = pow2Numbers.reduce((accum, element) => accum + element, 0); 
console.log(sumNumbers);

/////////
const sumNumbers2 = numericArray
    .filter(number => number > 0)
    .sort()
    .map(element => element * element)
    .reduce((accum, element) => accum + element, 0)
/////////

const sumNumbers3 = numericArray.reduce((accum, element) => {
    if (element > 0) {
        return accum + element * element
    }
    return accum;
}, 0)

///
const sumNumbers4 = numericArray.reduce((accum, element) => element > 0  ? accum + element * element : accum, 0)


// 1. Создайте пустой массив stack. Реализуйте функцию pushToStack, которая добавляет числа 1, 2, 3 в стек, а затем реализуйте функцию popFromStack, которая удаляет последнее число из стека.
const stack = [];
function pushToStack() {
    stack.push(1,2,3)
}

function popFromStack() {
    stack.pop()
}

pushToStack()
popFromStack()

console.log(stack) // [1,2]


// 2. Создайте массив чисел. Реализуйте функцию doubleEvenNumbers, используя методы map и filter, чтобы удвоить значения только четных чисел.
const numbers4 = [1, 2, 3, 4, 5];
const numbers41 = [4, 2, 7, 4, 5];
// + find even (filter)
// double (map)

function doubleEvenNumbers(arrayNymbers) {
    return arrayNymbers
        .filter(number => number % 2 === 0)
        .map(number => number * 2)
}
console.log(doubleEvenNumbers(numbers4)) // 4, 8
console.log(doubleEvenNumbers(numbers41)) // 8,4,8


// 3. Создайте массив строк. Реализуйте функцию addExclamation, используя метод forEach, чтобы добавить к каждой строке восклицательный знак "!".
const phrases = ["Hello", "How are you", "Goodbye"];
function addExclamation(arrayStrings) {
    return arrayStrings.map((string) => `${string}!`)
    // return arrayStrings.map((string) => string + '!')
}
console.log(addExclamation(phrases));


// 4. Cоздайте массив чисел. Реализуйте функцию calculateAverage, используя методы shift и reduce, чтобы вычислить среднее значение чисел в массиве.
const numbers5 = [10, 20, 30, 40, 50];
const numbers51 = [40, 40, 40, 40, 50];
// sum (reduce)
// calculate average

// .reduce((accum, element) => accum + element, 0)
function calculateAverage(numbersArray) {
    const numbersSum = numbersArray.reduce((accum, element) => accum + element, 0);
    const averageValue = numbersSum / numbersArray.length;
    return averageValue
}
console.log(calculateAverage(numbers5)) // 30
console.log(calculateAverage(numbers51)) // 42

// 5. Создайте массив чисел. Реализуйте функцию addAndSort, используя методы unshift и sort, чтобы добавить число 5 в начало массива и отсортировать его по возрастанию.
const numbers6 = [3, 1, 4, 2];

function addAndSort(arrayNumbers) {
    // add number (shift)
    // sort array (sort)
    arrayNumbers.unshift(5);
    arrayNumbers.sort();
    return arrayNumbers;
}

console.log(addAndSort(numbers6)); // 1,2,3,4,5


// 6. Создайте массив строк. Реализуйте функцию concatenateAndCountChars, используя методы map и reduce, чтобы объединить строки в одну и подсчитать общее количество символов. (Разобрать вместе, показать как работают методы toUpperCase()/toLowerCase() и join())
const words2 = ["apple", "banana", "cherry"];
// const phrase2 = words2.reduce((accum, element) => accum + element, "");
const phrase2 = words2.join("")

console.log(phrase2);

const baseString = "Super apple banana cherry hello!";
// remove all words with 'a' character
baseString
    .split(' ')
    .filter(word => !word.includes('a'))
    .join(" ");

// 7. Создайте массив объектов с полями "name" и "age". Реализуйте функцию updateAges, используя методы forEach и filter, чтобы увеличить возраст на 1 для всех объектов с возрастом менее 30 лет.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 }
];

// filter by age (filter)
// increase age (map)
function updateAges(arrayPeople) {
    return arrayPeople
        .filter((person) => person.age < 30)
        .map(person => ({name: person.name, age: person.age + 1}));
}

console.log(updateAges(people))

// 8. Создайте массив чисел. Реализуйте функцию sumAndMultiplyByLast, используя методы reduce и map, чтобы вычислить сумму чисел и умножить ее на последний элемент массива.
const numbers7 = [2, 4, 6, 8, 10];
function sumAndMultiplyByLast(arrayNumbers) {
    const sum = arrayNumbers.reduce((accum, element) => accum + element, 0);
    const lastElement = arrayNumbers[arrayNumbers.length - 1]
    const result = sum * lastElement;
    return result;
}

console.log(sumAndMultiplyByLast(numbers7))


// 9. Создайте массив строк. Реализуйте функцию filterAndSortStrings, используя методы filter и sort, чтобы оставить только строки длиной более 3 символов и отсортировать их по алфавиту.
const words3 = ["apple", "pear", "banana", "kiwi", "hi"];

function filterAndSortStrings(arrayStrings) {
    return arrayStrings
        .filter(word => word.length > 3)
        .sort();
}

console.log(filterAndSortStrings(words3))

