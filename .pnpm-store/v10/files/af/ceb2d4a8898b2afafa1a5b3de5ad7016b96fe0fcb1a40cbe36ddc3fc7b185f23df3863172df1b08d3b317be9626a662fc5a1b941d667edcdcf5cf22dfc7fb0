// take an un-split argv string and tokenize it.
module.exports = function (argString) {
  if (Array.isArray(argString)) {
    return argString.map(e => typeof e !== 'string' ? e + '' : e)
  }

  argString = argString.trim()

  let i = 0
  let prevC = null
  let c = null
  let opening = null
  const args = []

  for (let ii = 0; ii < argString.length; ii++) {
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
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c
    }

    if (!args[i]) args[i] = ''
    args[i] += c
  }

  return args
}
