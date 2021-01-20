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
    const trustChoice = $("input:radio[name=trust]:checked").val();
    const seasonChoice = $("#season").val();
    const coinAmount = parseInt($("#coins").val());
    const distance = Math.floor(parseInt($("#mcdonalds").val()));
    const genre = $("#music").val();

    if (trustChoice === "tiger" && seasonChoice === "Autumn" && genre === "hip-hop" || coinAmount > 100 && distance <= 5) {
      $("#c-sharp").show();
    } else if (trustChoice === "carole" && seasonChoice === "Summer" || coinAmount <= 10 && genre === "classical" || coinAmount <= 10 && genre === "Classical") {
      $("#python").show();
    } else {
      $("#swift").show();
    }
  });
});