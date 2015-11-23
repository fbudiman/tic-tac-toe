var playerOne = [];
var playerTwo = [];
var eachSquare = document.getElementsByClassName("square");
var reset = document.getElementById("reset-button");
var active = true;

var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");

var blueWins = document.getElementById("blue");
var pinkWins = document.getElementById("pink");

function whichSquare(i) {
  (eachSquare[i]).addEventListener("click", function() {selectSquare(eachSquare[i])}, false);
  (eachSquare[i]).addEventListener("mouseover", function() {hoverSquare(eachSquare[i])}, false);
  (eachSquare[i]).addEventListener("mouseout", function() {hoverOutSquare(eachSquare[i])}, false);
  (eachSquare[i]).addEventListener("click", function() {checkWinner(eachSquare[i])}, false);
}

for (var i = 0; i < eachSquare.length; i++) {
    whichSquare(i);
}

function selectSquare(square) {
  if (active) {
    if (square.value == null) {
      if (playerOne.length == playerTwo.length) {
        square.style.backgroundColor="#3399CC";
        playerOne.push(square.id);
        square.value="X";
      } else {
        square.style.backgroundColor="#CC3366";
        playerTwo.push(square.id);
        square.value="O";
      }
    } else {
      alert("Nice try. Pick another square!");
    }
  } else {
    alert("Nice try. We already have a winner!");
  }
}

function hoverSquare(square) {
  if (square.value == null) {
    square.style.backgroundColor="#C8C8C8";
  } else if (square.value == "X") {
    square.style.backgroundColor="#336699";
  } else {
    square.style.backgroundColor="#993366";
  }
}

function hoverOutSquare(square) {
  if (square.value == null) {
    square.style.backgroundColor="#FFFFFF";
  } else if (square.value =="X") {
    square.style.backgroundColor="#3399CC";
  } else {
    square.style.backgroundColor="#CC3366";
  }
}

function checkWinner() {
  if (square1.value == "X" && square2.value == "X" && square3.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square4.value == "X" && square5.value == "X" && square6.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square7.value == "X" && square8.value == "X" && square9.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square1.value == "O" && square2.value == "O" && square3.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square4.value == "O" && square5.value == "O" && square6.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square7.value == "O" && square8.value == "O" && square9.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square1.value == "X" && square4.value == "X" && square7.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square2.value == "X" && square5.value == "X" && square8.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square3.value == "X" && square6.value == "X" && square9.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square1.value == "O" && square4.value == "O" && square7.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square2.value == "O" && square5.value == "O" && square8.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square3.value == "O" && square6.value == "O" && square9.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square1.value == "X" && square5.value == "X" && square9.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square3.value == "X" && square5.value == "X" && square7.value == "X") {
    blueWins.style.color="#3399CC";
    active = false;
  } else if (square1.value == "O" && square5.value == "O" && square9.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square3.value == "O" && square5.value == "O" && square7.value == "O") {
    pinkWins.style.color="#CC3366";
    active = false;
  } else if (square1.value != null && square2.value != null && square3.value != null
            && square4.value != null && square5.value != null && square6.value != null
            && square7.value != null && square8.value != null && square9.value != null) {
    alert("It's a tie!");
    clearBoard();
  }
}

reset.addEventListener("click", clearBoard);
reset.addEventListener("click", clearMessage);

function clearBoard() {
  for (var i in eachSquare) {
    eachSquare[i].style.backgroundColor="#FFFFFF";
    playerOne = [];
    playerTwo = [];
    eachSquare[i].value = null;
    active = true;
  }
}

function clearMessage() {
  blueWins.style.color = "#303030";
  pinkWins.style.color = "#303030";
}
