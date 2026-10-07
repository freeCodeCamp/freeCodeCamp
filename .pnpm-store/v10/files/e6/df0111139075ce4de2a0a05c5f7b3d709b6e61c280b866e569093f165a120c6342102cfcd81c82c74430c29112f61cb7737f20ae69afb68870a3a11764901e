'use strict'

const common = require('../common')
const Type = require('../type')

const YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$')

const YAML_FLOAT_SPECIAL_PATTERN = new RegExp(
  '^(?:' +
  // .inf
  '[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$')

function resolveYamlFloat (data) {
  if (data === null) return false

  if (!YAML_FLOAT_PATTERN.test(data)) {
    return false
  }

  if (isFinite(parseFloat(data, 10))) {
    return true
  }

  return YAML_FLOAT_SPECIAL_PATTERN.test(data)
}

function constructYamlFloat (data) {
  let value = data.toLowerCase()
  const sign = value[0] === '-' ? -1 : 1

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1)
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY
  } else if (value === '.nan') {
    return NaN
  }
  return sign * parseFloat(value, 10)
}

const SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/

function representYamlFloat (object, style) {
  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan'
      case 'uppercase': return '.NAN'
      case 'camelcase': return '.NaN'
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf'
      case 'uppercase': return '.INF'
      case 'camelcase': return '.Inf'
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf'
      case 'uppercase': return '-.INF'
      case 'camelcase': return '-.Inf'
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0'
  }

  const res = object.toString(10)

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res
}

function isFloat (object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object))
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
})
