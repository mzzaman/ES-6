//
let person = {
  firstName: "Moniru",
  lastName: "zzaman",
  age: 30,

  // Implementing the iterator protocol;
  [Symbol.iterator]() {
    let keys = Object.keys(this); // Get all keys
    let index = 0;
    return {
      next: () => {
        if (index < keys.length) {
          let key = keys[index++];
          return { value: `${key}: ${this[key]}`, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const property of person) {
  console.log(property);
}

let iterator = person[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let range = {
  start: 1,
  ends: 5,

  [Symbol.iterator]() {
    let current = this.start;
    let last = this.ends;
    return {
      next() {
        return current <= last
          ? { value: current++, done: false }
          : { done: true };
      },
    };
  },
};

for (const num of range) {
  console.log(num);
}

let numIterator = range[Symbol.iterator]();
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());

// Using Class constructor;

class Person {
  constructor(name, age, job) {
    this.details = {
      name: name,
      age: age,
      job: job,
    };
  }

  [Symbol.iterator]() {
    let entries = Object.entries(this.details);
    let index = 0;
    return {
      next() {
        return index < entries.length
          ? { value: entries[index++], done: false }
          : { done: true };
      },
    };
  }
}

const devil = new Person("Devil Doe", 30, "Software Engineer");
for (const dev of devil) {
  console.log(dev);
}

let devilIterator = devil[Symbol.iterator]();
console.log(devilIterator.next());
console.log(devilIterator.next());
console.log(devilIterator.next());
console.log(devilIterator.next());
console.log(devilIterator.next());
console.log(devilIterator.next());

class StudentList {
  constructor(students) {
    this.students = students;
  }

  // Implementing Iterator;
  [Symbol.iterator]() {
    let index = 0;
    let students = this.students;
    return {
      next() {
        return index < students.length
          ? { value: students[index++], done: false }
          : { done: true };
      },
    };
  }
}

const students = new StudentList(["Devil", "Alice", "Bob", "Charlie"]);

// Iterating using for...of loop
for (const student of students) {
  console.log(student);
}

let studentIterator = students[Symbol.iterator]();
console.log(studentIterator.next()); // Devil
console.log(studentIterator.next()); // Alice
console.log(studentIterator.next()); // Bob
console.log(studentIterator.next()); // Charlie
console.log(studentIterator.next()); // true;

class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    let last = this.end;

    return {
      next() {
        return current <= last
          ? { value: current++, done: false }
          : { done: true };
      },
    };
  }
}

// // Using the class
let numbers = new Range(1, 5);
for (let num of numbers) {
  console.log(num);
}

let numberIterator = numbers[Symbol.iterator]();
console.log(numberIterator.next()); //1
console.log(numberIterator.next()); //2
console.log(numberIterator.next()); //3
console.log(numberIterator.next()); //4
console.log(numberIterator.next()); //5
