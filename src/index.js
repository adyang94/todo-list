//CONST AND VARIABLES--------------------------------------------
import {renderGroups} from "./sidebar";
import {localStorageModule} from "./localStorage";
import { renderTasks } from "./renderTasks";

//FUNCTIONS------------------------------------------------------

//get old info
renderTasks('', localStorageModule.getTasks());
renderGroups(localStorageModule.getGroups());

//SCRIPT---------------------------------------------------------
console.log('JS working');