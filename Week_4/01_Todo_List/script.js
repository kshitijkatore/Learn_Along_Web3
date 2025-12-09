// fetching element
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
