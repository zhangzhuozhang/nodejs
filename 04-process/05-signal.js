#!/usr/bin/node

process.on('SIGINT',()=>{
  console.log('you process ctrl+c or kill -2');
  process.exit
})

process.on('STGTSTP',()=>{
  console.log('you proess ctrl+z');
})

process.stdin.resume();


