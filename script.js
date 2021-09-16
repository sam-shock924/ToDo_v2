const list = document.getElementById('toDoList');
const listInput = document.getElementById("toDoInput");
const listButton = document.getElementById("addToDo");
// const deleteItem = document.createElement("button");

function addItem() {
    let addListItem = document.createTextNode(listInput.value);
    const listItem = document.createElement("li");
    listItem.id = "toDoItem"
    listItem.appendChild(addListItem);


    //create the checkbox
    // append it to the list element

    // create the deltete listButton
    // append this this the li

    list.appendChild(listItem);
}

addToDo.addEventListener('click', addItem);
