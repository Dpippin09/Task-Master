// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
// increase Id by 1 for each new activity to do
// handle when there are no activities yet
// Return that id and save the current id values to local storage
function generateTaskId(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Todo: create a function to create a task card
// 
function createTaskCard(task) { 
    const taskCard = $('<div>')
    const cardHeader = $('<div>').addClass('#modal-header h4').text(task.name);
    const cardBody = $('<div>').addClass('#modal-body');
    const cardDescription = $('<p>').addClass('#modal-description').text(task.type);
    const cardDueDate = $('<p>').addClass('#modal-date').text(task.dueDate);
    const cardDeleteBtn = $('<button>')   
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);
  console.log(task)
  }

// Todo: create a function to render the task list and make cards draggable
        // Jquery. Run each function for each column in local storgae (for loop)
        function renderTaskList(event2) {
          console.log(event2)
           // const task = readTasksFromStorage();
           const tasks = $('#todo-cards');
           
           const taskName = $('#modal-Task').val().trim();
           const taskDescritpion = $('#modal-description').val().trim();
           const taskDate = $('#modal-date').val().trim();
           //todoList.empty();
           const newTask = {
             taskName, 
             taskDescritpion,
             taskDate,
             status: 'to-do',
            }  
           console.log(newTask)
           
          }

          // Todo: create a function to handle adding a new task
          // Grab the data from the form and push all the data to local storage
          function handleAddTask(event3){
            event3.preventDefault();
            let task = {
              id: generateTaskId(),
    taskName: $('#modal-Task').val(),
    taskDescritpion: $('#modal-description').val(),
    taskDate: $('#modal-date').val(),
    status: 'to-do'
  }
const create = readTasksFromStorage();
create.push(task);
saveTaskToStorage(create);

let newCard = createTaskCard(task);
$('#todo-cards').append(newCard);
$('form').trigger('reset');
}

// Todo: create a function to handle deleting a task
// Re-run the render task list function
function handleDeleteTask(event4){
  const taskId = $(this).attr('data-task-id');
  const newTask = readTasksFromStorage();
}

// Todo: create a function to handle dropping a task into a new status lane
// 
function handleDrop(event, ui) {
  const dropCard = readTasksFromStorage();
  const taskId = ui.draggable[0].dataset.taskId;
  const newStatus = event.target.id;
  
  for (let task of tasks) {
    if (task.id === taskId) {
      task.status = newStatus;
    }
  }
    localStorage.setItem('task', JSON.stringify(tasks));
    printTaskData();
  }
  
  // Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
  // buttons on the modal,  render out lists, and make buttons "clickable", restor the dropable items
$(document).ready(function () {
  $("#submit-btn").on( "click", createTaskCard);
  $('#modal-date').datepicker({
    changeMonth: true,
    changeYear: true,
  })
})
// const inProgressList = $('#in-progress-cards');
//inProgressList.empty();

//const doneList = $('#done-cards');
//doneList.empty();

// for (let task of tasks) {
  //   if (task.status === 'to-do') {
    //     todoList.append(createTaskCard(task));
    //   } else if (task.status === 'in-progress') {
      //     inProgressList.append(createTaskCard(task));
      //   } else if (task.status === 'done') {
        //     doneList.append(createTaskCard(task));
        //   }
        // }
