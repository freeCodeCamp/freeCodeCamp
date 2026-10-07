'use strict'

const { matchParams } = require('./match-params')

const namePattern = /\{([^{}]+)\}/u

function paramName (param) {
  return param.replace(namePattern, (_, captured) => captured)
}

// Generates default parameters schema from the given URL. (ex: /example/{userId})
function generateParamsSchema (url) {
  const params = matchParams(url)
  const schema = {
    params: {
      type: 'object',
      properties: {}
    }
  }

  schema.params.properties = params.reduce((acc, param) => {
    const name = paramName(param)
    acc[name] = {
      type: 'string'
    }
    return acc
  }, {})

  return schema
}

module.exports = {
  generateParamsSchema,
  paramName
}
