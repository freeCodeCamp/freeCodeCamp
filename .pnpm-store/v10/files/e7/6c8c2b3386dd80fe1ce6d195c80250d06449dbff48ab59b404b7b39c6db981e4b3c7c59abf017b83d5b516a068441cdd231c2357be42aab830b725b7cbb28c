'use strict'

var labelEnd = require('./label-end.js')

var labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
}

function tokenizeLabelStartImage(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    effects.enter('labelImage')
    effects.enter('labelImageMarker')
    effects.consume(code)
    effects.exit('labelImageMarker')
    return open
  }

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker')
      effects.consume(code)
      effects.exit('labelMarker')
      effects.exit('labelImage')
      return after
    }

    return nok(code)
  }

  function after(code) {
    /* c8 ignore next */
    return code === 94 &&
      /* c8 ignore next */
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? /* c8 ignore next */
        nok(code)
      : ok(code)
  }
}

module.exports = labelStartImage
