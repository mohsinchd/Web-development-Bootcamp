console.log("Hello world");

// Variables
// 3 Keywords

// var , let , const

// 2 Types
// Primitive
// Number , String , Boolean , null , undefined

var myAge = 22;
var myName = "Mohsin";
var isAdmin = false;
var myNumber = null;
var abc;

console.log(myAge, myName, isAdmin, myNumber, abc);

// Difference between var let and const

// ES-5
var myAge = 22;
myAge = 23;
// let , const
let myName = "Mohisn";
myName = "abc";
// Const
const isAdmin = false;

Operators;

// Assignment operator (=)
// Arithmatic Operators (+ , - , / , * , %);
// Comparison Operators (< , > , <= , >= , != , == , ===)
// Logical Operators (&& , || , !)
// Ternary Operator (?)
// typeof

let myName = "Mohsin";

myName == "abc" ? console.log("Hello Mohsin") : console.log("Hello ABC");

let number1 = 20;
let number2 = 30;
console.log(typeof number1);
console.log(number1 + number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 - number2);

console.log(number1 < number2);

console.log(true && false);

console.log(2 % 3);

// M < N
// M = N
// M > N

console.log(2 % 2);
console.log(5 % 2);

// % = Reminder
// / = Quotient

let isEven = 3;

isEven % 2 === 0 ? console.log("Number is Even") : console.log("Number is Odd");

// String Concatenation

let firstName = "Mohsin";
let lastName = "Shoaib";

console.log(firstName + " " + lastName);

// Truthy and Falsy

// Falsy Values
// 0 , false , "" , null , undefined

let number = "abc";
number ? console.log("True") : console.log("false");

// let number = -5;
