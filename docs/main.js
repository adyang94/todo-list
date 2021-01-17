/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
/* harmony import */ var _popOutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popOutForm */ "./src/popOutForm.js");
//CONST AND VARIABLES--------------------------------------------





//FUNCTIONS------------------------------------------------------

//get old info

(0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.renderTasks)('', _localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageModule.getTasks());
(0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.renderGroups)(_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageModule.getGroups());

//SCRIPT---------------------------------------------------------
console.log('JS file working');

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageModule": () => /* binding */ localStorageModule,
/* harmony export */   "groups": () => /* binding */ groups,
/* harmony export */   "tasks": () => /* binding */ tasks,
/* harmony export */   "groupSelected": () => /* binding */ groupSelected
/* harmony export */ });
//CONST AND VARIABLES--------------------------------------------
let groups = [];
let tasks = [];
let groupSelected;
//FUNCTIONS------------------------------------------------------
const localStorageModule = (() => {
    console.log('localStorageModule running');
    
    // groupSelected functions below:
        function storeGroupSelected(groupSelected) {
            if(groupSelected != '') {
                localStorage.setItem("groupSelected", JSON.stringify(groupSelected));
            };
        };
        function getGroupSelected() {
            return JSON.parse(localStorageModule.getItem('groupSelected'));
        };

    //  groups and tasks functions below:
        function getTasks() {
            tasks = JSON.parse(localStorage.getItem('tasks'));
            console.log(tasks);
            return tasks;
        };
        function getGroups() {
            groups = JSON.parse(localStorage.getItem('groups'));
            return groups;
        };
        function storeTasksAndGroups(tasks, groups) {
            if (tasks != '') {
                localStorage.setItem("tasks", JSON.stringify(tasks));
                console.log({tasks});
            }
            if (groups != '') {
                localStorage.setItem("groups", JSON.stringify(groups));
                console.log({groups});
            }
        };
        function addNewInfo(newTask, newGroup) {
            if (newTask != '') {
                console.log(`task is array? ${tasks} ${Array.isArray(tasks)} ${typeof(tasks)}`);
                tasks.push(newTask);
            }
            if (newGroup != '') {
                groups.push(newGroup);
            }
            storeTasksAndGroups(tasks, groups);
    }
    return {getTasks, getGroups, storeTasksAndGroups, addNewInfo, getGroupSelected,storeGroupSelected};
})();
//SCRIPT---------------------------------------------------------


/***/ }),

/***/ "./src/popOutForm.js":
/*!***************************!*\
  !*** ./src/popOutForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popOutSetup": () => /* binding */ popOutSetup
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
//CONST AND VARIABLES--------------------------------------------




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
        _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageModule.addNewInfo(newTask, '');
        (0,_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_localStorage__WEBPACK_IMPORTED_MODULE_0__.groupSelected, _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageModule.getTasks());
    });
    addTaskButton.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOff');
        popOutForm.classList.add('popOutFormOn');
        console.log('hello');
    });
    (0,_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_localStorage__WEBPACK_IMPORTED_MODULE_0__.groupSelected, _localStorage__WEBPACK_IMPORTED_MODULE_0__.tasks);
})();

function addNewTask(title, description, dueDate, group) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;
    this.taskGroup = group.value;

}
//SCRIPT---------------------------------------------------------



/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTasks": () => /* binding */ renderTasks
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
//CONST AND VARIABLES--------------------------------------------


//FUNCTIONS------------------------------------------------------

function renderTasks (groupSelected, tasks) {
    console.log({tasks});
    console.log(`group selected in render tasks: ${groupSelected}`);

    let main = document.querySelector('.main');
    
    //erase current tasks
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
    if(tasks == null || undefined) {
        return
    }
    for(let i=0; i < tasks.length; i++){
        //task container
        let taskContainer = document.createElement('div');
            taskContainer.classList.add('taskContainer');
            taskContainer.dataset.task = i;
        let taskText = document.createElement('p');
        
        if (groupSelected) {
            if (tasks[i].taskGroup !== groupSelected) {
                continue;
            };
        };
        taskText.innerHTML = 
        `
        <span class = "title">Title: ${tasks[i].title}</span><br>
        
        <span class = "description">Description: ${tasks[i].description}</span> <br>
        
        <span class = "dueDate">Due: ${tasks[i].dueDate}</span><br>
        <span class = "taskGroup">Group: ${tasks[i].taskGroup}</span><br>`;
        taskContainer.appendChild(taskText);
        
        //remove button
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.dataset.task = i;
        removeBtn.innerHTML = 'X';
        console.log(`dataset btn: ${removeBtn.dataset.task}`);
        removeBtn.addEventListener('click', (event, srcElement) => {
            console.log(`remove dataset btn1: ${removeBtn.dataset.task}`);
            tasks.splice(event.srcElement.dataset.task, 1);
            _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageModule.storeTasksAndGroups(tasks, '');
            renderTasks(groupSelected, tasks);
        })
        taskContainer.appendChild(removeBtn);
        
        //append all elements
        main.appendChild(taskContainer);
        console.log(`task group1: ${tasks[i].taskGroup}`);
    }
    
}
//SCRIPT---------------------------------------------------------






/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarSetup": () => /* binding */ sidebarSetup,
/* harmony export */   "renderGroups": () => /* binding */ renderGroups
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
// ***Start with sidebarSetup***



//CONST AND VARIABLES--------------------------------------------

//FUNCTIONS------------------------------------------------------
const addNewGroup = (() => {
    //add new group in the sidebar menu.
    let newGroupBtn = document.querySelector('.newGroupBtn');
    let newGroupInputContainer = document.querySelector('.newGroupInputContainer');
    let newGroupTitle = document.querySelector('.newGroupTitle'); 
        //group title input
    let submitNewGroupBtn = document.querySelector('.submitNewGroupBtn');
    
    console.log(`Is groups an array1? ${Array.isArray(_localStorage__WEBPACK_IMPORTED_MODULE_0__.groups)}`);

    newGroupBtn.addEventListener('click', () => {
        //the code below will display the input to add new groups (current display is set to none in the HTML file.)
        newGroupInputContainer.setAttribute('style', 'display: initial');
    })
    submitNewGroupBtn.addEventListener('click', () => {
        //SUBMIT AND CREATE NEW GROUP
        let newGroup = newGroupTitle.value;

        _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageModule.addNewInfo('', newGroup);
        newGroupInputContainer.setAttribute('style', 'display: none');
        renderGroups();
    })
})();
function renderGroups() {
    let groupsContainer = document.querySelector('.groupsContainer');
    //remove all groups and render again.
    while(groupsContainer.firstChild) {
        groupsContainer.removeChild(groupsContainer.firstChild);
    };
    console.log('REMOVE ALL GROUPS');
    //rendering groups
    for (let i = 0; i < _localStorage__WEBPACK_IMPORTED_MODULE_0__.groups.length; i++) {
        let name = _localStorage__WEBPACK_IMPORTED_MODULE_0__.groups[i];
        let groupContainer = document.createElement('div');
            groupContainer.classList.add('groupContainer');
            
            //functionality to click on the group name
            groupContainer.addEventListener('click', () => {
                let groupSelected = groupTitle.dataset.group;
                (0,_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(groupSelected, _localStorage__WEBPACK_IMPORTED_MODULE_0__.tasks);
            });
            let groupTitle = document.createElement('div');
                groupTitle.innerHTML = `${name}`;
                groupTitle.classList.add('groupTitle');
                groupTitle.dataset.group = `${name}`;
                groupContainer.appendChild(groupTitle);

            let groupRemoveBtn = document.createElement('button');
                groupRemoveBtn.innerHTML = 'X';
                groupRemoveBtn.classList.add('groupRemoveBtn');
                groupRemoveBtn.dataset.group = `${i}`;
                //remove group button
                groupRemoveBtn.addEventListener('click', (event, srcElement) => {
                    _localStorage__WEBPACK_IMPORTED_MODULE_0__.groups.splice(event.srcElement.dataset.group, 1)
                    _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageModule.storeTasksAndGroups('', _localStorage__WEBPACK_IMPORTED_MODULE_0__.groups);
                    renderGroups(_localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageModule.getGroups());
                });
                groupContainer.appendChild(groupRemoveBtn);
        groupsContainer.appendChild(groupContainer);
    };
};
const toggleSidebar = (() => {
    let closeSidebarBtn = document.querySelector('.closeSidebarBtn');
    let toggleContainer = document.querySelector('.toggleContainer');
    let sidebar = document.querySelector('.sidebar');
    
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('openNav');
        sidebar.classList.add('closeNav');
    })
    toggleContainer.addEventListener('click', () => {
        sidebar.classList.remove('closeNav');
        sidebar.classList.add('openNav');
    })
})();
const sidebarSetup = (() => {
    console.log('sidebar setup working');
    addNewGroup;
    toggleSidebar;
})();
//SCRIPT---------------------------------------------------------


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map