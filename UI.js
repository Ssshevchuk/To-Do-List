const PRIORITIES = {
    lowPriority: 'low',
    highPriority: 'high'
};

const STATUSES = {
    toDo: 'to do',
    done: 'done'
};
const inputHighTask = document.querySelector('.input-high');
const inputLowTask = document.querySelector('.input-low');
const HighTaskButton = document.querySelector('.add-high-items-button');
const LowTaskButton = document.querySelector('.add-low-items-button');
const listOfHighTasks = document.querySelector('.high-items');
const listOfLowTasks = document.querySelector('.low-items');
const addHighTaskForm = document.querySelector('.add-high-task-form');
const addLowTaskForm = document.querySelector('.add-low-task-form');

export {PRIORITIES, STATUSES, inputHighTask, inputLowTask, HighTaskButton, LowTaskButton, listOfHighTasks, listOfLowTasks, addHighTaskForm, addLowTaskForm};