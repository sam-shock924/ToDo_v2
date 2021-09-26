const list = document.getElementById('toDoList');
const listInput = document.getElementById("toDoInput");
const listButton = document.getElementById("addToDo");
const deleteButton = document.createElement("button");
deleteButton.id = "deleteButton";


function addItem() {
    let addListItem = document.createTextNode(listInput.value);
    const listItem = document.createElement("li");
    listItem.id = "toDoItem"
    listItem.appendChild(addListItem);
    listItem.appendChild(deleteButton);


    //create the checkbox
    // append it to the list element

    // create the deltete listButton
    // append this this the li

    list.appendChild(listItem);
}


function deleteItem() {
    let toDoItem = document.getElementById("toDoItem");
    toDoItem.remove();
}

addToDo.addEventListener('click', addItem);
deleteButton.addEventListener('click', deleteItem)
