let a = Number(prompt("A"));
let b = Number(prompt("B"));
let c = Number(prompt("C"));

if (a + b < c || b + c < a || c + a < b) {
  console.log("Triangle doesn't exist");
} else if (a === b && c === a) {
  console.log("Eequivalent triangle");
} else if (a === b || b === c || c === a) {
  console.log("Isosceles triangle");
} else {
  console.log("Normal triangle");
}
