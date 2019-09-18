#!/usr/bin/node


const stdin = process.stdin,
      stdout=process.stdout;

stdin.resume();//流动状态

stdin.on('data',function(data){
  stdout.write(data.toString('utf8').toUpperCase());
});

stdin.push('hello world');


for(var c='a'.charCodeAt(0);c<'z'.charCodeAt(0);c++){
  stdout.write(String.fromCharCode(c));
}

stdout.write('\n');
