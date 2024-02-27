function getComputerChoice (){  
    let textArray=['rock','paper','scissor'];
    let randomIndex = Math.floor(Math.random() * textArray.length); 
    let randomElement = textArray[randomIndex];
    return randomElement;
}

let countLose =0;
let countWin = 0;

    function playRound(ComputerSelection,PlayerSelection) {
     if (ComputerSelection===PlayerSelection) {
      alert( 'No one is the winner' );
     } else if (
      (PlayerSelection === 'rock' && ComputerSelection === 'scissors') ||
      (PlayerSelection === 'paper' && ComputerSelection === 'rock') ||
      (PlayerSelection === 'scissors' && ComputerSelection === 'paper')
  ) {
      countWin++;
      alert('win');
  } else {
      countLose++;
      alert('lose');
  }
}
  
function playGame(){
    while(countLose + countWin != 5){
    const ComputerSelection = getComputerChoice();
    const PlayerSelection = prompt().toLowerCase();
    playRound(ComputerSelection, PlayerSelection);
    }
      if(countWin > countLose){
        alert("You Win finally!");
      }
      else {
        alert("You lose unfortunatly!");
      }  
    }    

playGame();
