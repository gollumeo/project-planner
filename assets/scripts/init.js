let tasks = []; // array which will contain every task created, before dispatching them
let toDo = []; // array which will contain every "to do" tasks
let doing = []; // array which will contain every "doing" tasks
let done = []; // array which will contain every "done" tasks

let index; // initiation of an index variable which will help you iterate inside our future objects

const BUTTON_ADD = document.getElementById("add"); // button to open the panel so we can create a new task
const BUTTON_SUBMIT = document.getElementById("submit"); // button to "submit" the form to create a new task

const PANEL_TITLE = document.getElementById("panel-title"), // element containing the name of the new task
      PANEL_DESCRIPTION = document.getElementById("panel-description"), // element containing the description of the new task
      PANEL_STATUS = document.getElementById("panel-task-status"), // element containing the status of the new task
      PANEL_ASSIGNMENT = document.getElementById("panel-assignment"); // element containing the person assigned to the new task
      PANEL_DEADLINE = document.getElementById("panel-due-time"), // element containing the Date() due time
      DISPLAY_CARDS = document.getElementsByClassName("display-cards")[0];


