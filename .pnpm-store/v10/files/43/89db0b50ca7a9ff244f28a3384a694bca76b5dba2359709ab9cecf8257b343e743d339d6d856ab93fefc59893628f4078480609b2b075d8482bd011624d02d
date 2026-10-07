'use strict'

module.exports = function toCamelCase (name) {
  if (name[0] === '@') {
    name = name.slice(1).replace('/', '-')
  }
  return name.replace(/-(.)/g, function (match, g1) {
    return g1.toUpperCase()
  })
}
