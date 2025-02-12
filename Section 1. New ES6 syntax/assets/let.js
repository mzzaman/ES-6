let name = "Moniruzzaman";
console.log(name);

let x = 10;

if (x == 10) {
  x = 20;
  console.log(x);
}
console.log(x);

// JavaScript let and global object
var a = 10;
console.log(window.a);

let b = 20;
console.log(window.b);

// JavaScript let and callback function in a for loop
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i, "Times"), 1000);
}

// Redeclaration

var counter = 0;
var counter;
console.log(counter);

let message = "Hello Es6";
// let message;
// console.log(message); // Uncaught SyntaxError: Identifier "message" has already been declared;

// JavaScript let variables and hoisting
{
  console.log(sayHello);
  let sayHello = "Hello World";
}

{
  // enter new scope, TDZ starts
  let log = function () {
    console.log(message); // message declared later
  };

  // This is the TDZ and accessing log
  // would cause a ReferenceError

  let message = "Hello"; //TDZ ends
  log(); // called outside TDZ
}
