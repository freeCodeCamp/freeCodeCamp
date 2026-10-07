module.exports = function (opts) {
  var sep = opts ? opts.sep : '{}'
  var len = sep.length

  var whitespace = '\\s*'
  var left = escape(sep.substring(0, len / 2)) + whitespace
  var right = whitespace + escape(sep.substring(len / 2, len))

  return function (template, values) {
    Object.keys(values).forEach(function (key) {
      var value = String(values[key]).replace(/\$/g, '$$$$')
      template = template.replace(regExp(key), value)
    })
    return template
  }

  function escape (s) {
    return [].map.call(s, function (char) {
      return '\\' + char
    }).join('')
  }

  function regExp (key) {
    return new RegExp(left + key + right, 'g')
  }
}
