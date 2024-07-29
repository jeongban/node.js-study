const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('../Day02/readme.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
