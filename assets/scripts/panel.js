let tasks = [];

const BUTTON_SUBMIT = document.getElementById("submit"); // button to "submit" the form to create a new task

function getTask() {
  let panelTitle = document.getElementById("panel-title").value;
  let panelDescription = document.getElementById("panel-description").value;
  let panelTaskStatus = document.getElementById("panel-task-status").value;
  let panelAssignment = document.getElementById("panel-assignment").value;
  let panelDueTime = document.getElementById("panel-due-time").value;

  if (
    panelTitle === "" ||
    panelDescription === "" ||
    panelTaskStatus === "" ||
    panelAssignment === ""
  ) {
    alert("Please fill every fields before submitting.");
    return;
  }
  tasks.push(panelTitle, panelDescription, panelTaskStatus, panelAssignment, panelDueTime);
  console.table(tasks)
  console.log(tasks)
}

BUTTON_SUBMIT.addEventListener("click", getTask)

