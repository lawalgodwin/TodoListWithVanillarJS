let myInput = document.querySelector(".myinput");
let createbutton = document.querySelector(".createbutton");
let todoForm = document.querySelector(".addTodo");
let btnEdit = document.querySelector(".edit");
let addbtn = document.querySelector("button");

let uList = document.querySelector("ul");
let inputvalue = "";

// initialise an array to store the todos

let todos = [];
//intialise and object that represents a typical todo

let todo = {};
btnEdit.disabled = true;
btnEdit.addEventListener("click", () => {
  console.log("edit presses");
});

myInput.addEventListener("change", (e) => {
  inputvalue = e.target.value;
});

addbtn.addEventListener("click", function () {
  todoForm.style.display = "block";
  myInput.value = "";
  this.style.border = "none";
});

createbutton.addEventListener("click", function () {
  if (!isValid(inputvalue)) {
    alert("input required");
    return;
  }
  todo[inputvalue] = inputvalue;
  todos.push(inputvalue);
  delbtn = createListElement(inputvalue);
});

function isValid(v) {
  return v !== "" && v.length >= 5;
}

function createListElement(v) {
  let listElement = document.createElement("li");
  let dateParagraph = document.createElement("p");
  let deletebtn = document.createElement("button");
  deletebtn.innerHTML = "delete";
  deletebtn.className = "delete";

  deletebtn.addEventListener("click", () => {
    deleteTodo(v);
    listElement.style.display = "none";
  });

  let editbtn = document.createElement("button");
  editbtn.innerHTML = "Edit";
  editbtn.className = "delete";

  let taskTextNode = document.createTextNode(`task: ${v}`);
  let dateTextNode = document.createTextNode(`Date: ${Date.now()}`);

  editbtn.addEventListener("click", function () {
    todoForm.style.display = "block";
    myInput.value = v;
    createbutton.disabled = true;
    createbutton.style.backgroundColor = "grey";
    btnEdit.disabled = false;
    btnEdit.style.backgroundColor = "red";
    let newTtaskTextNode = document.createTextNode(`task: ${myInput.value}`);

    listElement.replaceChild(newTtaskTextNode, taskTextNode);
  });

  listElement.appendChild(taskTextNode);
  dateParagraph.appendChild(dateTextNode);

  listElement.append(dateParagraph);
  listElement.append(editbtn);
  listElement.append(deletebtn);
  uList.appendChild(listElement);
  todoForm.style.display = "none";
}

function deleteTodo(key) {
  console.log(todos);
  let index = todos.indexOf(key);
  delete todos[index];
  console.log(todos);
}

function editTodo(todoId, newValue) {
  myInput.value = newValue;
}
