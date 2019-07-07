let divider = 2;

let a1 = Number(prompt('a1'));
let a2 = Number(prompt('a2'));
let b1 = Number(prompt('b1'));
let b2 = Number(prompt('b2'));
let c1 = Number(prompt('c1'));
let c2 = Number(prompt('c2'));

if ((a1 + b1) / divider === c1 && (a2 + b2) / divider === c2) {
  console.log(true);
} else {
  console.log(false);
}
