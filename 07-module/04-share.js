#!/usr/bin/node

console.log("hello world");
var count = 0;

function Num() {}

Num.prototype.add = () => count++;

Num.prototype.getCount = () => count;
module.exports = Num;
