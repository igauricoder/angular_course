const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

// 1. Log the first and last element on console
console.log("First element:", fruits[0]);
console.log("Last element:", fruits[fruits.length - 1]);

// 2. Add element → Papaya before the element 'Banana' and then log array on console
fruits.unshift("Papaya");
console.log("Array after adding Papaya:", fruits);

// 3. Remove 'Mango' from the array
const indexMango = fruits.indexOf("Mango");
if (indexMango !== -1) {
  fruits.splice(indexMango, 1);
}
console.log("Array after removing Mango:", fruits);

// 4. Add element or insert an element 'Pineapple' at the last position
fruits.push("Pineapple");
console.log("Array after adding Pineapple:", fruits);

// 5. Insert an element - 'Dragon Fruit' before "Water Melon"
const indexWaterMelon = fruits.indexOf("Water Melon");
if (indexWaterMelon !== -1) {
  fruits.splice(indexWaterMelon, 0, "Dragon Fruit");
}
console.log("Array after adding Dragon Fruit:", fruits);

// 6. Replace an element 'Orange' with 'Kiwi'
const indexOrange = fruits.indexOf("Orange");
if (indexOrange !== -1) {
  fruits[indexOrange] = "Kiwi";
}
console.log("Array after replacing Orange with Kiwi:", fruits);

// 7. Log the elements starting from index 1 to 4
console.log("Elements from index 1 to 4:", fruits.slice(1, 5));

// 8. Only select last 3 element and log on console: Use the length property
console.log("Last 3 elements:", fruits.slice(-3));
