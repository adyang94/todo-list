// ***Start with sidebarSetup***
import {
  groups, groupSelected, localStorageModule, tasks,
} from './localStorage';
import { renderTasks } from './renderTasks';

// CONST AND VARIABLES--------------------------------------------

// FUNCTIONS------------------------------------------------------
const addNewGroup = (() => {
  // add new group in the sidebar menu.
  const newGroupBtn = document.querySelector('.newGroupBtn');
  const newGroupInputContainer = document.querySelector('.newGroupInputContainer');
  const newGroupTitle = document.querySelector('.newGroupTitle');
  // group title input
  const submitNewGroupBtn = document.querySelector('.submitNewGroupBtn');

  console.log(`Is groups an array1? ${Array.isArray(groups)}`);

  newGroupBtn.addEventListener('click', () => {
    // the code below will display the input to add new groups (current display is set to none in the HTML file.)
    newGroupInputContainer.setAttribute('style', 'display: initial');
  });
  submitNewGroupBtn.addEventListener('click', () => {
    // SUBMIT AND CREATE NEW GROUP
    const newGroup = newGroupTitle.value;

    localStorageModule.addNewInfo('', newGroup);
    newGroupInputContainer.setAttribute('style', 'display: none');
    renderGroups();
  });
})();
function renderGroups() {
  const groupsContainer = document.querySelector('.groupsContainer');
  // remove all groups and render again.
  while (groupsContainer.firstChild) {
    groupsContainer.removeChild(groupsContainer.firstChild);
  }
  // rendering groups
  for (let i = 0; i < groups.length; i++) {
    const name = groups[i];
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('groupContainer');

    // functionality to click on the group name
    groupContainer.addEventListener('click', () => {
      const groupSelected = groupTitle.dataset.group;
      renderTasks(groupSelected, tasks);
    });
    let groupTitle = document.createElement('div');
    groupTitle.innerHTML = `${name}`;
    groupTitle.classList.add('groupTitle');
    groupTitle.dataset.group = `${name}`;
    groupContainer.appendChild(groupTitle);

    const groupRemoveBtn = document.createElement('button');
    groupRemoveBtn.innerHTML = 'X';
    groupRemoveBtn.classList.add('groupRemoveBtn');
    groupRemoveBtn.dataset.group = `${i}`;
    // remove group button
    groupRemoveBtn.addEventListener('click', (event, srcElement) => {
      groups.splice(event.srcElement.dataset.group, 1);
      localStorageModule.storeTasksAndGroups('', groups);
      renderGroups(localStorageModule.getGroups());
    });
    groupContainer.appendChild(groupRemoveBtn);
    groupsContainer.appendChild(groupContainer);
  }
}
const toggleSidebar = (() => {
  const closeSidebarBtn = document.querySelector('.closeSidebarBtn');
  const toggleContainer = document.querySelector('.toggleContainer');
  const sidebar = document.querySelector('.sidebar');

  closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('openNav');
    sidebar.classList.add('closeNav');
  });
  toggleContainer.addEventListener('click', () => {
    sidebar.classList.remove('closeNav');
    sidebar.classList.add('openNav');
  });
})();
const sidebarSetup = (() => {
  console.log('sidebar setup working');
  addNewGroup;
  toggleSidebar;
})();
// SCRIPT---------------------------------------------------------
export { sidebarSetup, renderGroups };
