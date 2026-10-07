'use strict'

const { dequal: deepEqual } = require('dequal')
const { MergeError } = require('./errors')

function _arraysIntersection (arrays) {
  let intersection = arrays[0]
  for (let i = 1; i < arrays.length; i++) {
    intersection = intersection.filter(
      value => arrays[i].includes(value)
    )
  }
  return intersection
}

function arraysIntersection (keyword, values, mergedSchema) {
  const intersection = _arraysIntersection(values)
  if (intersection.length === 0) {
    throw new MergeError(keyword, values)
  }
  mergedSchema[keyword] = intersection
}

function hybridArraysIntersection (keyword, values, mergedSchema) {
  for (let i = 0; i < values.length; i++) {
    if (!Array.isArray(values[i])) {
      values[i] = [values[i]]
    }
  }

  const intersection = _arraysIntersection(values)
  if (intersection.length === 0) {
    throw new MergeError(keyword, values)
  }

  if (intersection.length === 1) {
    mergedSchema[keyword] = intersection[0]
  } else {
    mergedSchema[keyword] = intersection
  }
}

function arraysUnion (keyword, values, mergedSchema) {
  const union = []

  for (const array of values) {
    for (const value of array) {
      if (!union.includes(value)) {
        union.push(value)
      }
    }
  }

  mergedSchema[keyword] = union
}

function minNumber (keyword, values, mergedSchema) {
  mergedSchema[keyword] = Math.min(...values)
}

function maxNumber (keyword, values, mergedSchema) {
  mergedSchema[keyword] = Math.max(...values)
}

function commonMultiple (keyword, values, mergedSchema) {
  const gcd = (a, b) => (!b ? a : gcd(b, a % b))
  const lcm = (a, b) => (a * b) / gcd(a, b)

  let scale = 1
  for (const value of values) {
    while (value * scale % 1 !== 0) {
      scale *= 10
    }
  }

  let multiple = values[0] * scale
  for (const value of values) {
    multiple = lcm(multiple, value * scale)
  }

  mergedSchema[keyword] = multiple / scale
}

function allEqual (keyword, values, mergedSchema) {
  const firstValue = values[0]
  for (let i = 1; i < values.length; i++) {
    if (!deepEqual(values[i], firstValue)) {
      throw new MergeError(keyword, values)
    }
  }
  mergedSchema[keyword] = firstValue
}

function skip () {}

function booleanAnd (keyword, values, mergedSchema) {
  for (const value of values) {
    if (value === false) {
      mergedSchema[keyword] = false
      return
    }
  }
  mergedSchema[keyword] = true
}

function booleanOr (keyword, values, mergedSchema) {
  for (const value of values) {
    if (value === true) {
      mergedSchema[keyword] = true
      return
    }
  }
  mergedSchema[keyword] = false
}

module.exports = {
  arraysIntersection,
  hybridArraysIntersection,
  arraysUnion,
  minNumber,
  maxNumber,
  commonMultiple,
  allEqual,
  booleanAnd,
  booleanOr,
  skip
}
