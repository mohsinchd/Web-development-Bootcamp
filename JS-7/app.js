const div = document.getElementById("div");
const list = document.getElementById("list");
const item = document.getElementById("item");
const link = document.getElementById("link");

div.addEventListener("click", function (event) {
  if (event.target.classList.contains("link")) {
    console.log(event.target);
  }
});

list.addEventListener("click", function () {
  console.log("Event Called on List");
});

item.addEventListener("click", function () {
  console.log("Event Called on Item");
});

link.addEventListener("click", function () {
  console.log("Event Called on Link");
});
