#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process id:',process.pid)
/*
var child = cp.fork('cat',['04-fork.js']);

child.stdout.pipe(process.stdout);
*/

var child = cp.fork('./02-child.js');

global.setTimeout(function(){
 // console.log('father bye!');
 // process.exit();
 child.send('Hello, i am your father');
},5000);

