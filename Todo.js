const edit = document.querySelector(".edit");
const cancel = document.querySelector(".delete");
const lists = document.getElementById("list-container");
const addTask = document.getElementById("add-task");
const newTask = document.getElementById("input-field");
const taskAmount = document.getElementById("total-tasks");
const clear = document.getElementById("clear");

const content = [];
let taskCount = 0;
const displayCount = () => {
  taskAmount.innerText = taskCount;
};

// function for creating a to-do task
newTask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask.click();
  }
});
function createToDoData() {
  if (newTask.value === "") {
    alert("Enter a task!");
  } else {
    let li = document.createElement("li");
    const todoItems = `<div class="To-do"><input type="checkbox" class="task-check" onclick="checked()"><span class="content"> ${newTask.value}</span>
<button onclick = "" class ="edit">Edit</button>
<button class="delete">Delete</button><br>
</div>`;
    li.innerHTML = todoItems;
    lists.appendChild(li);
    newTask.value = "";
    // taskAmount.innerHTML = taskCount;
  }
}
// function for checkbox
const checkBox = document.getElementById("checkbox");
function checked(e) {
  if (checkBox.click) {
    newTask.Value.style.textDecoration = "line-through";
  }
}
// function for delete button
const deleteBtn = document.querySelectorAll(".delete");
deleteBtn.forEach((button) => {
  button.onclick = () => {
    parentNode.remove();
    taskCount = -1;
    displayCount(taskCount);
  };
});

// for clear button
function clrBtn() {
  if (content.length === 0) {
    alert("No tasks to delete!");
  } else {
    lists.innerHTML = "";
    content.length = 0;
    taskAmount.textContent = content.length;
  }
}
clear.addEventListener("click", clrBtn);

