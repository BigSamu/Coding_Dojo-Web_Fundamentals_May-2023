// I) CRUD Operations

console.log("----------------------");
var fruits = ["Banana", "Orange", "Mango"]; // Create (add items at the beginning)

// Array: ["Banana", "Orange", "Mango"] -> Length: 3
// Index:    0         1         2
console.log(fruits); // Read (all) -> ["Banana", "Orange", "Mango"]
console.log(fruits[0]); // Read (one) -> "Banana"
fruits.push("Apple"); // Update (add items at the end)
console.log(fruits); // Read (all) -> ["Banana", "Orange", "Mango", "Apple"]

console.log(fruits[0]); // Read (1st item) -> "Banana"
console.log(fruits[1]); // Read (2nd item) -> "Orange"

// Array: ["Banana", "Orange", "Mango", "Apple"] -> Length: 4
// Index:    0         1         2         3
console.log(fruits[fruits.length - 1]); // Read (last item) -> "Apple"

fruits[0] = "Kiwi"; // Update (1st item)
console.log(fruits); // Read (all) -> ["Kiwi", "Orange", "Mango", "Apple"]

fruits.pop(); // Delete (last item)
console.log(fruits); // Read (all) -> ["Kiwi", "Orange", "Mango"]
var extractedFruits = fruits.splice(0, 1); // Delete -> Take out everything between index 0 and 1 (not include)
console.log(extractedFruits); // ["Kiwi"]
console.log(fruits); // Read (all) -> ["Orange", "Mango"]

// II) FOREACH
console.log("----------------------");
var moreFruits = ["Banana", "Orange", "Mango", "Apple"];
moreFruits.forEach((item) => {
  console.log(item);
});

// III) FOOR LOOP
console.log("----------------------");
for (let i = 0; i < moreFruits.length; i++) {
  console.log(moreFruits[i]);
}

