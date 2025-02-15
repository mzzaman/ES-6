import { ownerName } from "./lib.js";

ownerName("Moniruzzaman");

// Variable Function

let add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5;

// Arrow Function
let addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // 5;

// Arrow Function with multiple lines
let addArrowMultiple = (a, b) => {
  let sum = a + b;
  return sum;
};

console.log(addArrowMultiple(2, 3)); // 5;
// Check the type of function
console.log(typeof addArrowMultiple); // function

// Check the type of function instance
console.log(addArrowMultiple instanceof Function); // true

// Sort an array with the help of a callback function
let numbers = [5, 1, 3, 2, 4];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

// Sort an array with the help of an arrow function
let numbersArrow = [5, 1, 3, 2, 4];
numbersArrow.sort((a, b) => a - b);
console.log(numbersArrow); // [1, 2, 3, 4, 5]

// map function
let names = ["Monir", "Rahman", "Zaman"];
let nameLengths = names.map(function (name) {
  return name.length;
});

console.log(nameLengths); // [5, 6, 5]

// map function with arrow function
let namesArrow = ["Monir", "Rahman", "Zaman"];
let nameLengthsArrow = namesArrow.map((name) => name.length);
console.log(nameLengthsArrow); // [5, 6, 5]

// function and object literal
let setColor = function (color) {
  return { value: color };
};

let backgroundColor = setColor("red");
console.log(backgroundColor); // { value: 'red' }

// function and object literal with arrow function
let setColorArrow = (color) => ({ value: color });
let backgroundColorArrow = setColorArrow("red");
console.log(backgroundColorArrow); // { value: 'red' }

// function and this value
function Car() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    let self = this;
    setTimeout(function () {
      console.log(self.speed);
    }, 1000);
  };
}

let car = new Car();
car.speedUp(50); // 50

// function and this value with arrow function
function CarArrow() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => {
      console.log(this.speed);
    }, 1000);
  };
}

let carArrow = new CarArrow();
carArrow.speedUp(50); // 50

// Arrow function and arguments object
let showArguments = function () {
  return (x) => x + arguments[0];
};

let argumentsFunction = showArguments(10, 20);
let result = argumentsFunction(5);
console.log(result); // 15

// function and the prototype property
function dump(message) {
  console.log(message);
}

console.log(dump.hasOwnProperty("prototype")); // true

// function and the prototype property with arrow function
let dumpArrow = (message) => console.log(message);
console.log(dumpArrow.hasOwnProperty("prototype")); // false

// When you should not use arrow functions

// 1. Event Handlers

const greeting = document.querySelector("#greeting");
const userName = document.querySelector("#username");

// userName.addEventListener("keyup", () => {
//   greeting.innerText = "hello " + this.value;
// }); // undefined

userName.addEventListener("keyup", function () {
  greeting.textContent = "Hello" + this.value;
});

// 2. Object Methods

// Using Arrow Function
const counter = {
  count: 0,
  next: () => {
    this.count++;
  },
  prev: () => {
    this.count--;
  },
};

// console.log(counter.next()); // undefined

// Using Regular Function
const counterRegular = {
  count: 0,
  next: function () {
    return this.count++;
  },
  prev: function () {
    return this.count--;
  },
};
console.log(counterRegular.next()); // 0
console.log(counterRegular.next()); // 1
console.log(counterRegular.next()); // 2

// 3. Prototype Methods

function Counter() {
  this.count = 10;
}

Counter.prototype.next = () => {
  return this.count++;
};

Counter.prototype.next = function () {
  return this.count;
};

// const counterPrototypeArrow = new Counter();
// console.log(counterPrototype.next()); // undefined

const counterPrototype = new Counter();
console.log(counterPrototype.next()); // 10

Counter.prototype.prev = () => {
  return this.count--;
};

Counter.prototype.prev = function () {
  return this.count;
};

// const counterPrototypeArrow = new Counter();
// console.log(counterPrototypeArrow.prev()); // undefined

const counterPrototypeRegular = new Counter();
console.log(counterPrototypeRegular.prev()); // 10

// 4. Functions that use the arguments object
// arguments object is not available in arrow functions
const concat = (separator) => {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
};

// console.log(concat(",", "a", "b", "c")); // undefine

// arguments object is available in regular functions
const concatRegular = function (separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
};

console.log(concatRegular(",", "a", "b", "c")); // a,b,c
