'use strict'

var unicodePunctuationRegex = require('../constant/unicode-punctuation-regex.js')
var regexCheck = require('../util/regex-check.js')

// Size note: removing ASCII from the regex and using `ascii-punctuation` here
// In fact adds to the bundle size.
var unicodePunctuation = regexCheck(unicodePunctuationRegex)

module.exports = unicodePunctuation
