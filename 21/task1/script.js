// {
//     name: "Ivan", 
//     ["hair color"]: "black",
// }



const user = {
    name: "Viktar", 
    surName: "Veratsennikau",
    ["hair color"]: "black",
};

const keyHairColor = "hair color";
console.log(user.name) // "Viktar"
console.log(user["hair color"]) // "black"
console.log(user[keyHairColor]) // "black"

// const newUser = user;
// newUser.name // "Viktar"


const userName = "Viktar";
const userSurname = "Veratsennikau"


user.name = "Ivan"
console.log(user.name) // "Ivan"

delete user.surName;
console.log(user.surName) // undefined


// иммутабельность 
const newUser = {
    name: "Ivan", 
    surName: "Veratsennikau",
    ["hair color"]: "black",
};

// {
//     name: "Ivan", 
//     ["hair color"]: "black",
// }
console.log(user)
for (key in user) {
    console.log(`${key}:${user[key]}`)
}



console.log(`Создайте объект с именем person, содержащий свойства name и age. Присвойте значения этим свойствам и выведите их в консоль. ${userName}`)

const person = {
    age: 35,
    name: "Vasya",
};
console.log(`age:${person.age}`)
console.log("age:" + person.age)
console.log(`name:${person.name}`)
for (key in person) {
    console.log(`${key}:${person[key]}`)
}
const personKeys = Object.keys(person); // ["age", "name"]
console.log("key")
console.log(personKeys)
const personValues = Object.values(person); // [35, "Vasya"]
console.log("values")
console.log(personValues)
const personEntries = Object.entries(person); // [["age", 35], ["name", "Vasya"]]
console.log("entries")
console.log(personEntries)

console.log("show keys:")
personEntries.forEach(el => console.log(el[0]))


// У вас есть объект book с свойством title. Измените значение свойства title и выведите обновленное значение в консоль.

const book = {
    title: "SuperPuper"
};
book.title = "DupelPupel"
console.log(book.title)

// Создайте объект car с свойствами brand, model и year. Выведите в консоль информацию о машине в формате "Год выпуска [year] марки [brand], модель [model]".
const car = {
    brand: "BMW",
    model: "w2",
    year: 2025,
};

console.log(`Год выпуска ${car.year} марки ${car.brand}, модель ${car.model}`)

// Создайте объект dog с начальными свойствами name и age. Затем добавьте свойство breed и выведите обновленный объект в консоль.
const dog = {
    name: "Wolf",
    age: 5,
};
dog.breed = "Schaeferhund";
console.log(dog)



// У вас есть объект computer с различными свойствами. Удалите одно из свойств и выведите обновленный объект в консоль.
const computer = {
    model: "Imac", 
    os: "Linux",
};

delete computer.os;
console.log(computer)
 

// Создайте объект fruit с несколькими свойствами (например, name, color, taste). Используйте цикл for...in, чтобы вывести все свойства и их значения в консоль.
const fruit = {
    name: "apple",
    color: "red",
    taste: "sweet"
};

for (key in fruit) {
    console.log(`${key}:${fruit[key]}`)
}

// const fruitKeys = Object.keys(fruit); // ["name", "color", "taste"]
Object
    .keys(fruit)
    .forEach(key => `${key}:${fruit[key]}`);



