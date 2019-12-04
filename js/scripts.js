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

  $("form#list").submit(function(e) {
    e.preventDefualt();
    var newTask = $("input#work").val();

    var newListItem = new Tasks(newTask);

    $("ol#tasks").append("<li>" + newListItem.newTask + "</li>");
    // Doesn't add new list item. just resets page.
  })
})
