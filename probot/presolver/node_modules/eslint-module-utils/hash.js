/**
 * utilities for hashing config objects.
 * basically iteratively updates hash with a JSON-like format
 */
"use strict"
exports.__esModule = true

const createHash = require('crypto').createHash

const stringify = JSON.stringify

function hashify(value, hash) {
  if (!hash) hash = createHash('sha256')

  if (value instanceof Array) {
    hashArray(value, hash)
  } else if (value instanceof Object) {
    hashObject(value, hash)
  } else {
    hash.update(stringify(value) || 'undefined')
  }

  return hash
}
exports.default = hashify

function hashArray(array, hash) {
  if (!hash) hash = createHash('sha256')

  hash.update('[')
  for (let i = 0; i < array.length; i++) {
    hashify(array[i], hash)
    hash.update(',')
  }
  hash.update(']')

  return hash
}
hashify.array = hashArray
exports.hashArray = hashArray

function hashObject(object, hash) {
  if (!hash) hash = createHash('sha256')

  hash.update("{")
  Object.keys(object).sort().forEach(key => {
    hash.update(stringify(key))
    hash.update(':')
    hashify(object[key], hash)
    hash.update(",")
  })
  hash.update('}')

  return hash
}
hashify.object = hashObject
exports.hashObject = hashObject


