let colors = ["red", "Green", "Blue"];
for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index}`);
}

let ratings = [
  { user: "Devil", score: 5 },
  { user: "John", score: 4 },
  { user: "Jane", score: 3 },
  { user: "David", score: 2 },
  { user: "Peter", score: 1 },
];

let sum = 0;
for (const { score } of ratings) {
  sum += score;
}

console.log(`Total Score: ${sum}`);

let scores = [10, 20, 30];

scores.message = "hi";
console.log("for .....in:");
for (const score in scores) {
  console.log(score);
}
console.log("for....of");

for (const score of scores) {
  console.log(score);
}
