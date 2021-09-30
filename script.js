const list = document.getElementById('toDoList');
const listInput = document.getElementById("toDoInput");
const listButton = document.getElementById("addToDo");


function addItem() {
    let addListItem = document.createTextNode(listInput.value);
    const listItem = document.createElement("li");
    listItem.setAttribute('id', 'toDoItem');
    listItem.appendChild(addListItem);
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.textContent = 'X';
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    deleteButton.addEventListener('click', () => deleteItem(listItem))
    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = "line-through";
    })
}

function deleteItem(listItem) {
    listItem.remove();
}
listButton.addEventListener('click', addItem);
