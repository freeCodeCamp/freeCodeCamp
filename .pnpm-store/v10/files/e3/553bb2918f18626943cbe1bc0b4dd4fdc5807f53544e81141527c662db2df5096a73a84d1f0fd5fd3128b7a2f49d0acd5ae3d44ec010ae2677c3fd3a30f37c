module.exports = create

var matters = require('./matters')

function create(options) {
  var settings = matters(options)
  var length = settings.length
  var index = -1
  var matter
  var enter = {}
  var exit = {}

  while (++index < length) {
    matter = settings[index]
    enter[matter.type] = start
    exit[matter.type] = end
  }

  return {enter: enter, exit: exit}

  function start() {
    this.buffer()
  }

  function end() {
    this.resume()
    this.setData('slurpOneLineEnding', true)
  }
}
