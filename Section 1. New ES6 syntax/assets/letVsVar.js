var counter; // undefined;

function increase() {
  var counter = 10;
}

console.log(counter); // cannot access the counter variable here;

// for (var i = 0; i < 5; i++) {
//   console.log("Inside the loop:", i);
// }
// console.log("Outside the loop:", i);

for (let i = 0; i < 5; i++) {
  console.log("Inside the loop:", i);
}
console.log("Outside the loop:", i);
