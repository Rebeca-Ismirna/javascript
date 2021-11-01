/*const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
const children = hege.concat(stale);
console.log (children)
const p = children.sort()
console.log (p.reverse())*/

/*const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction())
let multi = 10

function myFunction(item, index, arr) {
  let multi = multi * item;
  console.log (index, multi, arr)
}*/

/*const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log (first)

function myFunction(value, index, array) {
  return value > 18;  
}*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

console.log (text)