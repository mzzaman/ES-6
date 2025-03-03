// The Ultimate Guide to JavaScript Symbol;

let hy = Symbol("Hi");
console.log(hy);
console.log(typeof hy);

console.log(Symbol() === Symbol());

let firstName = Symbol("First Name"),
  lastName = Symbol("Last Name");

console.log(firstName, lastName);

// Sharing symbols;

let devil = Symbol.for("Devil");
console.log(devil);
console.log(Symbol.keyFor(devil));

let citizenId = Symbol.for("ssn");
let ssn = Symbol.for("ssn");
console.log(ssn === citizenId);

// Symbol usages

// A) Using symbols as unique values;
let statuses = {
  OPEN: Symbol("Open"),
  IN_PROGRESS: Symbol("In progress"),
  COMPLETED: Symbol("Completed"),
  HOLD: Symbol("On hold"),
  CANCELED: Symbol("Canceled"),
};

// complete a task
// task.setStatus(statuses.COMPLETED);
console.log(statuses.COMPLETED);

// B) Using a symbol as the computed property name of an object

let status = Symbol("On hold");
let task = {
  [status]: statuses.OPEN,
  description: "Learn ES6 Symbol",
};
console.log(task);
console.log(Object.keys(task));
console.log(Object.getOwnPropertyNames(task));
console.log(Object.getOwnPropertySymbols(task));

// Well-known symbols
class Stack {
  static [Symbol.hasInstance](obj) {
    return Array.isArray(obj);
  }
}
console.log([] instanceof Stack);

const numbers = [1, 2, 3];
// let obj = {
//   firstName: "Devil",
//   lastName: "Doe",
// };

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next()); // 1;
console.log(iterator.next()); // 2;
console.log(iterator.next()); // 3;

class List {
  constructor() {
    this.elements = [];
  }
  add(element) {
    this.elements.push(element);
    return this;
  }

  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

const charts = new List();
charts.add("A");
charts.add("B");
charts.add("C");

for (const chart of charts) {
  console.log(chart);
}

// Symbol.isConcatSpreadable;
let odd = [1, 3],
  even = [2, 4];
let all = odd.concat(even);
console.log(all);

const list = {
  0: "Javascript",
  1: "Symbol",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};
let message = ["Kemon Aso"].concat(list);
console.log(message); // Kemon Aso, Javascript, Symbol;

// Symbol.toPrimitive
function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}

Object.prototype[Symbol.toPrimitive] = function (hint) {
  let result;
  switch (hint) {
    case "string":
      result = this.amount + this.currency;
      break;

    case "number":
      result = this.amount;
      break;

    case "default":
      result = this.amount + this.currency;
      break;
  }
  return result;
};

const money = new Money(50, "USD");

function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}
Money.prototype[Symbol.toPrimitive] = function (hint) {
  var result;
  switch (hint) {
    case "string":
      result = this.amount + this.currency;
      break;
    case "number":
      result = this.amount;
      break;
    case "default":
      result = this.amount + this.currency;
      break;
  }
  return result;
};

var price = new Money(799, "USD");

console.log("Price is " + price); // Price is 799USD
console.log(+price + 1); // 800
console.log(String(price)); // 799USD
