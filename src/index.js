//CONST AND VARIABLES--------------------------------------------
import {renderGroups} from "./sidebar";
import {groups, localStorageModule} from "./localStorage";
import { renderTasks } from "./renderTasks";
import { popOutSetup } from './popOutForm';

//FUNCTIONS------------------------------------------------------

//get old info
console.log('1');
renderTasks('', localStorageModule.getTasks());
renderGroups(localStorageModule.getGroups());


//SCRIPT---------------------------------------------------------
console.log('JS file working');