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
// Manipulating Complex Objects
//////////////////////////////////////////////////

let myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

let gloveBoxContents = myStorage.car.inside["glove box"]

console.log(gloveBoxContents)


//////////////////////////////////////////////////
// Accessing Nested Arrays
//////////////////////////////////////////////////

// Array bracket notation can be changed to access nested arrays.

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion",
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

let myPlantsValue = myPlants[1].list[0]

console.log(myPlantsValue)


//////////////////////////////////////////////////
// Record Collection
//////////////////////////////////////////////////

let collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
        "artist": "Charlie Brown Jr"
    }
}

// fancy way of creating a copy of the objects
// let collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords (number, prop, value) {
    if (value === "") {
        collection[number][prop]
    } else if (prop === "tracks") {
        collection[number][prop] = collection[number][prop] || []
        collection[number][prop].push(value)
    } else {
        collection[number][prop] = value
    }
    return collection
}

console.log(collection)

updateRecords(5439, "artist", "Natiruts",)
console.log(collection)


/////////////////////////////////////////


//////////////////////////////////////////////////
// Iterate with While Loops
//////////////////////////////////////////////////

// Ps. Loops allow you to run the same code multiple times

// ps. A while loop runs while a specified condition remains true (stops when it's no longer true)

let myArray = []

let i = 0
while (i <= 5) {
    myArray.push(i)
    i++
}

console.log(myArray)

//////////////////////////////////////////////////
// For Loop
//////////////////////////////////////////////////

// ps. For loop is the most common type of loop in JS

let ourArrayLoopEx = []

for (let i = 0; i <= 5; i++) {
    ourArrayLoopEx.push(i)
}

console.log(ourArrayLoopEx)


//////////////////////////////////////////////////
// Iterate Even and Odd Numbers with a For Loop
//////////////////////////////////////////////////

// Even

let arrayEven = []

for ( let i = 0; i <= 10; i += 2) {
    arrayEven.push(i)
}

console.log(arrayEven);

// Odd

let arrayOdd = []

for (let i = 1; i <= 10; i += 2) {
    arrayOdd.push(i)
}

console.log(arrayOdd);



//////////////////////////////////////////////////
// Count Backwards with a For Loop
//////////////////////////////////////////////////

let arrayBackwards = []
                        // or i -= 2
for (let i = 10; i > 0; i--) {
    arrayBackwards.push(i)
}

console.log(arrayBackwards)


//////////////////////////////////////////////////
// Iterate Through an Array with a For Loop
//////////////////////////////////////////////////

let ourArr = [ 1, 2, 3, 4, 5 ]
let total = 0

for (let i = 0; i < ourArr.length; i++) {
    total += ourArr[i]
}

console.log(total)



/////////////////////////////////////////////////
// Nesting for Loops
//////////////////////////////////////////////////

// Multi dimensional Array: An Array that has Arrays inside of it.

// I am not so clear of how each step happens.

function multiply2(arr) {
    let product = 1

    for (let i = 0; i < arr.length; i++) {
        // console.log("i is: " + i)

        for (let j = 0; j < arr[i].length; j++)
        

        // console.log("j is: " + j)
        product *= arr[i][j]
    }
    
    console.log(product)
    return product;
   
}

let product2 = multiply2([[1, 2, 10], [1, 1], [1, 1 ,1], [2]])

console.log("final product is: " + product2)


/////////////////////////////////////////////////
// Iterate with Do... While Loops
//////////////////////////////////////////////////

// before with simple while loop.

let myArrayTest1 = [];
let y = 10;

while (y < 10) {
    myArrayTest1.push(y);
    y++
}

console.log("while loop test: " + y, myArrayTest1)

// with Do...

do {
    myArrayTest1.push(y)
    y++
} while (y < 10)

console.log("while loop test: " + y, myArrayTest1)


/////////////////////////////////////////////////
// Profile Lookup
//////////////////////////////////////////////////


let contacts = [
    {
        'firstName': 'Germano',
        'lastName': 'Kuerten',
        'number': '12345'
    },
    {
        'firstName': 'Andre',
        'lastName': 'Kuerten',
        'number': '123456'
    }
]

function lookupProfile(name, property) {
    for (let i = 0; i < contacts.length; i++) {
        let firstName = contacts[i].firstName.toLocaleLowerCase()
        if (firstName === name.toLowerCase()) {
            return contacts[i][property] || "No such property"
         } 
    }
    return "No such contact"

}

let data2 = lookupProfile('germano', 'lastName')

console.log(data2)




/////////////////////////////////////////////////

// Random Fractions and Whole Numbers




/////////////////////////////////////////////////
// Generate Random Fractions
//////////////////////////////////////////////////

function randomFraction() {

    return Math.random()
}

let randomF = randomFraction()

console.log(randomF)



/////////////////////////////////////////////////
// Generate Random Whole Numbers
//////////////////////////////////////////////////

function randomWholeNum() {

    return Math.floor(Math.random() * 100)
}

console.log(randomWholeNum())


/////////////////////////////////////////////////
// Generate Random Whole Numbers within a Range
//////////////////////////////////////////////////

function ourRandomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(ourRandomRange(1, 1000))




//////////////////////////////////////////////////



/////////////////////////////////////////////////
// parseInt Function
//////////////////////////////////////////////////

// It takes a String and it returns an Integer

function fromStringToInt(string) {
    return parseInt(string)
}

console.log(fromStringToInt("35"))


/////////////////////////////////////////////////
// parseInt Function with a Radix
//////////////////////////////////////////////////

// The radix specifies the base of the number in the string

// Ex: base 2 would be binary

function convertToInteger (str) {
    return parseInt(str, 2)
}

console.log(convertToInteger("10101011"))




//////////////////////////////////////////////////



/////////////////////////////////////////////////
// Use the Conditional (Ternary) Operator
//////////////////////////////////////////////////

// condition ? statement-if-true : statement-if-false
// (condition) ? (if true, do this) : (otherwise, do this)

function checkEqual (a, b, c) {
    console.log("c is: " + c)
    return a + b === c ? a + " and " + b + " is equal to " + c : a + " and " + b + " is not equal to " + c
}

console.log(checkEqual(1, 1, 3))


/////////////////////////////////////////////////
// Use Multiple Conditional (Ternary) Operators
//////////////////////////////////////////////////

function checkSign(num) {
    return num < 0 ? 'negative' : num > 0 ? 'positive' : 'number is zero'
}

console.log(checkSign(1))


//////////////////////////////////////////////////



/////////////////////////////////////////////////
// Differences Between the var and let keywords
//////////////////////////////////////////////////

// var
var catName = "Mano"
var catName = "Andre"

// let
let dogName = "Mano"
dogName = "Andre"

console.log(catName)

// "use strict"  // enables "strict mode", stricts so that you must use keyword to declare variable.
function catTalk() {
    "use strict"

    catName = "Oliver"
    let quote = catName + " says Meow!"
}

catTalk()


/////////////////////////////////////////////////
// Compare Scopes of the var and let Keywords
//////////////////////////////////////////////////

function checkScope() {
    "use strict"

    let i = 'function scope'
    if (true) {
        let i = 'block scope'
        console.log('Block scope i is: ', i)
    }
    console.log('Function scope i is: ', i)
    return i
}

checkScope()


///////////////////////////////////////////////////////
// Declare a Read-Only Variable with the const Keyword
///////////////////////////////////////////////////////

// const is read only, you cannot re-asign a const.
// it has all the features of let

function printManyTimes(str) {
    'use strict'

    let sentence = str + ' is awesome!'
    sentence = str + ' is cool!'

    for (let i = 0; i < str.length; i++) {
        console.log(sentence)
    } 
}

printManyTimes('Mano')



///////////////////////////////////////////////////////
// Mutate an Array Declared with const
///////////////////////////////////////////////////////

// You cannot reassign a variable declared witha a const, but you can mutate an array.
// You must do bracket notation in order to mutate.

const s = [5, 7, 2]

function editInPlace() {
    'use strict'

    s[0] = 1
    s[2] = 111
    s[3] = 99
    s[10] = 23
    console.log(s)
}

s[9] = 55

editInPlace()


///////////////////////////////////////////////////////
// Prevent Object Mutation
///////////////////////////////////////////////////////

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    }

    // Object.freeze() protects the variable object.
    Object.freeze(MATH_CONSTANTS)

    try {
        MATH_CONSTANTS.PI = 99
    } catch(ex) {
        // console.log(ex)
    }
    return MATH_CONSTANTS.PI
}

const PI = freezeObj();

console.log(PI);


///////////////////////////////////////////////////////
// Use Arrow Functions for Concise Anonymous Functions
///////////////////////////////////////////////////////

// reg anonymous function, assigned to variable magic
const magic = function() {
    return new Date()
}

// reg arrow function
const magic2 = () => {
    return new Date()
}

// arrow function with implicit or implied return
const magic3 = () => new Date()

console.log(magic3())


///////////////////////////////////////////////////////
// Write Arrow Functions with Parameters
///////////////////////////////////////////////////////

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2)
}

const myConcat2 = (arr1, arr2, arr3, obj1) => arr1.concat(arr2, arr3, obj1)

console.log(myConcat2([1, 2], [3, 4, 4], [10, 11], {I: 12}))


///////////////////////////////////////////////////////
// Write Higher Order Arrow Functions
///////////////////////////////////////////////////////

// Arrow functions work really well with higher order functions such as map, filter, and reduce

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2, -3, -1000000, 0]

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num <= 0).map(x => x + 100).filter(num => num > 0).map(x => x * 2).map(x => x + 'Hi')
    return squaredIntegers
}

const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers)

///////////////////////////////////////////////////////
// Default Parameter
///////////////////////////////////////////////////////

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value
    }
})()

console.log(increment(5, 2))
console.log(increment(5))



///////////////////////////////////////////


///////////////////////////////////////////////////////
// Use the Rest Operator with Function Parameters
///////////////////////////////////////////////////////

// REST OPERATOR

const sum99 = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
})()

console.log(sum99(1, 2, 3, 4, 1))


///////////////////////////////////////////////////////
// Use the Spread Operator to Evaluate Arrays In-Place
///////////////////////////////////////////////////////

// SPREAD OPERATOR

const arr123 = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
let arr2

let spreaOp = () => {
    arr2 = [...arr123]
    arr123[0] = 'potato'
}
spreaOp()

console.log(arr123)
console.log(arr2);


//////////////////////////////////////////////////////////////////
// Use Destructuring Assignment to Assign Variables from Objects
//////////////////////////////////////////////////////////////////

var voxel = {x1: 3.6,  y1: 7.4, z1: 6.54}

// older way of doing it
var x1 = voxel.x1   // x = 3.6  
var y1 = voxel.y1   // y = 7.4
var z1 = voxel.z1    // z = 6.54

// newer way with destructuring
const { x1 : a1234, y1 : b1234, z1 : c1234} = voxel // a = 3.6, b = 7.4, c = 6.54

console.log(a1234);


// 2nd example:

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTomorrow(avgTemperatures) {
    'use strict'

    const { today : tempOfTomorrow } = avgTemperatures

    return tempOfTomorrow
}

console.log(getTempOfTomorrow(AVG_TEMPERATURES))


//////////////////////////////////////////////////////////////////
// Destructuring Assignment with Nested Objects
//////////////////////////////////////////////////////////////////


const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
}

function getMaxOfTomorrow(forecast) {
    
    const {tomorrow : { max : maxOfTomorrow}} = forecast

    return maxOfTomorrow
}

// Ex: Example 2.

console.log(getMaxOfTomorrow(LOCAL_FORECAST));

function getMinOfToday(temp) {

    const { today : { min : getMinOfToday }} = temp

    return getMinOfToday
}

console.log(getMinOfToday(LOCAL_FORECAST));


//////////////////////////////////////////////////////////////////
// Use Destructuring Assignment to Assign Variables from Arrays
//////////////////////////////////////////////////////////////////

const [z2, x2, , y2] = [1, 2, 3, 4, 5, 6]
console.log(z2, x2, y2);

// 2nd example:

let a3 = 8, b3 = 5

function switchValues(){
    [a3, b3] = [b3, a3]
    return "a is: " + a3 + " and " + "b is: " + b3
}

console.log(switchValues())


//////////////////////////////////////////////////////////////////
// Use Destructuring Assignment with the Rest Operator
//////////////////////////////////////////////////////////////////

const sourceArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function removeFirstTwo(list) {

    const [a, b, ...arr] = list

    return arr
}

const newArr1 = removeFirstTwo(sourceArr)
console.log(sourceArr)
console.log(newArr1)


//////////////////////////////////////////////////////////////////
// Use Destructuring Assignment to Pass an Object as a Function's Parameters
//////////////////////////////////////////////////////////////////

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
}

const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0
    }
})()

console.log(stats)
console.log(half(stats))

///////////////////////////////////////////


//////////////////////////////////////////////////////////////////
// Create Strings using Template Literals
//////////////////////////////////////////////////////////////////

const person = {
    name: 'Andre',
    age: 28
}

// Template literal with multi-line and sting interpolation
const greeting = `Hello, my name is ${person.name}! I am ${person.age}`

console.log(greeting)


// Coding challenge:




///////////////////////////////////////////



// Stay committed

// let sumTest = 0  
// function addFive() {
//     return sumTest += 5
// }

// console.log(addFive())



// console.log( 2!==2 )