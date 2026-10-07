'use strict'

var Parser = require('parse5/lib/parser')
var pos = require('unist-util-position')
var visit = require('unist-util-visit')
var fromParse5 = require('hast-util-from-parse5')
var toParse5 = require('hast-util-to-parse5')
var voids = require('html-void-elements')
var ns = require('web-namespaces')
var zwitch = require('zwitch')
var xtend = require('xtend')

module.exports = wrap

var inTemplateMode = 'IN_TEMPLATE_MODE'
var dataState = 'DATA_STATE'
var characterToken = 'CHARACTER_TOKEN'
var startTagToken = 'START_TAG_TOKEN'
var endTagToken = 'END_TAG_TOKEN'
var commentToken = 'COMMENT_TOKEN'
var doctypeToken = 'DOCTYPE_TOKEN'

var parseOptions = {sourceCodeLocationInfo: true, scriptingEnabled: false}

function wrap(tree, file, options) {
  var parser = new Parser(parseOptions)
  var one = zwitch('type', {
    handlers: {
      root: root,
      element: element,
      text: text,
      comment: comment,
      doctype: doctype,
      raw: raw
    },
    unknown: unknown
  })
  var stitches
  var tokenizer
  var preprocessor
  var posTracker
  var locationTracker
  var result
  var index

  if (file && !('contents' in file)) {
    options = file
    file = undefined
  }

  if (options && options.passThrough) {
    index = -1

    while (++index < options.passThrough.length) {
      one.handlers[options.passThrough[index]] = stitch
    }
  }

  result = fromParse5(documentMode(tree) ? document() : fragment(), file)

  if (stitches) {
    visit(result, 'comment', mend)
  }

  // Unpack if possible and when not given a `root`.
  if (tree.type !== 'root' && result.children.length === 1) {
    return result.children[0]
  }

  return result

  function mend(node, index, parent) {
    if (node.value.stitch) {
      parent.children[index] = node.value.stitch
      return index
    }
  }

  function fragment() {
    var context = {
      nodeName: 'template',
      tagName: 'template',
      attrs: [],
      namespaceURI: ns.html,
      childNodes: []
    }
    var mock = {
      nodeName: 'documentmock',
      tagName: 'documentmock',
      attrs: [],
      namespaceURI: ns.html,
      childNodes: []
    }
    var doc = {nodeName: '#document-fragment', childNodes: []}

    parser._bootstrap(mock, context)
    parser._pushTmplInsertionMode(inTemplateMode)
    parser._initTokenizerForFragmentParsing()
    parser._insertFakeRootElement()
    parser._resetInsertionMode()
    parser._findFormInFragmentContext()

    tokenizer = parser.tokenizer
    preprocessor = tokenizer.preprocessor
    locationTracker = tokenizer.__mixins[0]
    posTracker = locationTracker.posTracker

    one(tree)

    parser._adoptNodes(mock.childNodes[0], doc)

    return doc
  }

  function document() {
    var doc = parser.treeAdapter.createDocument()

    parser._bootstrap(doc, null)
    tokenizer = parser.tokenizer
    preprocessor = tokenizer.preprocessor
    locationTracker = tokenizer.__mixins[0]
    posTracker = locationTracker.posTracker

    one(tree)

    return doc
  }

  function all(nodes) {
    var index = -1

    /* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
    if (nodes) {
      while (++index < nodes.length) {
        one(nodes[index])
      }
    }
  }

  function root(node) {
    all(node.children)
  }

  function element(node) {
    resetTokenizer()
    parser._processToken(startTag(node), ns.html)

    all(node.children)

    if (voids.indexOf(node.tagName) < 0) {
      resetTokenizer()
      parser._processToken(endTag(node))
    }
  }

  function text(node) {
    resetTokenizer()
    parser._processToken({
      type: characterToken,
      chars: node.value,
      location: createParse5Location(node)
    })
  }

  function doctype(node) {
    var p5 = toParse5(node)
    resetTokenizer()
    parser._processToken({
      type: doctypeToken,
      name: p5.name,
      forceQuirks: false,
      publicId: p5.publicId,
      systemId: p5.systemId,
      location: createParse5Location(node)
    })
  }

  function comment(node) {
    resetTokenizer()
    parser._processToken({
      type: commentToken,
      data: node.value,
      location: createParse5Location(node)
    })
  }

  function raw(node) {
    var start = pos.start(node)
    var line = start.line || 1
    var column = start.column || 1
    var offset = start.offset || 0
    var token

    // Reset preprocessor:
    // See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/tokenizer/preprocessor.js>.
    preprocessor.html = null
    preprocessor.pos = -1
    preprocessor.lastGapPos = -1
    preprocessor.lastCharPos = -1
    preprocessor.gapStack = []
    preprocessor.skipNextNewLine = false
    preprocessor.lastChunkWritten = false
    preprocessor.endOfChunkHit = false

    // Reset preprocessor mixin:
    // See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/extensions/position-tracking/preprocessor-mixin.js>.
    posTracker.isEol = false
    posTracker.lineStartPos = -column + 1 // Looks weird, but ensures we get correct positional info.
    posTracker.droppedBufferSize = offset
    posTracker.offset = 0
    posTracker.col = 1
    posTracker.line = line

    // Reset location tracker:
    // See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/extensions/location-info/tokenizer-mixin.js>.
    locationTracker.currentAttrLocation = null
    locationTracker.ctLoc = createParse5Location(node)

    // See the code for `parse` and `parseFragment`:
    // See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/parser/index.js#L371>.
    tokenizer.write(node.value)
    parser._runParsingLoop(null)

    // Process final characters if they’re still there after hibernating.
    // Similar to:
    // See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/extensions/location-info/tokenizer-mixin.js#L95>.
    token = tokenizer.currentCharacterToken

    if (token) {
      token.location.endLine = posTracker.line
      token.location.endCol = posTracker.col + 1
      token.location.endOffset = posTracker.offset + 1
      parser._processToken(token)
    }
  }

  function stitch(node) {
    var clone = Object.assign({}, node)

    stitches = true

    // Recurse, because to somewhat handle `[<x>]</x>` (where `[]` denotes the
    // passed through node).
    if (node.children) {
      clone.children = wrap(
        {type: 'root', children: node.children},
        file,
        options
      ).children
    }

    // Hack: `value` is supposed to be a string, but as none of the tools
    // (`parse5` or `hast-util-from-parse5`) looks at it, we can pass nodes
    // through.
    comment({value: {stitch: clone}})
  }

  function resetTokenizer() {
    // Reset tokenizer:
    // See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/tokenizer/index.js#L218-L234>.
    // Especially putting it back in the `data` state is useful: some elements,
    // like textareas and iframes, change the state.
    // See GH-7.
    // But also if broken HTML is in `raw`, and then a correct element is given.
    // See GH-11.
    tokenizer.tokenQueue = []
    tokenizer.state = dataState
    tokenizer.returnState = ''
    tokenizer.charRefCode = -1
    tokenizer.tempBuff = []
    tokenizer.lastStartTagName = ''
    tokenizer.consumedAfterSnapshot = -1
    tokenizer.active = false
    tokenizer.currentCharacterToken = null
    tokenizer.currentToken = null
    tokenizer.currentAttr = null
  }
}

function startTag(node) {
  var location = createParse5Location(node)

  location.startTag = xtend(location)

  return {
    type: startTagToken,
    tagName: node.tagName,
    selfClosing: false,
    attrs: attributes(node),
    location: location
  }
}

function attributes(node) {
  return toParse5({
    tagName: node.tagName,
    type: 'element',
    properties: node.properties
  }).attrs
}

function endTag(node) {
  var location = createParse5Location(node)

  location.endTag = xtend(location)

  return {
    type: endTagToken,
    tagName: node.tagName,
    attrs: [],
    location: location
  }
}

function unknown(node) {
  throw new Error('Cannot compile `' + node.type + '` node')
}

function documentMode(node) {
  var head = node.type === 'root' ? node.children[0] : node

  return head && (head.type === 'doctype' || head.tagName === 'html')
}

function createParse5Location(node) {
  var start = pos.start(node)
  var end = pos.end(node)

  return {
    startLine: start.line,
    startCol: start.column,
    startOffset: start.offset,
    endLine: end.line,
    endCol: end.column,
    endOffset: end.offset
  }
}
