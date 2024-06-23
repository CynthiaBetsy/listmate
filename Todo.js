const edit = document.getElementById("edit");
const lists = document.getElementById("list-container");
const addTask = document.getElementById("add-task");
const newTask = document.getElementById("input-field");
const taskAmount = document.getElementById("total-tasks");
const clear = document.getElementById("clear");

const content = [];

// Adding the 'Enter key' as an alternative to Add Task button
function addItem(event) {
  const inputValue = event.target.value;
  if (event.key === "Enter") {
    event.preventDefault();
    if (inputValue === "") {
      alert("Enter a task!");
    } else {
      content.push(inputValue);
      const modifiedArray = content.map(function (item, index) {
        return `<p>${content[index]}</p><br>`;
      });
      const lists = document.getElementById("list-container");
      lists.innerHTML = modifiedArray.join("");
      newTask.value = "";
      taskAmount.textContent = content.length;
    }
  }
}
newTask.addEventListener("keydown", addItem);

// for the add task button
function addBtn() {
  const inputValue = document.getElementById("input-field").value;
  if (inputValue === "") {
    alert("Enter a task!");
  } else {
    content.push(inputValue);
    const modifiedArray = content.map(function (item, index) {
      return `<p>${content[index]}</p><br>`;
    });
    const lists = document.getElementById("list-container");
    lists.innerHTML = modifiedArray.join("");
    newTask.value = "";
    taskAmount.textContent = content.length;
  }
}
addTask.addEventListener("click", addBtn);

// Function to clear all tasks
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

// update(Todo.html, Todo.css, Todo.js): add functions in js file to clear and modify todo list, add section to view bla bla bla in html
