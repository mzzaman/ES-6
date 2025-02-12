function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

function sums(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })

    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

let results = sums(10, "hi", null, undefined, 20);
console.log(results);

let results2 = sums("hi", "Devil", 15, 10);
console.log(results2);

function sumsFilter() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === "number";
    })

    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

function filterBy(type, ...args) {
  return args.filter(function (e) {
    return typeof e === type;
  });
}

// JavaScript rest parameters and arrow function

const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};

let messageShow = combine("Javascript", "Rest", "Parameters");
console.log(messageShow);

// JavaScript rest parameter in a dynamic function

var showNumber = new Function("...numbers", "console.log(numbers)");
showNumber(1, 2, 3);
