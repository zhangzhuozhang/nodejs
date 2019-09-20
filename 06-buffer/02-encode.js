#!/usr/bin/node

const log = console.log,
      usr = process.argv[2],
      pwd = process.argv[3];



if(process.argv.length!==4){
  console.error('命令格式：cmd username password');
  process.exit(1);     
}

log('user name:%s\n password:%s',usr,pwd);

const buf = new Buffer(usr+':'+pwd);

log('Base64:',buf.toString('Base64'));


