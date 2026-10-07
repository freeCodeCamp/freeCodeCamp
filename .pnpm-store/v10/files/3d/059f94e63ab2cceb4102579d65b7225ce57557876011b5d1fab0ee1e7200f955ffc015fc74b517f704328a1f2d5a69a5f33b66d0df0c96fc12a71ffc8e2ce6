'use strict'

var content = require('./initialize/content.js')
var document = require('./initialize/document.js')
var flow = require('./initialize/flow.js')
var text = require('./initialize/text.js')
var combineExtensions = require('./util/combine-extensions.js')
var createTokenizer = require('./util/create-tokenizer.js')
var miniflat = require('./util/miniflat.js')
var constructs = require('./constructs.js')

function parse(options) {
  var settings = options || {}
  var parser = {
    defined: [],
    constructs: combineExtensions(
      [constructs].concat(miniflat(settings.extensions))
    ),
    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(text.string),
    text: create(text.text)
  }

  return parser

  function create(initializer) {
    return creator
    function creator(from) {
      return createTokenizer(parser, initializer, from)
    }
  }
}

module.exports = parse
