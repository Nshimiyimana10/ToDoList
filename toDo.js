const taskInput = document.getElementById("task-input");
const inputValue = taskInput.value;
const button = document.getElementById("add-task-btn");

button.addEventListener('click', getInputValue)

function getInputValue(){
    console.log(inputValue);
}
