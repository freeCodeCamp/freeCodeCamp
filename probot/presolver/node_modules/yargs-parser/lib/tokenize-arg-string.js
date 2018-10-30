// take an un-split argv string and tokenize it.
module.exports = function (argString) {
  if (Array.isArray(argString)) return argString

  argString = argString.trim()

  var i = 0
  var prevC = null
  var c = null
  var opening = null
  var args = []

  for (var ii = 0; ii < argString.length; ii++) {
    prevC = c
    c = argString.charAt(ii)

    // split on spaces unless we're in quotes.
    if (c === ' ' && !opening) {
      if (!(prevC === ' ')) {
        i++
      }
      continue
    }

    // don't split the string if we're in matching
    // opening or closing single and double quotes.
    if (c === opening) {
      opening = null
      continue
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c
      continue
    }

    if (!args[i]) args[i] = ''
    args[i] += c
  }

  return args
}
