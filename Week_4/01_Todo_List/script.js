/*// fetching element
addTodo=()=>{
    const inputElement = document.querySelector("input");
    const inputValue = inputElement.value;
    console.log(inputValue);
}

// Deleting To-do

deleteTodo=(index)=>{
    const element = document.getElementById("todo-"+ index);
    element.parentNode.removeChild(element);
}
// Adding element
*/



const main = document.createElement("div");
main.setAttribute('class', 'main');
main.innerHTML = "Cohort - To-Do Application"

const divMain = document.createElement("div");
divMain.setAttribute('class','head');

// // add input and button on head-class

const inputElement = document.createElement("input");
inputElement.placeholder = "Enter your task"
const buttonElement = document.createElement("button");
buttonElement.setAttribute('onclick','addTodo()')
buttonElement.innerHTML = "Add";

divMain.appendChild(inputElement);
divMain.appendChild(buttonElement);

// function add-todo

function addTodo(){
    const value = document.querySelector("input").value;
    const h4Element = document.createElement("h4");
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("onclick", "deleteTodoAt(" + index + ")");
    buttonElement.innerHTML = "Delete";

    const divElement = document.createElement("div");
    divElement.setAttribute('class','task')
    divElement.appendChild(h4Element);
    divElement.appendChild(buttonElement);

    h4Element.innerHTML = value;
    document.querySelector(".main").appendChild(divElement);
}

main.appendChild(divMain);
document.body.appendChild(main);



