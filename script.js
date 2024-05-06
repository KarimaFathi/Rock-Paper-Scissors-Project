function getComputerChoice (){  
    let textArray =['rock','paper','scissor'];
    let randomIndex = Math.floor(Math.random() * textArray.length); 
    let randomElement = textArray[randomIndex];
    return randomElement;
}

let countLose =0;
let countWin = 0;
let countRound = 0;

    const btnRock = document.createElement('button');
    const btnScissor = document.createElement('button');
    const btnPaper = document.createElement('button');

    btnRock.textContent= "rock";
    btnRock.className = "playerSelectionBtn"
    btnScissor.textContent= "scissor";
    btnScissor.className = "playerSelectionBtn"
    btnPaper.textContent= "paper";
    btnPaper.className = "playerSelectionBtn"
    const body = document.querySelector("body");
    body.appendChild(btnRock);
    body.appendChild(btnPaper);
    body.appendChild(btnScissor);

    const elements = document.querySelectorAll(".playerSelectionBtn");
    
    elements.forEach((btn)=>{
      btn.style.display = "block";
      btn.addEventListener("click",playRound);
    })

    function playRound(e) {
 
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.textContent;
    const gameOutput = document.createElement("div");
    if (computerSelection===playerSelection) {
    gameOutput.textContent ='draw';
    } else if (
    (playerSelection === 'rock' && computerSelection === 'scissor') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
    countWin++;
    gameOutput.textContent ='win';
    } else {
    countLose++;
    gameOutput.textContent ='lose';     
    }
    body.appendChild(gameOutput);
    countRound++
    if (countRound % 5 === 0) {
        const finalGameOutput = document.createElement("div");
        if(countWin > countLose){
            finalGameOutput.textContent ='you win finaly';
        } else if (countWin < countLose) {
            finalGameOutput.textContent ='You lose unfortunatly!';
        } else {
            finalGameOutput.textContent ='no one is the winner';
        }
        body.appendChild(finalGameOutput);
        countWin = 0;
        countLose = 0;
        // elements.forEach((btn) => {
        //     btn.removeEventListener("click", playRound);
        //   });
        }
       
}
// function playGame(){
//     // while(countLose + countWin != 5){
//     const ComputerSelection = getComputerChoice();
//     const PlayerSelection = prompt().toLowerCase();
//     playRound(ComputerSelection, PlayerSelection);
//     // }
//       if(countWin > countLose){
//         alert("Yey U Win !");
//       }
//       else {
//         alert("You lose unfortunatly!");
//       }  
//     }    
     
// playGame();
