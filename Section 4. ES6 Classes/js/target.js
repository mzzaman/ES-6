// Introduction to JavaScript new.target Meta property;

// Introduction to JavaScript new.target;

// JavaScript new.target in functions;

function Person(name) {
  if (!new.target) {
    throw new Error("Must use new operator with Person");
  }
  this.name = name;
}

let devil = new Person("Devil");
console.log(devil.name);

// JavaScript new.target in constructors;
class People {
  constructor(name) {
    this.name = name;
    console.log(new.target.name);
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

let moniruzzaman = new People("Moniruzzaman"); // People;
let john = new Employee("John", "Programmer"); // Employee;
console.log(john);
