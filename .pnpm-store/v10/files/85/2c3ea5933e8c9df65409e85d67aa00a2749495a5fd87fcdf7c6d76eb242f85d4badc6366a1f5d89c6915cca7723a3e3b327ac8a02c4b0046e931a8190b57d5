'use strict'

module.exports = toc

var search = require('./search')
var contents = require('./contents')
var toExpression = require('./to-expression')

// Get a TOC representation of `node`.
function toc(node, options) {
  var settings = options || {}
  var heading = settings.heading ? toExpression(settings.heading) : null
  var result = search(node, heading, settings)

  result.map = result.map.length
    ? contents(
        result.map,
        settings.tight,
        settings.prefix,
        settings.ordered || false
      )
    : null

  // No given heading.
  if (!heading) {
    result.endIndex = result.index = null
  }

  return result
}
