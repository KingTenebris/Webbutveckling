let addButton = document.getElementsByClassName("addButton");
let list = document.querySelector("ul");
let item = document.querySelector("input");

addButton[0].addEventListener("click", addTodo);

function addTodo()
{   
    let newLi = document.createElement("li");
    newLi.className = "newLi";
    // value to take information from input in HTML
    newLi.innerHTML = item.value;

    let newRemoveButton = document.createElement("button");
    newRemoveButton.className = "removeButton";
    newRemoveButton.innerHTML = "X";
    let removeButton = document.getElementsByClassName("removeButton");

    list.appendChild(newLi);
    newLi.appendChild(newRemoveButton);

    removeButton[removeButton.length-1].addEventListener("click", remover)

}

function remover()
{
    this.parentNode.remove();
}