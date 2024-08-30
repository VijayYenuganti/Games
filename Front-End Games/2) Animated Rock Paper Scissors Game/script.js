const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const tiePoints = document.querySelector(".tiePoint")
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "images/player_images/" + option.innerHTML + "player.png";

      const choices = ["Rock", "Paper", "Scissors"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choices[arrayNo];
      computer.src = "images/computer_images/" + computerChoice + "computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);
      let tPoints = parseInt(tiePoints.innerHTML)

      if (option.innerHTML === "Rock") {
        if (computerChoice === "Paper") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "Scissors") {
          playerPoints.innerHTML = pPoints + 1;
        } else {
          tiePoints.innerHTML = tPoints + 1;
        }
      } else if (option.innerHTML === "Paper") {
        if (computerChoice === "Scissors") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "Rock") {
          playerPoints.innerHTML = pPoints + 1;
        } else {
          tiePoints.innerHTML = tPoints + 1
        }
      } else if (option.innerHTML === "Scissors") {
        if (computerChoice === "Rock") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "Paper") {
          playerPoints.innerHTML = pPoints + 1;
        } else {
          tiePoints.innerHTML = tPoints + 1
        }
      }
    }, 900);
  });
});
