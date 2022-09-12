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


// Bracket Notation to Find Last Character in String

let firstName4 = "Germano"
let lastLetterofFirstName = firstName4[firstName4.length -1]

console.log(lastLetterofFirstName)
console.log(firstName4[firstName4.length -1])


// Bracket Notation to Find Nth-to-Last Character in String

let firstName5 = "Germano"
let lastLetterofFirstName2 = firstName5[firstName5.length -2]

console.log(lastLetterofFirstName2)


////////////////
// Word Blanks
////////////////

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb, test) {
    let result = "";
    result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb} ${test}`
    return result; 
}

console.log(wordBlanks('dog', 'big', 'ran', 'quickly', 'test string'))


////////////////
// Array
////////////////

// Can be any data type
// each value is called an element
let ourArray = ['Mano', 34]


////////////////
// Nested Array
////////////////

let nesterdArray = [['Mano', 1], ['Joe', 5, ['Deh', 7]]]


////////////////
// Access Array
////////////////

let arrayIndex = ourArray[0]
console.log(arrayIndex)


// You don't need to use let, or const to declare an array variable
newArray = ['mano']
console.log(newArray[0])


////////////////
// Modify Array Data
////////////////

arrayTest1 = [12,31,45]
arrayTest1[0] = 5
console.log('arrayTest1 is: ' +  arrayTest1)

//////////////////////////////////////////////
// Access Multi dimensional Arrays w/ Indexes
//////////////////////////////////////////////

// You can use bracket notation to access arrays and multi dimensional arrays.

let arrayTest2 = [[1,2,3], [3,4,5]]
console.log('access nested array: ' + arrayTest2[1][2])

/////////////////////////////
// Array methods
/////////////////////////////

////////////////
// push()
////////////////

// Append Data to the end of an Array

let pushArray = [['Jon', 23], ['cat', 2]]
pushArray.push(['dog', 3])

console.log(pushArray);

pushArray.push(5)
console.log(pushArray)

////////////////
// pop()
////////////////

// Removes the last element of array

popArray = [1,2,3]
popArray.pop()
console.log('popped array: ' + popArray);


////////////////
// shift()
////////////////

// removes the first element of array

shiftArray = [1,2,3]
console.log(shiftArray.shift())
console.log(shiftArray)


////////////////
// unshift()
////////////////

// adds element to the beggining of an array


let unshiftArray = [1,2,3]
unshiftArray.unshift(0)
console.log(unshiftArray);


//////////////////
// Shopping List (an array)
//////////////////



////////////////////////////////////

//////////////////
// Reusable Code (Write Reusable Functions)
//////////////////


function helloMundao() {
    console.log('hello mundão')
}
helloMundao()

function Test(a, b, c) {
    console.log(a, b, c)
}
Test(1,2,3)

newVar1 = 5
console.log(newVar1);


//////////////////
// Arguments
//////////////////



///////////////////////////////
// Global Scope and Functions
///////////////////////////////



///////////////////////////////
// Local Scope and Functions
///////////////////////////////



///////////////////////////////////////////
// Global vs. Local Scope in Functions
///////////////////////////////////////////



/////////////////////////////////////////////////
// Return a Value from a Function with Return
/////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
// Understanding Undefined Value Returned from a Function
/////////////////////////////////////////////////////////////



///////////////////////////////////////
// Assignment with a Returned Value
///////////////////////////////////////




processed = 2+1-1-2+3*2/2
console.log('processed: '+ processed)


////////////////////
// Stand in Line
////////////////////



////////////////////
// Boolean Values
////////////////////

// They are basically on and off switches
// True is on
// False is off



//////////////////////////////////////////////
// Use Conditional Logic with If Statements
//////////////////////////////////////////////


////////////////////
// If Statements
////////////////////

function trueOrFalse(a) {
    if (a) {
        return "Yes it is True"
    }
    return "No, it is False"
}

console.log(trueOrFalse(true))



////////////////////////////////////////////////
// Comparison with the Equality Operator
////////////////////////////////////////////////



////////////////////////////////////////////////
// Comparison with the Strict Equality Operator
////////////////////////////////////////////////



////////////////////////////////////////////////
// Practice Comparing Different Values
////////////////////////////////////////////////



////////////////////////////////////////////////
// Comparison with the Inequality Operator
////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Comparison with the Greater Than Operator
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Comparison with the Greater Than or Equal to Operator
////////////////////////////////////////////////////////////



/////////////////////////////////////////////////
// Comparison with the Less Than Operator
/////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Comparison with the Less Than or Equal to Operator
////////////////////////////////////////////////////////////



/////////////////////////////////////////////////
// Comparison with the Logical "And" Operator 
/////////////////////////////////////////////////

// Or you can nest an If Statement



/////////////////////////////////////////////////
// Comparison with the Logical "Or" Operator 
/////////////////////////////////////////////////



/////////////////////////////////////////////////
// Else Statements
/////////////////////////////////////////////////


/////////////////////////////////////////////////
// Else If Statements
/////////////////////////////////////////////////

// A way of chaining if statements together

/////////////////////////////////////////////////
// Logical Order in If Else Statements
/////////////////////////////////////////////////

// Once the first condition is met, it does not check for the remaining conditions.


/////////////////////////////////////////////////
// Chaining If Else Statements
/////////////////////////////////////////////////


///////////////////////////////////
// Golf Code (Golf related game)
///////////////////////////////////



///////////////////////////////////
// Switch Statements
///////////////////////////////////

function caseInSwitch(val) {
    var answer = ''

    switch(val) {
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "mega"
            break
        case 3: 
            answer = "omega"
            break
        case 4:
            answer = 'beta'
            break
    }
    return answer
}

console.log(caseInSwitch(2))



///////////////////////////////////////
// Default Option in Switch Statements
///////////////////////////////////////


function caseInSwitch2(val) {
    var answer = ''

    switch(val) {
        case 'a':
            answer = "alpha"
            break
        case 'b':
            answer = "mega"
            break
        case 'c': 
            answer = "omega"
            break
        case 'd':
            answer = 'beta'
            break

        // default is like the else statement
        default:
            answer = 'stuff'
            break;
    }
    return answer
}

console.log(caseInSwitch2(3))


/////////////////////////////////////////////////////
// Multiple Identical Options in Switch Statements
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
// Replacing If Else Chains with Switch
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
// Returning Boolean Values from Functions
/////////////////////////////////////////////////////

// all comparison operators return a boolean value (true of false)


/////////////////////////////////////////////////////
// Returning Early Pattern from Functions
/////////////////////////////////////////////////////


///////////////////////
// Counting Cards (???)
///////////////////////



/////////////////////////////////////////



///////////////////////
// Build JS Objects
///////////////////////

// Ps. Objects can be seen as a key value storage, like a dictionary.

let jsObject = {
    'name': 'Germano Kuerten',
    'age': 34, 
}

console.log(jsObject.age)

//////////////////////////////////////////////////
// Accessing Object Properties with Dot Notation
//////////////////////////////////////////////////


//////////////////////////////////////////////////
// Accessing Object Properties with Bracket Notation
//////////////////////////////////////////////////

let testObject = {
    'name': 'Joe',
    'his age': 55,
}

console.log(testObject['his age'])


//////////////////////////////////////////////////
// Accessing Object Properties with Variables
//////////////////////////////////////////////////





//////////////////////////////////////////////////
// Testing Objects for Properties
//////////////////////////////////////////////////

// hasOwnProperty()   a JS method

var myObj = {
    gift: "pony",
    pet: "dog",
    bed: "firm",
}

function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "not found"
    }
}

console.log(checkObj("hello"))



//////////////////////////////////////////////////
// Testing Objects for Properties
//////////////////////////////////////////////////













/////////////////////////////////////////

// let sumTest = 0  
// function addFive() {
//     return sumTest += 5
// }

// console.log(addFive())



// console.log( 2!==2 )