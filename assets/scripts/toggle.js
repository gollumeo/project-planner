const BUTTON_ADD = document.getElementById("add"); // button to open the panel so we can create a new task
const ARTICLE = document.querySelector("article");
const BUTTON_EXIT = document.getElementById("exit");

let togglePanel = () => {
  ARTICLE.classList.toggle("displayed");
};

BUTTON_ADD.addEventListener("click", togglePanel);
BUTTON_EXIT.addEventListener("click", togglePanel);
