//CONST AND VARIABLES--------------------------------------------
import {localStorageModule} from "./localStorage";

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
            localStorageModule.storeTasksAndGroups(tasks, '');
            renderTasks(groupSelected, tasks);
        })
        taskContainer.appendChild(removeBtn);
        
        //append all elements
        main.appendChild(taskContainer);
        console.log(`task group1: ${tasks[i].taskGroup}`);
    }
    
}
//SCRIPT---------------------------------------------------------
export {renderTasks};



