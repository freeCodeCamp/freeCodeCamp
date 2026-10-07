'use strict'

var s = require('hastscript/svg')
var h = require('hastscript')
var find = require('property-information/find')
var html = require('property-information/html')
var svg = require('property-information/svg')
var vfileLocation = require('vfile-location')
var ns = require('web-namespaces')

module.exports = wrapper

var own = {}.hasOwnProperty

// Handlers.
var map = {
  '#document': root,
  '#document-fragment': root,
  '#text': text,
  '#comment': comment,
  '#documentType': doctype
}

// Wrapper to normalise options.
function wrapper(ast, options) {
  var settings = options || {}
  var file

  if (settings.messages) {
    file = settings
    settings = {}
  } else {
    file = settings.file
  }

  return transform(ast, {
    schema: settings.space === 'svg' ? svg : html,
    file: file,
    verbose: settings.verbose
  })
}

// Transform a node.
function transform(ast, config) {
  var schema = config.schema
  var fn = own.call(map, ast.nodeName) ? map[ast.nodeName] : element
  var children
  var result
  var position

  if (fn === element) {
    config.schema = ast.namespaceURI === ns.svg ? svg : html
  }

  if (ast.childNodes) {
    children = nodes(ast.childNodes, config)
  }

  result = fn(ast, children, config)

  if (ast.sourceCodeLocation && config.file) {
    position = location(result, ast.sourceCodeLocation, config)

    if (position) {
      config.location = true
      result.position = position
    }
  }

  config.schema = schema

  return result
}

// Transform children.
function nodes(children, config) {
  var index = -1
  var result = []

  while (++index < children.length) {
    result[index] = transform(children[index], config)
  }

  return result
}

// Transform a document.
// Stores `ast.quirksMode` in `node.data.quirksMode`.
function root(ast, children, config) {
  var result = {
    type: 'root',
    children: children,
    data: {quirksMode: ast.mode === 'quirks' || ast.mode === 'limited-quirks'}
  }
  var doc
  var location

  if (config.file && config.location) {
    doc = String(config.file)
    location = vfileLocation(doc)
    result.position = {
      start: location.toPoint(0),
      end: location.toPoint(doc.length)
    }
  }

  return result
}

// Transform a doctype.
function doctype(ast) {
  return {
    type: 'doctype',
    name: ast.name || '',
    public: ast.publicId || null,
    system: ast.systemId || null
  }
}

// Transform a text.
function text(ast) {
  return {type: 'text', value: ast.value}
}

// Transform a comment.
function comment(ast) {
  return {type: 'comment', value: ast.data}
}

// Transform an element.
function element(ast, children, config) {
  var fn = config.schema.space === 'svg' ? s : h
  var props = {}
  var index = -1
  var result
  var attribute
  var pos
  var start
  var end

  while (++index < ast.attrs.length) {
    attribute = ast.attrs[index]
    props[(attribute.prefix ? attribute.prefix + ':' : '') + attribute.name] =
      attribute.value
  }

  result = fn(ast.tagName, props, children)

  if (result.tagName === 'template' && 'content' in ast) {
    pos = ast.sourceCodeLocation
    start = pos && pos.startTag && position(pos.startTag).end
    end = pos && pos.endTag && position(pos.endTag).start

    result.content = transform(ast.content, config)

    if ((start || end) && config.file) {
      result.content.position = {start: start, end: end}
    }
  }

  return result
}

// Create clean positional information.
function location(node, location, config) {
  var result = position(location)
  var tail
  var key
  var props

  if (node.type === 'element') {
    tail = node.children[node.children.length - 1]

    // Bug for unclosed with children.
    // See: <https://github.com/inikulin/parse5/issues/109>.
    if (!location.endTag && tail && tail.position && tail.position.end) {
      result.end = Object.assign({}, tail.position.end)
    }

    if (config.verbose) {
      props = {}

      for (key in location.attrs) {
        props[find(config.schema, key).property] = position(location.attrs[key])
      }

      node.data = {
        position: {
          opening: position(location.startTag),
          closing: location.endTag ? position(location.endTag) : null,
          properties: props
        }
      }
    }
  }

  return result
}

function position(loc) {
  var start = point({
    line: loc.startLine,
    column: loc.startCol,
    offset: loc.startOffset
  })
  var end = point({
    line: loc.endLine,
    column: loc.endCol,
    offset: loc.endOffset
  })
  return start || end ? {start: start, end: end} : null
}

function point(point) {
  return point.line && point.column ? point : null
}
