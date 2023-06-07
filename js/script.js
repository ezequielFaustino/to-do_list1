// selecao de elementos
const todoForm = document.querySelector("#todo-form");
const formInput = document.querySelector("#form-input");
const todo = document.querySelector("#todo");
const finishButton = document.querySelector(".todo-finish-btn");


// Funcoes
function saveTodo(inputValue) {
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  const todoListTitle = document.createElement("h3");
  todoListTitle.innerText = inputValue;

  todoList.appendChild(todoListTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("btn");
  doneBtn.classList.add("finish-btn");
  doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
  todoList.appendChild(doneBtn);

  // adicionar a lista de tarefas
  todo.appendChild(todoList);

  formInput.value = "";
  formInput.focus();

}

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = formInput.value

  if(inputValue) {
    saveTodo(inputValue)
  }
});

document.addEventListener("click", (e) => {
  const targetElement = e.target;
  const parentElement = targetElement.closest("div"); // pega o parente mais proximo do elemento

  if(targetElement.classList.contains("finish-btn")) {
    parentElement.classList.toggle("done");
  }
})
