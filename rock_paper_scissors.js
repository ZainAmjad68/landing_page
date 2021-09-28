console.log("I come to the JS file");

function play() {
  let i = 0;
  console.log("Let the Game Begin!");
  while (i < 5) {
    let playerTurn = prompt("Enter Rock, Paper or Scissor:");
    makeATurn(playerTurn);
    i++;
  }
}

function makeATurn(playerTurn) {
  let possible = ["rock", "paper", "scissor"];
  let item = possible[Math.floor(Math.random() * possible.length)];

  if (playerTurn === "rock") {
    playerTurn = 0;
  } else if (playerTurn === "paper") {
    playerTurn = 1;
  } else if (playerTurn === "scissor") {
    playerTurn = 2;
  }

  if (item === "rock") {
    item = 0;
  } else if (item === "paper") {
    item = 1;
  } else if (item === "scissor") {
    item = 2;
  }

  var resultMap = Array.from(Array(3), () => new Array(3));
  resultMap[0][0] = 0;
  resultMap[0][1] = 1;
  resultMap[0][2] = 2;
  resultMap[1][0] = 2;
  resultMap[1][1] = 0;
  resultMap[1][2] = 1;
  resultMap[2][0] = 1;
  resultMap[2][1] = 2;
  resultMap[2][2] = 0;

  let result = resultMap[item][playerTurn]
    ? 1
    : "Player"
    ? 2
    : "Computer"
    ? 0
    : "Tie";

  console.log("The Winner is: ", result);
}

let button = document.querySelector("#rpc");
button.addEventListener("click", play);
