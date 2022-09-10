// String Functions

let str = "Hello,World";

console.log(str.length);
console.log(str.concat(" ", "Learn Javascript"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[1]);
console.log(str.indexOf("W"));
console.log(str.charAt(6));
console.log(str.substring(1, 5));
console.log(str.split(","));

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
console.log(arr.indexOf(4));
console.log(arr.push(7));
console.log(arr.push(7));
console.log(arr.push(7));
console.log(arr.push(7));
console.log(arr.pop());
console.log(arr.shift());
arr.reverse();
arr.reverse();

arr.splice(2, 1);

console.log(arr);

// Document Object Model

const ul = document.getElementById("list");
// const h2 = document.getElementsByTagName("h2");
// const items = document.getElementsByClassName("item");
// // const items = document.querySelector(".item");
// const items = document.querySelectorAll(".item");

console.log(h2);
console.log(items);

const btn = document.getElementById("submit");
const h2 = document.querySelector(".hello");

btn.addEventListener("click", onClick);

function onClick() {
  h2.classList.toggle("size");
  h2.classList.add("trans");
}
// console.log(btn);
