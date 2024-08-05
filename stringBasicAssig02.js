function stringHandsOn() {
    const givenString = "    Hey you are doing good, keep it up    ";

    // Step 1: Print the string as it is on console
    console.log(`Given string: "${givenString}"`);

    // Step 2: Calculate length of the string
    const originalLength = givenString.length;
    console.log(`Length of the original string is: ${originalLength}`);

    // Step 3: Remove leading and trailing extra spaces and log string on console with its length
    const trimmedString = givenString.trim();
    console.log(`Trimmed string: "${trimmedString}"`);
    console.log(`Length of trimmed string: ${trimmedString.length}`);

    // Step 4: Print the total number of extra spaces count that is removed in step 3
    const extraSpacesCount = originalLength - trimmedString.length;
    console.log(`Total number of extra spaces removed: ${extraSpacesCount}`);

    // Step 5: Print the first and last character on the same line after trim()
    const firstChar = trimmedString.charAt(0);
    const lastChar = trimmedString.charAt(trimmedString.length - 1);
    console.log(`First and last character after trim: "${firstChar}", "${lastChar}"`);

    // Step 6: Print the count of total words available in the string after step 3
    const wordCount = trimmedString.split(/\s+/).length;
    console.log(`Total number of words in trimmed string: ${wordCount}`);

    // Step 7: Print the index of word "good" from the given string
    const indexGood = trimmedString.indexOf("good");
    console.log(`Index of the word "good": ${indexGood}`);

    // Step 8: Print the substring starting from index 22, using substring()
    const substringFrom22 = trimmedString.substring(22);
    console.log(`Substring starting from index 22: "${substringFrom22}"`);

    // Step 9: Check if string ends with the word "up" after step 3
    const endsWithUp = trimmedString.endsWith("up");
    console.log(`Does the string end with "up"? ${endsWithUp}`);

    // Step 10: Check if string starts with the word "Hey" after trimming
    const startsWithHey = trimmedString.startsWith("Hey");
    console.log(`Does the string start with "Hey"? ${startsWithHey}`);
}

// Call the function to execute it
stringHandsOn();
