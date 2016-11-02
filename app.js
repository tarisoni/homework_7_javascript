$(document).ready(function() {

$("#change-red").on("click", function() {
  $("#red-div").css("background-color", "red")

});

$("#change-green").on("click", function() {
  $("#green-div").css("background-color", "green")

});

$("#change-blue").on("click", function() {
  $("#blue-div").css("background-color", "blue")

});

$("#make-big").on("click", function() {
  $("#large-div").css("height", "400px")

});

$("#make-small").on("click", function() {
  $("#small-div").css("height", "200px")

});

$("#animate-div").on("click", function() {
  $("#animated-div").addClass("animate");

});

$("#create-overlay").on("click", function() {
  $("body").html("<div>Overlay!<div>");

});

});
