'use strict'

const fastJsonStringify = require('fast-json-stringify')

function SerializerSelector () {
  return function buildSerializerFactory (externalSchemas, serializerOpts) {
    const fjsOpts = Object.assign({}, serializerOpts, { schema: externalSchemas })
    return responseSchemaCompiler.bind(null, fjsOpts)
  }
}

function responseSchemaCompiler (fjsOpts, { schema /* method, url, httpStatus */ }) {
  if (fjsOpts.schema && schema.$id && fjsOpts.schema[schema.$id]) {
    fjsOpts.schema = { ...fjsOpts.schema }
    delete fjsOpts.schema[schema.$id]
  }
  return fastJsonStringify(schema, fjsOpts)
}

function StandaloneSerializer (options = { readMode: true }) {
  if (options.readMode === true && typeof options.restoreFunction !== 'function') {
    throw new Error('You must provide a function for the restoreFunction-option when readMode ON')
  }

  if (options.readMode !== true && typeof options.storeFunction !== 'function') {
    throw new Error('You must provide a function for the storeFunction-option when readMode OFF')
  }

  if (options.readMode === true) {
    // READ MODE: it behalf only in the restore function provided by the user
    return function wrapper () {
      return function (opts) {
        return options.restoreFunction(opts)
      }
    }
  }

  // WRITE MODE: it behalf on the default SerializerSelector, wrapping the API to run the Ajv Standalone code generation
  const factory = SerializerSelector()
  return function wrapper (externalSchemas, serializerOpts = {}) {
    // to generate the serialization source code, this option is mandatory
    serializerOpts.mode = 'standalone'

    const compiler = factory(externalSchemas, serializerOpts)
    return function (opts) { // { schema/*, method, url, httpPart */ }
      const serializeFuncCode = compiler(opts)

      options.storeFunction(opts, serializeFuncCode)

      // eslint-disable-next-line no-new-func
      return new Function(serializeFuncCode)
    }
  }
}

module.exports.SerializerSelector = SerializerSelector
module.exports.StandaloneSerializer = StandaloneSerializer
module.exports.default = StandaloneSerializer
