exports.unsafe = [
  // This is on by default already.
  {character: '[', inConstruct: ['phrasing', 'label', 'reference']}
]
exports.handlers = {
  footnote: footnote,
  footnoteDefinition: footnoteDefinition,
  footnoteReference: footnoteReference
}

var association = require('mdast-util-to-markdown/lib/util/association')
var phrasing = require('mdast-util-to-markdown/lib/util/container-phrasing')
var flow = require('mdast-util-to-markdown/lib/util/container-flow')
var indentLines = require('mdast-util-to-markdown/lib/util/indent-lines')
var safe = require('mdast-util-to-markdown/lib/util/safe')

footnoteReference.peek = footnoteReferencePeek
footnote.peek = footnotePeek

function footnoteReference(node, _, context) {
  var exit = context.enter('footnoteReference')
  var subexit = context.enter('reference')
  var reference = safe(context, association(node), {before: '^', after: ']'})
  subexit()
  exit()
  return '[^' + reference + ']'
}

function footnoteReferencePeek() {
  return '['
}

function footnote(node, _, context) {
  var exit = context.enter('footnote')
  var subexit = context.enter('label')
  var value = '^[' + phrasing(node, context, {before: '[', after: ']'}) + ']'
  subexit()
  exit()
  return value
}

function footnotePeek() {
  return '^'
}

function footnoteDefinition(node, _, context) {
  var exit = context.enter('footnoteDefinition')
  var subexit = context.enter('label')
  var label =
    '[^' + safe(context, association(node), {before: '^', after: ']'}) + ']:'
  var value
  subexit()

  value = indentLines(flow(node, context), map)
  exit()

  return value

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : '    ') + line
    }

    return (blank ? label : label + ' ') + line
  }
}
