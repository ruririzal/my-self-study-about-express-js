// run this file : node basic/2_path_demo

const path = require('path');

// base filename
console.log( path.basename(__filename));

// directory name 
console.log( path.dirname(__filename));
console.log(__dirname);

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concate path 
// untuk membuat dan menggabungkan delimiter path folder secara otomatis menyesuaikan dengan sistem operasi yang digunakan (windows menggunakan '\' sedangkan linux menggungkan '/')
console.log(path.join(__dirname, 'sd', 'fsds'));