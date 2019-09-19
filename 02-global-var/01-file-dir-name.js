#!/usr/bin/node

console.log('dir name:',__dirname);
console.log('file name:',__filename);


//var filename = __dirname+'/views/view.html';

const path =require('path');
fileName = path.join(__dirname,'views','view.html');
console.log('fileName:',fileName);






