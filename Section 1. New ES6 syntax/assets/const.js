let a = 10;
a = 20;
a = a + 5;
console.log(a);

const TAX_RATE = 0.5;
// TAX_RATE = 0.7; // ERROR;

// avaScript const and Objects
const person = { age: 30 };
person.age = 35;
console.log(person.age);

// const person = Object.freeze({ education: none });
// person.education = "MSC"; // TypeError;

const company = Object.freeze({
  name: "ABC corp",
  address: {
    Thana: "Domar",
    zilla: "Nilphamari",
    city: "Rangpur",
    zipcode: 5341,
  },
});

company.address.country = "Bangladesh";

// JavaScript const and Arrays

const colors = ["red"];
colors.push("green");
console.log(colors);

colors.pop();
colors.pop();
console.log(colors); // []

// colors = []; // TypeError

// JavaScript const in a for loop
let scores = [75, 80, 95];
for (let score of scores) {
  console.log(score);
}

const names = ["Devil", "Bad Man", "Spider Man", "Black Panther"];
for (const name of names) {
  console.log(name);
}

for (const i = 0; i < names.length; i++) {
  console.log(names[i]); // TypeError
}
