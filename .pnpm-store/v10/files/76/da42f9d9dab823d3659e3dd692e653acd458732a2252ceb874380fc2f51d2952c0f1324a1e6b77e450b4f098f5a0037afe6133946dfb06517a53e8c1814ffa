'use strict'

const assert = require('assert')

const one = require('./')
const two = require('./')

assert.notEqual(one, two)
assert.ok(one.info)
assert.equal(Function.prototype.isPrototypeOf(one.info), true)
two.info = () => 'info'

const result1 = one.info()
assert.equal(result1, undefined)

const result2 = two.info()
assert.equal(result2, 'info')
