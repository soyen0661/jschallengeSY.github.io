const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const inputList = todoForm.querySelector("#todo");
const TODO_KEY = "todo";
const ID_KEY = "id";
let saveTodoList = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(saveTodoList));
}

function delteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  saveTodoList = saveTodoList.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("hidden");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", delteTodo);
  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = inputList.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  inputList.value = "";
  saveTodoList.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleSubmitTodo);

if (localStorage.getItem(TODO_KEY)) {
  saveTodoList.forEach((item) => paintTodo(item));
}
