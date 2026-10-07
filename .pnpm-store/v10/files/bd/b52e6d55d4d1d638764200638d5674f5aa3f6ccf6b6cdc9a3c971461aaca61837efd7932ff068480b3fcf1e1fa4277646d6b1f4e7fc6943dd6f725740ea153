var type   = require('../')
var test = require('tape')

test('should match objects', function (t) {
  function Foo(){}
  t.plan(4)
  t.equal(type({}), 'object')
  t.equal(type(new Foo), 'object')
  t.equal(type(new Boolean(true)), 'object')
  t.equal(type(new Number(123)), 'object')
})

test('should match numbers', function (t) {
  t.plan(1)
  t.equal(type(12), 'number')
})

test('should match strings', function (t) {
  t.plan(1)
  t.equal(type("test"), 'string')
})

test('should match dates', function (t) {
  t.plan(1)
  t.equal(type(new Date), 'date')
})

test('should match booleans', function (t) {
  t.plan(2)
  t.equal(type(true), 'boolean')
  t.equal(type(false), 'boolean')
})

test('should match null', function (t) {
  t.plan(1)
  t.equal(type(null), 'null')
})

test('should match undefined', function (t) {
  t.plan(1)
  t.equal(type(undefined), 'undefined')
})

test('should match arrays', function (t) {
  t.plan(1)
  t.equal(type([]), 'array')
})

test('should match regexps', function (t) {
  t.plan(2)
  t.equal(type(/asdf/), 'regexp')
  t.equal(type(new RegExp('weee')), 'regexp')
})

test('should match functions', function (t) {
  t.plan(1)
  t.equal(type(function(){}), 'function')
})

test('should match arguments', function (t) {
  t.plan(1)
  t.equal(type((function(){ return arguments })()), 'arguments')
})

if (typeof document !== 'undefined') {
  test('should match elements', function (t) {
    t.plan(1)
    t.equal(type(document.createElement('div')), 'element')
  })
}