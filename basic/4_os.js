// run this file : node basic/4_os

const os = require('os');

// platform
console.log(os.platform());

// cpu architecture
console.log(os.arch());

// cpu core info
console.log(os.cpus());

// fere memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir());

// host
console.log(os.hostname());

// uptime
console.log(os.uptime());

