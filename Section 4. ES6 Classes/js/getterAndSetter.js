// Introduction to the JavaScript getters and setters;

class Person {
  constructor(name) {
    this.name = name;
  }
}

// let devil = new Person("Devil");
// console.log(devil.name); // Devil;\

class Teacher {
  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this.name = newName;
  }
}

let devilSet = new Teacher("Devil");
console.log(devilSet.getName()); // Devil;
devilSet.setName("Devil Doe");
console.log(devilSet.getName()); // Devil Doe;

// Using getter in an object literal;

let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("Devil").add("Doe").add("Bad man");
console.log(`The latest attendee is ${meeting.latest}.`);
