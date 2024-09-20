const os = require('os');

console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());



// Get information about the operating system
const osInfo = {
    architecture: os.arch(),
    cpus: os.cpus(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
    uptime: os.uptime(),
    userInfo: os.userInfo()
  };
  
  // Print the operating system information
  console.log(osInfo);