'use strict'

module.exports = parse

var search = /[#.]/g

// Create a hast element from a simple CSS selector.
function parse(selector, defaultTagName) {
  var value = selector || ''
  var name = defaultTagName || 'div'
  var props = {}
  var start = 0
  var subvalue
  var previous
  var match

  while (start < value.length) {
    search.lastIndex = start
    match = search.exec(value)
    subvalue = value.slice(start, match ? match.index : value.length)

    if (subvalue) {
      if (!previous) {
        name = subvalue
      } else if (previous === '#') {
        props.id = subvalue
      } else if (props.className) {
        props.className.push(subvalue)
      } else {
        props.className = [subvalue]
      }

      start += subvalue.length
    }

    if (match) {
      previous = match[0]
      start++
    }
  }

  return {type: 'element', tagName: name, properties: props, children: []}
}
