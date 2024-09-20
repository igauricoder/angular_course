const fs = require('fs');

fs.writeFile('myFile.txt', 'Some content', (err) => {
  if (err) throw err;

  console.log('File created successfully.');

  fs.unlink('myFile.txt', (err) => {
    if (err) throw err;

    console.log('File deleted successfully.');
  });
});