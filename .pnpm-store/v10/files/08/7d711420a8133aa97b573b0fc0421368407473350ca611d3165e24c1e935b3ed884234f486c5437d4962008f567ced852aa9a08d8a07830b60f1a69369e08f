'use strict'

module.exports = toHast

var u = require('unist-builder')
var visit = require('unist-util-visit')
var position = require('unist-util-position')
var generated = require('unist-util-generated')
var definitions = require('mdast-util-definitions')
var one = require('./one')
var footer = require('./footer')
var handlers = require('./handlers')

var own = {}.hasOwnProperty

var deprecationWarningIssued = false

// Factory to transform.
function factory(tree, options) {
  var settings = options || {}

  // Issue a warning if the deprecated tag 'allowDangerousHTML' is used
  if (settings.allowDangerousHTML !== undefined && !deprecationWarningIssued) {
    deprecationWarningIssued = true
    console.warn(
      'mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead'
    )
  }

  var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML
  var footnoteById = {}

  h.dangerous = dangerous
  h.definition = definitions(tree)
  h.footnoteById = footnoteById
  h.footnoteOrder = []
  h.augment = augment
  h.handlers = Object.assign({}, handlers, settings.handlers)
  h.unknownHandler = settings.unknownHandler
  h.passThrough = settings.passThrough

  visit(tree, 'footnoteDefinition', onfootnotedefinition)

  return h

  // Finalise the created `right`, a hast node, from `left`, an mdast node.
  function augment(left, right) {
    var data
    var ctx

    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && left.data) {
      data = left.data

      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          }
        }

        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = Object.assign({}, right.properties, data.hProperties)
      }

      if (right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    ctx = left && left.position ? left : {position: left}

    if (!generated(ctx)) {
      right.position = {
        start: position.start(ctx),
        end: position.end(ctx)
      }
    }

    return right
  }

  // Create an element for `node`.
  function h(node, tagName, props, children) {
    if (
      (children === undefined || children === null) &&
      typeof props === 'object' &&
      'length' in props
    ) {
      children = props
      props = {}
    }

    return augment(node, {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    })
  }

  function onfootnotedefinition(definition) {
    var id = String(definition.identifier).toUpperCase()

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
    if (!own.call(footnoteById, id)) {
      footnoteById[id] = definition
    }
  }
}

// Transform `tree`, which is an mdast node, to a hast node.
function toHast(tree, options) {
  var h = factory(tree, options)
  var node = one(h, tree)
  var foot = footer(h)

  if (foot) {
    node.children = node.children.concat(u('text', '\n'), foot)
  }

  return node
}
