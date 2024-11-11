document.addEventListener('DOMContentLoaded', () => {
  const newTaskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task');
  const searchTaskInput = document.getElementById('search-task');
  const taskList = document.getElementById('task-list');

  let tasks = [];

  function renderTasks() {
      taskList.innerHTML = '';
      const filteredTasks = tasks.filter(task => 
          task.name.toLowerCase().includes(searchTaskInput.value.toLowerCase())
      );

      filteredTasks.forEach((task, index) => {
          const li = document.createElement('li');
          li.className = task.completed ? 'completed' : '';

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.checked = task.completed;
          checkbox.addEventListener('change', () => toggleTask(index));

          const taskName = document.createElement('span');
          taskName.className = 'task-name';
          taskName.textContent = task.name;

          const editInput = document.createElement('input');
          editInput.type = 'text';
          editInput.className = 'edit-input';
          editInput.value = task.name;
          editInput.style.display = 'none';
          editInput.addEventListener('keyup', (e) => {
              if (e.key === 'Enter') saveEdit(index, editInput.value);
          });

          const editButton = document.createElement('button');
          editButton.className = 'edit';
          editButton.textContent = '✏️';
          editButton.addEventListener('click', () => enableEditMode(li, editInput));

          const saveButton = document.createElement('button');
          saveButton.className = 'save';
          saveButton.textContent = '💾';
          saveButton.style.display = 'none';
          saveButton.addEventListener('click', () => saveEdit(index, editInput.value));

          const deleteButton = document.createElement('button');
          deleteButton.className = 'delete';
          deleteButton.textContent = '🗑️';
          deleteButton.addEventListener('click', () => deleteTask(index));

          li.appendChild(checkbox);
          li.appendChild(taskName);
          li.appendChild(editInput);
          li.appendChild(editButton);
          li.appendChild(saveButton);
          li.appendChild(deleteButton);

          taskList.appendChild(li);
      });
  }

  function addTask() {
      const taskName = newTaskInput.value.trim();
      if (taskName) {
          tasks.push({ name: taskName, completed: false });
          newTaskInput.value = '';
          renderTasks();
      }
  }

  function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
  }

  function enableEditMode(li, input) {
      li.classList.add('editing');
      input.style.display = 'block';
      input.focus();
      li.querySelector('.save').style.display = 'inline-block';
  }

  function saveEdit(index, newName) {
      if (newName.trim()) {
          tasks[index].name = newName.trim();
      }
      renderTasks();
  }

  function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
  }

  addTaskButton.addEventListener('click', addTask);
  newTaskInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') addTask();
  });

  searchTaskInput.addEventListener('input', renderTasks);

  renderTasks();
});
