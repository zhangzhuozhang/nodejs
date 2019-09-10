#!/usr/bin/node

var chalk=require('chalk'),
    log=console.log;

log('This is:'+chalk.red('red.'));
log('This is:'+chalk.green('green'));
log('This is：'+chalk.blue('blue')+chalk.green('green'));
