import {PRIORITIES, STATUSES, inputHighTask, inputLowTask, HighTaskButton, LowTaskButton, listOfHighTasks, listOfLowTasks, addHighTaskForm, addLowTaskForm} from './UI.js';

let TO_DO_LIST = [];

addHighTaskForm.addEventListener('submit', addHighTask);
addLowTaskForm.addEventListener('submit', addLowTask);

function createElement(id, name, status) {
    const newTask = document.createElement('div');
    newTask.classList.add('new-task');
    
    const taskText = document.createElement('p');
    taskText.textContent = name;
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check-box');
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = '×';
    
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);   
    newTask.id = id;
    newTask.status = STATUSES.toDo;
    
    deleteButton.addEventListener("click", () => {
        delTask(id);
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            status === STATUSES.done;
        } else {
            status === STATUSES.toDo;
        }
    });
    return newTask;
};

function addHighTask(evt) {
    evt.preventDefault();
    const high = addHighTaskForm.highinput.value; 
    let newObject = {}; 
    newObject.name = high;
    if (newObject.name.length < 3) {
        throw new Error("Ошибка: слишком короткое имя задачи")
    };
    newObject.id = getRandomID(99999);
    newObject.priority = PRIORITIES.highPriority;
    newObject.status = STATUSES.toDo;
    TO_DO_LIST.push(newObject);
    inputHighTask.value = '';
    cleanList();
    render();
};

function addLowTask(evt) {
    evt.preventDefault();
    const low = addLowTaskForm.lowinput.value; 
    let newObject = {}; 
    newObject.name = low;
    if (newObject.name.length < 3) {
        throw new Error("Ошибка: слишком короткое имя задачи")
    };
    newObject.id = getRandomID(99999);
    newObject.priority = PRIORITIES.lowPriority;
    newObject.status = STATUSES.toDo;
    TO_DO_LIST.push(newObject);  
    inputLowTask.value = '';
    cleanList();
    render();
};

function cleanList() {
    const task = document.querySelectorAll(".new-task");
    for (let i = 0; i < task.length; i++) {
        task[i].remove();
    }};
    
    function render() {
        TO_DO_LIST.forEach((task) => {
        if (task.priority === "low") {
            listOfLowTasks.appendChild(createElement(task.id, task.name, task.status)); 
        } else if (task.priority === "high") {
            listOfHighTasks.appendChild(createElement(task.id, task.name, task.status));
      }
    });
};

function delTask(id) {
    TO_DO_LIST = TO_DO_LIST.filter((item) => item.id !== id);
    cleanList();
    render();
};

function getRandomID(max) {
    return Math.floor(Math.random() * max);
};
//

