// I) Length Property
console.log("----------------------");

var firstName = "Paula";
console.log(firstName.length); // 4

// II) Character Access
console.log("----------------------");

// 2,1) Indexing

// string:  P a u l a -> lenght = 6
// index:   0 1 2 3 4

console.log(firstName[0]); // => "P"
console.log(firstName[1]); // => "a"
var len = firstName.length;
console.log(len); // => 4
console.log(firstName[firstName.length-1]); // => "a"

// 2.2) Substring method
// Example: Print all characters starting at index 1
console.log(firstName.substring(1)); // => "aula" -> get all characters starting at index 1
console.log(firstName.substring(1,3)); // => "au" -> get all characters starting at index 1 and ending at index 3 (not included)

// III) Case Manipulation
console.log("----------------------");
// 3.1) toUpperCase method
console.log(firstName.toUpperCase());
// 3.2) toLowerCase method
console.log(firstName.toLowerCase());

// IV) Split
console.log("----------------------");
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var months = monthString.split(",");
console.log(months) // => [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
console.log(months.length); // => 12

// v) Interpolation
console.log("----------------------");

var otherFirstName = "Ringo";
var otherLastName = "Starr";

// 5.1) String Concatenation
var fullName = otherFirstName + " " + otherLastName;
console.log(fullName); // => "Ringo Starr"
var messageStringConcat = otherFirstName + " " + otherLastName + " is a drummer";
console.log(messageStringConcat); // => "Ringo Starr is a drummer"

// 5.2) Template Literals (preferred way)
var fullName_2 = `${otherFirstName} ${otherLastName}`;
console.log(fullName_2); // => "Ringo Starr"
var messageTemplateLiteral_2 = `${otherFirstName} ${otherLastName} is a drummer`;
console.log(messageTemplateLiteral_2); // => "Ringo Starr is a drummer"

// V) Assignment Operator
console.log("----------------------");
var message = "Hello";
message += " World"; // same as: message = message + " World";
console.log(message); // => "Hello World"
