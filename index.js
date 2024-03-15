// Is this number positive, negative, or zero gpt practice problem 1

// let number = prompt("Please enter a number!");
// let sign = Math.sign(number);

// if(sign === -1 ) {
//     console.log("This is a negative number");
// } else if (sign === 1 ) {
//     console.log("This is a postive number");
// } else {
//     console.log("The number is zero");
// }

// -------------------------------------------------------------------------------------------------------

// Is this year a leap year gpt practice problem 2

// let year = Number(prompt("Enter the year:"));

// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log("Yay, it's a leap year!");
// } else {
//     console.log("Darn, it's not a leap year :(");
// }

// -------------------------------------------------------------------------------------------------------

// Is the given string a palindrome gpt practice problem 3


// let input = prompt("Please enter a string:");
// input = input.toLowerCase();
// input = input.replace(/[^a-zA-Z0-9]/g, "");
// let reversed = input.split("").reverse().join("");

// if (input === reversed) {
//     console.log("Yay, it's a palindrome!");
// } else {
//     console.log("Darn, it's not a palindrome :(");
// }

// -------------------------------------------------------------------------------------------------------

// Is the person a minor or a senior gpt practice problem 4

// let input = prompt("Please enter your age");
// input = parseInt(input);

// if (input < 18) {
//     console.log("You are a minor");
// } else if (input >= 122) {
//     console.log("People can't live that long");
// } else if (input >= 65) {
//     console.log("You are a senior citizen");
// } else if (input >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("Invalid input. Please enter a valid age.");
// }

// -------------------------------------------------------------------------------------------------------

// Enter two numbers and determine which number is larger gpt practice problem 5

// let inputOne = prompt("Please enter your first number");
// inputOne = parseInt(inputOne);

// let inputTwo = prompt("Please enter your second number");
// inputTwo = parseInt(inputTwo);

// if(inputOne < inputTwo) {
//     console.log("Your first number is less than your second number");
// } else if (inputOne > inputTwo) {
//     console.log("Your first number is greater than your second number");
// } else if (inputTwo < inputOne) {
//     console.log("Your second number is less than your first number");
// } else if (inputTwo > inputOne) {
//     console.log("Your second number is greater than your first number")
// } else if (inputOne === inputTwo) {
//     console.log("Your two numbers are equal");
// } else {
//     console.log("Invalid input. Please enter two numbers.")
// }

//  gpt practice problem 6

let inputOne = prompt("Please enter your name");
let inputTwo = prompt("Please enter your age");
inputTwo = parseInt(inputTwo);

if(inputTwo < 13) {
    console.log("You are too young to use this program, " + inputOne);
} else if (inputTwo >=13 && inputTwo <=18)  {
    console.log("Welcome, " + inputOne + "! You are a teenager.");
} else if (inputTwo > 18) {
    console.log("Welcome " + inputOne + "! You are an adult.");
} else {
    console.log("Invalid input. Please enter your name and age");
}