
 const winOrLose = (myChoice, computerChoice) => {
  setDraw(false);
  (myChoice === "Scissors" && computerChoice === "Paper") ||
  (myChoice === "Paper" && computerChoice === "Rock") ||
  (myChoice === "Rock" && computerChoice === "Scissors")
    ? setPlayerScore((playerScore) => playerScore + 1)
    : setComputerScore((computerScore) => computerScore + 1);
};


function App() {
  import React, { useState } from "react";

  const generateComputerChoice = () => {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    return randomElement;
  };

 
  import "./App.css";


  <button onClick={() => drawOrNot("Rock")}>Rock</button>
      <button onClick={() => drawOrNot("Paper")}>Paper</button>

 

  return (
    <div className="App">
            <button onClick={() => drawOrNot("Scissors")}>Scissors</button>
      <p>Player Score: {playerScore}</p>
      <p>Computer Score: {computerScore}</p>
      {draw && <p>It's a draw</p>}


      const drawOrNot = (myChoice) => {
    const computerChoice = generateComputerChoice();
    computerChoice === myChoice
      ? setDraw(true)
      : winOrLose(myChoice, computerChoice);
  };

    </div>
  );
}

export default App;

const [playerScore, setPlayerScore] = useState(0);
const [computerScore, setComputerScore] = useState(0);
const [draw, setDraw] = useState(false);
const elements = ["Rock", "Paper", "Scissors"];
