"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2015);

// protoypes
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

jonas.calcAge();

// Code Challenge 1
// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.acceleration = function () {
//   this.speed += 10;
//   console.log(`${this.make} speed increased : ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} speed decreased : ${this.speed}`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.acceleration();
// bmw.acceleration();
// bmw.brake();
// mercedes.brake();
// mercedes.brake();

// console.log(bmw);
// console.log(mercedes);

// class Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a valid name`);
//   }

//   get fullName(){
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl("Jessica Davis", 1996);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// getter and setter

const account = {
  owner: "jonas",
  movement: [200, 530, 120],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

// console.log(account.latest);

// Object create class
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();

// Code Challenge 2

class Car {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  acceleration() {
    this.speed += 10;
    console.log(`${this.make} speed increased : ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed decreased : ${this.speed}`);
  }
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("Ford", 120);
console.log(ford.speedUs);
ford.acceleration();
ford.acceleration();
ford.brake();
ford.speedUs = 50;
console.log(ford);
