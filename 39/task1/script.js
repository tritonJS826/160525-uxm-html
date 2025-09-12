// + Реализовать формы регистрации и логина. 
// Данные зарегистрированных пользователей хранить в массиве объектов в localStorage. 
// Для обеих форм сделать проверку на пустые поля при отправке. 
// При вводе неверного логина или пароля выводить сообщение об ошибке.
// При успешном логине и регистрации выводит сообщение и очищать поля.

const inputName = document.querySelector(".name");
const inputPhoneNumber = document.querySelector(".phone");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const signUpBtn = document.querySelector(".signup");
const body = document.querySelector("body");

// получаем список пользователей из localStorage или присваиваем пустой массив
// вспоминаем как работать с JSON(и методы)
const KEY_USERS = "users";

const users = localStorage.getItem(KEY_USERS)
  ? JSON.parse(localStorage.getItem(KEY_USERS))
  : [];

function getIsUserEmailAlreadyExist() {;
    const isEmailAlreadyExist = users.some(user => user.email === inputEmail.value); 
    return isEmailAlreadyExist
}

function showMessage(text, color) {
    const paragraphStatus = document.getElementById("paragraphStatus")
    paragraphStatus.innerText = text;
    paragraphStatus.style.color = color;
}

function addNewUser(name, phoneNumber, email, password) {
    const userData = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
    };
    // добавим нового пользователя в массив
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
}

function clearForm1() {
    inputName.value = "";
    inputPhoneNumber.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
}


function getIsNameValid(name) {
    // example: check everything: const nameRegex = /^[A-Za-zА-Яа-яЁё]{2,24}$/;
    // Минимум 2 символа
    if (name.length < 2) {
        return false;
    }

    // Максимум 24 символа
    if (name.length > 24) {
        return false;
    }

    // Только буквы
    if (!/[^a-zA-Z]/.test(name)) {
        return false;
    }

    return true;

}

function getIsEmailValid(email) {
    // Наличие символа@
    if (!email.includes("@")) {
        return false;
    }

    // Минимум 7 символов 
    if (email.length < 7) {
        return false;
    }

    return true;
}

function geiIsPhoneValid(phoneNumber) {
    // Первый символ +
    if (phoneNumber[0] !== "+") {
        return false;
    }

    // Максимум 12 чисел
    if (phoneNumber > 12) {
        return false;
    }

    // Минимум 8 чисел
    if (phoneNumber < 8) {
        return false;
    }

    // Только числа
    if (!/^\+[0-9]+$/.test(phoneNumber)) {
        return false;
    }

    return true;
}

function getIsPasswordValid(password) {
    // Минимум 5 символов
    if (password < 5) {
        return false;
    }
    // максимум 26 символов
    if (password > 26) {
        return false;
    }

    return true
}

// создадим обработчик события для кнопки регистрации
signUpBtn.addEventListener("click", () => {
    // проверим поля на пустые значения
    const isFieldsEmpty = inputName.value === "" || inputPhoneNumber.value === "" || inputEmail.value === "" || inputPassword.value === ""
    if (isFieldsEmpty) {
        showMessage("Все поля обязательны", "red")
        return;
    }

    const isUserEmailAlreadyExist = getIsUserEmailAlreadyExist();
    if (isUserEmailAlreadyExist) {
        showMessage("Пользователь с такой почтой уже существует!", "red")
        return;
    }
    
    const isNameValid = getIsNameValid(inputName.value); 
    if (!isNameValid) {
        showMessage("Имя не подходит!", "red")
        return;
    }

    const isEmailValid = getIsEmailValid(inputEmail.value);
    if (!isEmailValid) {
        showMessage("Email не подходит!", "red")
        return;
    }

    const isPhoneValid = getIsPhoneValid(inputPhoneNumber.value);
    if (!isPhoneValid) {
        showMessage("Phone не подходит!", "red")
        return;
    }

    const isPasswordValid = getIsPasswordValid(inputPassword.value);
    if (!isPasswordValid) {
        showMessage("Password не подходит!", "red")
        return;
    }
    // Everything ok below:

    addNewUser(inputName.value, inputPhoneNumber.value, inputEmail.value, inputPassword.value);
    clearForm1();
    showMessage("Вы успешно зарегистрировались", "green");
});




const loginInputEmail = document.querySelector(".emailLogin");
const loginInputPassword = document.querySelector(".passwordLogin");
const loginBtn = document.querySelector(".login");

function getIsUserEmailWithPasswordExist() {
    const isUserEmailWithPasswordExist = users.some(user => (
        (loginInputEmail.value === user.email) && 
        (loginInputPassword.value === user.password)
    ));
    return isUserEmailWithPasswordExist    
}

function clearForm2() {
    loginInputEmail.value = "";
    loginInputPassword.value = "";
}

function renderLogoutButton() {
    const btnLogout = document.createElement("button");
    btnLogout.innerText = "Logout";
    body.append(btnLogout);
}

function clearHTML() {
    body.innerHTML = "";
}

// создадим обработчик события для кнопки авторизации
loginBtn.addEventListener("click", () => {
    const isFieldsEmpty = loginInputEmail.value === "" || loginInputPassword.value === "";
    if (isFieldsEmpty) {
        showMessage("Необходимо заполнить все поля", "red")
        return;
    }

    const isUserEmailWithPasswordExist = getIsUserEmailWithPasswordExist();
    if (!isUserEmailWithPasswordExist) {
        showMessage("Вы ввели неверную почту или пароль", "red");
        return;
    }

    // Everything ok below:

    clearForm2();
    clearHTML();
    showMessage("Вы успешно вошли", "green");
    renderLogoutButton();
});

// После реализации основного функционала проекта “Регистрации и Авторизации с помощью localstorage” реализовать валидацию инпутов (Имя, Эмейл, Телефон, Пароль) с помощью JS.


