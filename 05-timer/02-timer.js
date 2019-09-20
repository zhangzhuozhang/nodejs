#!/usr/bin/node

console.log('start...');

const timeId = setInterval(loop,500);
timeId.unref();

function loop(){
  console.log('I will loop forever!');
}

setTimeout(()=>{
  console.log('game over!');
},5000);
