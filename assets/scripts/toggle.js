const BUTTON_ADD = document.getElementById("add"); // button to open the panel so we can create a new task
const ARTICLE = document.querySelector("article")

let togglePanel = () => { ARTICLE.classList.toggle("displayed") }

BUTTON_ADD.addEventListener('click', togglePanel)