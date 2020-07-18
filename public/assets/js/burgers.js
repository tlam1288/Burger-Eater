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

  $(".change-devoured").on("click", function () {
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");

    const newDevouredState = { value: devoured };

    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",

      data: JSON.stringify(newDevouredState),

      contentType: "application/json; charset=UTF-8",
    }).then(() => {
      location.reload();
    });
  });
});
