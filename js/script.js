var taskList = {
  "tasks": [
    {"name": "Test Task #1", "date": "12/01/2016", "assigned": "John Doe" },
    {"name": "Test Task #2", "date": "12/02/2016", "assigned": "John Doe" },
    {"name": "Test Task #3", "date": "12/03/2016", "assigned": "John Doe" },
    {"name": "Test Task #4", "date": "12/04/2016", "assigned": "Jane Doe" },
    {"name": "Test Task #5", "date": "12/05/2016", "assigned": "Jane Doe" },
    {"name": "Test Task #6", "date": "12/06/2016", "assigned": "Jane Doe" },
    {"name": "Test Task #7", "date": "12/07/2016", "assigned": "Jane Doe" }
  ]
};

var itemId = 0;
var itemCount = 0;

function listTasks() {
  var len = taskList.tasks.length;
  for (i = 0; i <= len - 1; i++) {
    itemId = "itemId"+i;
    document.write("<tr id=\"" + itemId + "\"><td class=\"tbl-strong\">" + taskList.tasks[i].name + " <span class=\"tbl-date\">" + taskList.tasks[i].date + "</span></td><td class=\"tbl-assigned\">" + taskList.tasks[i].assigned + "</td><td><a class=\"remove-item\" id=\"" + itemId + "\" onclick=\"removeTask(" + itemId + ")\"><img src=\"remove-button.png\"></a></td></tr>");
    itemCount = i;
  }
}

function addTask(taskName, taskDate, assignedName) {
  if ((taskName == '') || (taskDate == '') || (assignedName == '')) {
    window.alert('All Fields Required');
  }
  else {
    itemId = "itemId";
    itemCount+=1;
    itemId = itemId + itemCount;
    $("#taskTable").append("<tr id=\"" + itemId + "\"><td class=\"tbl-strong\">" + taskName + " <span class=\"tbl-date\">" + taskDate + "</span></td><td class=\"tbl-assigned\">" + assignedName + "</td><td><a class=\"remove-item\" id=\"" + itemId + "\" onclick=\"removeTask(" + itemId + ")\"><img src=\"remove-button.png\"></a></td></tr>");
    //clear input fields
    $('#newTaskForm').each (function(){
      this.reset();
    });
  }
}

function removeTask(itemId) {
  $(itemId).remove();
}
