'use strict'

const { stringify } = require('jsonfile/utils')
const { outputFile } = require('../output')

async function outputJson (file, data, options = {}) {
  const str = stringify(data, options)

  await outputFile(file, str, options)
}

module.exports = outputJson
