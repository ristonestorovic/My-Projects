const secretMes1 = "How's%20it%20going%3F";
const secretMes2 = "How's it going?";
const decodedComp = decodeURIComponent(secretMes1)
console.log(decodedComp);
const encodedComp = encodeURIComponent(secretMes2)
console.log(encodedComp);
const uri = "http://www.basescripts.com?=Hello World";
const encoded = encodeURI(uri)
console.log(encoded);

//============================8.2

const arr = ["Laurence", "Mike", "Laurence", "Lary", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"]

const arr2 = arr.filter((value, index, array) => {
  console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
})

console.log(arr2);

//===============================8.3
const myArr = [1, 3, 5, 4]
const myArr1 = myArr.map(function (num) {
  return num * 2;
});
console.log(myArr1);

const myArr2 = myArr.map(num => num * 2)
console.log(myArr2);

//================================8.4

const val = "thIs will be capiTalized for each word";
function wordCaps(str) {
  str = str.toLowerCase();
  const tempArr = [];
  let words = str.split(" ");
  words.forEach(word => {
    let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
    tempArr.push(temp)
  });
  return tempArr.join(" ")
}

console.log(wordCaps(val));

//================================ 8.5

let val123 = " I love JavaScript";
val123 = val123.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((letter, index) => {
  console.log(letter);
  val123 = val123.replaceAll(letter, index)
})

console.log(val123);

//=================================8.6

console.log(Math.PI);
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.random());
console.log(Math.floor(Math.random() * 11)); // 0-10
console.log(Math.floor(Math.random() * 10) + 1) // 1-10
console.log(Math.floor(Math.random() * 100) + 1) // 1-100

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let x = 0; x < 20; x++){
  console.log(randomNumber(1,100));
}
//======================================

const date = new Date()

console.log("Day of week: ", date.getDay());
console.log("Day of month: ", date.getDate());
console.log("Month", date.getMonth());
console.log("Year", date.getFullYear());

//======================================== 8.7

let future = new Date(2025, 5, 15)
console.log(future);
const months = [" Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Avg", "Sep", "Oct", "Nov", "Dec"];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();

let myDate = `${months[month -1]}  ${day} ${year}`
console.log(myDate);