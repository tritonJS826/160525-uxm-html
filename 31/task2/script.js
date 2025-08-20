// Создать HTML-форму, которая включает в себя:

//  Поля ввода:
// фамилии
// имени
// email 
// пароля 
// даты рождения
// Кнопки отправки и очистки
// Чекбокс с текстом “Подписаться на email рассылку”

// Поле ввода почты должно содержать символ “@”, пароль должен быть длиннее 6 символов, в случае ошибки, выводить текст, содержащий сообщение об ошибке.

// Если все условия выполнены, очистить поля формы и показать сообщение об успехе.
// Добавить произвольные поля.



const form = document.getElementById('form');

const ERROR_MESSAGE = "Ошибка! Почта или пароль ошибочны!";

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById("password").value;
    
    
    const isEmailIncludesAtSign = emailValue.includes('@'); // true | false
    const isPasswordValid = passwordValue.length > 6;
    
    const result = document.getElementById("result");
    const emailErrorSpan = document.getElementById("emailErrorSpan");
    
    if (!isEmailIncludesAtSign) {
        emailErrorSpan.innerHTML = `Email does not include @`;
    } else if (!isPasswordValid) {
        result.innerHTML = `Password must be longer than 6 chars`;
        // good scenario
    } else {
        form.reset(); 
        result.innerHTML = `Everything good! Your password: ${passwordValue}`;
    }
})






