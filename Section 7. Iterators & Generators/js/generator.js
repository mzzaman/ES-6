// Javascript ES6 Generator
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let iterator = foo();
console.log(iterator.next()); // 1;
console.log(iterator.next()); // 2;
console.log(iterator.next()); // 3;
console.log(iterator.next()); // 4;
console.log(iterator.next()); // 5;

let object = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4,
  value5: 5,
};

function* generatorObject(object) {
  const entries = Object.entries(object);
  for (let element of entries) {
    yield element;
  }
}

let generatorIterator = generatorObject(object);
for (let iterator of generatorIterator) {
  console.log(iterator);
}

console.log(generatorIterator.next());

Object.prototype[Symbol.iterator] = function () {
  let entries = Object.entries(this);
  let count = 0;
  return {
    next() {
      return count < entries.length
        ? { value: entries[count++], done: false }
        : { done: true };
    },
  };
};

for (let element of object) {
  console.log(element);
}

let person = {
  name: "Devil Doe",
  age: 30,
  job: "Learning Javascript",
};

// Generator function to iterate over object properties

function* objectIterator(obj) {
  for (let key in obj) {
    yield [key, obj[key]];
  }
}

// Using the generator

const generator = objectIterator(person);
console.log(generator.next().value); // Devil Doe
console.log(generator.next().value); // 30
console.log(generator.next().value); // earning Javascript

for (let [key, value] of objectIterator(person)) {
  console.log(`${key}: ${value}`);
}

class Bag {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  add(element) {
    this.elements.push(element);
  }

  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

let bag = new Bag();
bag.add(1);
bag.add(2);
bag.add(3);

for (item of bag) {
  console.log(item);
}
