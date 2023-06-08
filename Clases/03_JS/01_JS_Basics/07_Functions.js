// I) Old Way (function keyword)
console.log("----------------------");

function square(x){
  var output = x*x;
  return output;
}

console.log(square(2)); // => 4
console.log(square(10)); // => 100

function sum(x,y){
  var output = x+y;
  return output;
}
console.log(sum(2,3)); // => 4
console.log(sum(10,5)); // => 100

// II) New Way (arrow function)
console.log("----------------------");

// 2.1) Not using the "return" keyword
var squareArrowOne = (x) => {
  return x*x
}

// 2.2) Not Using the "return" keyword (one line function)
var squareArrowTwo = (x) => x*x

console.log(squareArrowOne(10)); // => 100
console.log(squareArrowOne(10)); // => 100

// III) Functions Example with Capitalize

function capitalize(word){
  // word -> hEllO
  // word[0] -> h
  // word[1] -> E
  // ...
  // word[word.length-1] -> O
  // word.slice(1)-> EllO
  var firstLetter = word[0].toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  // return firstLetter + restOfWord;
  return `${firstLetter}${restOfWord}`;
}

console.log(capitalize("joHn")); // => "John"
console.log(capitalize("pAul")); // => "Paul"

// IV) Return Statement

function example(a,b){
  if(a>10){
    var sum = a;
    return sum; // If reached this line, exit from function. Code below will not be executed
  }
  var sum = a+b;
  return sum;
}

console.log(example(2,3)); // Output: 5
console.log(example(20,3)); // Output: 20
