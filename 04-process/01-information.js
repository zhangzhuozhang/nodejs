#!/usr/bin/node

const log=console.log;

log('architecture:',process.arch);//cpu构架信息
log('platform:%s',process.platform);//操作系统版本信息

log('process id:',process.pid);//进程id信息
log('exePath:%s',process.execPath);//node。js可执行文件的绝对路径

log('node version:',process.version);


