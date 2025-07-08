var firstVariableSuper = 'first variable';

let secondVariable = 'second variable';
const third = 'third variable';

console.log(firstVariableSuper);
console.log(secondVariable);


secondVariable = 'new variable';

// error 
// thirdVariable = '123';

console.log(secondVariable);


const userName = 'Viktaritto';

const firstNumber = -5;
const secondNumber = 6.3;
const sum = firstNumber + secondNumber;
console.log('it is my "sum":', Math.round(sum))
console.log('it is my "sum":', sum)

console.log('Welcome ' + userName + '!')
console.log(`Welcome ${userName}!`)


const firstString = 'firstString';
const secondString = 'secondString';

const concatenatedString = firstString + ' ' + secondString;
const templateString = `${firstString} ${secondString}`;

console.log('concatenatedString: ', concatenatedString)
console.log('templateString: ', templateString)

const bool1 = false;
const bool2 = true;

const bool3 = bool1;


const und = undefined;
const nu = null;

const object = {key: 'value'};
console.log('object.key: ', object.key)


const a = "1";
const b = 2;
const c = a + b; // '12'
const d = b + a; // 3


const newBul = Boolean(b) // true

const x = 5;
const y = 6;
const z = '5'
const w = 5;

const isEqual = x == y; // false 5 ? 6
const isEqual2 = x == z; // true 5 ? *'5'* => 5 ? 5
const isEqual3 = x === z; // false 5 ? '5'

const isEqual4 = false == ''; // true false ? *''* => false ? false
const isEqual5 = false == undefined; // true false ? *''* => false ? false

// x != y // don't use it!
// x !== y // use this one

const isEqual6 = x > y; // false
const isEqual7 = x >= y; // false

const tr = true;
const fa = false;

const isXEqualY = x === y; // false
const isWEqualX = w === x; // true

if (isXEqualY) {
    console.log('Equal')
} else {
    console.log('Not equal')
}

// const isEnoughtRoghtsToThisContent = user.SecretData.json.alfa.age === receivedValue
// if (isEnoughtRoghtsToThisContent) {
//     // ...
// }


const number = 9;
if (number > 0) {
    console.log('Число положительное')
} else {
    console.log('Число отрицательное')
}

const str1 = 'asd';
const str2 = 'qwe';

if (str1 === str2) {
    console.log('Строки равны')
} else {
    console.log('Строки не равны')
}