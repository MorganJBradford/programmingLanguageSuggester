$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    event.preventDefault();
    const name = $("input#userName").val();
    const concatName = ", ".concat(name);
    $(".userName").text(concatName);
    $("#userInfo").hide();
  });
  $("#quiz").submit(function(event) {
    event.preventDefault();
    $("#c-sharp, #python, #swift").hide();
    const trustAndSeasonChoice = parseInt($("input:radio[name=trust]:checked").val()) + parseInt($("#season").val());
    const coinAmount = parseInt($("#coins").val());
    const distance = Math.floor(parseInt($("#mcdonalds").val()));
    const genre = $("#music").val();

    if (trustAndSeasonChoice >= 4  & coinAmount < 50 || coinAmount > 50 && distance <= 5) {
      $("#c-sharp").show();
    } else if (trustAndSeasonChoice <= 6 & distance > 5  || coinAmount <= 20 && genre === "classical" || coinAmount <= 10 && genre === "Classical") {
      $("#python").show();
    } else {
      $("#swift").show();
    }
  });
});