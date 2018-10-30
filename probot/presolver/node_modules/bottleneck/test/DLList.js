var DLList = require('../lib/DLList')
var assert = require('assert')
var c = require('./context')({datastore: 'local'})

var fakeQueues = function () {
  this._length = 0
  this.incr = () => this._length++
  this.decr = () => this._length--
}

describe('DLList', function () {

  it('Should be created and be empty', function () {
    var list = new DLList(new fakeQueues())
    c.mustEqual(list.getArray().length, 0)
  })

  it('Should be possible to append once', function () {
    var list = new DLList(new fakeQueues())
    list.push(5)
    var arr = list.getArray()
    c.mustEqual(arr.length, 1)
    c.mustEqual(list.length, 1)
    c.mustEqual(list._queues._length, 1)
    c.mustEqual(arr[0], 5)
  })

  it('Should be possible to append multiple times', function () {
    var list = new DLList(new fakeQueues())
    list.push(5)
    list.push(6)
    var arr = list.getArray()
    c.mustEqual(arr.length, 2)
    c.mustEqual(list.length, 2)
    c.mustEqual(list._queues._length, 2)
    c.mustEqual(arr[0], 5)
    c.mustEqual(arr[1], 6)

    list.push(10)

    arr = list.getArray()
    c.mustEqual(arr.length, 3)
    c.mustEqual(list.length, 3)
    c.mustEqual(arr[0], 5)
    c.mustEqual(arr[1], 6)
    c.mustEqual(arr[2], 10)
  })

  it('Should be possible to shift an empty list', function () {
    var list = new DLList(new fakeQueues())
    c.mustEqual(list.length, 0)
    assert(list.shift() === undefined)
    var arr = list.getArray()
    c.mustEqual(arr.length, 0)
    c.mustEqual(list.length, 0)
    assert(list.shift() === undefined)
    arr = list.getArray()
    c.mustEqual(arr.length, 0)
    c.mustEqual(list.length, 0)
    c.mustEqual(list._queues._length, 0)
  })

  it('Should be possible to append then shift once', function () {
    var list = new DLList(new fakeQueues())
    list.push(5)
    c.mustEqual(list.length, 1)
    c.mustEqual(list.shift(), 5)
    var arr = list.getArray()
    c.mustEqual(arr.length, 0)
    c.mustEqual(list.length, 0)
    c.mustEqual(list._queues._length, 0)
  })

  it('Should be possible to append then shift multiple times', function () {
    var list = new DLList(new fakeQueues())
    list.push(5)
    c.mustEqual(list.length, 1)
    c.mustEqual(list.shift(), 5)
    c.mustEqual(list.length, 0)

    list.push(6)
    c.mustEqual(list.length, 1)
    c.mustEqual(list.shift(), 6)
    c.mustEqual(list.length, 0)
    c.mustEqual(list._queues._length, 0)
  })

  it('Should pass a full test', function () {
    var list = new DLList(new fakeQueues())
    list.push(10)
    c.mustEqual(list.length, 1)
    list.push("11")
    c.mustEqual(list.length, 2)
    list.push(12)
    c.mustEqual(list.length, 3)
    c.mustEqual(list._queues._length, 3)

    c.mustEqual(list.shift(), 10)
    c.mustEqual(list.length, 2)
    c.mustEqual(list.shift(),"11")
    c.mustEqual(list.length, 1)

    list.push(true)
    c.mustEqual(list.length, 2)

    var arr = list.getArray()
    c.mustEqual(arr[0], 12)
    c.mustEqual(arr[1], true)
    c.mustEqual(arr.length, 2)
    c.mustEqual(list._queues._length, 2)
  })

  it('Should return the first value without shifting', function () {
    var list = new DLList(new fakeQueues())
    assert(list.first() === undefined)
    assert(list.first() === undefined)

    list.push(1)
    c.mustEqual(list.first(), 1)
    c.mustEqual(list.first(), 1)

    list.push(2)
    c.mustEqual(list.first(), 1)
    c.mustEqual(list.first(), 1)

    c.mustEqual(list.shift(), 1)
    c.mustEqual(list.first(), 2)
    c.mustEqual(list.first(), 2)

    c.mustEqual(list.shift(), 2)
    assert(list.first() === undefined)
    assert(list.first() === undefined)

    assert(list.first() === undefined)
    assert(list.shift() === undefined)
    assert(list.first() === undefined)
  })

})
