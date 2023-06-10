
function addTask() {
  var taskInput = document.getElementById('task-input');
  var taskList = document.getElementById('task-list');

  if (taskInput.value.trim() !== '') {
    var taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        taskItem.classList.add('completed');
      } else {
        taskItem.classList.remove('completed');
      }
    });

    var taskText = document.createElement('span');
    taskText.innerText = taskInput.value;

    var removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}
