// Back end
function toDoList() {
  this.tasks = [];
}

function Tasks(newTask) {
  this.newTask = newTask;
}

Tasks.prototype.findTasks = function (id) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].id == id) {
      return this.tasks[i];
    }
  };
  return false;
}
// Front end
$(document).ready(function() {
  var user = prompt("Please enter your name", "Name Here");
  if (user == null || user == "") {
    $("#user").append("User");
  } else {
    $("#user").append(user);
  }

  $("form#list").submit(function(e) {
    e.preventDefault();
    var newTask = $("input#work").val();

    var newListItem = new Tasks(newTask);

    $("ol#tasks").append("<li>" + newListItem.newTask + "</li>");
  })

  $(".objectives").click(function() {
    if (confirm("Remove this Task?")) {
      $("#tasks")
    }
  })
})
