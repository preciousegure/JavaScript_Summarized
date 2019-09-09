//Chapter Two

/** Welcome to chapter two! This book (JavaScript Notes for Professionals) has been summarized to suit people who are just beginning javascript 
and not bore you with concepts you might not neccessarily make use of. */

//JavaScript Variables

/**What is a JavaScript Variable?
 *
 * Permit me to paint for you a metaphor.
 *
 * Imagine you a little child with no name and you need to send the child an errand.
 *
 * Now, Imagine the child is sitting next to other children and you need to call him. how would you do that ?
 *
 * A JavaScript Variable or Binding is like a name given to JavaScript data so as to be able to call it that name when need arise.
 *
 * To name a JavaScript data (raw fact onto which computer work to give out meaningful information.), JavaScript provides us with 3 reserved keywords.
 *
 * 1.) Var
 * 2.) Let
 * 3.)COnst
 *
 * NOw, let's see them in action.
 */

var name = "Precious"; //You can replace "Precious" with your name in double quotes!

//from chapter one lesson we can now log name to our browser console.

console.log(name);

//What is your output? and same goes for the other two keywords.

const PI = 3.14; //A constant whose value can not change
let age = 23; //Same as var keyword with a some difference which are not necessary for now. Let is however encouraged.

//You can see we basically use a variable to hold a value. Let's see a variable in use in mathematics.

let number1 = 30000000;
let number2 = 10000000;

let result = number1 + number2; //Now imagine you need to use number1 and number3 in many different calculations. Notice you do not have to keep typing 30000000 and 10000000 all the time.
console.log(result);

//VARIABLE TYPES IN JAVASCRIPT

var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myBoolean = true; // 1-bit true/false (0 or 1)
var myBoolean2 = false;
var myNotANumber = NaN;
var NaN_Example = 0 / 0; // NaN: Division by Zero is not possible
var notDefined; // undefined: we didn't define, Every non-initialized varible is undefined.

var myArray = []; // empty array
// An array is a set of variables. For example:

var favoriteFruits = ["apple", "orange", "strawberry"];
var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var randomVariables = [2, "any type works", undefined, null, true, 2.51];
var myArray = ["zero", "one", "two"];
alert(myArray[0]); // 0 is the first element of an array
// in this case, the value would be "zero"
var myArray = ["John Doe", "Billy"];
var elementNumber = 1;
alert(myArray[elementNumber]); // Billy

//An object is a group of values, sets of key-value pairs; unlike arrays, we can do something better than them:
var myObject = {};
var john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };
var billy = {
  firstname: "Billy",
  lastname: undefined,
  fullname: "Billy"
};
alert(john.fullname); // John Doe
alert(billy.firstname); // Billy
// Rather than making an array ["John Doe", "Billy"] and calling myArray[0] , we can just call john.fullname and billy.fullname .
