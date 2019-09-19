#!/usr/bin/node

console.log('process id:',process.pid);
process.stdin.resume();
process.on('SIGINT',()=>{
  console.log('you process ctrl+c or kill -2');
  process.exit();
})

process.on('STGTSTP',()=>{
  console.log('you proess ctrl+z,stop running');
  process.exit();
})

