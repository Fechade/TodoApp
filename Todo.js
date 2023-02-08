let todos = [];

class storage {
  //implement storage here
}

class Events {
}

class Todo {
  constructor(title, done) {
    (this.title = title), (this.done = done);
  }

  getTitle = () => this.title;
  setTitle = (val) => this.title;

  getDone = () => this.done;
  setDone = (val) => this.done;
}

function createTodo(title, done) {
  const newTodo = new Todo(title, done);
  todos = [newTodo];
  console.log(newTodo.getTitle());
}

function displayTodos() {
  for (let i = 0; i < todos.length; i++) {
    const todoDiv = document.createElement("div");
    const checkMark = document.createElement("input");
    const deleteTodo = document.createElement("button");

    checkMark.type = "checkbox";
    deleteTodo.textContent = "Delete";

    deleteTodo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.removeChild(todoDiv);
    });

    todoDiv.textContent = todos[i].getTitle();

    todoDiv.appendChild(checkMark);
    todoDiv.appendChild(deleteTodo);
    document.body.appendChild(todoDiv);
  }
}

function addTask() {
  const addTask = document.createElement("button");
  const todoForm = document.createElement("form");
  const todoTitle = document.createElement("input");
  const addBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  addTask.textContent = "Add Task";

  addTask.addEventListener("click", (e) => {
    e.preventDefault();
    todoForm.style.display = "block";
    addTask.style.display = "none";
  });

  addBtn.textContent = "Add"

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createTodo(todoTitle.value);
    displayTodos();
    todoForm.style.display = "none";
    addTask.style.display = "block";
    todoForm.reset();
  });

  cancelBtn.textContent = "Cancel";

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    todoForm.style.display = "none";
    addTask.style.display = "block";
  });

  todoForm.append(todoTitle, addBtn, cancelBtn);
  document.body.append(todoForm);

  return addTask;
}

document.body.appendChild(addTask());