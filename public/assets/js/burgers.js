$(() => {
  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $(".delete-burger").on("click", function () {
    const id = $(this).data("id");

    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
    }).then(() => {
      location.reload();
    });
  });
});
