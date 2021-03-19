//click to consume burger
$(".consume-it").on("click", function(e) {
  e.preventDefault();

  let id = $(this).data("id");
  let consumedBurger = {
    devoured: true
  };

  $.ajax(`/consumeBurger/${id}`, {
    type: "PUT",
    data: consumedBurger
  }).then(function() {
    location.reload();
  });
});

//click to order burger
$("#place-order").on("click", function(e) {
  e.preventDefault();

  let orderedBurger = {
    burger_name: $("#order-burger-name").val()
  }

  $.ajax("/orderBurger", {
    type: "POST",
    data: orderedBurger
  }).then(function() {
    location.reload();
  });
});
