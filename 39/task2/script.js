// console.log(1);

// setTimeout(() => { // async == parallel
//     console.log(2)
// }, 2000); // 2s

// console.log(3);

//2
 // 1 -> 3 -> 
// setInterval(() => {
//     console.log("Hello");
// }, 1000);

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log("loop", i)
//     }, 2000);
// }

// memory: loop:1, loop:2;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        const isEverythingOk = randomNumber > 0.5; // true | false
        if (isEverythingOk) {
            resolve("Ok" + randomNumber);
        } else {
            reject("Not ok" + randomNumber);
        }
    }, 1000);
});

/// calculate something

promise
    .then((resolveString) => console.log(resolveString))
    .catch((rejectedString) => console.warn(rejectedString))
    .finally(() => console.log("Done!"));


// 1. Создайте функцию checkEvenNumber, которая принимает число в качестве аргумента и возвращает Promise. Если число четное, выполните resolve с сообщением "Число четное", в противном случае выполните reject с сообщением "Число нечетное".

function checkEvenNumber(number) {
    const promise = new Promise((resolve, reject) => {
        const isEven = number % 2 === 0;
        if (isEven) {
            resolve("Число четное");
        } else {
            reject("Число нечетное");
        }
    });
    return promise;
}


const promiseIsEven = checkEvenNumber(87);
promiseIsEven
    .then((resolveString) => {console.log(resolveString)})
    .catch((rejectString) => {console.warn(rejectString)})
    .finally(() => {console.log("Выполнено")})



// 2. Создайте функцию fetchData, которая возвращает Promise. Используйте setTimeout, чтобы имитировать задержку при загрузке данных с сервера. Если данные успешно загружены, выполните resolve с данными, иначе выполните reject с сообщением об ошибке.
function fetchData(string) {
    console.log("Started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (string === "www.ourService.com/goodEndpoint") {
                const goodData = {status: "ok", data: "hello"}
                resolve(goodData)
            } else {
                const errObject = {status: "bad address", data: "error"}
                reject(errObject)
            }
        }, 3000);
    });

    console.log("Fetch finished")

    return promise;
}

fetchData("www.ourService.com/goodEndposint")
    .then((resolvedData) => console.log(resolvedData))
    .catch((rejectedData) => console.warn(rejectedData))


console.log("Program finished")


// Started -> Fetch finished -> Program finished -> {status: "ok", data: "hello"}





// 3. Создайте функцию generateRandomNumber, которая возвращает Promise. Используйте setTimeout для имитации вычислений. Если число успешно сгенерировано, выполните resolve с числом, иначе выполните reject с сообщением об ошибке.