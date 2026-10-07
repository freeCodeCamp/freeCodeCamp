'use strict'

const AjvReference = Symbol.for('fastify.ajv-compiler.reference')
const ValidatorCompiler = require('./lib/validator-compiler')
const SerializerCompiler = require('./lib/serializer-compiler')

function AjvCompiler (opts) {
  const validatorPool = new Map()
  const serializerPool = new Map()

  if (opts && opts.jtdSerializer === true) {
    return function buildSerializerFromPool (externalSchemas, serializerOpts) {
      const uniqueAjvKey = getPoolKey({}, serializerOpts)
      if (serializerPool.has(uniqueAjvKey)) {
        return serializerPool.get(uniqueAjvKey)
      }

      const compiler = new SerializerCompiler(externalSchemas, serializerOpts)
      const ret = compiler.buildSerializerFunction.bind(compiler)
      serializerPool.set(uniqueAjvKey, ret)

      return ret
    }
  }

  return function buildCompilerFromPool (externalSchemas, options) {
    const uniqueAjvKey = getPoolKey(externalSchemas, options.customOptions)
    if (validatorPool.has(uniqueAjvKey)) {
      return validatorPool.get(uniqueAjvKey)
    }

    const compiler = new ValidatorCompiler(externalSchemas, options)
    const ret = compiler.buildValidatorFunction.bind(compiler)
    validatorPool.set(uniqueAjvKey, ret)

    if (options.customOptions.code !== undefined) {
      ret[AjvReference] = compiler
    }

    return ret
  }
}

function getPoolKey (externalSchemas, options) {
  const externals = JSON.stringify(externalSchemas)
  const ajvConfig = JSON.stringify(options)
  return `${externals}${ajvConfig}`
}
module.exports = AjvCompiler
module.exports.default = AjvCompiler
module.exports.AjvCompiler = AjvCompiler
module.exports.AjvReference = AjvReference
module.exports.StandaloneValidator = require('./standalone')
