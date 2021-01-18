// CONST AND VARIABLES--------------------------------------------
import {
  groupSelected, localStorageModule, tasks,
} from './localStorage';
import { renderTasks } from './renderTasks';

// FUNCTIONS------------------------------------------------------

const popOutSetup = (() => {
  const popOutForm = document.querySelector('#popOutForm');
  const submitBtn = document.querySelector('.submitBtn');
  const popOutTitle = document.querySelector('.popOutTitle');
  const popOutDescription = document.querySelector('.popOutDescription');
  const popOutDueDate = document.querySelector('.popOutDueDate');
  let newTask;
  const addTaskButton = document.querySelector('.addTaskBtn');
  const popOutGroup = document.querySelector('.popOutGroup');

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
// SCRIPT---------------------------------------------------------
export default popOutSetup;
