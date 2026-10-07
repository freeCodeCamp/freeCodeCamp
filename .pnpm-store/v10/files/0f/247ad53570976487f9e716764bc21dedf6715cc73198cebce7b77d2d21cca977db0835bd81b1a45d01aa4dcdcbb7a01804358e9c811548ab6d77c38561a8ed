export default parse

import * as initializeContent from './initialize/content.mjs'
import * as initializeDocument from './initialize/document.mjs'
import * as initializeFlow from './initialize/flow.mjs'
import * as initializeText from './initialize/text.mjs'
import combineExtensions from './util/combine-extensions.mjs'
import createTokenizer from './util/create-tokenizer.mjs'
import miniflat from './util/miniflat.mjs'
import * as constructs from './constructs.mjs'

function parse(options) {
  var settings = options || {}
  var parser = {
    defined: [],
    constructs: combineExtensions(
      [constructs].concat(miniflat(settings.extensions))
    ),
    content: create(initializeContent),
    document: create(initializeDocument),
    flow: create(initializeFlow),
    string: create(initializeText.string),
    text: create(initializeText.text)
  }

  return parser

  function create(initializer) {
    return creator
    function creator(from) {
      return createTokenizer(parser, initializer, from)
    }
  }
}
