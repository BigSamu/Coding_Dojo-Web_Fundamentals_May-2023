// I) Boolean function

// 1.1) Greater than (>)
console.log(Boolean(10 > 9)); // => true
console.log(Boolean(10 > 19)); // => false

// The same as above
console.log(10 > 9); // => true
console.log(10 > 19); // => false

console.log("----------------------");

// 1.2) Equal to (==)
console.log(10 == 10); // => true
console.log(10 == 19); // => false

console.log("----------------------");

// 1.3) Less than (<)
console.log(10 < 9); // => false
console.log(10 < 19); // => true


console.log("----------------------");

// 1.4) Greater than or equal to (>=)
console.log(10 >= 10); // => true
console.log(10 >= 19); // => false


console.log("----------------------");

// 1.5) Less than or equal to (<=)
console.log(10 <= 10); // => true
console.log(10 <= 9); // => false


// II) Truthy Values (true, 1, "string", {}, [], function(){})
console.log("----------------------");

console.log(Boolean(true)); // Output: true
console.log(Boolean(1)); // Output: true
console.log(Boolean("string")); // Output: true
console.log(Boolean({})); // Output: true
console.log(Boolean([])); // Output: true
console.log(Boolean(function(){})); // Output: true

// III) Falsy Values (false, undefined, null, 0, NaN, "")
console.log("----------------------");

console.log(Boolean(false)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean(NaN)); // Output: false
console.log(Boolean("")); // Output: false
