// Back end
function toDoList() {
  this.tasks = [];
  this.currentId = 0;
}

toDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

toDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Task(description) {
  this.description = description;
}

// toDoList.prototype.deleteTasks = function(id) {
//   for (var i = 0; i < this.tasks.length; i++) {
//     if (this.tasks[i]) {
//       if (this.tasks[i].id == id) {
//         delete this.tasks[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }
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
    var newTask = $("input#work").val();
    var newListItem = new Task(newTask);
    newList.addTask(newListItem);
    console.log(newList);
    newList.tasks.forEach(function(item) {
      $("#tasks").append("<li>" + item.description + "</li>");
    })
  })
  // $("ol#tasks").append("<li>" + newListItem.newTask + "</li>");
  // Old method not good for working on arrays.

  // $(".objectives").click(function() {
  //   if (confirm("Remove this Task?")) {
  //     newList.deleteTasks(newListItem);
  //     // $("#tasks").remove()
  //   }
  // })
})
