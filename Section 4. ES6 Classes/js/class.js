// JavaScript Class;

// Classes before ES6 revisited;

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

let devil = new Person("Devil");
// console.log(devil.getName());

// ES6 class declaration;

class Student {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let devilDoe = new Student("Devil Doe");
// console.log(devilDoe.getName());

class Teacher {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let moniruzzaman = new Teacher("Moniruzzaman");
console.log(moniruzzaman.getName());
