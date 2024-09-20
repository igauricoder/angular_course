const fs = require('fs');

// Asynchronous stat
fs.stat('myFile.txt', (err, stats) => {
  if (err) throw err;

  console.log('File: ' + stats.isFile());
  console.log('Directory: ' + stats.isDirectory());
  console.log('Size: ' + stats.size + ' bytes');
  console.log('Modified time: ' + stats.mtime);
});

// Synchronous stat
const stats = fs.statSync('myFile.txt');
console.log('File: ' + stats.isFile());
console.log('Directory: ' + stats.isDirectory());
console.log('Size: ' + stats.size + ' bytes');
console.log('Modified time: ' + stats.mtime);