// run this file : node basic/3_fs_or_file_system

const fs = require('fs');
const path = require('path');

// asyncronous make dir
// recursive var untuk membuat folder dan semua sub folder
fs.mkdir(path.join(__dirname, 'test'), {recursive : false}, err => {
    // if(err) throw err;
    if(err) console.log(err);

    console.log('-folder created');
});

// asyncronous create and write to file (overwrite)
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), data = 'Hello world!', err => {
    // if(err) throw err;
    if(err) console.log(err);

    console.log('-file writed');
});

// asyncronous create, write and append data to file 
fs.appendFile(path.join(__dirname, 'test', 'opo.txt'), data = '\napped', (err, data) => {
    // if(err) throw err;
    if(err) console.log(err);

    console.log('-file append');
});

// asyncronous read data on file 
// utf-8 digunakan agar data berisi data file, bukannya buffer data
fs.readFile(path.join(__dirname, 'test', 'opo.txt'), 'utf-8', (err, data) => {
    // if(err) throw err;
    if(err) console.log(err);

    console.log(data); 
});

// asyncronous rename file 
fs.rename(path.join(__dirname, 'test', 'opo.txt'), path.join(__dirname, 'test', 'opo_ren.txt'), err => {
    // if(err) throw err;
    if(err) console.log(err);

    console.log('-file renamed'); 
})