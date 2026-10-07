'use strict'

var xtend = require('xtend')
var html = require('property-information/html')
var svg = require('property-information/svg')
var find = require('property-information/find')
var toH = require('hast-to-hyperscript')
var ns = require('web-namespaces')
var zwitch = require('zwitch')

module.exports = transform

var ignoredSpaces = ['svg', 'html']

var one = zwitch('type')

one.handlers.root = root
one.handlers.element = element
one.handlers.text = text
one.handlers.comment = comment
one.handlers.doctype = doctype

// Transform a tree from hast to Parse5’s AST.
function transform(tree, space) {
  return one(tree, space === 'svg' ? svg : html)
}

function root(node, schema) {
  var data = node.data || {}
  var mode = data.quirksMode ? 'quirks' : 'no-quirks'

  return patch(node, {nodeName: '#document', mode: mode}, schema)
}

function fragment(node, schema) {
  return patch(node, {nodeName: '#document-fragment'}, schema)
}

function doctype(node, schema) {
  return patch(
    node,
    {
      nodeName: '#documentType',
      name: node.name,
      publicId: node.public || '',
      systemId: node.system || ''
    },
    schema
  )
}

function text(node, schema) {
  return patch(node, {nodeName: '#text', value: node.value}, schema)
}

function comment(node, schema) {
  return patch(node, {nodeName: '#comment', data: node.value}, schema)
}

function element(node, schema) {
  var space = schema.space
  var shallow = xtend(node, {children: []})

  return toH(h, shallow, {space: space})

  function h(name, attrs) {
    var values = []
    var p5
    var attr
    var value
    var key
    var info
    var pos

    for (key in attrs) {
      info = find(schema, key)
      attr = attrs[key]

      if (attr === false || (info.boolean && !attr)) {
        continue
      }

      value = {name: key, value: attr === true ? '' : String(attr)}

      if (info.space && ignoredSpaces.indexOf(info.space) === -1) {
        pos = key.indexOf(':')

        if (pos === -1) {
          value.prefix = ''
        } else {
          value.name = key.slice(pos + 1)
          value.prefix = key.slice(0, pos)
        }

        value.namespace = ns[info.space]
      }

      values.push(value)
    }

    p5 = patch(node, {nodeName: name, tagName: name, attrs: values}, schema)

    if (name === 'template') {
      p5.content = fragment(shallow.content, schema)
    }

    return p5
  }
}

// Patch specific properties.
function patch(node, p5, parentSchema) {
  var schema = parentSchema
  var position = node.position
  var children = node.children
  var childNodes = []
  var length = children ? children.length : 0
  var index = -1
  var child

  if (node.type === 'element') {
    if (schema.space === 'html' && node.tagName === 'svg') {
      schema = svg
    }

    p5.namespaceURI = ns[schema.space]
  }

  while (++index < length) {
    child = one(children[index], schema)
    child.parentNode = p5
    childNodes[index] = child
  }

  if (node.type === 'element' || node.type === 'root') {
    p5.childNodes = childNodes
  }

  if (position && position.start && position.end) {
    p5.sourceCodeLocation = {
      startLine: position.start.line,
      startCol: position.start.column,
      startOffset: position.start.offset,
      endLine: position.end.line,
      endCol: position.end.column,
      endOffset: position.end.offset
    }
  }

  return p5
}
