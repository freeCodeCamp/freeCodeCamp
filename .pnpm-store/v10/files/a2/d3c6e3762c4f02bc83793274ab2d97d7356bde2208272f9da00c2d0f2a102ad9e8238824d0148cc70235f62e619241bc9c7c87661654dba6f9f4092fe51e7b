'use strict'

const { stringify } = require('jsonfile/utils')
const { outputFileSync } = require('../output-file')

function outputJsonSync (file, data, options) {
  const str = stringify(data, options)

  outputFileSync(file, str, options)
}

module.exports = outputJsonSync
