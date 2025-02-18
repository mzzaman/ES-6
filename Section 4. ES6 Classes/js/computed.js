// JavaScript Computed Properties;

// Introduction to JavaScript Computed Properties;

// let propertyName = "dynamicPropertyName";

// const obj = {
//   [propertyName]: value,
// };

// JavaScript Computed Property examples;

// 1) Basic JavaScript computed property example;

let propName = "c";
const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};

// console.log(rank.c);

const name = "fullName";
class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  get [name]() {
    return `${this.fName} ${this.lName}`;
  }
}
let person = new Person("Devil", "Doe");
// console.log(person.fullName);

//  3) Creating an object from a key/value pair;

const createObject = (key, value) => {
  return {
    [key]: value,
  };
};

const devil = createObject("name", "Devil");
// console.log(devil);

let createAnotherObject = (key, value) => {
  let obj = {};
  obj[key] = value;
  return obj;
};

const moniruzzaman = createAnotherObject("name", "Moniruzzaman");
console.log(moniruzzaman);
