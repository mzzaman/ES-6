function say(message = "Hi") {
  console.log(message);
}
say();
say("hello");

function add(x, y) {
  return x + y;
}
console.log(add(100, 200));

function hello(message) {
  console.log(message);
}
hello(); // undefined;

function empty(message) {
  message = typeof message !== "undefined" ? message : "Welcome";
  console.log(message);
}
empty(); // Welcome

function sayName(name = "Devil") {
  console.log(name);
}
sayName(); // Devil
sayName("Spider Man"); // Spider Man
sayName(undefined); // Devil

function createDiv(
  height = "100px",
  width = "100px",
  border = "solid 1px red"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}
createDiv();
createDiv(undefined, undefined, "solid 5px blue");
createDiv("200px", "200px", "solid 3px red");

function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log(put("Toy Car"));
console.log(put("Toy Gan"));

function date(d = today()) {
  console.log(d);
}
function today() {
  return new Date().toLocaleDateString("en-US");
}

date();

function requiredArg() {
  throw new Error("The argument is required");
}

function add(x = requiredArg(), y = requiredArg()) {
  return x + y;
}

// add(10); // Uncaught Error;
console.log(add(10, 20));

function add2(x = 1, y = x, z = x + y) {
  return x + y + z;
}

console.log(add2()); // 4

let taxRate = () => 0.1;

let getPrice = function (price, tax = price * taxRate()) {
  return price + tax;
};

let fullPrice = getPrice(100);
console.log(fullPrice); // 110
