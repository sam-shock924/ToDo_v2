function addItem() {
    let list = document.getElementsByClassName("toDoList");
    let listItem = document.createElement("toDoItem");
    let listInput = document.getElementById("toDoInput");
    listItem.appendChild(document.createTextNode(listItem.value));
    console.log("hello");
}

addToDo.addEventListener('click', addItem);
