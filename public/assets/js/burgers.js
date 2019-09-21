// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(document).on("click", ".change-devoured",function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var innerText = $(this).text().trim();
    console.log(innerText);
    // var newDevoured = Boolean($(this).data("devoured"));
    // ret changing devoured to 1 and then 0 or true false?
    var newDevouredState = {
      devoured: 1
    };
    if(innerText !== 'Delete Burger'){
    // Send the PUT request.
    $.ajax({
      url: "/api/burgers/" + id,
      type: "PUT",
      data: newDevouredState
    }).then(
      function (data) {
        // Reload the page to get the updated list
        location.reload();
      }
    ).catch(err => console.log(err));
    }
    else {
      $.ajax({
        url: "/api/burgers/" + id,
        type: "DELETE"
      }).then(
        function (data) {
          // Reload the page to get the updated list
          location.reload();
        }
      ).catch(err => console.log(err));
    }
  });

  $(".create-form").on("click", function (event) {
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
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-burger").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  //   });
  
});


