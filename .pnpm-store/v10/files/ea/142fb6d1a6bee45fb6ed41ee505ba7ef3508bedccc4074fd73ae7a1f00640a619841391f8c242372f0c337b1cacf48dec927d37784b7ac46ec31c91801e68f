'use strict'

function buildStandaloneCode (contextFunc, context, serializer, validator) {
  let ajvDependencyCode = ''
  if (context.validatorSchemasIds.size > 0) {
    ajvDependencyCode += 'const Validator = require(\'fast-json-stringify/lib/validator\')\n'
    ajvDependencyCode += `const validatorState = ${JSON.stringify(validator.getState())}\n`
    ajvDependencyCode += 'const validator = Validator.restoreFromState(validatorState)\n'
  } else {
    ajvDependencyCode += 'const validator = null\n'
  }

  // Don't need to keep external schemas once compiled
  // validatorState will hold external schemas if it needs them
  const { schema, ...serializerState } = serializer.getState()

  return `
  'use strict'

  const Serializer = require('fast-json-stringify/lib/serializer')
  const serializerState = ${JSON.stringify(serializerState)}
  const serializer = Serializer.restoreFromState(serializerState)

  ${ajvDependencyCode}

  module.exports = ${contextFunc.toString()}(validator, serializer)`
}

module.exports = buildStandaloneCode

module.exports.dependencies = {
  Serializer: require('./serializer'),
  Validator: require('./validator')
}
