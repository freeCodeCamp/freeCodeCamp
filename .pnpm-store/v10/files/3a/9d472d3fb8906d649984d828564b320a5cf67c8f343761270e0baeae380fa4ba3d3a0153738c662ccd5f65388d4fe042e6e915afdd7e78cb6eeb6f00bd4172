module.exports = patternCompile

function patternCompile(pattern) {
  var before
  var after

  if (!pattern._compiled) {
    before = pattern.before ? '(?:' + pattern.before + ')' : ''
    after = pattern.after ? '(?:' + pattern.after + ')' : ''

    if (pattern.atBreak) {
      before = '[\\r\\n][\\t ]*' + before
    }

    pattern._compiled = new RegExp(
      (before ? '(' + before + ')' : '') +
        (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
        pattern.character +
        (after || ''),
      'g'
    )
  }

  return pattern._compiled
}
