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
