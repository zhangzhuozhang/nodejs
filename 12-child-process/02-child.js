#!/usr/bin/node

console.log('I am process id:%d',process.id);

global.setInterval(function(){
  console.log('Time is %d',Date.now());
},2000);

global.setTimeout(function(){
  console.log('bye father');
  process.exit();
},16000);

process.on('message',function(msg){
  console.log('I get msg: %s',msg);
})

