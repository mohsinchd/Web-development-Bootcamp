const htmlCollection = document.getElementsByClassName("item");
const nodeList = document.querySelectorAll(".item");
const list = document.querySelector("#list");
const h2 = document.querySelector(".h2");
const btn = document.querySelector(".btn");

// create Element
let li = document.createElement("li");
// Add class
li.classList.add("item");
// Add Text
li.innerText = "Item";
// Append child
list.appendChild(li);
// create Element
li = document.createElement("li");
// Add class
li.classList.add("item");
// Add Text
li.innerText = "Item";
// Append child
list.appendChild(li);
// create Element
li = document.createElement("li");
// Add class
li.classList.add("item");
// Add Text
li.innerText = "Item";
// Append child
list.appendChild(li);

console.log(htmlCollection);
console.log(nodeList);

// h2.innerText = htmlCollection.length;
// h2.innerText = nodeList.length;

btn.addEventListener("click", function (event) {
  h2.classList.toggle("size");
});
