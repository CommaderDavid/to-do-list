// Back end
function Tasks(newTask) {
  this.newTask = newTask;
}
// Front end
$(document).ready(function() {
  var user = prompt("Please enter your name", "Name Here");
  if (user == null || user == "") {
    $("#user").append("User");
  } else {
    $("#user").append(user);
  }

})
