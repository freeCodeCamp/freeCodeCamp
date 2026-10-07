'use strict'

module.exports = match

var zwitch = require('zwitch')

var handle = zwitch('operator', {
  unknown: unknownOperator,
  invalid: exists,
  handlers: {
    '=': exact,
    '^=': begins,
    '$=': ends,
    '*=': containsString,
    '~=': containsArray
  }
})

function match(query, node) {
  var attrs = query.attrs
  var index = -1

  while (++index < attrs.length) {
    if (!handle(attrs[index], node)) return false
  }

  return true
}

// [attr]
function exists(query, node) {
  return node[query.name] != null
}

// [attr=value]
function exact(query, node) {
  return node[query.name] != null && String(node[query.name]) === query.value
}

// [attr~=value]
function containsArray(query, node) {
  var value = node[query.name]

  if (value == null) return false

  // If this is an array, and the query is contained in it, return true.
  if (
    typeof value === 'object' &&
    'length' in value &&
    value.indexOf(query.value) > -1
  ) {
    return true
  }

  // For all other values, return whether this is an exact match.
  return String(value) === query.value
}

// [attr^=value]
function begins(query, node) {
  var value = node[query.name]

  return (
    typeof value === 'string' &&
    value.slice(0, query.value.length) === query.value
  )
}

// [attr$=value]
function ends(query, node) {
  var value = node[query.name]

  return (
    typeof value === 'string' &&
    value.slice(-query.value.length) === query.value
  )
}

// [attr*=value]
function containsString(query, node) {
  var value = node[query.name]
  return typeof value === 'string' && value.indexOf(query.value) > -1
}

/* istanbul ignore next - Shouldn’t be invoked, Parser throws an error instead. */
function unknownOperator(query) {
  throw new Error('Unknown operator `' + query.operator + '`')
}
