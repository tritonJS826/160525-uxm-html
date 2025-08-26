const array = ['first', 'second'];

array[2] = 'third';

// ['first', 'second', 'third'];

array.push('fourth')
// ['first', 'second', 'third', 'fourth'];

array.pop() 
console.log(array) // ['first', 'second', 'third']




function doSomething(action) {
    console.log('start')
    action()
    console.log('end')
}


function showHello() {
    console.log("Hello")
}

doSomething(showHello)
// doSomething(function() {
//     alert("Hello")
// })


const array2 = [1, 2, 3, 4, 5];
const array3 = [6,7,8]

// 1
function showElement(element) {
    console.log(element)
}

array2.forEach(showElement);
array3.forEach(showElement);
// 1 end

// 2
array2.forEach((element) => {
  console.log(element);
});
array3.forEach((element, index, array) => {
  console.log('element ' + element);
  console.log('index ' + index);
  console.log('array ' + array);
});
// element 6
// index 0
// array [6,7,8]
// element 7
// index 1
// array [6,7,8]
// element 8
// index 2
// array [6,7,8]

// 2 end


const array4 = [1,2,3]
const newArray4 = array4.map((element) => element * 2)

console.log(newArray4) // [2,4,6]

function convertCardDataToHTML(cardData) {
    return `
        <div>
            <h2>${cardData.title}</h2>
            <img class="cardImage" src="${cardData.imgUrl}" alt="${cardData.description}" />
            <p>${cardData.description}</p>
        </div>`
}

function renderCard(cardHtml) {
    const currentHTML = document.getElementById('cards')
    currentHTML.innerHTML = currentHTML.innerHTML + cardHtml;
}

const cardsData = [
    {title: 'First!!', description: "super first", imgUrl: 'assets/Chris Do.png', order: 1},
    {title: 'Second', description: "super second", imgUrl: 'assets/Ioana Teleanu.png', order: 2},
    {title: 'First', description: "super first", imgUrl: 'assets/Kyle Poyar.png'},
    {title: 'Second', description: "super second", imgUrl: 'assets/Kyle Poyar.png'},
    {title: 'First', description: "super first", imgUrl: 'assets/Ioana Teleanu.png'},
    {title: 'Second', description: "super second", imgUrl: 'assets/Chris Do.png'},
];


// const cardsHTML = cardsData.map(convertCardDataToHTML)
// cardsHTML.forEach(renderCard)

cardsData.map(convertCardDataToHTML).forEach(renderCard);



const array5 = [3,7,5,8,2,4];
const newArray5 = array5.filter((value) => {
    const isEven = value % 2 === 0;
    return isEven; // true for even numbers
});

console.log(newArray5) // 8,2,4


const sortedArray1 = array5.sort((a, b) => {
    return a - b
});
console.log(sortedArray1) // 2,3,4,5,7,8
console.log(sortedArray1.sort()) // 2,3,4,5,7,8

const array6 = ['apple', 'orange', 'banana'];
console.log(array6.sort()) // ['apple', 'banana', 'orange'] 



// Создайте пустой массив colors. Используйте метод push, чтобы добавить в него три цвета: "red", "green", "blue". (Попробовать решить с помощью цикла)
const colors = [];
colors.push("red")
colors.push("green")
colors.push("blue")

// Создайте массив numbers с элементами 1 и 2. Используйте метод push, чтобы добавить в него два новых числа: 3 и 4.
const numbers = [1,2];
numbers.push(3);
numbers.push(4, 5);


// Используя метод forEach(), выведите в консоль сумму всех элементов числового массива.
const numbers2 = [1,2,3,4];
let sum = 0;
numbers2.forEach((number) => {
    sum = sum + number
})
console.log(sum)


// Используя метод forEach(), умножьте каждый элемент числового массива на его индекс.
const numbers3 = [1,2,3,4];
numbers3.forEach((element, index) => {
    numbers3[index] = element * index;
})
console.log(numbers3); // 0, 2, 6, 12


// Используя метод map(), создайте новый массив, содержащий длины каждого элемента исходного массива.
const sourceArray = ['aaa', 'bababab', 'uuuuu'];
const newArrayFromSource = sourceArray.map((element) => element.length);
console.log(newArrayFromSource); // 3, 7, 5

// Используя метод map(), создайте новый массив, содержащий квадратный корень каждого элемента числового массива.
const numbersArray = [2,4,9];
const numbersSqrt = numbersArray.map((element) => Math.sqrt(element))
console.log(numbersSqrt) // 1.41, 2, 3


// Создайте массив чисел. Используя метод forEach и условие, выведите в консоль только четные числа из массива.
const numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers7.forEach((num) => {
    const isEven = num % 2 === 0;
    if (isEven) {
        console.log(num)
    }
});


// Создайте массив чисел. Напишите функцию, используя метод forEach, чтобы определить и вывести в консоль среднее значение чисел в массиве.
const numbers8 = [10, 20, 30, 40, 50];
let sum8 = 0;
numbers8.forEach((number) => {
    sum8 = sum8 + number
})
const average = sum8 / numbers8.length;
console.log(average); // 30


// Создайте массив чисел. Напишите функцию, используя метод map, чтобы создать новый массив, содержащий удвоенные значения каждого элемента из первого массива.
const numbers9 = [1, 2, 3, 4, 5];
const newArray9 = numbers9.map((element) => element * 2);
console.log(newArray9); // 2,4,6,8,10



// Создайте массив объектов с полями "name". Используйте метод map, чтобы создать новый массив, содержащий только имена из первого массива.
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
const names = people.map((person) => {
    return person.name;
});
console.log(names); // ["Alice", "Bob", "Charlie"]


// Создайте массив чисел. Используйте метод map, чтобы создать новый массив, содержащий эти же числа, но представленные в виде строк.
const numbers10 = [42, 17, 8, 99, 23];
const numberStrings = numbers10.map((element) => {
    // return String(element)
    return `${element}`
});
console.log(numbers10)
console.log(numberStrings)

// Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.
const animals = ["cat", "dog", "rabbit"];
animals.pop();
console.log(animals);

// Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.
const letters = ["A", "B", "C"];
const lastLetter = letters.pop();
console.log(lastLetter);


// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.
const numbers11 = [-2, 5, -8, 10, -3, 7];
const onlyPositiveNumbers = numbers11.filter((element) => {
    const isPositive = element > 0;
    if (isPositive === true) {
        return true;
    } else {
        return false;
    }

    // return isPositive
});
console.log(onlyPositiveNumbers) // 5,10,7

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.
const numbers12 = [9, 12, 5, 18, 7, 24];
const onlyDividedOn3 = numbers12.filter((element) => {
    const isDividedOn3 = element % 3 === 0;
    return isDividedOn3;
}); 
console.log(onlyDividedOn3) // 9,12,18,24

// Используя метод sort(), отсортируйте числовой массив по убыванию. 
const array13 = [4, 2, 5, 1, 3];
array13.sort((a,b) => b - a)
console.log(array13)

// Используя метод sort(), отсортируйте массив объектов по значению определенного свойства.
const people2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
// from old to young
people2.sort((person1, person2) => {
    return person1.age - person2.age;
});

console.log(people2.reverse());


// callback

// push\pop

// forEach
// map

// filter
// sort









