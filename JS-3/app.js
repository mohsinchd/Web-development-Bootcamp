// Calculate length of string without length property

// const str = "Mohsin";

// let count = 0;

// for (let i = 0; str[i] !== undefined; i++) {
//   count = count + 1;
// }
// console.log(count);

// While Loop , Do while

// let i = 0;
// while (false) {
//   count++;
//   i++;
// }

// // console.log(count);

// // let i = 0;
// do {
//   count++;
//   i++;
// } while (false);

// console.log(count);

// Number guessing Game

// let random = Math.round(Math.random() * 10);
// let guess;
// let moves = 5;
// do {
//   guess = Number(prompt("Please Enter a Number"));
//   if (guess === random) {
//     console.log("You are right. Congrats");
//   } else if (guess < random) {
//     console.log("Too Low");
//     moves--;
//   } else if (guess > random) {
//     console.log("Too High");
//     moves--;
//   }

//   if (moves === 0) {
//     console.log("You Lose");
//     break;
//   }
// } while (guess !== random);

// Reference Types
// 3 Types Objects , Arrays , Functions

// const myData = {
//   name: "Mohsin",
//   age: 22,
//   phoneNumber: 123456,
//   address: "Lahore",
// };

// console.log(myData.name, myData.age);

// const array = ["Apple", "Orange", "Banana", "Water melon", "melon", "Grapes"];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numArray.reverse());

// let sum = 0;
// for (let i = 0; i < numArray.length; i++) {
//   sum = sum + numArray[i];
// }

// console.log("Sum=", sum);
// console.log("Average=", sum / numArray.length);
