'use strict'

var test = require('tape')
var reusify = require('./')

test('reuse objects', function (t) {
  t.plan(6)

  function MyObject () {
    t.pass('constructor called')
    this.next = null
  }

  var instance = reusify(MyObject)
  var obj = instance.get()

  t.notEqual(obj, instance.get(), 'two instance created')
  t.notOk(obj.next, 'next must be null')

  instance.release(obj)

  // the internals keeps a hot copy ready for reuse
  // putting this one back in the queue
  instance.release(instance.get())

  // comparing the old one with the one we got
  // never do this in real code, after release you
  // should never reuse that instance
  t.equal(obj, instance.get(), 'instance must be reused')
})

test('reuse more than 2 objects', function (t) {
  function MyObject () {
    t.pass('constructor called')
    this.next = null
  }

  var instance = reusify(MyObject)
  var obj = instance.get()
  var obj2 = instance.get()
  var obj3 = instance.get()

  t.notOk(obj.next, 'next must be null')
  t.notOk(obj2.next, 'next must be null')
  t.notOk(obj3.next, 'next must be null')

  t.notEqual(obj, obj2)
  t.notEqual(obj, obj3)
  t.notEqual(obj3, obj2)

  instance.release(obj)
  instance.release(obj2)
  instance.release(obj3)

  // skip one
  instance.get()

  var obj4 = instance.get()
  var obj5 = instance.get()
  var obj6 = instance.get()

  t.equal(obj4, obj)
  t.equal(obj5, obj2)
  t.equal(obj6, obj3)
  t.end()
})
