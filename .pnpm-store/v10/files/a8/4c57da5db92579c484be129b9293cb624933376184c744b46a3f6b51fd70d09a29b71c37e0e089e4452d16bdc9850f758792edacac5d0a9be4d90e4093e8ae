'use strict'

var html = require('./compile/html.js')
var parse = require('./parse.js')
var postprocess = require('./postprocess.js')
var preprocess = require('./preprocess.js')

function buffer(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return html(options)(
    postprocess(
      parse(options).document().write(preprocess()(value, encoding, true))
    )
  )
}

module.exports = buffer
