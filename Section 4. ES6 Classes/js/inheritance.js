// JavaScript Inheritance Using extends & super;

// Implementing JavaScript inheritance using extends and super

// Before ES6;
function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log(`Walking on ${this.legs} legs`);
};

function Bird(legs) {
  this.legs = legs;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
  console.log(`Flying`);
};

let pigeon = new Bird(2);

pigeon.walk(); // Walking on 2 legs;

pigeon.fly(); // Flying;

// ES6 simplified these steps by using the extends and super keywords.

class AnimalES6 {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`Walking on ${this.legs} Legs`);
  }
}

class BirdES6 extends AnimalES6 {
  constructor(legs) {
    super(legs);
  }

  fly() {
    console.log("Flying");
  }
}

let bird = new BirdES6(2);
bird.walking(); // Walking on 2 Legs;
bird.fly(); // Flying;
