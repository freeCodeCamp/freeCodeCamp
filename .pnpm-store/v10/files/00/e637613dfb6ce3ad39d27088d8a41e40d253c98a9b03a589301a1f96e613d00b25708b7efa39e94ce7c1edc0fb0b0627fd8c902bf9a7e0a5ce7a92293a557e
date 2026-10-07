'use strict'

const common = require('../common')
const Type = require('../type')

function isHexCode (c) {
  return ((c >= 0x30/* 0 */) && (c <= 0x39/* 9 */)) ||
         ((c >= 0x41/* A */) && (c <= 0x46/* F */)) ||
         ((c >= 0x61/* a */) && (c <= 0x66/* f */))
}

function isOctCode (c) {
  return ((c >= 0x30/* 0 */) && (c <= 0x37/* 7 */))
}

function isDecCode (c) {
  return ((c >= 0x30/* 0 */) && (c <= 0x39/* 9 */))
}

function resolveYamlInteger (data) {
  if (data === null) return false

  const max = data.length
  let index = 0
  let hasDigits = false

  if (!max) return false

  let ch = data[index]

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index]
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true
    ch = data[++index]

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++

      for (; index < max; index++) {
        ch = data[index]
        if (ch !== '0' && ch !== '1') return false
        hasDigits = true
      }
      return hasDigits && isFinite(parseYamlInteger(data))
    }

    if (ch === 'x') {
      // base 16
      index++

      for (; index < max; index++) {
        if (!isHexCode(data.charCodeAt(index))) return false
        hasDigits = true
      }
      return hasDigits && isFinite(parseYamlInteger(data))
    }

    if (ch === 'o') {
      // base 8
      index++

      for (; index < max; index++) {
        if (!isOctCode(data.charCodeAt(index))) return false
        hasDigits = true
      }
      return hasDigits && isFinite(parseYamlInteger(data))
    }
  }

  // base 10 (except 0)

  for (; index < max; index++) {
    if (!isDecCode(data.charCodeAt(index))) {
      return false
    }
    hasDigits = true
  }

  if (!hasDigits) return false

  return isFinite(parseYamlInteger(data))
}

function parseYamlInteger (data) {
  let value = data
  let sign = 1

  let ch = value[0]

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1
    value = value.slice(1)
    ch = value[0]
  }

  if (value === '0') return 0

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2)
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16)
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8)
  }

  return sign * parseInt(value, 10)
}

function constructYamlInteger (data) {
  return parseYamlInteger(data)
}

function isInteger (object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object))
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1) },
    octal: function (obj) { return obj >= 0 ? '0o' + obj.toString(8) : '-0o' + obj.toString(8).slice(1) },
    decimal: function (obj) { return obj.toString(10) },
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() : '-0x' + obj.toString(16).toUpperCase().slice(1) }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary: [2, 'bin'],
    octal: [8, 'oct'],
    decimal: [10, 'dec'],
    hexadecimal: [16, 'hex']
  }
})
