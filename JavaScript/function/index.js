function addNumbers(a, b) {
  return a + b;
}


console.log(addNumbers(2, 5));


//===========================

function getAtribute() {
  const attribute = ["Lep", "Zgodan", "Nasmejan"];
  const randomNum = Number((Math.floor(Math.random() * 3)))
  let name = prompt('enter name')

  console.log(name + " " + "is " + attribute[randomNum]);
}

getAtribute()

//============================

function calculateTwoNumber(x, y, operation) {
  if (operation === "+") {
    console.log(x + y);
  } else if (operation === "-") {
    console.log(x - y);
  } else {
    console.log(x + y);
  }
}


calculateTwoNumber(10, 5, "+")
calculateTwoNumber()

//===================================

const newArray = [];


for (let x = 0; x < 10; x++) {
  let value1 = 5 * x;
  let value2 = x * x;
  let res = calculate(value1, value2, "+")
  newArray.push(res)
}

console.log(newArray);

function calculate(a, b, op) {
  if (op == "-") {
    return a - b
  } else {
    return a + b;
  }
}

//=====================================


(function () {
  let x = "100";
  console.log(x);
})();

let result = (function () {
  let val = "Laurence";
  return val;
})();

console.log(result);

(function (y) {
  console.log(`My name is ${y}`);
})("Risto")

//==========================================

function logRecursive(nr) {
  console.log("Started function: ", nr);
  if (nr > 0) {
    logRecursive(nr - 1)
  } else {
    console.log(" done with recursion");
  }
  console.log("Ended function: ", nr);
}

logRecursive(4)

//==========================================


function getFactoriel(x) {
  if (x == 0) {
    return 1
  } else {
    return x * getFactoriel(--x)
  }
}

console.log(getFactoriel(10));

// ==========================================

let start = 10;

function loop1(val) {
  console.log(val);
  if (val < 1) {
    return
  }
  return loop1(val - 1)
}

loop1(start)

function loop2(val) {
  console.log(val);
  if (val > 0) {
    val--;
    return loop2(val)
  }
  return;
}

loop2(start)

//============================================

function randomInteger(min, max) {
  console.log(Math.floor(Math.random() * (max - min) + 1) + min)
}

randomInteger(1, 5)
randomInteger(1, 1000)

//============================================

const anonimFunc = function (val) {
  console.log(val);
}

anonimFunc("Risto")

function anonimFunc2(val) {
  console.log(val);
}

anonimFunc2("Risto2")

//=============================================

const main = function counter(x) {
  console.log(x);
  if (x < 10) {
    counter(x + 1)
  }
  return;
}

main(2)

//==============================================

const one = () => { console.log('one');}
const two = () => { console.log('two');}
const three = () => {
  console.log('three');
  one();
  two();
}
const four = () => {
  console.log('four');
  setTimeout(one, 0)
  three()
}

four()