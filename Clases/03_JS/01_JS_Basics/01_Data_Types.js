// I) Basic Data Types (Primitives Data Types) -> String, Number, Boolean
console.log("----------------------");

console.log("Hello Coding Dojo"); // "Hello Coding Dojo"
console.log(42); // 42
console.log(3.14); // 3.14
console.log(true); // true
console.log(false); // false

console.log(typeof "Hello Coding Dojo"); // "string"
console.log(typeof 42); // "number"
console.log(typeof 3.14); // "number"
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"

// II) Data Structures (Non-Primitives Data Types) -> Array, Object
console.log("----------------------");

// 2.1) Arrays
console.log(["Hello", "Coding", "Dojo"]); // ["Hello", "Coding", "Dojo"]
console.log([1,2,3,4]) // [1,2,3,4]
console.log([true, false, true, false]) // [true, false, true, false]
console.log(["Hello", 42, true, 3.14])  // ["Hello", 42, true, 3.14]

console.log(typeof ["Hello", "Coding", "Dojo"]); // "object" => Represents an Array Object
console.log(typeof [1,2,3,4]) // "object" => Represents an Array Object
console.log(typeof [true, false, true, false]) // "object" => Represents an Array Object
console.log(typeof ["Hello", 42, true, 3.14])  // "object" => Represents an Array Object

// 2.2) Objects Literals (Key-Value Pairs)
console.log({ "name": "bob", "age": 42, "city": "santiago", "adult": false }); // { "name": "bob", "age": 42, "city": "santiago", "adult": false }
console.log(typeof { "name": "bob", "age": 42, "city": "santiago", "adult": false }); // "object" => Represents an Object Literal

// III) Null & Undefined (Special Primitive Data Types)
console.log("----------------------");

// Udefined => represents an uninitialized variable
// Null => represents an intentional absence of value or a "nothing" value

console.log(undefined); // undefined
console.log(typeof undefined); // "undefined"
console.log(null); // null
console.log(typeof null); // "object" -> bug in JS (tretaed as an object for historical error). It's a primitive data type
