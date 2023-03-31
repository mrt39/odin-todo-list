//array for storing the projects 
var allProjects = [];
//variable for storing the id number for each individual Task object
var idNo = 1

//clicking on add task button starts the showtaskform function
const addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener("click", showTaskForm);


//clicking on "new project" button starts the newProject function
const newProjectButton = document.getElementById("new-project-button");
newProjectButton.addEventListener("click", newProject);

//CONSTRUCTOR FOR PROJECT OBJECTS
function Projects(name) {
    this.name = name
    //The property for storing the "tasks" in it.
    this.tasks = []
    //property for seeing if this is the project user has selected 
    this.currentlyOn = false

}

//set up the default project, for the tasks to be added on initially
const projectDefault = new Projects ("Default");
projectDefault.currentlyOn = true;
allProjects.push(projectDefault);


//CONSTRUCTOR FOR TASK OBJECTS
function Tasks(name) {
    //id  
    this.idNum = idNo

    this.name = name
    this.description = "description"
    this.dueDate = "dueDate"
    this.importance = "importance"
    this.finished = false

    return idNo++
/*     this.sayName = function() {
      console.log(name)
    } */

}

const task1 = new Tasks ("keko")
const task2 = new Tasks ("zirto")

console.log(task1.idNum) 
console.log(task1.name)
console.log(task2.idNum)
console.log(task2.name)


//edit button

//delete button 
//remove.self

displayProjects()
selectedProjectDisplay()


//displayProjects function
//displays projects in the allProjects array
function displayProjects() {
    
    const projectList = document.getElementById("project-list")
    //remove the contents of the projectList
    projectList.innerHTML = ""

    //populate the project-list ul with the contents of the allProjects array
    for (let i = 0; i < allProjects.length; i++) {
        const li = document.createElement("li");
        li.classList.add('projectName1')
        li.textContent = allProjects[i].name;
        projectList.appendChild(li);
        selectedProject()
      }

}


// function for seeing which project the user has selected
function selectedProject() {
// Add event listener to see which project the user has selected
const projectsAll = document.querySelectorAll(".projectName1");

projectsAll.forEach(project => {
    project.addEventListener('click', function (){
        
        //firstly, find the project that currently has it's currentlyOn property as true
        const currentOnProject= allProjects.find((project) => project.currentlyOn===true);
        //and turn it into false
        currentOnProject.currentlyOn = false;
        
        //then, we need to turn the clicked project's currentlyOn property to "true"
        //so first, find the project that has the same name as the clicked one
        const clickedProject= allProjects.find((project) => project.name===this.innerText);
        clickedProject.currentlyOn = true;

        ////display projects in the allProjects array
        displayProjects()
        
        //run the selectedProjectDisplay function to display the selected project
        selectedProjectDisplay()
      
    });
  });
}


//finds the selected project (which has its currentlyOn property as true) and gives it a class
// which highlights the project on the project list and displays the tasks on task list 
function selectedProjectDisplay(){

    //firstly, find the project that currently has it's currentlyOn property as true
    const currentOnProject= allProjects.find((project) => project.currentlyOn===true);

    //loop through every element to see which one has an innerText same as currentOnProject.name
    const projectsAll = document.querySelectorAll(".projectName1");
    for (var i = 0, len = projectsAll.length; i < len; i++) {
        if (projectsAll[i].innerText === currentOnProject.name){
            projectsAll[i].classList.add('selectedProject1')
        }
    }

    //display tasks for the selected project
    displayTasks()
}


/* //-----------------------------------TODO----------------------------------------------
//IN THE TASK LIST ON THE RIGHT SIDE OF THE PAGE, ONLY DISPLAY THE TASKS THAT THE USER HAS
function displayTasks() {
    //firstly, find the project that currently has it's currentlyOn property as true
    const currentOnProject= allProjects.find((project) => project.currentlyOn===true);

    const taskList = document.getElementById("task-list")
    //remove the contents of the taskList
    taskList.innerHTML = ""

    //populate the task-list ul with the contents of the currentOnProject's tasks property
    for (let i = 0; i < currentOnProject.tasks.length; i++) {
        //the li
        const li = document.createElement("li");
        //the container div
        const taskContainerDiv = document.createElement("div");
        taskContainerDiv.classList.add('task-container');

        //task title div
        const taskTitleDiv = document.createElement("div");
        taskTitleDiv.classList.add('task-title');

        //label
        const label = document.createElement("label");

        //checkbox input
        const checkboxInput = document.createElement("input");
        checkboxInput.setAttribute('type', 'checkbox');

        //span
        const span = document.createElement("span");
        span.innerText = currentOnProject.tasks[i].name;


        //-----second div-----
        const taskDetailsDiv = document.createElement("div");
        taskDetailsDiv.classList.add('task-details');

        //task date para
        const taskDatePara = document.createElement("p");
        taskDatePara.classList.add('task-date');
        taskDatePara.innerText = currentOnProject.tasks[i].dueDate;

        //task description para
        const taskDescPara = document.createElement("p");
        taskDescPara.classList.add('task-description');
        taskDescPara.innerText = currentOnProject.tasks[i].description;

        //-----third div-----
        const taskButtonsDiv = document.createElement("div");
        taskButtonsDiv.classList.add('task-buttons');

        const detailsButton = document.createElement("button");
        detailsButton.classList.add('details-button');
        detailsButton.innerText = "Details"

        const editButton = document.createElement("button");
        editButton.classList.add('edit-button');
        editButton.innerText = "Edit"

        const deleteButton = document.createElement("button");
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = "x"

        //-------APPENDING----------
        //---first div-----
        label.appendChild(checkboxInput)
        label.appendChild(span)
        taskTitleDiv.appendChild(label)
        taskContainerDiv.appendChild(taskTitleDiv)

        //---second div---
        taskDetailsDiv.appendChild(taskDatePara)
        taskDetailsDiv.appendChild(taskDescPara)
        taskContainerDiv.appendChild(taskDetailsDiv)

        //---third div---
        taskButtonsDiv.appendChild(detailsButton)
        taskButtonsDiv.appendChild(editButton)
        taskButtonsDiv.appendChild(deleteButton)
        taskContainerDiv.appendChild(taskButtonsDiv)

        //----append div to li and li to ul----
        li.appendChild(taskContainerDiv)
        taskList.appendChild(li)

      }




} */



//newProject function 
//below the button, a form with a textarea and a submit button and a cancel button will occur. 
//submitting will create a Projects form 
function newProject() {
    
    //make the New project button disappear so the user can't click on it anymore
    newProjectButton.style.display = 'none';
    
    // Create a form element for the task input fields
    const form = document.createElement('form');

    // Add input fields to the form element
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    form.appendChild(nameInput);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';
    addButton.setAttribute('type', 'submit');
    form.appendChild(addButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.setAttribute('type', 'reset');
    form.appendChild(cancelButton);

    // Add the form below the newProject button.
    let asideBar = document.querySelector("aside")
    asideBar.appendChild(form)

    // Add event listener to remove the form when cancel button is pressed
    cancelButton.addEventListener("click", () => {
        //remove the form from DOM
        form.remove()
        //display the "New Project" button again
        newProjectButton.style.display = 'block';

    });

    
     // Add event listener to remove the form when the form is submitted
    form.addEventListener('submit', (event) => {
        //preventdefault so it doesn't actually submit.
        event.preventDefault();
      
        //remove the form from DOM
        form.remove()
        //display the "New Project" button again
        newProjectButton.style.display = 'block';

        //storing the new object in a variable
        let newProject = new Projects (nameInput.value)

        //pushing the new object into allProjects array
        allProjects.push(newProject)

        console.log(allProjects)

        //update the projects display
        displayProjects()

        //run the selectedProjectDisplay function to display the selected project
        selectedProjectDisplay()

    }); 


}







//addeventlistener for "add task" button
//when the user clicks on it, a window pops up in the middle of the DOM, everything else on the background blurs out in gray
//and a form appears, from which the user can write and select things
function showTaskForm() {
    // Create a div for the modal overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Create a form element for the task input fields
    const form = document.createElement('form');
    form.classList.add('task-form');
    
    // Add input fields to the form element
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description: ';
    const descInput = document.createElement('input');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('name', 'description');
    form.appendChild(descLabel);
    form.appendChild(descInput);
    
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date: ';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Task';
    addButton.setAttribute('type', 'submit');
    form.appendChild(addButton);
    
    // Add the form to the overlay
    overlay.appendChild(form);
    
    // Add the overlay to the DOM
    document.body.appendChild(overlay);
    
    // Add event listener to remove the overlay when the form is submitted
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      //create a new name for the new task
      var newTaskName = "task"+idNo
      // window[newTaskName] is how you use a dynamic variable name. 
      //https://stackoverflow.com/questions/5117127/use-dynamic-variable-names-in-javascript
      window[newTaskName] = new Tasks (nameInput.value)
      console.log(window[newTaskName])


      //task also gets appended to the project object within the allProjects array, which has its "currentlyOn" property as true
      //so, find the object that has it's currentlyOn property as true
      const currentProject= allProjects.find((project) => project.currentlyOn===true);

      console.log(currentProject)
      //append the task to the "tasks" property of this object
      currentProject.tasks.push(window[newTaskName])

      console.log(currentProject.tasks)

      //remove overlay when the form is submitted, so display returns to normal
      overlay.remove();

    });

    
/*     // Blur out the background
    const mainContent = document.querySelector('#main-content');
    mainContent.style.filter = 'blur(5px)'; */
    
/*     // Disable scrolling on the body
    document.body.style.overflow = 'hidden'; */
}


/* window["task"+idNo] */
/* console.log("new task name: " + newTaskName + " new name of your task: " + newTaskName.name + " new id: " + newTaskName.idNum)
 */

//addeventlistener for "new project" button
//just a textfield opens up under it, the user can press name and submit


//the functionality of the "edit" button
//a similar window from the "add" task opens up, with the fields already filled up with info 
//from the existing task. 
//how do i get the info from the task though? how do i select the task? what do i pass in here?




