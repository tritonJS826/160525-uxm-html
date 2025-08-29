console.log("Task 2");

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

 

const names = people.reduce((accumulator, person) => {
  return accumulator + (accumulator ? ", " : "") + person.name;
}, "");

console.log(names);

const superFunc = (accumulator, person) => {return accumulator + (accumulator ? ", " : "") + person.name}

people.reduce(
    superFunc,
    ""
);

// map + join
people
    .map(person => person.name) // map
    .join(","); // join

// Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().
const numbers = [1, 2, -3, 4, 5];
const isIncludeNegativeNumber = numbers.some((number) => number < 0);
console.log(isIncludeNegativeNumber);

// Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().
const strings = ["apple", "banana", "orange", "watermelon"];
const isHasBiggestWord = strings.some((item) => item.length > 10); // Boolean: true || false
console.log(isHasBiggestWord);


// Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
const numbers2 = [1, 2, 3, 4, 5];
const isAllPositive = numbers2.every((item) => item > 0);
console.log(isAllPositive);

// Проверьте, являются ли все элементы массива четными числами с помощью метода every().
const numbers3 = [2, 4, 6, 8, 10];
const isAllEven = numbers3.every((item) => item % 2 === 0);
console.log(isAllEven)



// Создайте массив чисел. Реализуйте функцию hasEvenNumber, используя метод some, чтобы проверить, содержит ли массив хотя бы одно четное число.
const numbers4 = [1, 3, 5, 6, 9];

function hasEvenNumber(arrayNumbers) {
    return arrayNumbers.some((number) => number % 2 === 0);
}

const isHasEvenNumber = hasEvenNumber(numbers4);
console.log(isHasEvenNumber); // true

// Создайте массив строк. Реализуйте функцию hasStringWithA, используя метод some, чтобы проверить, содержит ли массив хотя бы одну строку с буквой "a". 
const words = ["banana", "orange", "kiwi", "pear"];
function hasStringWithA(arrayWords) {
    return arrayWords.some((word) => word.includes("a"))
};
console.log(hasStringWithA(words)) // true


// Создайте массив чисел. Реализуйте функцию areAllMultiplesOfThree, используя метод every, чтобы проверить, что все числа в массиве кратны 3.
const numbers5 = [3, 6, 9, 12];
function areAllMultiplesOfThree(arrayNumbers) {
    return arrayNumbers.every(number => number % 3 === 0);
}
console.log(areAllMultiplesOfThree(numbers5)); // true

// Создайте массив объектов с полями "name" и "age". Реализуйте функцию hasPersonWithAge, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с определенным возрастом (28).
const people6 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 }
];

function hasPersonWithAge(arrayPersons, age) {
    const isIncludesAge28 = arrayPersons.some(person => person.age === age);
    return isIncludesAge28;
}

const CRITICAL_AGE = 28; 

console.log(hasPersonWithAge(people6, CRITICAL_AGE)); // true