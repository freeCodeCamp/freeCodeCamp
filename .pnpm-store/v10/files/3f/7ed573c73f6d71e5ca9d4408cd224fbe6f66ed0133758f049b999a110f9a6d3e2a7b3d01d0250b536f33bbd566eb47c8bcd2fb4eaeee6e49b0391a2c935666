'use strict'

module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return tagNameFactory(test)
  }

  if (test === null || test === undefined) {
    return element
  }

  if (typeof test === 'object') {
    return any(test)
  }

  if (typeof test === 'function') {
    return callFactory(test)
  }

  throw new Error('Expected function, string, or array as test')
}

function convertAll(tests) {
  var length = tests.length
  var index = -1
  var results = []

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

function any(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string a tag name check.
function tagNameFactory(test) {
  return tagName

  function tagName(node) {
    return element(node) && node.tagName === test
  }
}

// Utility to convert a function check.
function callFactory(test) {
  return call

  function call(node) {
    return element(node) && Boolean(test.apply(this, arguments))
  }
}

// Utility to return true if this is an element.
function element(node) {
  return (
    node &&
    typeof node === 'object' &&
    node.type === 'element' &&
    typeof node.tagName === 'string'
  )
}
