function sum(a, b) {
    const aAndBSum = a + b;
    return aAndBSum;

    // will not be executed
    // const b = 8;
    // return a+b;
}

const superNumber = 7;
const newSum = sum(5,superNumber);

const result = console.log(newSum);
console.log("result" + result + "!")


// divideOneTo(3); // 0.3333333

function superFunc() {
    const a = 3;
    console.log(a) // 3
    console.log(superNumber)  // 7
}

function defineVariable() {
    const a = 1;
    console.log(a) // 1
    console.log(superNumber)  // 7
}

// console.log(a) // undefined


// Создайте функцию `greet`, которая выводит в консоль приветствие "Привет, мир!".
function greet(name) {
    console.log(`Привет ${name}`)
}

greet("Viktar") // Привет Viktar
greet("Ivan") // Привет Ivan

// Создайте функцию `square`, которая запрашивает у пользователя число, возводит его в квадрат и выводит результат.
function square(number) {
    const result = number * number;
    return result;
}

console.log(square(3)) // 9

const kitchenSquare = square(4)
console.log(kitchenSquare) // 16


// Напишите функцию `isEven`, которая запрашивает у пользователя число, проверяет его на четность и выводит результат в консоль.
function isEven(userNumber) {
    if (userNumber % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// const num = prompt()
// isEven(num) // Even
isEven(8) // Even
isEven(9) // Odd

// Создайте функцию `concatenate`, которая запрашивает у пользователя две строки, объединяет их и выводит результат.
function concatenate(string1, string2) {
    // string1 + " " + string2
    return `${string1} ${string2}`;
}

console.log(concatenate("first", "second"));



const student = {
    age: 25,
    name: "Viktar",
    sayHi: function () {console.log("Hi!")},
    sayOwnName: function () {
        console.log(`My name is ${this.name}!`)
    },
    printName() {
        console.log(`${this.name} is my name!`)
    },
};


student.sayOwnName()


// Создайте объект user с методом sayHello, который принимает имя пользователя и возвращает приветствие.
const user = {
    sayHello(userName) {console.log(`Hello ${userName}!`)}
};

user.sayHello("Viktar")


// Создайте объект calculator с методом add, который принимает два числа и возвращает их сумму.
const calculator = {
    add(num1, num2) {
        const sum = num1 + num2; 
        return sum;
    },
    // minus: (num1, num2) => num1 - num2,
    // minus: (num1, num2) => {
    //     console.log(num1, num2)
    //     return num1 - num2
    // },
    minus: (num1, num2) => console.log(num1, num2),
};

const numSum = calculator.add(3,5)
console.log(numSum);


const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(el => el * el)
console.log(squaredNumbers) // [1, 4, 9, 16, 25]
const hiNumbers = numbers.map(el => `hi ${el}!`)
console.log(hiNumbers) // ["hi 1!", "hi 2!", "hi 3!", "hi 4!", "hi 5!"]


// Создайте стрелочную функцию square, которая принимает число и возвращает его квадрат.
const square2 = num => num ** 2;

console.log(square2(8)) // 64


// Создайте стрелочную функцию isEven, которая принимает число и возвращает true, если число четное, и false в противном случае.
const isEven2 = num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false
    }
};

console.log(isEven2(7)) // false

const isEven3 = num => num % 2 === 0 
    ? "Четное" 
    : "Нечетное";

console.log(isEven3(7)) // Нечетное

// Создайте стрелочную функцию concatenate, которая принимает две строки и возвращает их объединение.
const concatenate2 = (str1, str2) => `${str1} ${str2}`;


const str1 = "что-то";
const str2 = "hello";

console.log(concatenate2(str1));  


// Extra
function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(3, 4)) // 12


// Practice

// Создайте объект person с двумя свойствами: name и age. Задайте им значения и выведите объект в консоль.
const person = {
    name: "Ivan",
    age: 25,
};
console.log(person) // person{...}
console.log(person.name) // Ivan
console.log(person.age) // 25


// Напишите функцию multiply, которая принимает два числа в качестве аргументов и возвращает их произведение. Вызовите функцию и выведите результат в консоль.
function multiply(num1, num2) {
    return num1*num2
}
console.log(multiply(5,7)); // 35


// Перепишите функцию multiply из предыдущей задачи с использованием стрелочной функции.
const multiply2 = (num1, num2) => num1*num2;
console.log(multiply2(3,4)) // 12

// Добавьте метод greet в объект person, который выводит приветствие с именем человека. Вызовите метод и выведите результат в консоль.
const person2 = {
    name: "Ivan",
    age: 25,
    greet(name) {
        return `Hello, ${name}! I am ${this.name}`; 
    },
    greet2: (name) => `Hello, ${name}! I am ${person2.name}`, 
    
};

console.log(person2.greet("Viktar"))
console.log(person2.greet2("Viktar"))

// Создайте объект car с свойством speed и методом drive, который выводит текущую скорость автомобиля. Используйте ключевое слово this для доступа к свойству speed.
const car = {
    speed: 50, 
    drive() {
        console.log(`Текущая скорость автомобиля ${this.speed}`); 
    }
}
car.drive(); // Текущая скорость автомобиля 50

// Создайте объект calculator с методами add, subtract, multiply и divide, которые принимают два числа в качестве аргументов и выполняют соответствующую операцию. Выведите результаты операций в консоль.

const calc = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
    divide(num1, num2) {
        if (num2 === 0) {
            // console.log("error!");
            return "error!";
        } else {
            return num1 / num2;
        }
    }
}

console.log(calc.add(7,8)); // 15
console.log(calc.subtract(9,6)); // 3
console.log(calc.multiply(7,8)); // 56
console.log(calc.divide(14,2)); // 7
console.log(calc.divide(7,0)); // error!




// Напишите функцию, которая подсчитывает количество элементов с определенным значением в массиве.
const numArray1 = [1,2,3,534,1,5,7,5,4,2,2,3,5];
const numArray2 = [3,3,3,3,3,3,2,2,2];

function countElements(array, value) {
    let counter = 0;
    for (let i=0; i <= array.length - 1; i++) {
        if (array[i] === value) {
            counter++
        }
    }
    return counter; 
}

console.log(countElements(numArray1, 2)); // 3
console.log(countElements(numArray1, 1)); // 2
console.log(countElements(numArray2, 3)); // 6



// Напишите функцию, которая проверяет, есть ли заданный ключ в объекте.
const obj = {
    key1: "1",
    key2: "2",
    key3: "3",
}

function isKeyExsistInObject(object, key) {
    const value = object[key]; // undefined if key is not exist

    if (value === undefined) {
        return false;
    } else {
        return true;
    }
}

console.log(isKeyExsistInObject(obj, "key1")) // true
console.log(isKeyExsistInObject(obj, "key2")) // true
console.log(isKeyExsistInObject(obj, "key3")) // true
console.log(isKeyExsistInObject(obj, "key4")) // false


// Напишите программу, которая создает таблицу умножения от 1 до 10.
// firstMultiplicand 1
// secondMultiplicand 1
function generateMultiplicationTable() {
    for (let firstMultiplicand = 1; firstMultiplicand <= 10; firstMultiplicand++) {
        for (let secondMultiplicand = 1; secondMultiplicand <= 10; secondMultiplicand++) {
        
            const multiplication = firstMultiplicand * secondMultiplicand;
            console.log(`${firstMultiplicand} * ${secondMultiplicand} = ${multiplication}`);
        }
    }
}

generateMultiplicationTable();


const students = [
    {name: "a", age: 1},
    {name: "b", age: 2},
];
function displayStudentInfo(student) {
    console.log(`name: ${student.name} and age: ${student.age}`)
}

students.forEach(student => displayStudentInfo(student));
students.forEach(displayStudentInfo);