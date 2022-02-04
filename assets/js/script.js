//alert email button
function email() {
  alert("El correo fue enviado correctamente...");
}
//tooltip activate
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function() {
  var toggle = true; // Toggle state
  $("h3").on({
    dblclick: function() {
      if (toggle) {

        // Change color to red
        $(this).css("color", "red");
        toggle = false;
      } else {

        // Change color to default
        $(this).css("color", "#373a3c");
        toggle = true;
      }
    }
  });
});

//Desaparecer y aparecer card-body
$("#card1").click(function() {
  $("#crb1").toggle("slow", function() {
    // Animation complete.
  });
});

$("#card2").click(function() {
  $("#crb2").toggle("slow", function() {
    // Animation complete.
  });
});

$("#card3").click(function() {
  $("#crb3").toggle("slow", function() {
    // Animation complete.
  });
});
