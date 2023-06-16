$(document).ready(function(){

  function addTask() {
    var taskInput = $('#task-input');
    var taskList = $('#task-list');

    if(taskInput.val().trim() !== ''){
      var taskItem = $('<li>').addClass('list-group-item d-flex align-items-center');
      var checkbox = $('<input>').attr('type', 'checkbox').addClass('form-check-input me-2');
      checkbox.on('change',function(){
        if($(this).is(':checked')){
          taskItem.addClass('text-muted text-decoration-line-through');
        }else{
          taskItem.removeClass('text-muted text-decoration-line-through');
        }
      })

      var taskText = $('<span>').text(taskInput.val()).addClass('flex-grow-1');
      var removeButton = $('<button>').text('Remove').addClass('btn btn-danger btn-sm');
      removeButton.on('click', function() {
        taskItem.remove();
      });

      taskItem.append(checkbox, taskText, removeButton);
      taskList.append(taskItem);
    }
  }
  $('#add-task-button').click(function() {
    addTask();
  });
})
