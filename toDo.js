const input = document.getElementById("my-input");
const value = input.value;
const button = document.getElementById("submit-btn");

button.addEventListener('click',  taskList);

function taskList(e){

e.preventDefault()
    if(value === ""){
      console.log("Please enter something here!")
    }

    else{
        console.log(value);
    }
}