'use strict'

const Type = require('../type')

const _hasOwnProperty = Object.prototype.hasOwnProperty
const _toString = Object.prototype.toString

function resolveYamlOmap (data) {
  if (data === null) return true

  const objectKeys = {}
  const object = data

  for (let index = 0, length = object.length; index < length; index += 1) {
    const pair = object[index]
    let pairHasKey = false

    if (_toString.call(pair) !== '[object Object]') return false

    let pairKey
    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true
        else return false
      }
    }

    if (!pairHasKey) return false

    if (_hasOwnProperty.call(objectKeys, pairKey)) return false
    Object.defineProperty(objectKeys, pairKey, { value: true })
  }

  return true
}

function constructYamlOmap (data) {
  return data !== null ? data : []
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
})
