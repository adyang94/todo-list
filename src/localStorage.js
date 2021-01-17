//CONST AND VARIABLES--------------------------------------------
let groups = [];
let tasks = [];
let groupSelected;
//FUNCTIONS------------------------------------------------------
const localStorageModule = (() => {
    console.log('localStorageModule running!!!');
    console.log({groups});
    console.log({tasks});
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
            if (!tasks) {
                tasks = [];
            }
            return tasks;
        };
        function getGroups() {
            groups = JSON.parse(localStorage.getItem('groups'));
            if (!groups) {
                groups = [];    
            }
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
export {
    localStorageModule,
    groups,
    tasks,
    groupSelected
};