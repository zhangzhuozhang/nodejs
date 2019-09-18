#!/usr/bin/node

const log = console.log;
var user = {
  'name':'赖冠霖',
  'age':20,
  'qq':'1924745'
};

log('name:%s age %d',user.name,user.age);

log('json: %j',user);
log(`age is: ${user.age}`);


