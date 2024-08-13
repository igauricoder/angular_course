const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// 1. Find the total elements or length and log on console
console.log("Total elements:", arrayNumbers.length);

// 2. Log the first and last element
console.log("First element:", arrayNumbers[0]);
console.log("Last element:", arrayNumbers[arrayNumbers.length - 1]);

// 3. Log the third last element using length property
console.log("Third last element:", arrayNumbers[arrayNumbers.length - 3]);

// 4. Find all even numbers using for...of loop
console.log("Even numbers:");
for (const number of arrayNumbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// 5. Find all odd numbers using for...of loop
console.log("Odd numbers:");
for (const number of arrayNumbers) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}

// 9. Find the numbers which are multiple of 5
console.log("Numbers multiple of 5:");
for (const number of arrayNumbers) {
  if (number % 5 === 0) {
    console.log(number);
  }
}

// 10. Is number 115 available in arrayNumbers?
console.log("Is 115 available?", arrayNumbers.includes(115));

// 11. Is number 23 available in arrayNumbers?
console.log("Is 23 available?", arrayNumbers.includes(23));

// 12. Insert numbers 55, 66 at index 3
arrayNumbers.splice(3, 0, 55, 66);
console.log("Array after inserting 55 and 66:", arrayNumbers);

// 13. Delete 3 elements starting from index 4
arrayNumbers.splice(4, 3);
console.log("Array after deleting 3 elements:", arrayNumbers);
