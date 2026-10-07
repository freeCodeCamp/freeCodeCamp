'use strict'

const Type = require('../type')

const _toString = Object.prototype.toString

function resolveYamlPairs (data) {
  if (data === null) return true

  const object = data

  const result = new Array(object.length)

  for (let index = 0, length = object.length; index < length; index += 1) {
    const pair = object[index]

    if (_toString.call(pair) !== '[object Object]') return false

    const keys = Object.keys(pair)

    if (keys.length !== 1) return false

    result[index] = [keys[0], pair[keys[0]]]
  }

  return true
}

function constructYamlPairs (data) {
  if (data === null) return []

  const object = data
  const result = new Array(object.length)

  for (let index = 0, length = object.length; index < length; index += 1) {
    const pair = object[index]

    const keys = Object.keys(pair)

    result[index] = [keys[0], pair[keys[0]]]
  }

  return result
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
})
