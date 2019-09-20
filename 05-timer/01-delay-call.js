#!/usr/bin/node

function Bomb(){
  this.message = 'Bomb';
}

Bomb.prototype.explode = function(){
  console.log(this.messgae);
}

var bomb = new Bomb();

var timeId = setTimeout(bomb.explode.bind(bomb),200);

clearTimeout(timeId);
