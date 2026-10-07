'use strict'

var subtokenize = require('./util/subtokenize.js')

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }

  return events
}

module.exports = postprocess
