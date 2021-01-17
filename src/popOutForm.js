//CONST AND VARIABLES--------------------------------------------
import {groups, groupSelected, localStorageModule, tasks} from "./localStorage";
import {renderTasks} from './renderTasks';


//FUNCTIONS------------------------------------------------------

const popOutSetup = (() => {
    let popOutForm = document.querySelector('#popOutForm');
    let submitBtn = document.querySelector('.submitBtn');
    let popOutTitle = document.querySelector('.popOutTitle');
    let popOutDescription = document.querySelector('.popOutDescription');
    let popOutDueDate = document.querySelector('.popOutDueDate');
    let newTask;
    let addTaskButton = document.querySelector('.addTaskBtn');
    let popOutGroup = document.querySelector('.popOutGroup');

    submitBtn.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOn');
        popOutForm.classList.add('popOutFormOff');

        newTask = new addNewTask(popOutTitle, popOutDescription, popOutDueDate, popOutGroup);
        localStorageModule.addNewInfo(newTask, '');
        renderTasks(groupSelected, localStorageModule.getTasks());
    });
    addTaskButton.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOff');
        popOutForm.classList.add('popOutFormOn');
        console.log('hello');
    });
    renderTasks(groupSelected, tasks);
})();

function addNewTask(title, description, dueDate, group) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;
    this.taskGroup = group.value;

}
//SCRIPT---------------------------------------------------------
export {
    popOutSetup,
}
