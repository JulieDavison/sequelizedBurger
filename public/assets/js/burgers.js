// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = Boolean($(this).data("devoured"));
    console.log('Here is our id', id);
    // ret changing devoured to 1 and then 0 or true false?
    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax({
      url: "/api/burgers/" + id,
      type: "PUT",
      data: newDevouredState
    }).then(
      function(data) {
        console.log("changed devoured to", data);
        // Reload the page to get the updated list
        //location.reload();
      }
    ).catch(err => console.log(err));
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgername: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
