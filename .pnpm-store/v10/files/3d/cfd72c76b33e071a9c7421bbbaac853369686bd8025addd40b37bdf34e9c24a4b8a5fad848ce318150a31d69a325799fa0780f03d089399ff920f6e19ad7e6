module.exports = matters

var fault = require('fault')

var own = {}.hasOwnProperty

var markers = {yaml: '-', toml: '+'}

function matters(options) {
  var settings = options || 'yaml'
  var results = []
  var index = -1
  var length

  // One preset or matter.
  if (typeof settings === 'string' || !('length' in settings)) {
    settings = [settings]
  }

  length = settings.length

  while (++index < length) {
    results[index] = matter(settings[index])
  }

  return results
}

function matter(option) {
  var result = option

  if (typeof result === 'string') {
    if (!own.call(markers, result)) {
      throw fault('Missing matter definition for `%s`', result)
    }

    result = {type: result, marker: markers[result]}
  } else if (typeof result !== 'object') {
    throw fault('Expected matter to be an object, not `%j`', result)
  }

  if (!own.call(result, 'type')) {
    throw fault('Missing `type` in matter `%j`', result)
  }

  if (!own.call(result, 'fence') && !own.call(result, 'marker')) {
    throw fault('Missing `marker` or `fence` in matter `%j`', result)
  }

  return result
}
