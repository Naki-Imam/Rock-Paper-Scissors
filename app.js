let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let userArea = document.querySelector("#play-user");
let compArea = document.querySelector("#play-comp");
let comp = "rock";
let user = "";
let compScore = document.querySelector("#comp-score");
let userScore = document.querySelector("#user-score");
let array = ["rock", "paper", "scissors"];
let board = document.querySelector("#result");

let computer = (inp) => {
  console.log(inp);
  if (inp === "rock") {
    compArea.innerHTML =
      '<img src="rock.png" alt="" id="comp-rock" style="position: relative; left: 10% " class="image"/>';
    comp = "rock";
  } else if (inp === "paper") {
    compArea.innerHTML =
      '<img src="paper.png" alt="" id="comp-paper" class="image" />';
    comp = "paper";
  } else {
    compArea.innerHTML =
      '<img src="scissors.png" alt="" id="comp-scissors" style="position: relative; left: 10% " class="image" />';
    comp = "scissors";
  }
};

let compare = (user, comp) => {
  if (user === comp) {
    board.style.backgroundColor = "#111d4a97";
    board.style.color = "white";
    return "It's a tie!";
  } else if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    userScore.innerHTML++;
    board.style.backgroundColor = "#14CC60";
    board.style.color = "black";
    return "You wins!";
  } else {
    compScore.innerHTML++;
    board.style.backgroundColor = "#A30000";
    board.style.color = "white";
    return "Computer wins!";
  }
};

rockButton.addEventListener("click", () => {
  userArea.innerHTML =
    '<img src="rock.png" alt="" id="user-rock" style="position: relative; left: -10%;" class="image"/>';
  user = "rock";
  comp = randomizer();
  console.log(comp);
  computer(comp);
  let result = compare(user, comp);
  board.innerHTML = result;
});
paperButton.addEventListener("click", () => {
  userArea.innerHTML =
    '<img src="paper.png" alt="" id="user-rock" class="image"/>';
  user = "paper";
  comp = randomizer();
  computer(comp);
  let result = compare(user, comp);
  board.innerHTML = result;
});
scissorsButton.addEventListener("click", () => {
  userArea.innerHTML =
    '<img src="scissors.png" alt="" id="user-rock" class="image"/>';
  user = "scissors";
  comp = randomizer();
  computer(comp);
  let result = compare(user, comp);
  board.innerHTML = result;
});

let randomizer = () => {
  let indx = Math.floor(Math.random() * 3);
  comp = array[indx];
  return comp;
};
