$(document).ready(function () {
  function addTask() {
    var taskInput = $("#task-input");
    var taskList = $("#task-list");

    if (taskInput.val().trim() !== "") {
      var taskItem = $("<li>").addClass("task-item");
      var checkbox = $("<input>").attr("type", "checkbox");
      checkbox.on("change", function () {
        if ($(this).is(":checked")) {
          taskItem.addClass("completed");
        } else {
          taskItem.removeClass("completed");
        }
      });

      var taskText = $("<span>").text(taskInput.val());
      var removeButton = $("<button>").text("Remove");
      removeButton.on("click", function () {
        taskItem.remove();
      });

      taskItem.append(checkbox, taskText, removeButton);
      taskList.append(taskItem);
      taskInput.val("");
    }
  }

  $("#add-task-button").click(function () {
    addTask();
  });
});
