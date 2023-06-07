// I) IF/ELSE
console.log("----------------------");

// 1.1) One condition
var age = 14;

if(age < 18) {
  console.log("You are very young");
}

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// 1.2) Multiple conditions
if (age >= 18) {
  console.log("You are eligible to vote");
} else if (age >= 16) {
  console.log("You can participate in some elections");
} else if (age >= 13) {
  console.log("You can't vote yet, but you can express your opinion");
} else {
  console.log("You are too young to vote or participate in elections");
}

// 1.3) Nesteed Conditions
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  if (age >= 16) {
    console.log("You can participate in some elections");
  } else {
    if (age >= 13) {
      console.log("You can't vote yet, but you can express your opinion");
    } else {
      console.log("You are too young to vote or participate in elections");
    }
  }
}

// II) Truthy and Falsy Values in IF/Else
console.log("----------------------");

var a = true; // => truthy value
var b = undefined; // => falsey value
var c = null; // => falsey value
var d = 2; // => truthy value
var e = "hello"; // => truthy value

if (a) {
  console.log("a is truthy");
} else {
  console.log("a is falsey");
}
if(b) {
  console.log("b is truthy");
} else {
  console.log("b is falsey");
}
if(c) {
  console.log("b is truthy");
} else {
  console.log("b is falsey");
}
if(d) {
  console.log("d is truthy");
} else {
  console.log("d is falsey");
}


// III) NOT operator (!)
console.log("----------------------");


if(!c) { // => !c = !null => !false = true
  console.log("c is falsey");
}
else{
  console.log("c is truthy");
}
if(!d) { // => !d = !2 => !true = falsea
  console.log("d is falsey");
}
else{
  console.log("d is truthy");
}
// ... same with others

// IV) Ternary Operator
console.log("----------------------");
var isRaining = true;
var accessory = (isRaining ? "umbrella" : "sunglasses");
console.log(accessory);

var age = 14;
var canVoteMessage = (age >= 18 ? "You can vote" : "You can't vote");
console.log(canVoteMessage);


var isRainingNextDay = true;
var accessoryNextDay;
if(isRainingNextDay) {
  accessoryNextDay = "umbrella";
} else {
  accessoryNextDay = "sunglasses";
}
console.log(accessoryNextDay);

// V) Switch Statement
console.log("----------------------");
let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("Selected fruit: apple");
    break;
  case "banana":
    console.log("Selected fruit: banana");
    break;
  case "orange":
    console.log("Selected fruit: orange");
    break;
  default:
    console.log("Unknown fruit");
}
