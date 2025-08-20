function sendFormData(name, email) {
    alert('Данные отправлены ' + name + ' ' + email);
}

function showMessage(messageSting) {
    alert(messageSting);
}

// const form = document.getElementById('form')

// document.getElementById('form').addEventListener('submit', function(event) {
//     // Предотвращает отправку формы
//     event.preventDefault();

//     // Получаем данные формы
//     // const name = form.elements['name'].value;
//     const name = event.target.elements['name'].value;
//     const email = event.target.elements['email'].value;

//     if (name && email) {
//         sendFormData(name, email);

//         event.target.elements['name'].value = '';
//         event.target.elements['email'].value = '';


//         showMessage('Форма успешщно отправлена');
//     } else {
//         showMessage('Пожалуйста, заполните все поля')
//     }
// })


// 1. Создайте форму с полем для ввода email и кнопкой "Отправить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции проверьте, чтобы введенный email содержал символ "@". Если условие выполняется, выведите сообщение "Форма отправлена", в противном случае выведите сообщение "Введите корректный email".
// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value;

//     const isEmailIncludesAtSign = email.includes('@'); // true | false
//     const isEmailIncludesDot = email.includes('.');

//     if (isEmailIncludesAtSign && isEmailIncludesDot) {
//         showMessage('Форма успешщно отправлена');
//     } else {
//         showMessage('Введите корректный email');
//     }
// })


// 2. Создайте форму с выпадающим списком (select) для выбора языка и кнопкой "Применить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции получите выбранное значение из выпадающего списка и выведите сообщение "Язык выбран: [выбранное значение]"
document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const languageSelectValue = document.getElementById('language').value;
//     showMessage(`Язык выбран: [${languageSelectValue}]`);
})

// 3. Создайте форму с радиокнопками для выбора цвета фона и кнопкой "Применить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции получите выбранное значение радиокнопки и установите соответствующий цвет фона для страницы.

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const isColorWhiteChecked = document.getElementById('colorWhite').checked; // boolean
    const isColorLightblueChecked = document.getElementById('colorLightblue').checked;
    const isColorLightgreenChecked = document.getElementById('colorLightgreen').checked;
    const isColorLightyellowChecked = document.getElementById('colorLightyellow').checked;

    const body = document.querySelector('body');

    // remove all classes from body
    body.classList.remove(...body.classList);

    if (isColorWhiteChecked) {
        body.classList.add('colorWhite');
    } else if (isColorLightblueChecked) {
        body.classList.add('colorLightblue');
    } else if (isColorLightgreenChecked) {
        body.classList.add('colorLightgreen');
    } else if (isColorLightyellowChecked) {
        body.classList.add('colorLightyellow');
    }
}) 

// 4. Создайте форму с текстовым полем для ввода текста и элементом для отображения количества введенных символов (например, <span>). Напишите JavaScript-функцию, которая будет вызываться при вводе текста в поле. В функции подсчитайте количество символов в текстовом поле и обновите отображение на странице.
const descriptionInput = document.getElementById('description');

descriptionInput.addEventListener('input', () => {
    const descriptionIpnutValueLength = document.getElementById('description').value.length;

    const descriptionLengthSpan = document.getElementById('descriptionLength');
    descriptionLengthSpan.innerHTML = descriptionIpnutValueLength;
});


// 5. Создайте простую форму с двумя текстовыми полями для ввода имени и фамилии пользователя и кнопкой “Отправить”. Добавьте обработчик события submit для формы. При отправке формы, текстовые поля должны очищаться, а введенные значения должны выводиться в консоли браузера.
// done in #1
