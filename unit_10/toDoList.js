window.onload = getFromStorage();


document.getElementById('newToDoItem').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    addToList();
  }
});

function addToList() {
    var toDoList
}

function getFromStorage() {
    if(localStorage.getItem("toDoList") === null) {
        emptyArray = [];
        localStorage.setItem("toDoList", JSON.stringify(emptyArray));
        printNothingToAdd;
    }
}

function nothingToAdd