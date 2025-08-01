const address0 = {
    city: "Nis",
    postal: "0001",
};
const person0 = {
    age: 35,
    name: "Vasya",
    address: address0,
};

const person = {
    age: 35,
    name: "Vasya",
    address: {
        city: "Nis",
        postal: "0001",
        // self: person,
    },
};
console.log(person.address.city) // Nis
// console.log(person.address.self.address.city)

// update postal
person.address.postal = "0002"
delete person.address.self;


const classroom = {
    students: [
        {name: "Alice", age: 20},
        {name: "Bob", age: 21},
    ],
    teacher: "Mr. Smith"
}

// for (key in user) {
//     console.log(`${key}:${user[key]}`)
// }

// Создайте объект student с основными свойствами, такими как name и age, а также вложенным объектом grades, представляющим оценки по предметам. Присвойте значения оценкам и выведите всю информацию в консоль.
const student = {
    name: "Elise",
    age: 25,
    grades: {
        math: 89,
        philosophy: 95,
        literature: 98
    },
}
console.log(student)


// У вас есть объект car с вложенным объектом engine, содержащим свойства horsepower и fuelType. Измените значение horsepower и выведите обновленную информацию в консоль.
const car = {
    engine: {
        horsepower: 89,
        fuelType: 95,
    },
}
car.engine.horsepower = 100
console.log(car)

// Создайте объект playlist с вложенным объектом songs, представляющим список песен. Используйте цикл for...in, чтобы вывести названия всех песен и их продолжительность в консоль.
const playlist = {
    songs: [
        {name: "Happy new year", duration: 213},
        {name: "Beautiful life", duration: 198},
        {name: "Morning relax", duration: 200}
    ],
}

// Happy new year: 213
// Beautiful life: 198
// Morning relax: 200

playlist.songs.forEach(song => {
    console.log(`${song.name}: ${song.duration}`)
})

playlist.songs.forEach(song => {
    let name = "";
    let duration = "";
    for (key in song) {
        if (key === "name") {
            name = song[key];
        }
        if (key === "duration") {
            duration = song[key]
        }
    }
    console.log(`${name}: ${duration}!!`)
})


// У вас есть объект book с основными свойствами, такими как title и author. Добавьте вложенный объект details, содержащий свойства pages и publicationYear. Выведите обновленную информацию в консоль.
const book = {
    title: "Lala",
    author: "Pelevin",
};
const details = {
    pages: 300,
    publicationYear: 2022,
}
book.details = details;
console.log(book)

// Создайте объект computer с вложенным объектом specs, представляющим технические характеристики. Удалите свойство ram из вложенного объекта и выведите обновленную информацию.
const computer = {
    specs: {
        ram: 16,
        cpu: "intel",
    },
};
delete computer.specs.ram;
console.log(computer)

// Создайте массив students, где каждый элемент массива - объект, представляющий студента с именем, возрастом и вложенным объектом grades. Выведите средний балл студентов в консоль.

const students = [
    {
        name: "Igor",
        age: 25,
        grades: {
           philosophy: 95,
        },
    },
    {
        name: "Ivan",
        age: 24,
        grades: {
           math: 23,
           philosophy: 100,
           literature: 37
        },
    },
    {
        name: "Leyla",
        age: 28,
        grades: {
           math: 76,
           philosophy: 86,
           literature: 69,
           chemistry: 100,
        },
    },
];

students.forEach(student => {
    let sumGrades = 0; // сумма оценок
    let amountGrades = 0; // количесво предметов или оценок
    
    for (gradeKey in student.grades) {
        amountGrades = amountGrades + 1;
        sumGrades = sumGrades + student.grades[gradeKey]
    }
    console.log(`${student.name}: ${Math.round(sumGrades / amountGrades)}`)
})


// Homework
// Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.

const rectangle = {
    a: 10,
    b: 35,
}

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b)
console.log(rectangle)

// 4

const fruits = [
    {name: "apple", color: "red"},
    {name: "orange", color: "orange"},
    {name: "paprika", color: "red"},
]

fruits.forEach(fruit => {
    if (fruit.color === "red") {
        console.log(fruit.name)
    }
})



// Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).
const words = ['hello', 'hi', 'nice-to-see-you', 'aa', 'aaaaaa'];
let maxLength = 0;
words.forEach(word => {
    console.log(`word: ${word}, maxLength: ${maxLength}`)
    if (word.length > maxLength) {
        console.log(`wordLength: ${word.length} updated!`)
        maxLength = word.length; 
    }
})

console.log(maxLength.length)

// word: hello, maxLength: 0
// wordLength: 5 updated!
// word: hi, maxLength: 5
// word: nice-to-see-you, maxLength: 5
// wordLength: 15 updated!
// word: aa, maxLength: 15
// word: aaaaaa, maxLength: 15
