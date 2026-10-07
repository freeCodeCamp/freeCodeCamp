var reFirstKey = /^[^\[]*/
var reDigitPath = /^\[(\d+)\]/
var reNormalPath = /^\[([^\]]+)\]/

function parsePath (key) {
  function failure () {
    return [{ type: 'object', key: key, last: true }]
  }

  var firstKey = reFirstKey.exec(key)[0]
  if (!firstKey) return failure()

  var len = key.length
  var pos = firstKey.length
  var tail = { type: 'object', key: firstKey }
  var steps = [tail]

  while (pos < len) {
    var m

    if (key[pos] === '[' && key[pos + 1] === ']') {
      pos += 2
      tail.append = true
      if (pos !== len) return failure()
      continue
    }

    m = reDigitPath.exec(key.substring(pos))
    if (m !== null) {
      pos += m[0].length
      tail.nextType = 'array'
      tail = { type: 'array', key: parseInt(m[1], 10) }
      steps.push(tail)
      continue
    }

    m = reNormalPath.exec(key.substring(pos))
    if (m !== null) {
      pos += m[0].length
      tail.nextType = 'object'
      tail = { type: 'object', key: m[1] }
      steps.push(tail)
      continue
    }

    return failure()
  }

  tail.last = true
  return steps
}

module.exports = parsePath
