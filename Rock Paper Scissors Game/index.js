let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genCompChoice = () =>
{
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => 
{
  msg.innerText = "Game Draw ! Play Again...";
  msg.style.backgroundColor = "#04172e";
}

const showWinner = (userWin, userChoice, compChoice) =>
{
  if(userWin)
  {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `I WON...! MY ${userChoice} beats YOUR ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else
  {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `I LOST. YOUR ${compChoice} beats MY ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => 
{
  const compChoice = genCompChoice();

  if(userChoice === compChoice)
  {
    drawGame();
  }
  else
  {
    let userWin = true;
    if(userChoice === "rock")
    {
      userWin = compChoice === "paper" ? false : true; 
    }
    else if(userChoice === "paper")
    {
      userWin = compChoice === "scissors" ? false : true; 
    }
    else
    {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
  
}

choices.forEach((choice) => 
{
  choice.addEventListener("click", () => 
  {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
