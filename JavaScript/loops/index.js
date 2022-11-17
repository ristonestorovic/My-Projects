let counter = 0;
let step = 10


do {
  console.log("COUNTER :" + counter);
  counter += step;
} while (counter < 100)

// ======================================

let myWork = []
for (let x = 0; x < 10; x++) {
  let status = x % 2 ? true : false;
  let temp = {
    name: `Lesson ${x}`,
    status: status
  };
  myWork.push(temp)
}

console.log(myWork);

//======================================

let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j)
  }
}

console.table(arrOfArrays);

//======================================

let myTable = [];
let rows = 7;
let columns = 5;
let count = 0;

for (let i = 0; i < rows; i++) {
  let tempTable = [];
  for (let j = 0; j < columns; j++) {
    count++;
    tempTable.push(count)
  }
  myTable.push(tempTable);
}

console.table(myTable)

//=======================================

const grid = [];
const cells = 64;
let counter1 = 0;
let row;

for (let i = 0; i < cells + 1; i++) {
  if (counter1 % 8 == 0) {
    if (row != undefined) {
      grid.push(row)
    }
    row = []
  }
  counter1++;
  let temp1 = counter1;
  row.push(temp1);
}
console.table(grid);

//========================================


const arr = [];

for (let i = 1; i < 11; i++) {
  arr.push(i)
}

for (let number of arr) {
  console.log(number);
}
//=========================================

let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black"
};

let arrKeys = Object.keys(car);
console.log(arrKeys);

for (let i = 0; i < arrKeys.length; i++) {
  console.log(arrKeys[i] + ":" + car[arrKeys[i]]);
}

//=========================================

let output = '';
let skipThis = 7;

for (let i = 0; i < 10; i++) {
  if (i === skipThis) {
    continue;
  }
  output += i
}

console.log(output);

let output2 = '';
let skipThis2 = 7;



for (let i = 0; i < 10; i++) {
  if (i === skipThis2) {
    break;
  }
  output2 += i
}

console.log(output2);

//=========================================]]

const myTable1 = [];
const num = 10;

for (let x = 0; x < num; x++) {
  const temp = []
  for (let y = 0; y < num; y++){
    temp.push( x * y)
  }
  myTable1.push(temp)
}

console.table(myTable1);