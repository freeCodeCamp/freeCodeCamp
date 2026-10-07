'use strict'

module.exports = test

var name = require('./name')
var attributes = require('./attribute')
var pseudos = require('./pseudo')

function test(query, node, index, parent, state) {
  if (query.id) {
    throw new Error('Invalid selector: id')
  }

  if (query.classNames) {
    throw new Error('Invalid selector: class')
  }

  return Boolean(
    node &&
      (!query.tagName || name(query, node)) &&
      (!query.attrs || attributes(query, node)) &&
      (!query.pseudos || pseudos(query, node, index, parent, state))
  )
}
