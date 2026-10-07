var scopePattern = /^(?:(@[^/]+)[/]+)([^/]+)[/]?/
var basePattern = /^([^/]+)[/]?/

module.exports = extract.bind(null, false)
module.exports.base = extract.bind(null, true)

function extract(isBase, str) {
  if (/^@/.test(str)) {
    var match = scopePattern.exec(str)
    if (!match || !match[1] || !match[2])
      return null
    if (isBase)
      return match[2] || null

    return [ match[1], match[2] ].join('/')
  } else {
    var match = basePattern.exec(str)
    if (!match)
      return null
    return match[1] || null
  }
}