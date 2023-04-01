import { compareAsc, format } from 'date-fns'



//array for storing the projects 
var allProjects = [];
//variable for storing the id number for each individual Task object
var idNo = 1

//clicking on add task button starts the showtaskform function
const addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener("click", addNewTask);


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
function Tasks(name, description, dueDate, priority) {
    //id  
    this.idNum = idNo

    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.finished = false

    return idNo++


}

displayProjects()
selectedProjectDisplay()


//displayProjects function
//displays projects in the allProjects array
function displayProjects() {
    
    const projectList = document.getElementById("project-list")
    //remove the contents of the projectList
    projectList.innerHTML = ""

    
    //append the Default (allprojects[0]) seperate from the others 
    //because we are not going to add a delete icon next to it, so user won't be able to delete.
    const defaultProject = document.createElement("li");
    defaultProject.classList.add('projectName1');

    const defaultItem = document.createElement("div");
    defaultItem.classList.add('project-item')

    const defaultParaContainer = document.createElement("div");
    defaultParaContainer.classList.add('projectParaContainer')
    //set the width 100 so it gets selected when the user clicks outside of the text as well
    defaultParaContainer.style.width = "100%";

    const defaultPara = document.createElement("p");
    defaultPara.textContent = allProjects[0].name;

    defaultParaContainer.appendChild(defaultPara);
    defaultItem.appendChild(defaultParaContainer);
    defaultProject.appendChild(defaultItem);
    projectList.appendChild(defaultProject);

    //populate the project-list ul with the contents of the allProjects array
    for (let i = 1; i < allProjects.length; i++) {
        const li = document.createElement("li");
        li.classList.add('projectName1')

        const projectItem = document.createElement("div");
        projectItem.classList.add('project-item')

        const projectParaContainer = document.createElement("div");
        projectItem.classList.add('projectParaContainer')

        const projectPara = document.createElement("p");
        projectPara.textContent = allProjects[i].name;

        const deleteButton = document.createElement("div");
        deleteButton.classList.add('delete-project-button1')
        deleteButton.innerHTML = "<svg class= 'delete-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z' fill='currentColor'></path> </g></svg>"

        //functionality of the delete button
        deleteButton.addEventListener("click", function(){
            deleteProject(i)
          })

        projectParaContainer.appendChild(projectPara)
        projectItem.appendChild(projectParaContainer);
        projectItem.appendChild(deleteButton);
        li.appendChild(projectItem);
        projectList.appendChild(li);

      }

    
    selectedProject()

}


// function for seeing which project the user has selected
function selectedProject() {
// Add event listener to see which project the user has selected
const projectsAll = document.querySelectorAll(".projectParaContainer");

projectsAll.forEach(project => {
    project.addEventListener('click', function (){

        
        //firstly, find the project that currently has it's currentlyOn property as true
        const currentOnProject= allProjects.find((project) => project.currentlyOn===true);
        //and turn it into false
        currentOnProject.currentlyOn = false;
        
        //then, we need to turn the clicked project's currentlyOn property to "true"
        //so first, find the project that has the same name as the clicked one
        const clickedProject= allProjects.find((project) => project.name===this.firstChild.innerText);
        
        //when we delete a project, it is clicked (we click the delete icon which is ON the project)
        //so when this happens, we don't want to assign currentlyOn = true to a deleted element.
        //so if the clickedProject returns undefined through the find function (which means it couldn't find it)
        //which means we reached here by deleting that project
        //just make the default project (allProjects[0]) selected.
        if (clickedProject == undefined){
            allProjects[0].currentlyOn = true;
            return
        }
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
        newProjectButton.style.display = 'flex';

    });

    
     // Add event listener to remove the form when the form is submitted
    form.addEventListener('submit', (event) => {
        //preventdefault so it doesn't actually submit.
        event.preventDefault();


        //alert for the user trying to add a project with the same name
        const alertSpan = document.createElement('span');
        alertSpan.classList.add('alertSpan')
        alertSpan.innerText = "Project name must be unique!"

        //check if there is a project with this name
        const projectSameName= allProjects.find((project) => project.name===nameInput.value);
        //if there is one, projectSameName variable will not be undefined, then we display the alertspan alert we defined above
        if(projectSameName != undefined) {

           form.parentNode.insertBefore(alertSpan, form.nextSibling)
            return
        }
      
        //after a successful submission, if we have displayed the error message before, remove it
        let x = document.querySelector(".alertSpan")
        if (x) {
            x.remove()
        }

        //remove the form from DOM
        form.remove()
        //display the "New Project" button again
        newProjectButton.style.display = 'flex';

        //storing the new object in a variable
        let newProject = new Projects (nameInput.value)

        //pushing the new object into allProjects array
        allProjects.push(newProject)



        //update the projects display
        displayProjects()

        //run the selectedProjectDisplay function to display the selected project
        selectedProjectDisplay()

    }); 


}


function deleteProject(indexNumber){

    //so, find the object that has it's currentlyOn property as true
    const currentProject= allProjects.find((project) => project.currentlyOn===true);
    
    //make the default project (allProjects[0]) the selected project
    currentProject.currentlyOn = false

    //make the default project (allProjects[0]) the selected project
    allProjects[0].currentlyOn = true

    //from the currently on project, remove the task from the "tasks" array, with the indexNumber we got from the function call
    allProjects.splice(indexNumber, 1);

    //refresh the display of the projects
    displayProjects()

    //run the selectedProjectDisplay function to display the selected project
    selectedProjectDisplay()

}



//addeventlistener for "add task" button
//when the user clicks on it, a window pops up in the middle of the DOM, everything else on the background blurs out in gray
//and a form appears, from which the user can write and select things
function addNewTask() {
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
    nameInput.required = true
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description: ';
    const descInput = document.createElement('input');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('name', 'description');
    form.appendChild(descLabel);
    form.appendChild(descInput);


    //below in the dateinput, we don't allow user to select a past date for a task, so we are adding the date input field
    //a "min" property: (dateInput.setAttribute('min', currentDate);)
    //get the current date from js's built in functions
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    //arrange the date in the yy-mm-dd format
    let currentDate = year + '-'
    + ('0' + (month)).slice(-2) + '-'
    + ('0' + day).slice(-2) ;

    
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date: ';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('min', currentDate);
    dateInput.required = true
    form.appendChild(dateLabel);
    form.appendChild(dateInput);

    //Priority select <select> tag, displayed as buttons
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority: ';
    const select = document.createElement('select');
    select.setAttribute('id', 'prioritySelect');
    select.multiple = true
    select.required = true
    //options
    const low = document.createElement('option');
    low.textContent = "Low"
    low.setAttribute('id', 'low');
    low.setAttribute('value', 'low');
    const medium = document.createElement('option');
    medium.textContent = "Medium"
    medium.setAttribute('id', 'medium');
    medium.setAttribute('value', 'medium');
    const high = document.createElement('option');
    high.textContent = "High"
    high.setAttribute('id', 'high');
    high.setAttribute('value', 'high');
    //append
    select.appendChild(low);
    select.appendChild(medium);
    select.appendChild(high);
    form.appendChild(priorityLabel);
    form.appendChild(select);

    //submit button
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

      //create a new task
      var newTaskVariable = new Tasks (nameInput.value, descInput.value, dateInput.value, select.value)

      //task also gets appended to the project object within the allProjects array, which has its "currentlyOn" property as true
      //so, find the object that has it's currentlyOn property as true
      const currentProject= allProjects.find((project) => project.currentlyOn===true);


      //append the task to the "tasks" property of this object
      currentProject.tasks.push(newTaskVariable)


      //remove overlay when the form is submitted, so display returns to normal
      overlay.remove();

      //display tasks when submitted
      displayTasks()

    });

    

}


//display tasks for the selected project
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
        taskContainerDiv.classList.add('task-item');

        //task title div
        const taskTitleDiv = document.createElement("div");
        taskTitleDiv.classList.add('task-title');

        //label
        const label = document.createElement("label");

        //checkbox input
        const checkboxInput = document.createElement("input");
        checkboxInput.setAttribute('type', 'checkbox');

        //if the task's finished property is true, display the checkbox as checked.
        if (currentOnProject.tasks[i].finished === true) {
            checkboxInput.checked = true
        }

        //addevent listener for checkbox, so if it's checked, add the "checked-span class"
        //and change the "finished" property of this object to "true"
        checkboxInput.addEventListener('change', function() {
            if (this.checked) {

              span.classList.add('checked-span');
              currentOnProject.tasks[i].finished = true
            } else {
              span.style.textDecoration = "none";
              span.classList.remove('checked-span');
              currentOnProject.tasks[i].finished = false
            }
          });

        //span
        const span = document.createElement("span");
        span.innerText = currentOnProject.tasks[i].name;

        //if the task's finished property is true, make the span have the "checked-span" class.
        if (currentOnProject.tasks[i].finished === true) {
            span.classList.add('checked-span');
        }


        //-----second div-----
        const taskDetailsDiv = document.createElement("div");
        taskDetailsDiv.classList.add('task-details');

        //sort the date format
        const formattedDate = format(new Date(currentOnProject.tasks[i].dueDate), 'd MMMM')

        //task date para
        const taskDatePara = document.createElement("p");
        taskDatePara.classList.add('date');
        taskDatePara.innerText = formattedDate;


        //-----third div-----
        const taskButtonsDiv = document.createElement("div");
        taskButtonsDiv.classList.add('task-buttons');

        const detailsButton = document.createElement("button");
        detailsButton.classList.add('details-button');
        detailsButton.innerText = "Details"
        detailsButton.addEventListener("click", function(){
            showDetails(i)
          })
        const editButton = document.createElement("div");
        editButton.classList.add('edit-button');
        editButton.innerHTML = "<svg class= 'edit-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path opacity='0.15' d='M8 16H12L18 10L14 6L8 12V16Z' fill='currentColor'></path> <path d='M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg>"
        editButton.addEventListener("click", function(){
            editTask(i)
          })

        const deleteButton = document.createElement("div");
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = "<svg class= 'delete-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z' fill='currentColor'></path> </g></svg>"
        deleteButton.addEventListener("click", function(){
            deleteTask(i)
          })

        //-------APPENDING----------
        //---first div-----
        label.appendChild(checkboxInput)
        label.appendChild(span)
        taskTitleDiv.appendChild(label)
        taskContainerDiv.appendChild(taskTitleDiv)

        //---second div---
        taskDetailsDiv.appendChild(taskDatePara)
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
}



//the functionality of the "details" button
function showDetails(indexNumber) {
    
    //find the object that has it's currentlyOn property as true
    const currentProject= allProjects.find((project) => project.currentlyOn===true);
    
    // Create a div for the modal overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Create a container div element for adding all the para elements
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('task-form');
    
    // Add para elements to the container
    const namePara = document.createElement('h3');
    namePara.innerHTML = currentProject.tasks[indexNumber].name + "<br><br>";
    containerDiv.appendChild(namePara);


    const descPara = document.createElement('para');
    descPara.innerHTML = 'Description: '+currentProject.tasks[indexNumber].description + "<br><br>";
    containerDiv.appendChild(descPara);

    //sort the date format
    const formattedDate = format(new Date(currentProject.tasks[indexNumber].dueDate), 'd MMMM y')

    const datePara = document.createElement('para');
    datePara.innerHTML = 'Due: '+ formattedDate + "<br><br>";
    containerDiv.appendChild(datePara);

    //sort the priority text, capitalize the first letter
    const formattedPrio = currentProject.tasks[indexNumber].priority.charAt(0).toUpperCase() + currentProject.tasks[indexNumber].priority.slice(1);

    //Priority select <select> tag, displayed as buttons
    const priorityPara = document.createElement('para');
    priorityPara.innerHTML = 'Priority: '+formattedPrio + "<br><br>";
    containerDiv.appendChild(priorityPara);

    //close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'CLOSE';
    closeButton.setAttribute('type', 'button');
    containerDiv.appendChild(closeButton);
    
    // Add the container to the overlay
    overlay.appendChild(containerDiv);
    
    // Add the overlay to the DOM
    document.body.appendChild(overlay);
    
    // Add event listener to close the window when the close button is clicked
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();

      //remove overlay when the form is submitted, so display returns to normal
      overlay.remove();

      //display tasks when submitted
      //displayTasks()

    });

    
}


//the functionality of the "edit" button
function editTask(indexNumber) {
    
    //find the object that has it's currentlyOn property as true
    const currentProject= allProjects.find((project) => project.currentlyOn===true);
    
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
    nameInput.required = true
    nameInput.value = currentProject.tasks[indexNumber].name
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description: ';
    const descInput = document.createElement('input');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('name', 'description');
    descInput.value = currentProject.tasks[indexNumber].description
    form.appendChild(descLabel);
    form.appendChild(descInput);


    //below in the dateinput, we don't allow user to select a past date for a task, so we are adding the date input field
    //a "min" property: (dateInput.setAttribute('min', currentDate);)
    //get the current date from js's built in functions
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    //arrange the date in the yy-mm-dd format
    let currentDate = year + '-'
    + ('0' + (month)).slice(-2) + '-'
    + ('0' + day).slice(-2) ;

    
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date: ';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('min', currentDate);
    dateInput.required = true
    dateInput.value = currentProject.tasks[indexNumber].dueDate
    form.appendChild(dateLabel);
    form.appendChild(dateInput);

    //Priority select <select> tag, displayed as buttons
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority: ';
    const select = document.createElement('select');
    select.setAttribute('id', 'prioritySelect');
    select.multiple = true
    select.required = true
    //options
    const low = document.createElement('option');
    low.textContent = "Low"
    low.setAttribute('id', 'low');
    low.setAttribute('value', 'low');
    const medium = document.createElement('option');
    medium.textContent = "Medium"
    medium.setAttribute('id', 'medium');
    medium.setAttribute('value', 'medium');
    const high = document.createElement('option');
    high.textContent = "High"
    high.setAttribute('id', 'high');
    high.setAttribute('value', 'high');
    //append
    select.appendChild(low);
    select.appendChild(medium);
    select.appendChild(high);
    form.appendChild(priorityLabel);
    form.appendChild(select);

    //set the priority value as default 
    //we need to get the selected task's priority and set it as the selected option in the edit window.
    //to do that, we need to loop through the id's of every child node of the <select> element 
    //and see if our value matches their id
    var nodes = select.childNodes;
    for(var i=0; i<nodes.length; i++) {
        if (nodes[i].id === currentProject.tasks[indexNumber].priority) {
             nodes[i].selected = true;
         }
    }   

    //submit button
    const addButton = document.createElement('button');
    addButton.textContent = 'Update Task';
    addButton.setAttribute('type', 'submit');
    form.appendChild(addButton);
    
    // Add the form to the overlay
    overlay.appendChild(form);
    
    // Add the overlay to the DOM
    document.body.appendChild(overlay);
    
    // Add event listener to remove the overlay when the form is submitted
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      //update the current task
      
      currentProject.tasks[indexNumber].name = nameInput.value
      currentProject.tasks[indexNumber].description = descInput.value
      currentProject.tasks[indexNumber].dueDate = dateInput.value
      currentProject.tasks[indexNumber].priority = select.value
      
      //remove overlay when the form is submitted, so display returns to normal
      overlay.remove();

      //display tasks when submitted
      displayTasks()

    });

    

}


//the functionality of the "delete" button
function deleteTask(indexNumber) {

    //firstly, find the project that currently has it's currentlyOn property as true
    const currentOnProject= allProjects.find((project) => project.currentlyOn===true);

    //from the currently on project, remove the task from the "tasks" array, with the indexNumber we got from the function call
    currentOnProject.tasks.splice(indexNumber, 1);

    //refresh the display of the tasks
    displayTasks()
}




//-------------------------------------------------TODO-------------------------------------------------------
//get some cool style for the body first
//display something in each task for the different difficulty settings (red color etc)
//--ADD TASK WINDOW--
//replace the description with a textarea 
//add a "close" to the add task window
//get some cool style for the add task window
//divide code into different js files, do the import and export required