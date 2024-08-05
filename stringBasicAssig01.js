function stringBasics() {
    // Step 1: Log the dream company name
    let dreamCompany = "Infosys"; // Replace this with your dream company name
    console.log(`My dream company is "${dreamCompany}"`);

    // Step 2: Create and log hobbies
    let hobby1 = "Reading"; // Replace with your hobby1
    let hobby2 = "Traveling"; // Replace with your hobby2
    let hobby3 = "Coding"; // Replace with your hobby3

    // Step 2.1: Log all hobbies on the same line
    console.log(`My Hobbies are: ${hobby1}, ${hobby2}, ${hobby3}`);

    // Step 2.2: Sum the total number of characters in all hobbies and log the result
    let totalCharacters = hobby1.length + hobby2.length + hobby3.length;
    console.log(`Total number of characters in hobbies: ${totalCharacters}`);
}

// Call the function to execute it
stringBasics();
