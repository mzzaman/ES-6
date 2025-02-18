//  JavaScript Static Properties;

// Introduction to the JavaScript static properties
// class Item {
//   static count = 0;

//   static getCount() {
//     return Item.count;
//   }
// }

// console.log(Item.count); // 0

// console.log(Item.getCount()); // 0

class Item {
  constructor(name, quality) {
    this.name = name;
    this.quality = quality;
    this.constructor.count++;
  }
  static count = 0;

  static getCount() {
    return Item.count;
  }
}

let pen = new Item("Pen", 5);
let noteBook = new Item("Note Book", 10);
console.log(Item.getCount());

class People {
  constructor(name) {
    this.name = name;
    this.constructor.people++;
  }

  static people = 0;

  static getPeople() {
    return People.people;
  }
}

// Create Instance;
let devil = new People("Devil");
let john = new People("John");
let jane = new People("Jane");
console.log(People.getPeople()); // 3
