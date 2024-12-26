let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".opt"); // Use querySelectorAll to select multiple elements
const msg = document.querySelector("#footer");
const us = document.querySelector(".user");
const cs = document.querySelector(".comp");
const reset = document.querySelector("#reset");

const getCompChoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const draw = () => {
  console.log("game is drawed");
  msg.innerText = "It's a draw";
  msg.style.backgroundColor = "blue";
};
const playgame = (userChoice) => {
  // generate from user
  const computerChoice = getCompChoice();
  console.log(computerChoice, userChoice);

  if (userChoice === computerChoice) {
    draw();
  } else {
    let userwin = true;
    if (userChoice === "Rock") {
      userwin = computerChoice === "Paper" ? false : true;
    } else if (userChoice === "Scissor") {
      userwin = computerChoice === "Rock" ? false : true;
    } else {
      userwin = computerChoice === "Scissor" ? false : true;
    }
    showWinner(userwin);
  }
};

choices.forEach((opt) => {
  opt.addEventListener("click", () => {
    const userChoice = opt.id;
    playgame(userChoice);
  });
});

const showWinner = (userwin) => {
  if (userwin) {
    console.log("you win");
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
    us.innerText++;
  } else {
    console.log("you loss");
    msg.innerText = "You Lose";
    msg.style.backgroundColor = "red";
    cs.innerText++;
  }
};

document.getElementById("reset").addEventListener("click", () => {
  user = 0;
  comp = 0;
  us.innerText = user;
  cs.innerText = comp;
  console.log("clicked");
  msg.innerText = "Scores reset. Let's play!";
});
