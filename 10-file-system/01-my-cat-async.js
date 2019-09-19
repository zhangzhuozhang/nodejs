#!/usr/bin/node

const fs   = require('fs'),
      file = process.argv[2];

if(fs.existsSync(file)){
console.log(fs.readFileSync(file).toString('utf8'));
}else{
  console.error('%s not exists!',file);
  process.exit(1);
}
