const fs = require('fs');

// Asynchronous append
fs.appendFile('myFile.txt', 'This is new content.', (err) => {
  if (err) throw err;

  console.log('Content appended successfully.');
});

// Synchronous append
fs.appendFileSync('myFile.txt', 'More content');
console.log('Content appended successfully.');