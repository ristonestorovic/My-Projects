const max = 5;
const randomNumber = Number(Math.floor(Math.random() * max) + 1);
console.log(randomNumber);

let correct = false;

while (!correct){
  let guess = Number(prompt("Guess number 1 -" + max));
  if ( guess === randomNumber) {
    correct = true;
    console.log("You got it !!!" + randomNumber);
  } else if ( randomNumber > guess) {
    console.log("Too low ! ");
  } else {
    console.log(("Too high! "));
  }
}