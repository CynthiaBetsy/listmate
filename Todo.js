const newItemInput= document.getElementById("new-item-input")
const edit= document.getElementById("edit");
const cancel= document.getElementById("cancel");
const listContainer= document.getElementById("list-container");
const addTask=document.getElementById("add-task");

const content= [];

addTask.addEventListener('click', function(e) {
  e.preventDefault()
  document.getElementById("new-item-input").value;
const lists =document.getElementById("list-container");
content.push(newItemInput);
const modifiedArray = content.map(function(item, index){
return`<p>${content[index]}</p><br>`
})
lists.innerHTML= modifiedArray.join("");
  const newTask = document.getElementById('content').value;

});


