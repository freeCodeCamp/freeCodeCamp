"use strict"

var createTree = require("../rbtree.js")

var t = createTree()

var s = Date.now()
for(var i=0; i<100000; ++i) {
  t = t.insert(Math.random(), Math.random())
}
console.log(Date.now() - s)