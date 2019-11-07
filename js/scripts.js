

var currentTurn = "X"


var changeTurn = function(){
  if (currentTurn === "X"){
    currentTurn = "O"
  } else if (currentTurn === "O"){
    currentTurn = "X"
  }
  }

$(document).ready(function(){
$(".card").click(function(){
  
  $(this).html("<h2>" + currentTurn + "</h2>")
  changeTurn();
})
});
