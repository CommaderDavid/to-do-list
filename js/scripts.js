// Back end
function toDoList() {
  this.tasks = [];
  this.id = 0;
}

toDoList.prototype.addTask = function(newTask) {
  newTask.id = this.assignId();
  this.tasks.push(newTask);
}

toDoList.prototype.assignId = function() {
  this.id += 1;
  return this.id;
}

toDoList.prototype.findTask = function(id) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

toDoList.prototype.deleteTask = function(id) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

function Task(description) {
  this.description = description;
  this.complete = false;
}

Task.prototype.Complete = function() {
  if (this.completed == "Not Finished") {
    this.completed = "Task Complete"
  } else {
    this.completed = "Not Finished"
  }
}
// Front end
$(document).ready(function() {
  var user = prompt("Please enter your name", "Name Here");
  if (user == null || user == "") {
    $("#user").append("User");
  } else {
    $("#user").append(user);
  }
  var newList = new toDoList()

  $("form#list").submit(function(e) {
    e.preventDefault();
    $("#tasks").empty();

    var listItem = $("input#work").val();
    var newListItem = new Task(listItem);

    newList.addTask(newListItem);
    console.log(newListItem);

    newList.tasks.forEach(function(item) {
      $("#tasks").append("<li value="+ item.id +">" + item.description + "<span class='complete'> Complete</span><span class='delete'> Delete</span>" + "</li>");
      // this takes an element from the array and displays it with a complete and delete span.
    })
    $(".complete").click(function() {
      console.log($(this).parent().val(), "complete");
    })
    $(".delete").click(function() {
      console.log($(this).parent().val(), "delete");
    })
  })
  // $("ol#tasks").append("<li>" + newListItem.newTask + "</li>");
  // Old method not good for working on arrays.
})
