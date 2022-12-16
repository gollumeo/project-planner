let tasks = [];

const BUTTON_ADD = document.getElementById("add"); // button to open the panel so we can create a new task
const ARTICLE = document.querySelector("article");
const BUTTON_SUBMIT = document.getElementById("submit"); // button to "submit" the form to create a new task

let togglePanel = () => {
  ARTICLE.classList.toggle("displayed");
};

BUTTON_ADD.addEventListener("click", togglePanel);

function getTask() {
  let date = new Date().toLocaleString("EU-Brussels");

  let panelTitle = document.getElementById("panel-title").value;
  let panelDescription = document.getElementById("panel-description").value;
  let panelTaskStatus = document.getElementById("panel-task-status").value;
  let panelAssignment = document.getElementById("panel-assignment").value;
  let panelDueDate = document.getElementById("panel-due-date").value;
  let panelDueTime = document.getElementById("panel-due-time").value;
  let dateString = panelDueDate.split("-");
  let timeString = panelDueTime.split(":");

  console.log(panelTaskStatus);

  let dueDate = new Date(
    dateString[0],
    dateString[1] - 1,
    dateString[2],
    timeString[0],
    timeString[1]
  );

  if (
    panelTitle === "" ||
    panelDescription === "" ||
    panelTaskStatus === "select" ||
    panelAssignment === ""
  ) {
    alert("Please fill every fields before submitting.");
    return;
  } else if (dueDate < date) {
    alert("Please consider using a correct date for your task.");
    return;
  }

  tasks.push({
    title: panelTitle,
    description: panelDescription,
    status: panelTaskStatus,
    assignment: panelAssignment,
    deadline: dueDate,
    index,
  });
  togglePanel();
  console.table(tasks);

  tasks[0].index = 1;

  for (let elem of tasks) {
    tasks[elem + 1].index = index++;
    console.log(elem.index)
  }
}

BUTTON_SUBMIT.addEventListener("click", getTask);
