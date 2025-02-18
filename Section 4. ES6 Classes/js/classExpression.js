// JavaScript Class Expressions;

// Introduction to JavaScript class expressions
let Person = class {
  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();

    if (newName === "") {
      throw "Name can not be empty";
    }
    return (this.name = newName);
  }
};

// let devil = new Person("Devil Doe");
// console.log(devil.getName());

let People = class {
  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw new Error("Name can not be Empty");
    }
    return (this.name = newName);
  }
};

// let badMan = new People("BadMan");
// console.log(badMan.getName());

let Teacher = class {
  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw new Error("Name can not be Empty");
    }
    return (this.name = newName);
  }
};

let devil = new Teacher("Devil Doe");
// console.log(devil.getName());

// First-class citizen;

function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi() {
      console.log("Hi");
    }
  }
);

// greeting.sayHi(); // Hi

// Singleton;

let app = new (class {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`Starting the ${this.name} ....`);
  }
})("Awesome App");
app.start(); // Starting the Awesome App.....
