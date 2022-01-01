const todoContainer = document.getElementById("todo-container");
const todoForm = todoContainer.querySelector(".todo-form");
const todoList = todoContainer.querySelector(".todo-list");

const TODO_KEY = "TODO_KEY";
let todoStorage = [];

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoStorage));
}

function paintTodo(todoObject) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = todoObject.content;
  button.textContent = "X";
  li.appendChild(span);
  li.appendChild(button);
  li.id = todoObject.id;

  todoList.appendChild(li);
}

function onSubmitTodo(event) {
  event.preventDefault();
  const newTodo = document.getElementById("todoInput");
  const newTodoObject = {
    content : newTodo.value,
    id : Date.now()
  }
  newTodo.value = "";
  todoStorage.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodo();
}

todoForm.addEventListener("submit", onSubmitTodo);

// remove todo
todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.parentNode;
    todoStorage = todoStorage.filter(el => el.id !== parseInt(li.id));
    li.remove();
    saveTodo();
  }
})

const todoData = localStorage.getItem(TODO_KEY);

if (todoData) {
  let todoObjects = JSON.parse(todoData);
  todoStorage = todoObjects;
  todoStorage.forEach(paintTodo);
}