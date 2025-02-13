// ES6 Destructuring Assignment
// function getScores() {
//   return [70, 80, 90];
// }

// let scores = getScores();
// let x = scores[0],
//   y = scores[1],
//   z = scores[2];

// console.log({ x, y, z });

// function getScores() {
//   return [70, 80, 90];
// }

// let [x, y, z] = getScores();
// console.log({ x, y, z });

// Array Destructuring Assignment and Rest syntax

function getScores() {
  return [70, 80, 90, 100];
}

let [x, y, ...args] = getScores();
console.log({ x, y, args });

// Setting default values
function getItems() {
  return [10, 20];
}
let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;
console.log({ thirdItem });

// Nested array destructuring
function getProfile() {
  return ["Devil", "John", ["Red", "blue", "green"]];
}

// let [firstName, lastName, [color1, color2, color3]] = getProfile();
// console.log(color1, color2, color3);

// Array Destructuring Assignment Applications

let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);

// Functions that return multiple values
function stat(a, b) {
  return [a + b, (a + b) / 2, a - b];
}

let [sum, average, difference] = stat(20, 10);
console.log(sum);

// Introduction to the JavaScript object destructuring assignment

let person = {
  firstName: "Devil",
  lastName: "Doe",
};

// let firstName = person.firstName;
// let lastName = person.lastName;
// console.log(firstName, lastName);
let { firstName, lastName, age } = person;
console.log(firstName, age); // age undefine;

// Setting default values

let user = {
  name: "Devil",
  userName: "devil007",
  joinDate: "13-02-2025",
  status: "online",
};

let { name, userName, joinDate, status, currentAge: age2 = 30 } = user;

console.log(age2);

let person2 = {
  firstName1: "John",
  lastName2: "Doe",
  middleName: "C.",
  currentAge: 28,
};

let { firstName1, lastName2, middleName = "", currentAge: age3 = 18 } = person2;

console.log(middleName); // 'C.'
console.log(age3); // 28

// Destructuring a null object

function getPerson() {
  return null;
}

let { fName, lName } = getPerson(); // TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.

// Avoid TypeError;
let { fName1, lName2 } = getPerson() || {};
console.log(fName1);
