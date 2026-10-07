module.exports = createToMarkdown

var matters = require('micromark-extension-frontmatter/lib/matters')

function createToMarkdown(options) {
  var unsafe = []
  var handlers = {}
  var settings = matters(options)
  var length = settings.length
  var index = -1
  var matter

  while (++index < length) {
    matter = settings[index]
    handlers[matter.type] = handler(matter)
    unsafe.push({atBreak: true, character: fence(matter, 'open').charAt(0)})
  }

  return {unsafe: unsafe, handlers: handlers}
}

function handler(matter) {
  var open = fence(matter, 'open')
  var close = fence(matter, 'close')

  return handle

  function handle(node) {
    return open + (node.value ? '\n' + node.value : '') + '\n' + close
  }
}

function fence(matter, prop) {
  var marker

  if (matter.marker) {
    marker = pick(matter.marker, prop)
    return marker + marker + marker
  }

  return pick(matter.fence, prop)
}

function pick(schema, prop) {
  return typeof schema === 'string' ? schema : schema[prop]
}
