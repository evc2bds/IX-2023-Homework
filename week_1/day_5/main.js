class Task {
    constructor(taskName, completed) {
        this.taskName = taskName;
        this.completed = completed;
    }

    static fromJSON(json) {
        return new Task(json.taskName, json.completed);
    }

    toggle() {
        this.completed = !this.completed;
    }
}
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.taskName = document.getElementById('taskName');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (this.taskName.value == '') {
        return;
      }
  
      const task = new Task(this.taskName.value, false);
  
      this.tasks.push(task);
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
  
      this.taskName.value = '';
    }
  
    renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTaskTableRow(task) {
      const tr = document.createElement('tr');
  
      const tdTaskName = document.createElement('td');
      const tdCompleted = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdTaskName.innerHTML = task.taskName;

      const complete = document.createElement("input");
      complete.type = "checkbox";
      complete.className = "text-center form-check-input";
      if (task.completed) {
        complete.checked = true;
      }
      complete.addEventListener("change", () => this.onCompleteTaskClicked(task));
      tdCompleted.appendChild(complete);

  
      const actionButtons = this.createActionButtons(task);
      tdActions.appendChild(actionButtons[0]);
      tdActions.appendChild(actionButtons[1]);
  
      tr.appendChild(tdTaskName);
      tr.appendChild(tdCompleted);
      tr.appendChild(tdActions);
  
      return tr;
    }
  
    createActionButtons(task) {
      const deleteButton = document.createElement('button');
      const editButton = document.createElement('button');
  
      deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () =>
        this.onRemoveTaskClicked(task)
      );
  
      editButton.setAttribute('class', 'btn btn-warning btn-sm ms-2');
      editButton.innerHTML = 'Edit';
      editButton.addEventListener('click', () => this.onEditTaskClicked(task));
  
      return [deleteButton, editButton];
    }

    onCompleteTaskClicked(task) {
        this.loadTasksFromLocalStorage;
        this.tasks = this.tasks.filter((x) => {
            return task.completed !== x.completed;
          });

    }
  
    onRemoveTaskClicked(task) {
      this.tasks = this.tasks.filter((x) => {
        return task.taskName !== x.taskName;
      });
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
    }
  
    onEditTaskClicked(task) {
      this.tasks = this.tasks.filter((x) => {
        return task.taskName !== x.taskName;
      });
  
      this.taskName.value = task.taskName;
      this.completed.value = task.completed;
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
    }
  
    saveTasksToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }
  
    loadTasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map((x) => Task.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();