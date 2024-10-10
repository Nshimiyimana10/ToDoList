const taskInput = document.getElementById("task-input").value;
const button = document.getElementById("add-task-button");

button.addEventListener('click', getInputValue)

function getInputValue(){
    console.log('button clicked');
}
