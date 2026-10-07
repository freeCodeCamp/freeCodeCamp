'use strict'

var reusify = require('../')
var fib = require('./fib')
var instance = reusify(MyObject)
var max = 100000000
var start = Date.now()

function reuseNoCodeFunction () {
  var obj = instance.get()
  obj.num = 100
  obj.func()
  obj.num = 0
  instance.release(obj)
}

function MyObject () {
  this.next = null
  var that = this
  this.num = 0
  this.func = function () {
    /* eslint no-constant-condition: "off" */
    if (null) {
      // do nothing
    } else {
      fib(that.num)
    }
  }
}

for (var i = 0; i < max; i++) {
  reuseNoCodeFunction()
}

var time = Date.now() - start
console.log('Total time', time)
console.log('Total iterations', max)
console.log('Iteration/s', max / time * 1000)
