// I) Numbers Operations
console.log("----------------------");
var x;
var y;

// Addition (+)
y = 5;
x = y + 2;
console.log(x); // Output: 7

// Subtraction (-)
x = y - 2;
console.log(x); // Output: 3

// Multiplication (*)
x = y * 2;
console.log(x); // Output: 10

// Exponentiation (**) - ES2016
x = y ** 2;
console.log(x); // Output: 25

// Division (/)
x = y / 2;
console.log(x); // Output: 2.5

// Remainder or Modulus (%)
x = y % 2;
console.log(x); // Output: 1

// Pre-increment (++)
x = y++;

// Same as above
// x = y;
// y = y + 1;

console.log(x); // Output: 5
console.log(y); // Output: 6

// Post-increment (++)
x = ++y;

// Same as above
// y = y + 1;
// x = y;

console.log(x); // Output: 7
console.log(y); // Output: 7

// Pre-decrement (--)
x = y--;

// Same as above
// x = y;
// y = y - 1;

console.log(x); // Output: 7
console.log(y); // Output: 6

// Post-decrement (--)
x = --y;

// Same as above
// y = y - 1;
// x = y;

console.log(x); // Output: 5
console.log(y); // Output: 5

// II) Casting
console.log("----------------------");

// 2.1) Converting a string to a number
var str = "42"
var parsed_str = parseInt(str);
console.log(str); // => 42
console.log(parsed_str); // => 42
console.log(typeof str); // => "string"
console.log(typeof parsed_str); // => "number"

// 2.2) Converting a number to a string
var num = 24;
var parsed_num = num.toString();
console.log(num); // => 24
console.log(parsed_num); // => "24"
console.log(typeof num); // => "number"
console.log(typeof parsed_num); // => "string"

// III) NaN
console.log("----------------------");
var result_1 = "Hello" / 5;
var result_2 = "Hello" / 0;
console.log(result_1); // Output: NaN
console.log(result_2); // Output: NaN

// IV) Assignment Operators
console.log("----------------------");

var num_1 = 5;
var num_2 = 3;

num_1 += num_2; // same as: num_1 = num_1 + num_2;
console.log(num_1); // Output: 8

var num_3 = 4;
var num_4 = 7;

num_3 -= num_4; // same as: num_3 = num_3 - num_4;
console.log(num_3); // Output: -3
