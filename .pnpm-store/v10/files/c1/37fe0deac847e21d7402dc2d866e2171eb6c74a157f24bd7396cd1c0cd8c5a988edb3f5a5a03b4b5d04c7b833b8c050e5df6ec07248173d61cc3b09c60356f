const { EOL } = require('os')

const getFirstRegexpMatchOrDefault = (text, regexp, defaultValue) => {
  regexp.lastIndex = 0 // https://stackoverflow.com/a/11477448/4536543
  let match = regexp.exec(text)
  if (match !== null) {
    return match[1]
  } else {
    return defaultValue
  }
}

const DEFAULT_INDENT = '  '
const INDENT_REGEXP = /^([ \t]+)[^\s]/m

module.exports.detectIndent = text =>
  getFirstRegexpMatchOrDefault(text, INDENT_REGEXP, DEFAULT_INDENT)
module.exports.DEFAULT_INDENT = DEFAULT_INDENT

const DEFAULT_EOL = EOL
const EOL_REGEXP = /(\r\n|\n|\r)/g

module.exports.detectEOL = text =>
  getFirstRegexpMatchOrDefault(text, EOL_REGEXP, DEFAULT_EOL)
module.exports.DEFAULT_EOL = DEFAULT_EOL
