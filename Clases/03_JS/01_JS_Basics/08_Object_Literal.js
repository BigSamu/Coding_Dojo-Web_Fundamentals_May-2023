
// I) Object Literal
console.log("----------------------");

var student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student); // => "object"
console.log(student); // => { firstName: "Boris", lastName: "Paillard" }

// II) Reading/Setting Properties
console.log("----------------------");

// 2.1) Reading
var something = "lastName";
console.log(student.firstName); // => "Boris"
console.log(student['firstName']); // => "Boris"
console.log(student[something]); // => "Paillard"
something = "firstName";
console.log(student[something]); // => "Boris"

// 2.2) Setting
student.firstName = "Romain";
console.log(student.firstName); // => "Romain"
student['lastName'] = "Gutierrez";
console.log(student.lastName); // => "Gutierrez"
student[something] = "Boris";
console.log(student[something]); // => "Boris"
