'use strict'

var createParser = require('./parser')
var expressions = require('./expressions')

module.exports = ParseLatin

// PARSE LATIN

// Transform Latin-script natural language into an NLCST-tree.
function ParseLatin(doc, file) {
  var value = file || doc

  if (!(this instanceof ParseLatin)) {
    return new ParseLatin(doc, file)
  }

  this.doc = value ? String(value) : null
}

// Quick access to the prototype.
var proto = ParseLatin.prototype

// Default position.
proto.position = true

// Create text nodes.
proto.tokenizeSymbol = createTextFactory('Symbol')
proto.tokenizeWhiteSpace = createTextFactory('WhiteSpace')
proto.tokenizePunctuation = createTextFactory('Punctuation')
proto.tokenizeSource = createTextFactory('Source')
proto.tokenizeText = createTextFactory('Text')

// Expose `run`.
proto.run = run

// Inject `plugins` to modifiy the result of the method at `key` on the operated
// on context.
proto.use = useFactory(function (context, key, plugins) {
  context[key] = context[key].concat(plugins)
})

// Inject `plugins` to modifiy the result of the method at `key` on the operated
// on context, before any other.
proto.useFirst = useFactory(function (context, key, plugins) {
  context[key] = plugins.concat(context[key])
})

// Easy access to the document parser. This additionally supports retext-style
// invocation: where an instance is created for each file, and the file is given
// on construction.
proto.parse = function (value) {
  return this.tokenizeRoot(value || this.doc)
}

// Transform a `value` into a list of `NLCSTNode`s.
proto.tokenize = function (value) {
  return tokenize(this, value)
}

// PARENT NODES
//
// All these nodes are `pluggable`: they come with a `use` method which accepts
// a plugin (`function(NLCSTNode)`).
// Every time one of these methods are called, the plugin is invoked with the
// node, allowing for easy modification.
//
// In fact, the internal transformation from `tokenize` (a list of words, white
// space, punctuation, and symbols) to `tokenizeRoot` (an NLCST tree), is also
// implemented through this mechanism.

// Create a `WordNode` with its children set to a single `TextNode`, its value
// set to the given `value`.
pluggable(ParseLatin, 'tokenizeWord', function (value, eat) {
  var add = (eat || noopEat)('')
  var parent = {type: 'WordNode', children: []}

  this.tokenizeText(value, eat, parent)

  return add(parent)
})

// Create a `SentenceNode` with its children set to `Node`s, their values set
// to the tokenized given `value`.
//
// Unless plugins add new nodes, the sentence is populated by `WordNode`s,
// `SymbolNode`s, `PunctuationNode`s, and `WhiteSpaceNode`s.
pluggable(
  ParseLatin,
  'tokenizeSentence',
  createParser({
    type: 'SentenceNode',
    tokenizer: 'tokenize'
  })
)

// Create a `ParagraphNode` with its children set to `Node`s, their values set
// to the tokenized given `value`.
//
// Unless plugins add new nodes, the paragraph is populated by `SentenceNode`s
// and `WhiteSpaceNode`s.
pluggable(
  ParseLatin,
  'tokenizeParagraph',
  createParser({
    type: 'ParagraphNode',
    delimiter: expressions.terminalMarker,
    delimiterType: 'PunctuationNode',
    tokenizer: 'tokenizeSentence'
  })
)

// Create a `RootNode` with its children set to `Node`s, their values set to the
// tokenized given `value`.
pluggable(
  ParseLatin,
  'tokenizeRoot',
  createParser({
    type: 'RootNode',
    delimiter: expressions.newLine,
    delimiterType: 'WhiteSpaceNode',
    tokenizer: 'tokenizeParagraph'
  })
)

// PLUGINS

proto.use('tokenizeSentence', [
  require('./plugin/merge-initial-word-symbol'),
  require('./plugin/merge-final-word-symbol'),
  require('./plugin/merge-inner-word-symbol'),
  require('./plugin/merge-inner-word-slash'),
  require('./plugin/merge-initialisms'),
  require('./plugin/merge-words'),
  require('./plugin/patch-position')
])

proto.use('tokenizeParagraph', [
  require('./plugin/merge-non-word-sentences'),
  require('./plugin/merge-affix-symbol'),
  require('./plugin/merge-initial-lower-case-letter-sentences'),
  require('./plugin/merge-initial-digit-sentences'),
  require('./plugin/merge-prefix-exceptions'),
  require('./plugin/merge-affix-exceptions'),
  require('./plugin/merge-remaining-full-stops'),
  require('./plugin/make-initial-white-space-siblings'),
  require('./plugin/make-final-white-space-siblings'),
  require('./plugin/break-implicit-sentences'),
  require('./plugin/remove-empty-nodes'),
  require('./plugin/patch-position')
])

proto.use('tokenizeRoot', [
  require('./plugin/make-initial-white-space-siblings'),
  require('./plugin/make-final-white-space-siblings'),
  require('./plugin/remove-empty-nodes'),
  require('./plugin/patch-position')
])

// TEXT NODES

// Factory to create a `Text`.
function createTextFactory(type) {
  type += 'Node'

  return createText

  // Construct a `Text` from a bound `type`
  function createText(value, eat, parent) {
    if (value === null || value === undefined) {
      value = ''
    }

    return (eat || noopEat)(value)(
      {
        type: type,
        value: String(value)
      },
      parent
    )
  }
}

// Run transform plug-ins for `key` on `nodes`.
function run(key, nodes) {
  var wareKey = key + 'Plugins'
  var plugins = this[wareKey]
  var index = -1

  if (plugins) {
    while (plugins[++index]) {
      plugins[index](nodes)
    }
  }

  return nodes
}

// Make a method “pluggable”.
function pluggable(Constructor, key, callback) {
  // Set a pluggable version of `callback` on `Constructor`.
  Constructor.prototype[key] = function () {
    return this.run(key, callback.apply(this, arguments))
  }
}

// Factory to inject `plugins`. Takes `callback` for the actual inserting.
function useFactory(callback) {
  return use

  // Validate if `plugins` can be inserted.
  // Invokes the bound `callback` to do the actual inserting.
  function use(key, plugins) {
    var self = this
    var wareKey

    // Throw if the method is not pluggable.
    if (!(key in self)) {
      throw new Error(
        'Illegal Invocation: Unsupported `key` for ' +
          '`use(key, plugins)`. Make sure `key` is a ' +
          'supported function'
      )
    }

    // Fail silently when no plugins are given.
    if (!plugins) {
      return
    }

    wareKey = key + 'Plugins'

    // Make sure `plugins` is a list.
    if (typeof plugins === 'function') {
      plugins = [plugins]
    } else {
      plugins = plugins.concat()
    }

    // Make sure `wareKey` exists.
    if (!self[wareKey]) {
      self[wareKey] = []
    }

    // Invoke callback with the ware key and plugins.
    callback(self, wareKey, plugins)
  }
}

// CLASSIFY

// Match a word character.
var wordRe = expressions.word

// Match a surrogate character.
var surrogatesRe = expressions.surrogates

// Match a punctuation character.
var punctuationRe = expressions.punctuation

// Match a white space character.
var whiteSpaceRe = expressions.whiteSpace

// Transform a `value` into a list of `NLCSTNode`s.
function tokenize(parser, value) {
  var tokens
  var offset
  var line
  var column
  var index
  var length
  var character
  var queue
  var previous
  var left
  var right
  var eater

  if (value === null || value === undefined) {
    value = ''
  } else if (value instanceof String) {
    value = value.toString()
  }

  if (typeof value !== 'string') {
    // Return the given nodes if this is either an empty array, or an array with
    // a node as a first child.
    if ('length' in value && (!value[0] || value[0].type)) {
      return value
    }

    throw new Error(
      "Illegal invocation: '" +
        value +
        "' is not a valid argument for 'ParseLatin'"
    )
  }

  tokens = []

  if (!value) {
    return tokens
  }

  index = 0
  offset = 0
  line = 1
  column = 1

  // Eat mechanism to use.
  eater = parser.position ? eat : noPositionEat

  length = value.length
  previous = ''
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (whiteSpaceRe.test(character)) {
      right = 'WhiteSpace'
    } else if (punctuationRe.test(character)) {
      right = 'Punctuation'
    } else if (wordRe.test(character)) {
      right = 'Word'
    } else {
      right = 'Symbol'
    }

    tick()

    previous = character
    character = ''
    left = right
    right = null

    index++
  }

  tick()

  return tokens

  // Check one character.
  function tick() {
    if (
      left === right &&
      (left === 'Word' ||
        left === 'WhiteSpace' ||
        character === previous ||
        surrogatesRe.test(character))
    ) {
      queue += character
    } else {
      // Flush the previous queue.
      if (queue) {
        parser['tokenize' + left](queue, eater)
      }

      queue = character
    }
  }

  // Remove `subvalue` from `value`.
  // Expects `subvalue` to be at the start from `value`, and applies no
  // validation.
  function eat(subvalue) {
    var pos = position()

    update(subvalue)

    return apply

    // Add the given arguments, add `position` to the returned node, and return
    // the node.
    function apply() {
      return pos(add.apply(null, arguments))
    }
  }

  // Remove `subvalue` from `value`.
  // Does not patch positional information.
  function noPositionEat() {
    return apply

    // Add the given arguments and return the node.
    function apply() {
      return add.apply(null, arguments)
    }
  }

  // Add mechanism.
  function add(node, parent) {
    if (parent) {
      parent.children.push(node)
    } else {
      tokens.push(node)
    }

    return node
  }

  // Mark position and patch `node.position`.
  function position() {
    var before = now()

    // Add the position to a node.
    function patch(node) {
      node.position = new Position(before)

      return node
    }

    return patch
  }

  // Update line and column based on `value`.
  function update(subvalue) {
    var subvalueLength = subvalue.length
    var character = -1
    var lastIndex = -1

    offset += subvalueLength

    while (++character < subvalueLength) {
      if (subvalue.charAt(character) === '\n') {
        lastIndex = character
        line++
      }
    }

    if (lastIndex === -1) {
      column += subvalueLength
    } else {
      column = subvalueLength - lastIndex
    }
  }

  // Store position information for a node.
  function Position(start) {
    this.start = start
    this.end = now()
  }

  // Get the current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: offset
    }
  }
}

// Add mechanism used when text-tokenisers are called directly outside of the
// `tokenize` function.
function noopAdd(node, parent) {
  if (parent) {
    parent.children.push(node)
  }

  return node
}

// Eat and add mechanism without adding positional information, used when
// text-tokenisers are called directly outside of the `tokenize` function.
function noopEat() {
  return noopAdd
}
