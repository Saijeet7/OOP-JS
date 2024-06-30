"use strict";

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person("Jonas", 1991);
// const matilda = new Person("Matilda", 2015);

// // protoypes
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// jonas.calcAge();

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

// const account = {
//   owner: "jonas",
//   movement: [200, 530, 120],

//   get latest() {
//     return this.movement.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

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

// class Car {
//   constructor(make, speed) {
//     this.speed = speed;
//     this.make = make;
//   }

//   acceleration() {
//     this.speed += 10;
//     console.log(`${this.make} speed increased : ${this.speed}`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} speed decreased : ${this.speed}`);
//   }
//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car("Ford", 120);
// console.log(ford.speedUs);
// ford.acceleration();
// ford.acceleration();
// ford.brake();
// ford.speedUs = 50;
// console.log(ford);

//////////////////////// Inheritance between "Classes" : Constructors\

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // protoypes
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2000, "Computer Science");

// console.log(mike);
// mike.introduce();
// mike.calcAge();

// Code Challenge 3
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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV("Tesla", 120, 23);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// console.log(tesla);

//////////////////////// Inheritance ES6 classes
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

//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log("Hey there!!");
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2024 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2024 - this.birthYear + 10
//       }.`
//     );
//   }
// }

// const martha = new StudentCl("Martha Jones", 2002, "Computer Science");

// console.log(martha.fullName);
// martha.introduce();
// martha.calcAge();

// Another Classes

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     // protected
//     this._movements = [];
//     this.local = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   getMovements() {
//     return this._movements;
//   }

//   // Public Interface
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account("Jonas", "Eur", 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

// console.log(acc1);

// ///////////// Challenge 4

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

class EVCL extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`
    );
  }
}

const tesla = new EVCL("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);
