var EventEmitter = require('events').EventEmitter

function Counter () {
  EventEmitter.call(this)
  this.value = 0
}

Counter.prototype = Object.create(EventEmitter.prototype)

Counter.prototype.increment = function increment () {
  this.value++
}

Counter.prototype.decrement = function decrement () {
  if (--this.value === 0) this.emit('zero')
}

Counter.prototype.isZero = function isZero () {
  return (this.value === 0)
}

Counter.prototype.onceZero = function onceZero (fn) {
  if (this.isZero()) return fn()

  this.once('zero', fn)
}

module.exports = Counter
