// 1. Find the greatest number amongst two numbers
function greaterNumber(num1, num2) {
  console.log(`Comparing ${num1} and ${num2}`);
  const greatest = num1 > num2 ? num1 : num2;
  console.log(`The greatest number is ${greatest}`);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

// 2. Check if a number is even or odd
function isEvenOrOddNum(num) {
  const result = num % 2 === 0 ? "even" : "odd";
  console.log(`${num} is ${result}`);
  return result === "even";
}

isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

// 3. Check which word has even or odd length
function wordLength(word) {
  const length = word.length;
  const result = length % 2 === 0 ? "EVEN" : "ODD";
  console.log(`${word} has ${result} length`);
  return result;
}

wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
