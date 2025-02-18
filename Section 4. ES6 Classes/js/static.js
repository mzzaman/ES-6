// JavaScript Static Methods;

// Introduction to the JavaScript static methods;

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.createAnonymous = function (gender) {
  let name = gender === "male" ? `Mr. John Doe` : `Mis. Jane Doe`;
  return new Person(name);
};

let anonymous = Person.createAnonymous("male");
console.log(anonymous.getName());

// JavaScript static methods in ES6;

class Teacher {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static createAnonymous(gender) {
    let name = gender === "male" ? "John Doe" : "Jane Doe";
    return new Teacher(name);
  }
}

let teacher = new Teacher("Devil");
let devil = Teacher.createAnonymous("male");
console.log(devil.getName());

// Calling a static method from the class constructor or an instance method
