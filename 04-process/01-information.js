#!/usr/bin/node

const log=console.log;

log('architecture:',process.arch);//cpu构架信息
log('platform:%s',process.platform);//操作系统版本信息

log('process id:',process.pid);//进程id信息
log('exePath:%s',process.execPath);//node。js可执行文件的绝对路径

log('node version:',process.version);//版本信息
log('user id:',process.getuid());//打印用户id
log('group id:',process.getgid());//用户组id
log('cwd:%s\n',process.cwd());//路径信息


log('rss:',process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

log('env:', process.env);


