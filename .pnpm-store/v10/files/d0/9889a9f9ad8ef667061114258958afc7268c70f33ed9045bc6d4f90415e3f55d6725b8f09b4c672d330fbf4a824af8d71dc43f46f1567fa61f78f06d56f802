// LazyTransform is a special type of Transform stream that is lazily loaded.
// This is used for performance with bi-API-ship: when two APIs are available
// for the stream, one conventional and one non-conventional.
'use strict'

const { ObjectDefineProperties, ObjectDefineProperty, ObjectSetPrototypeOf } = require('../../ours/primordials')
const stream = require('../../stream')
const { getDefaultEncoding } = require('../crypto/util')
module.exports = LazyTransform
function LazyTransform(options) {
  this._options = options
}
ObjectSetPrototypeOf(LazyTransform.prototype, stream.Transform.prototype)
ObjectSetPrototypeOf(LazyTransform, stream.Transform)
function makeGetter(name) {
  return function () {
    stream.Transform.call(this, this._options)
    this._writableState.decodeStrings = false
    if (!this._options || !this._options.defaultEncoding) {
      this._writableState.defaultEncoding = getDefaultEncoding()
    }
    return this[name]
  }
}
function makeSetter(name) {
  return function (val) {
    ObjectDefineProperty(this, name, {
      __proto__: null,
      value: val,
      enumerable: true,
      configurable: true,
      writable: true
    })
  }
}
ObjectDefineProperties(LazyTransform.prototype, {
  _readableState: {
    __proto__: null,
    get: makeGetter('_readableState'),
    set: makeSetter('_readableState'),
    configurable: true,
    enumerable: true
  },
  _writableState: {
    __proto__: null,
    get: makeGetter('_writableState'),
    set: makeSetter('_writableState'),
    configurable: true,
    enumerable: true
  }
})
