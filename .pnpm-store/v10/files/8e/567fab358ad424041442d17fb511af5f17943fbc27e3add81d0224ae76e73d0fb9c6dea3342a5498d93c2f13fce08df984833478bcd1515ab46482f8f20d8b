'use strict'

var toString = require('nlcst-to-string')
var repeat = require('repeat-string')
var position = require('unist-util-position')
var vfileLocation = require('vfile-location')

module.exports = toNlcst

// Transform a `tree` in mdast to nlcst.
function toNlcst(tree, file, Parser, options) {
  var settings = options || {}
  var parser

  // Warn for invalid parameters.
  if (!tree || !tree.type) {
    throw new Error('mdast-util-to-nlcst expected node')
  }

  if (!file || !file.messages) {
    throw new Error('mdast-util-to-nlcst expected file')
  }

  // Construct parser.
  if (!Parser) {
    throw new Error('mdast-util-to-nlcst expected parser')
  }

  if (
    !tree.position ||
    !tree.position.start ||
    !tree.position.start.column ||
    !tree.position.start.line
  ) {
    throw new Error('mdast-util-to-nlcst expected position on nodes')
  }

  parser = 'parse' in Parser ? Parser : new Parser()

  // Transform mdast into nlcst tokens, and pass these into `parser.parse` to
  // insert sentences, paragraphs where needed.
  return parser.parse(
    one(
      {
        doc: String(file),
        location: vfileLocation(file),
        parser: parser,
        ignore: [].concat(
          'table',
          'tableRow',
          'tableCell',
          settings.ignore || []
        ),
        source: [].concat('inlineCode', settings.source || [])
      },
      tree
    )
  )
}

// Transform a single node.
function one(config, node) {
  var start
  var end

  if (config.ignore.indexOf(node.type) < 0) {
    // To do: next major — nodes should have offsets, so
    // `config.location.toOffset` should be superfluous.
    start = config.location.toOffset(position.start(node))
    end = config.location.toOffset(position.end(node))

    if (config.source.indexOf(node.type) > -1) {
      return patch(
        config,
        [config.parser.tokenizeSource(config.doc.slice(start, end))],
        start
      )
    }

    if (node.children) {
      return all(config, node)
    }

    if (node.type === 'image' || node.type === 'imageReference') {
      return patch(config, config.parser.tokenize(node.alt), start + 2)
    }

    if (node.type === 'break') {
      return patch(config, [config.parser.tokenizeWhiteSpace('\n')], start)
    }

    // To do: next major — remove `escape`.
    if (node.type === 'text' || node.type === 'escape') {
      return patch(config, config.parser.tokenize(node.value), start)
    }
  }
}

// Transform all nodes in `parent`.
function all(config, parent) {
  var result = []
  var index = -1
  var lineEnding
  var child
  var end
  var start

  while (++index < parent.children.length) {
    child = parent.children[index]
    start = position.start(child)

    if (end && start.line !== end.line) {
      lineEnding = config.parser.tokenizeWhiteSpace(
        repeat('\n', start.line - end.line)
      )
      patch(config, [lineEnding], end.offset)

      if (lineEnding.value.length < 2) {
        lineEnding.value = '\n\n'
      }

      result.push(lineEnding)
    }

    result = result.concat(one(config, child) || [])
    end = position.end(child)
  }

  return result
}

// Patch a position on each node in `nodes`.
// `offset` is the offset in `file` this run of content starts at.
function patch(config, nodes, offset) {
  var index = -1
  var start = offset
  var end
  var node

  while (++index < nodes.length) {
    node = nodes[index]

    if (node.children) {
      patch(config, node.children, start)
    }

    end = start + toString(node).length

    node.position = {
      start: config.location.toPoint(start),
      end: config.location.toPoint(end)
    }

    start = end
  }

  return nodes
}
