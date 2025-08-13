// 1. Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.

const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = i + 1;
    // arr.push(i);
}

console.log(numbers)

// 2. Обход массива: создайте массив чисел. Напишите код, который использует цикл for для перебора элементов массива и выводит каждое число в консоль.
for (let i = 0; i < 10; i++) {
    console.log(numbers[i])
}

// 3. Поиск в массиве: создайте массив строк и строку для поиска. Напишите код, который использует цикл do-while, чтобы найти, есть ли заданная строка в массиве.

const strings = ["one", 'two', "secret", "three", "secret"];
const searchString = "secret";
let i = 0;
let isExist = false;
do {
    // check is secret exist in the array
    if (strings[i] === searchString) {
        isExist = true;
        break;
    }
    i++;
} while (i < strings.length);
console.log(isExist, i);


// 4. Обратный обход массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы перебрать массив в обратном порядке (с последнего элемента к первому).
const numbers2 = [1,2,3,4,5,6,7,8,9,10,11];
for (let i = numbers2.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}

// 5. Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.

const numbers3 = [1,7,3,8,1,9,2,6,5];
const filteredNumbers = [];
for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] > 5) {
        filteredNumbers.push(numbers3[i])
    }
}

console.log(filteredNumbers); // 7,8,9,6

// 6. У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.


// Исходный массив студентов с оценками
const students = [
  { name: 'Анна', grades: [85, 90, 92] },
  { name: 'Иван', grades: [88, 75, 96] },
  { name: 'Мария', grades: [78, 82, 94] },
];
// const updatedStudents = [
//     { name: 'Анна', averageGrade: 89 },
//     { name: 'Иван', averageGrade: 86.3 },
//     { name: 'Мария', averageGrade: 84.6 },
// ];
const updatedStudents = [];
for (let i = 0; i < students.length; i++) {
    const sum = students[i].grades.reduce(
        (studentsGradesSum, current) => studentsGradesSum + current,
        0,
    );
    const averageGrade = sum / students[i].grades.length

    const newStudent = {
        name: students[i].name,
        averageGrade: averageGrade.toFixed(2),
    };

    updatedStudents.push(newStudent);
}

console.log(updatedStudents);


/// ------------------------

function calculateAverage(grades) {
  let sum = 0;

  // Используем цикл for для суммирования оценок
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

  // Вычисляем среднюю оценку
  return sum / grades.length;
}

// { name: 'Анна', grades: [85, 90, 92] }, 
// => 
// { name: 'Мария', averageGrade: 84.6 },
// Функция для создания нового объекта с именем и средней оценкой
function createStudentAverage(student) {
  return {
    name: student.name,
    averageGrade: calculateAverage(student.grades),
  };
}

// Новый массив объектов с именами и средними оценками студентов
const studentsWithAverages = [];


// Используем цикл for для обработки каждого студента
for (let i = 0; i < students.length; i++) {
  const studentAverage = createStudentAverage(students[i]);
  studentsWithAverages.push(studentAverage);
}

// Выводим результат в консоль
console.log(studentsWithAverages);


// factorial 10 = 1 * 2 * 3 ... * 9 * 10
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

const factorial10 = factorial(10);
console.log(factorial10);
const factorial4 = factorial(4); // 6
console.log(factorial4);


// Напишите функцию, которая переворачивает строку.
function reverseString(string) { // abc newString: 'cba' i:3
    let newString = ''; 
    for (let i = 0; i < string.length; i = i + 1) {
        newString = string[i] + newString;
    }
    return newString;
}

const myString = "ViktarSuperDuper";

console.log(reverseString(myString))


// Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму.
const sum = (array) => {
    const result = array.reduce(
        (accum, current) => accum + current,
        0,
    );

    return result;
};
// const sum = array => array.reduce((accum, current) => accum + current, 0);

const array = [1,2,3,4,5];
console.log(sum(array));


// Напишите функцию, которая находит максимальный элемент в массиве чисел.
const getMax = (numberArray) => { 
    let maxElement = -Infinity;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > maxElement) {
            maxElement = numberArray[i]
        }
    }

    return maxElement;
};

const array1 = [-100000, -7 ,-3 , -4];
console.log(getMax(array1)); // 7

// Напишите функцию, которая удваивает каждый элемент в массиве чисел.
const mapMultiply2 = (numberArray) => {
    let newNumberArray = [];
    for (let i = 0; i < numberArray.length; i++) {
        newNumberArray[i] = numberArray[i] * 2;
    }

    return newNumberArray;
};

const array2 = [1,2,3,4,5];
console.log(mapMultiply2(array2));
console.log(array2.map(element => element * 2));




// const students = [
//   { name: 'Анна', grades: [85, 90, 92] },
//   { name: 'Иван', grades: [88, 75, 96] },
//   { name: 'Мария', grades: [78, 82, 94] },
// ];
// const updatedStudents = [
//     { name: 'Анна', averageGrade: 89 },
//     { name: 'Иван', averageGrade: 86.3 },
//     { name: 'Мария', averageGrade: 84.6 },
// ];
// const newStudents = students.map(student => {
//     return {
//         name: student.name,
//         averageGrade: calculateAverage(student.grades),
//     }
// })
// console.log(newStudents)


// Напишите функцию, которая проверяет, есть ли определенный элемент в массиве.
const elements = ['one', 1, 0, 'minus', true, undefined];
const searchedElement = 100;

const resultElement = elements.find(el => el === searchedElement);
console.log(resultElement)


// Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.
const keys = ['one', 'two', 'three'];
const values = [1,2,3];
/*
* {one: 1, two: 2, three:3} 
*/
const mergeArrays = (keysArr, valuesArr) => {
    const finalObject = {};
    for (let i = 0; i < keysArr.length; i++) {
        const key = keysArr[i];
        const value = valuesArr[i];

        finalObject[key] = value;
    }

    return finalObject;
}

console.log(mergeArrays(keys, values));
