// Что выведет код ниже?

// const promise = new Promise((resolve, reject) => {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
// });

// promise.then((number) => alert(number));

// 1. Создайте простое приложение для сохранения списка задач. Пользователь должен иметь возможность добавлять и удалять задачи. Список задач должен сохраняться в localStorage.
// taskList

function getInputTaskName() {
    const inputTaskName = document.getElementById("inputTaskName").value;
    return inputTaskName;
}

function getInputTaskDescription() {
    const inputTaskDescription = document.getElementById("inputTaskDescription").value;
    return inputTaskDescription;
}

function clearInputs() {
    document.getElementById("inputTaskName").value = "";
    document.getElementById("inputTaskDescription").value = "";
}

function getTasksFromLocalStorage() {
    let tasksStringified = localStorage.getItem(TASKS_KEY);
    if (tasksStringified === null) {
        localStorage.setItem(TASKS_KEY, JSON.stringify([]));
        tasksStringified = JSON.stringify([]);
    }
    
    const tasks = JSON.parse(tasksStringified); // [{name: "some name", description: "some description"}]

    return tasks;
}

function removeTaskFromLocalStorageByIndex(index) {
    const tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function renderTasks(taskArray) {
    const tasksListHTML = taskArray.map((task, index) => `
        <ul id="ul-${index}">
            <h4>${task.name}</h4>
            <p>${task.description}</p>
            <button id="deleteButton-${index}">Delete</button>
        </ul>
    `).join('')

    document.getElementById("taskList").innerHTML = tasksListHTML;

    taskArray.forEach((task, index) => {
        document.getElementById(`deleteButton-${index}`).addEventListener('click', () => {
            removeTaskFromLocalStorageByIndex(index);
            document.getElementById(`ul-${index}`).remove();
        })
    });
}

function renderTasksFromLocalStorage() {
    const tasks = getTasksFromLocalStorage();
    renderTasks(tasks);
}

const TASKS_KEY = "task40.1"

const buttonAddTask = document.getElementById("buttonAddTask");
buttonAddTask.addEventListener('click', () => {
    const tasks = getTasksFromLocalStorage();
    
    // user data
    const newTaskName = getInputTaskName();
    const newTaskDescription = getInputTaskDescription();

    const newTask = {
        name: newTaskName,
        description: newTaskDescription
    }

    tasks.push(newTask);

    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));


    // render task to task list
    renderTasks(tasks);

    clearInputs();
});


renderTasksFromLocalStorage();



// 2. Создайте функцию generateRandomColor, которая возвращает Promise. Генерируйте случайный цвет и выполните resolve с этим цветом, используя формат HEX. Если произошла ошибка при генерации, выполните reject с сообщением об ошибке.

// 3. Создайте функцию checkInternetConnection, которая возвращает Promise. Если устройство имеет доступ к интернету, выполните resolve с сообщением "Интернет-соединение установлено", в противном случае выполните reject с сообщением "Нет доступа к интернету".

// 4. Создайте функцию generateError, которая будет генерировать случайную ошибку с вероятностью 50%. Если ошибка сгенерирована успешно, выполните resolve с сообщением "Операция выполнена", иначе выполните reject с сообщением об ошибке.

