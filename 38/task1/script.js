const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];
// serialization to JSON
// "[
//   { "name": "Alice", "age": 25 },
//   { "name": "Bob", "age": 30 },
//   { "name": "Charlie", "age": null }
// ]"

const person = {
	name: 'John',
	age: '26',
  status: 'student'
};

// stringify (serialization): object -> string
// parse: string -> object

const randomNumber = Math.random()
const currentDate = Date.now()

// const personStringified = `{name: ${person.name}, age: ${person.age}}`;
const personStringifiedWithJSON = JSON.stringify(person);

localStorage.setItem("person", personStringifiedWithJSON);

const personDataStringified = localStorage.getItem("person");
const parsedPersonData = JSON.parse(personDataStringified);
console.log(parsedPersonData.name)
console.log(parsedPersonData.status)

document.getElementById("output").innerHTML = parsedPersonData.name;

// {"name":"John","age":"26","status":"student"}


// 1. Опишите две функции: writeLocalStorage и readLocalStorage. Функции должны записывать или считывать объекты в localStorage соответственно.

const KEY_TASK_1 = "objectToSave";
function writeLocalStorage(objectToSave) {
  // convert to string
  const stringifiedObject = JSON.stringify(objectToSave);
  console.log(stringifiedObject);
  // save to local storage
  localStorage.setItem(KEY_TASK_1, stringifiedObject);

}

function readLocalStorage(key) {
  // get item from storage
  const stringifiedObject = localStorage.getItem(key);
  // parse
  const parsedObjectData = JSON.parse(stringifiedObject);
  // return 
  return parsedObjectData;
}


const exampleObject = {
  banana: "yellow",
  apple: "green",
  user: {
    name: "Viktar",
    numbers: [1,2,3,4],
  }
}

writeLocalStorage(exampleObject);
console.log(readLocalStorage(KEY_TASK_1));

// 2. Создать форму, которая позволяет добавить пункт товара в массив. Данные из массива должны отображаться в интерфейсе при добавлении нового товара. Реализовывать через массив с продуктами и localStorage.

const products = [
  // {title: "banana", description: "yellow fruit"},
  // {title: "apple", description: "gree fruit"},
]

function renderProducts(productsArray) {
  const productsHTMLArray = productsArray.map((product) => {
    return `
      <div class="card">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
      </div>
      `;
  });

  const productsHTML = productsHTMLArray.join("");

  document.getElementById("output").innerHTML = productsHTML;
}

document.getElementById("buttonAddProduct").addEventListener('click', () => {
  const newProductTitle = document.getElementById("inputTitleProduct").value;
  const newProductDescription = document.getElementById("inputDescriptionProduct").value;

  const newProduct = {
    title: newProductTitle,
    description: newProductDescription,
  };

  products.push(newProduct);

  renderProducts(products);
  writeLocalStorage(products)
});

renderProducts(products);