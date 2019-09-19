#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2];


fs.rmdirSync(dir);//只能删除空目录
