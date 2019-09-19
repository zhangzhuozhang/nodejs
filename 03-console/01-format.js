#!/usr/bin/node

const log = console.log;
var user = {
  'name':'赖冠霖',
  'age':20,
  'qq':'1924745'
};

log('name:%s age %d',user.name,user.age);
log('json: %j',user);

log('qq:%s \n qq:%d',user.qq,user.qq);
log(`age is: ${user.age}`);


log('qq: %s', user.qq);       // 输出方式一：占位符输出

log('qq:', user.qq);          // 输出方式二：逗号间隔，多变量输出

log('qq: ' + user.qq);        // 输出方式三：拼接字符串输出

log(`qq: ${user.qq}`);        // 输出方式四：模板字符串输出

console.error('something wrong');

