// Function to calculate the square of the word length
function squareOfWordLength(word) {
    const length = word.length;
    const square = length * length;
    return square;
  }
  
  // Invoke the function for different words
  console.log(`Square of "JavaScript" length: ${squareOfWordLength("JavaScript")}`);
  console.log(`Square of "Google Chrome" length: ${squareOfWordLength("Google Chrome")}`);
  console.log(`Square of "Web Developer Smart" length: ${squareOfWordLength("Web Developer Smart")}`);
  
  // Function with no arguments and no return value
  function processString() {
    const str = "I am Angular Developer";
    const wordCount = str.split(" ").length;
    const length = str.length;
  
    // Calculate and log the average length per word
    const averageLength = length / wordCount;
    console.log(`Average length per word: ${averageLength}`);
  
    // Calculate and log the total length multiplied by word count
    const totalLength = length * wordCount;
    console.log(`Total length multiplied by word count: ${totalLength}`);
  }
  
  // Call the function
  processString();
  