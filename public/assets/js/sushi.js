// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-fresh").on("click", function(event) {
    var id = $(this).data("id");
    var newFresh = $(this).data("newfresh");

    var newFreshState = {
      fresh: newFresh
    };

    // Send the PUT request.
    $.ajax("/api/sushi/" + id, {
      type: "PUT",
      data: newFreshState
    }).then(
      function() {
        console.log("changed fresh to", newFresh);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSushi = {
      name: $("#ca").val().trim(),
      fresh: $("#freshness").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/sushi", {
      type: "POST",
      data: newSushi
    }).then(
      function() {
        console.log("created new sushi");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
