const array = ["ROCK", "PAPER", "SCISSORS"]

const player = Number(Math.floor(Math.random()* 3));
const computer = Number(Math.floor(Math.random()* 3));
let message = "Player" + " " + array[player] + " vs computer"+ " " + array[computer] + " "; 

if( player === computer) {
  message += "it's a tie";
} else if ( player > computer) {
  if(computer === 0 && player === 2){
    message += "Computer Wins"
  } else {
    message += "Player Wins"
  }
} else {
  if (computer === 2 && player === 0){
    message += "Player Wins"
  } else {
    message += "Computer Wins"
  }
}

console.log(message)