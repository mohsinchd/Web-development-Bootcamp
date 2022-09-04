// Functions
// function greet() {
//   console.log("HEllo world");
// }

// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();

// function checkEven(firstNumber, secondNumber) {
//   if (firstNumber % 2 === 0 && secondNumber % 2 === 0) {
//     return "Even";
//   } else {
//     return "Not Even";
//   }
// }

// let check = checkEven(2, 3);
// console.log(check);

// function isPrime(num) {
//   let flag = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// }

// let check = isPrime(5);

// check ? console.log("Number is Prime") : console.log("Number is Not Prime");

// Scoping

// Global Scope
// function scope
// block scope

// let myName = "Mohsin";

// if (true) {
//   console.log(myName);
// }

// function greet() {
// //   let myName = "Mohsin";

//   if (true) {
//     let myName = "Mohsin";
// }
// console.log(myName);
// }

// console.log(myName);

// function greet() {
//   if (true) {
//     var myName = "Mohsin";
//   }

//   console.log(myName);
// }

// greet();
