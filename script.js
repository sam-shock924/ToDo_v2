const list = document.getElementsByClassName("toDoList");
const listItem = document.createElement("li");
const listInput = document.getElementById("toDoInput");
const listButton = document.getElementById("addToDo");
// const deleteItem = document.createElement("button");

function addItem() {
    let addListItem = document.createTextNode("toDoInput");
    listItem.appendChild(addListItem);
    document.getElementById("toDoList").appendChild(addListItem);
    // listItem.appendChild(document.createTextNode(listItem.value));
    // console.log("hello");
}

addToDo.addEventListener('click', addItem);
