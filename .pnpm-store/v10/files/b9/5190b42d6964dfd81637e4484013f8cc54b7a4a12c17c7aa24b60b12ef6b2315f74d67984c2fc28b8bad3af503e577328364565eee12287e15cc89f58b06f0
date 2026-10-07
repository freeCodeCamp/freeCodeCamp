'use strict'

var element = require('hast-util-is-element')
var siblings = require('./util/siblings')
var whiteSpaceStart = require('./util/white-space-start')
var comment = require('./util/comment')
var closing = require('./closing')
var omission = require('./omission')

module.exports = omission({
  html: html,
  head: head,
  body: body,
  colgroup: colgroup,
  tbody: tbody
})

// Whether to omit `<html>`.
function html(node) {
  var head = siblings.after(node, -1)
  return !head || !comment(head)
}

// Whether to omit `<head>`.
function head(node) {
  var children = node.children
  var seen = []
  var index = -1

  while (++index < children.length) {
    if (element(children[index], ['title', 'base'])) {
      if (seen.indexOf(children[index].tagName) > -1) return false
      seen.push(children[index].tagName)
    }
  }

  return children.length
}

// Whether to omit `<body>`.
function body(node) {
  var head = siblings.after(node, -1, true)

  return (
    !head ||
    (!comment(head) &&
      !whiteSpaceStart(head) &&
      !element(head, ['meta', 'link', 'script', 'style', 'template']))
  )
}

// Whether to omit `<colgroup>`.
// The spec describes some logic for the opening tag, but it’s easier to
// implement in the closing tag, to the same effect, so we handle it there
// instead.
function colgroup(node, index, parent) {
  var previous = siblings.before(parent, index)
  var head = siblings.after(node, -1, true)

  // Previous colgroup was already omitted.
  if (
    element(previous, 'colgroup') &&
    closing(previous, parent.children.indexOf(previous), parent)
  ) {
    return false
  }

  return head && element(head, 'col')
}

// Whether to omit `<tbody>`.
function tbody(node, index, parent) {
  var previous = siblings.before(parent, index)
  var head = siblings.after(node, -1)

  // Previous table section was already omitted.
  if (
    element(previous, ['thead', 'tbody']) &&
    closing(previous, parent.children.indexOf(previous), parent)
  ) {
    return false
  }

  return head && element(head, 'tr')
}
