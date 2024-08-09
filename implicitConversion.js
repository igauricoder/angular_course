// Demonstrating implicit conversion to strings using the + operator

let result;

// Numeric string concatenated with a number
result = '3' + 2;
console.log(result); // Output: "32"

// Numeric string concatenated with a boolean
result = '3' + true;
console.log(result); // Output: "3true"

// Numeric string concatenated with undefined
result = '3' + undefined;
console.log(result); // Output: "3undefined"

// Numeric string concatenated with null
result = '3' + null;
console.log(result); // Output: "3null"
