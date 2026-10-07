'use strict'

var xtend = require('xtend')
var defaults = require('./github.json')

module.exports = wrapper

var own = {}.hasOwnProperty
var push = [].push

var nodeSchema = {
  root: {children: all},
  doctype: handleDoctype,
  comment: handleComment,
  element: {
    tagName: handleTagName,
    properties: handleProperties,
    children: all
  },
  text: {value: handleValue},
  '*': {data: allow, position: allow}
}

// Sanitize `node`, according to `schema`.
function wrapper(node, schema) {
  var ctx = {type: 'root', children: []}
  var replace

  if (node && typeof node === 'object' && node.type) {
    replace = one(xtend(defaults, schema || {}), node, [])

    if (replace) {
      if ('length' in replace) {
        if (replace.length === 1) {
          ctx = replace[0]
        } else {
          ctx.children = replace
        }
      } else {
        ctx = replace
      }
    }
  }

  return ctx
}

// Sanitize `node`.
function one(schema, node, stack) {
  var type = node && node.type
  var replacement = {type: node.type}
  var replace
  var definition
  var allowed
  var result
  var key

  if (own.call(nodeSchema, type)) {
    definition = nodeSchema[type]

    if (typeof definition === 'function') {
      definition = definition(schema, node)
    }

    if (definition) {
      replace = true
      allowed = xtend(definition, nodeSchema['*'])

      for (key in allowed) {
        result = allowed[key](schema, node[key], node, stack)

        if (result === false) {
          replace = null
          // Set the non-safe value.
          replacement[key] = node[key]
        } else if (result != null) {
          replacement[key] = result
        }
      }
    }
  }

  if (replace) {
    return replacement
  }

  return replacement.children &&
    replacement.children.length &&
    schema.strip.indexOf(replacement.tagName) < 0
    ? replacement.children
    : null
}

// Sanitize `children`.
function all(schema, children, node, stack) {
  var results = []
  var index = -1
  var value

  if (children) {
    stack.push(node.tagName)

    while (++index < children.length) {
      value = one(schema, children[index], stack)

      if (value) {
        if ('length' in value) {
          push.apply(results, value)
        } else {
          results.push(value)
        }
      }
    }

    stack.pop()
  }

  return results
}

// Sanitize `properties`.
function handleProperties(schema, properties, node, stack) {
  var name = handleTagName(schema, node.tagName, node, stack)
  var reqs = schema.required || /* istanbul ignore next */ {}
  var props = properties || {}
  var allowed = xtend(
    toPropertyValueMap(schema.attributes['*']),
    toPropertyValueMap(
      own.call(schema.attributes, name) ? schema.attributes[name] : []
    )
  )
  var result = {}
  var definition
  var key
  var value

  for (key in props) {
    if (own.call(allowed, key)) {
      definition = allowed[key]
    } else if (data(key) && own.call(allowed, 'data*')) {
      definition = allowed['data*']
    } else {
      continue
    }

    value = props[key]
    value =
      value && typeof value === 'object' && 'length' in value
        ? handlePropertyValues(schema, value, key, definition)
        : handlePropertyValue(schema, value, key, definition)

    if (value != null) {
      result[key] = value
    }
  }

  if (own.call(reqs, name)) {
    for (key in reqs[name]) {
      if (!own.call(result, key)) {
        result[key] = reqs[name][key]
      }
    }
  }

  return result
}

// Sanitize a property value which is a list.
function handlePropertyValues(schema, values, prop, definition) {
  var result = []
  var index = -1
  var value

  while (++index < values.length) {
    value = handlePropertyValue(schema, values[index], prop, definition)

    if (value != null) {
      result.push(value)
    }
  }

  return result
}

// Sanitize a property value.
function handlePropertyValue(schema, value, prop, definition) {
  if (
    (typeof value === 'boolean' ||
      typeof value === 'number' ||
      typeof value === 'string') &&
    handleProtocol(schema, value, prop) &&
    (!definition.length || definition.indexOf(value) > -1)
  ) {
    return schema.clobber.indexOf(prop) < 0
      ? value
      : schema.clobberPrefix + value
  }
}

// Check whether `value` is a safe URL.
function handleProtocol(schema, value, prop) {
  var url = String(value)
  var colon = url.indexOf(':')
  var questionMark = url.indexOf('?')
  var numberSign = url.indexOf('#')
  var slash = url.indexOf('/')
  var protocols = own.call(schema.protocols, prop)
    ? schema.protocols[prop].concat()
    : []
  var index = -1

  if (
    !protocols.length ||
    colon < 0 ||
    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    (slash > -1 && colon > slash) ||
    (questionMark > -1 && colon > questionMark) ||
    (numberSign > -1 && colon > numberSign)
  ) {
    return true
  }

  while (++index < protocols.length) {
    if (
      colon === protocols[index].length &&
      url.slice(0, protocols[index].length) === protocols[index]
    ) {
      return true
    }
  }

  return false
}

// Always return a valid HTML5 doctype.
function handleDoctypeName() {
  return 'html'
}

// Sanitize `tagName`.
function handleTagName(schema, tagName, node, stack) {
  var name = typeof tagName === 'string' && tagName
  var index = -1

  if (!name || name === '*' || schema.tagNames.indexOf(name) < 0) {
    return false
  }

  // Some nodes can break out of their context if they don’t have a certain
  // ancestor.
  if (own.call(schema.ancestors, name)) {
    while (++index < schema.ancestors[name].length) {
      if (stack.indexOf(schema.ancestors[name][index]) > -1) {
        return name
      }
    }

    return false
  }

  return name
}

function handleDoctype(schema) {
  return schema.allowDoctypes ? {name: handleDoctypeName} : null
}

function handleComment(schema) {
  return schema.allowComments ? {value: handleCommentValue} : null
}

// See <https://html.spec.whatwg.org/multipage/parsing.html#serialising-html-fragments>
function handleCommentValue(schema, value) {
  var result = typeof value === 'string' ? value : ''
  var index = result.indexOf('-->')

  return index < 0 ? result : result.slice(0, index)
}

// Sanitize `value`.
function handleValue(schema, value) {
  return typeof value === 'string' ? value : ''
}

// Create a map from a list of props or a list of properties and values.
function toPropertyValueMap(values) {
  var result = {}
  var index = -1
  var value

  while (++index < values.length) {
    value = values[index]

    if (value && typeof value === 'object' && 'length' in value) {
      result[value[0]] = value.slice(1)
    } else {
      result[value] = []
    }
  }

  return result
}

// Allow `value`.
function allow(schema, value) {
  return value
}

// Check if `prop` is a data property.
function data(prop) {
  return prop.length > 4 && prop.slice(0, 4).toLowerCase() === 'data'
}
