const odd = [1, 2, 3];
const combine = [2, 4, 6, ...odd];
console.log(combine);

function see(a, b, ...args) {
  console.log(args);
}
see(1, 2, 3, 4, 5, 6);

function compare(a, b) {
  return a - b;
}

let result = compare.apply(null, [1, 2]);
console.log(result);
let result2 = compare(...[1, 2]);
console.log(result2);

let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];

[].push.apply(rivers, moreRivers);
console.log(rivers);

// Constructing array literal

let initialChars = ["A", "B"];
let chars = [...initialChars, "C", "D"];
console.log(chars);

// Concatenating arrays
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores);
