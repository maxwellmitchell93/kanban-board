const modal = document.getElementById('task-modal');
const openModalBtn = document.getElementById('open-modal');
const taskTitle = document.getElementById('#task-title');
const dueDate = document.getElementById('#date-picker');
const taskDescription = document.getElementById('#task-description');
const addTaskBtn = document.getElementById('#addTask');
 

//store items in local storage
localStorage.setItem('task-title');
localStorage.setItem('task-desciption');
localStorage.setItem('date-picker');


// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));



// Todo: create a function to generate a unique task id
 
let taskIdCounter = 1; 

function generateTaskId() {
    return taskIdCounter++; 
}
  
  


// Todo: create a function to create a task card
 function createTaskCard (event) {
  event.preventDefault();
  const taskTitle = taskTitle. input
  const dueDate = dueDate. input
  const taskDescription = taskDescription. input
}



  // Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  localStorage.getItem ('task-title');
  localStorage.getItem ('date-picker');
  localStorage.getItem ('task-description');

  
  $( function renderTaskList() {
    $( "#draggable" ).draggable();
  } );
  
}
  


// Todo: create a function to handle adding a new task
function handleAddTask(){
  const newTask = {
    title: title,
    description: description,
    deadline: deadline,
    progress: 'Not Yet Started'
};
}
function displayTask () {
  const tasks = {
    
  }
  
}

  


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

   




// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}
handleDrop();
  

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
//due date picker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});
//Open Modal Button Event Listener 
openModalBtn.addEventListener('click', () => {
    modal.style.display= 'block';
});
//add task button event listener
addTask.addEventListener('click', createTaskCard);





