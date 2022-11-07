const inputNumber = Number(prompt("Put some number for check..."));
const number = 100;

if (inputNumber > 100){
  console.log("The number you entered is higher than 100 !");
} else if ( inputNumber === 100) {
  console.log("The number you entered is equal to 100 !");
} else {
  console.log(" The number you entered is less than 100 ! ");
}