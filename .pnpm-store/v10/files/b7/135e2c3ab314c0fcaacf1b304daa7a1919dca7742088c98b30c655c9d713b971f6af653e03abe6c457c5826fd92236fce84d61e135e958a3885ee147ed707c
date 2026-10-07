exports.unsafe = [
  {
    character: '\r',
    inConstruct: ['leafDirectiveLabel', 'containerDirectiveLabel']
  },
  {
    character: '\n',
    inConstruct: ['leafDirectiveLabel', 'containerDirectiveLabel']
  },
  {
    before: '[^:]',
    character: ':',
    after: '[A-Za-z]',
    inConstruct: ['phrasing']
  },
  {atBreak: true, character: ':', after: ':'}
]

exports.handlers = {
  containerDirective: handleDirective,
  leafDirective: handleDirective,
  textDirective: handleDirective
}

handleDirective.peek = peekDirective

var repeatString = require('repeat-string')
var encode = require('stringify-entities/light')
var visit = require('unist-util-visit-parents')
var flow = require('mdast-util-to-markdown/lib/util/container-flow')
var phrasing = require('mdast-util-to-markdown/lib/util/container-phrasing')
var checkQuote = require('mdast-util-to-markdown/lib/util/check-quote')

var own = {}.hasOwnProperty

var shortcut = /^[^\t\n\r "#'.<=>`}]+$/

function handleDirective(node, _, context) {
  var prefix = fence(node)
  var exit = context.enter(node.type)
  var value =
    prefix +
    (node.name || '') +
    label(node, context) +
    attributes(node, context)
  var subvalue

  if (node.type === 'containerDirective') {
    subvalue = content(node, context)
    if (subvalue) value += '\n' + subvalue
    value += '\n' + prefix
  }

  exit()
  return value
}

function peekDirective() {
  return ':'
}

function label(node, context) {
  var label = node
  var exit
  var subexit
  var value

  if (node.type === 'containerDirective') {
    if (!inlineDirectiveLabel(node)) return ''
    label = node.children[0]
  }

  exit = context.enter('label')
  subexit = context.enter(node.type + 'Label')
  value = phrasing(label, context, {before: '[', after: ']'})
  subexit()
  exit()
  return value ? '[' + value + ']' : ''
}

function attributes(node, context) {
  var quote = checkQuote(context)
  var subset = node.type === 'textDirective' ? [quote] : [quote, '\n', '\r']
  var attrs = node.attributes || {}
  var values = []
  var id
  var classesFull
  var classes
  var value
  var key
  var index

  for (key in attrs) {
    if (own.call(attrs, key) && attrs[key] != null) {
      value = String(attrs[key])

      if (key === 'id') {
        id = shortcut.test(value) ? '#' + value : quoted('id', value)
      } else if (key === 'class') {
        value = value.split(/[\t\n\r ]+/g)
        classesFull = []
        classes = []
        index = -1

        while (++index < value.length) {
          ;(shortcut.test(value[index]) ? classes : classesFull).push(
            value[index]
          )
        }

        classesFull = classesFull.length
          ? quoted('class', classesFull.join(' '))
          : ''
        classes = classes.length ? '.' + classes.join('.') : ''
      } else {
        values.push(quoted(key, value))
      }
    }
  }

  if (classesFull) {
    values.unshift(classesFull)
  }

  if (classes) {
    values.unshift(classes)
  }

  if (id) {
    values.unshift(id)
  }

  return values.length ? '{' + values.join(' ') + '}' : ''

  function quoted(key, value) {
    return (
      key + (value ? '=' + quote + encode(value, {subset: subset}) + quote : '')
    )
  }
}

function content(node, context) {
  var content = inlineDirectiveLabel(node)
    ? Object.assign({}, node, {children: node.children.slice(1)})
    : node

  return flow(content, context)
}

function inlineDirectiveLabel(node) {
  return (
    node.children &&
    node.children[0] &&
    node.children[0].data &&
    node.children[0].data.directiveLabel
  )
}

function fence(node) {
  var size = 0

  if (node.type === 'containerDirective') {
    visit(node, 'containerDirective', onvisit)
    size += 3
  } else if (node.type === 'leafDirective') {
    size = 2
  } else {
    size = 1
  }

  return repeatString(':', size)

  function onvisit(node, parents) {
    var index = parents.length
    var nesting = 0

    while (index--) {
      if (parents[index].type === 'containerDirective') {
        nesting++
      }
    }

    if (nesting > size) size = nesting
  }
}
