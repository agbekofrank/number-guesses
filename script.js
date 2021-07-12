let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  const randNum = Math.floor(Math.random() * 10);
  return randNum;
}
const compareGuesses = (hG, cG, sN) => {
  return Math.abs(cG - sN)  < Math.abs(hG - sN) ? false : true;  
}
let updateScore = () => {
  if(compareGuesses()){
    humanScore += 1;
  }else{
    computerScore += 1;
  }
};
let advanceRound = () => {currentRoundNumber +=1 }



