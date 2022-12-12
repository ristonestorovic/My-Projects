class Person {
  constructor(firstname, lastName) {
    this.firstname = firstname;
    this.lastName = lastName;
  }
  fulname() {
    return "Hello" + " " + this.firstname + " " + this.lastName
  }
}

var a = new Person("Risto", "Nestorovic")
var b = new Person("Bogdan", "Nestorovic")

console.log("Hello" + " " + a.firstname);
console.log("Hello" + " " + b.firstname);
let fullname = b.fulname()
console.log(fullname);


//==============================================

class Vehicle {
  constructor(color, currentSpeed, maxSpeed){
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }

  move(){
    console.log('moving at ' , this.currentSpeed);
  }

  acceletare(amount){
    this.currentSpeed += amount
  } 
}

class Motorcycle extends Vehicle {
  constructor( color, currentSpeed, maxSpeed,fuel){
    super( color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }

  doWheelie() {
    console.log("Driving on the wheeal!");
  }
}


let motor = new Motorcycle( "black",0, 250, "Gasoline" )
console.log(motor.color);
motor.acceletare(100);
motor.move()
console.log(motor.fuel);

console.log(motor.currentSpeed);

//==================================== 7.3 

class Animal {
  constructor(species, sounds){
    this.species = species;
    this.sounds = sounds;
  }
  speak(){
    console.log(this.species + " " + this.sounds);
  }
}

Animal.prototype.eat = function (){
  return this.species + " is eating.";
}

let cat = new Animal("cat", "meow");
let dog = new Animal("dog","bark");

cat.speak()
dog.speak()

console.log(dog.eat());
console.log(dog);

//=========================== app for employers

class Employee {
  constructor( first, last, years){
    this.first = first;
    this.last = last;
    this.years = years;
  }
}

const person1 = new Employee("Risto", "Nestorovic", 10);
const person2 = new Employee("Bogdan", "Nestorovic", 11);
const workers = [person1, person2];

Employee.prototype.details = function () {
  return this.first + ' ' + this.last + ' ' + 'has worked here' + ' ' + this.years + ' ' + 'years'
}

workers.forEach((person) => {console.log(person.details());})


//============================ calculator for items price

class Menu {
  #offer1 = 10;
  #offer2 = 20;
  constructor(val1, val2){
    this.val1 = val1;
    this.val2 = val2;
  }
  calTotal(){
    return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
  }
  getTotal(){
    return this.calTotal()
  }
}

const val1 = new Menu(2,0)
const val2 = new Menu(1,3)
const val3 = new Menu(3,2)

console.log(val1.getTotal());
console.log(val2.getTotal());
console.log(val3.getTotal());