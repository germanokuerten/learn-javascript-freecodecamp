const x = 7

if (x > 5) {
    console.log("X is large")
} else {
    console.log("X is smaller")
}


function multiply (num1, num2) {
    console.log(num1 * num2);
}

multiply(5, 8)

////////////////////////////
// Learn JavaScript - Full Course for Beginners
////////////////////////////

var number = 5 // in-line comment

/* 
This is a multi line comment
*/

///////////////
// Data Types
///////////////

// JS provides 7 diff data types
// undefined, null, boolean, string, symbol, number, and object

// undefined: a variable that has not been defined
// null: nothing
// boolean: true or false
// string: text
// symbol: immutable primite value
// object: key value pairs 


///////////////
// Declaring variables
///////////////

// a variable is like a box. a label to point to the data

// var: globally scope (the entire program)
var myName = "Germano"

myName = 8

console.log(myName);

// there are 3 ways to declare a variable in JS

// let: only within the scope of where you declare it
let ourName = "freeCodeCamp"

// const: variable that it never changes
const pi = 3.14


////////////////

// just declaring a variable
var c;
console.log(c) // undefined (we have not set the value to anything)

// declaring and assigning a variable
var b = 2

// assigned 7 to a
a = 7

// assigned a to b
b = a


///////////////
// Initializing Variables w/ assignment operator
///////////////

var a = 9


///////////////
// Variable and Function names in JS are case sensitive
///////////////


///////////////
// Variable and Function names in JS are case sensitive
///////////////


// camelCasing

var studyG = 5

console.log(studyG)


let buji

buji = 7
 
console.log(buji);


///////////////
// Basic Math
///////////////


// Adding Numbers

let sum = 10 + 1
// console.log(sum);

// Subtracting Numbers

let diff = 10 - 7  // = 3
// console.log(diff);


// multiplying numbers  "*"

let product = 10 * 8 // = 80
// console.log(product);


// divide numbers  "/"

let quotient = 66 / 33 // = 2
console.log(quotient)


// Increment number (add +1)

let myVariable = 88
// myVariable = myVariable +1

// or

myVariable++


// Decrement number

myVariable--
console.log(myVariable);


// Decimal Numbers  (aka floating point numbers or floats)  // any number with a decimal point
let ourDecimal = 5.7
let myDecimal = 1.5


// Multiply Decimals

let productDecimal = 3.0 * 5
console.log(productDecimal);


// Multiply Decimals

let quotientDec = 15 / 3.2
console.log(quotientDec)


// Finding a Remainder    ("%"" remainder operator)
// Usually used to see if the number is even or odd / if divided by 2 it means it is even

let remainder
remainder = 11 % 2

console.log(remainder)


// Compound Assignment with Augmented Addition

let abc = 3

// a = a + 12
// abc += 12
// console.log (abc)


// Compound Assignment with Augmented Subtraction

// a = a - 12
abc -= 12
console.log (abc)


// Compound Assignment with Augmented Multiplication

example1 = 5

example1 *= 2
console.log(example1)


// Compound Assignment with Augmented Division

example2 = 6

example2 /= 2
console.log(example2)
 
//////////////////////////////
// Declare String Variables 
//////////////////////////////


// "", '', ``.


let stringVar = "I am a String"   // This is a String literal
console.log(stringVar)


// Escaping Literal Quotes in Strings

let myStr = "I am a \"double quoted\" string inside \"double quotes\""
console.log(myStr)


// Quoting Strings with Single Quotes

let myStr2 = 'I am a "double quoted" string inside "double quotes"'
console.log(myStr)


// Escape Sequences in Strings

 /******
  
\'      single quote
\"      double quote
\\      backlash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed

******/

let myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"

console.log(myStr3)


// Concatenating Strings with Plus Operator

let ourStr4 = "I come first, " + "I come second."
console.log(ourStr4)


// Concatenating Strings with Plus Equals Operator

let ourStr5 = "I come first, "
ourStr5 += "I come second."
console.log(ourStr5)


// Constructing Strings with Variables

let myName2 = "freeCodeCamp"
let ourStr6 = "Hello, our name is " + myName2 + ", how are you?"
console.log(ourStr6)


// Appending Variables to Strings

let anAdjective = "awesome!!!"
let ourStr7 = "freeCodeCamp is "

ourStr7 += anAdjective
console.log(ourStr7)


// Find Length of String

let firstNameLength
let firstName = "Germano"

firstNameLength = firstName.length
console.log(firstNameLength)


// Bracket Notation to Find First Character in String

//  ps. Most modern programming languages like JavaScript start counting at Zero. It's called Zero-based Indexing.

let firstName2 = "Germano"
firstLetterofFirstName = firstName2[0]

console.log(firstLetterofFirstName)
console.log(firstName2[0])


// String Immutability

// Strings are immutable, they cannot be altered once created.
// They can be changed, but the individual characters of the individual string literal cannot be changed.
// So you have to declare the whole string again.

let myStr4 = "Jello World"
myStr4 = "Hello World"

console.log(myStr4)


// Bracket Notation to Find Nth Character in String

// You can use Bracket Notation to get any character position in a string.

let firstName3 = "Germano"
let thirdLetterofLastName = firstName3[2]

console.log(thirdLetterofLastName)