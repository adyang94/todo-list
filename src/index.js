// CONST AND VARIABLES--------------------------------------------
import { renderGroups } from './sidebar';
import { localStorageModule } from './localStorage';
import { renderTasks } from './renderTasks';

// FUNCTIONS------------------------------------------------------

console.log('1');
renderTasks('', localStorageModule.getTasks());
renderGroups(localStorageModule.getGroups());

// SCRIPT---------------------------------------------------------
console.log('JS file working');
