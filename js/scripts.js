$(document).ready(function() {
  $("#quiz").submit(function(event) {
  event.preventDefault();
  const trustChoice = $("input:radio[name=trust]:checked").val();
  const seasonChoice = $("#season").val();
  const coinAmount = parseInt($("#coins").val());
  const distance = parseInt($("#mcdonalds").val());
  const genre = $("#music").val();
  });
});