'use strict'

const ValidatorSelector = require('./index')
const standaloneCode = require('ajv/dist/standalone').default

function StandaloneValidator (options = { readMode: true }) {
  if (options.readMode === true && !options.restoreFunction) {
    throw new Error('You must provide a restoreFunction options when readMode ON')
  }

  if (options.readMode !== true && !options.storeFunction) {
    throw new Error('You must provide a storeFunction options when readMode OFF')
  }

  if (options.readMode === true) {
    // READ MODE: it behalf only in the restore function provided by the user
    return function wrapper () {
      return function (opts) {
        return options.restoreFunction(opts)
      }
    }
  }

  // WRITE MODE: it behalf on the default ValidatorSelector, wrapping the API to run the Ajv Standalone code generation
  const factory = ValidatorSelector()
  return function wrapper (externalSchemas, ajvOptions = {}) {
    if (!ajvOptions.customOptions || !ajvOptions.customOptions.code) {
      // to generate the validation source code, these options are mandatory
      ajvOptions.customOptions = Object.assign({}, ajvOptions.customOptions, { code: { source: true } })
    }

    const compiler = factory(externalSchemas, ajvOptions)
    return function (opts) { // { schema/*, method, url, httpPart */ }
      const validationFunc = compiler(opts)

      const schemaValidationCode = standaloneCode(compiler[ValidatorSelector.AjvReference].ajv, validationFunc)
      options.storeFunction(opts, schemaValidationCode)

      return validationFunc
    }
  }
}

module.exports = StandaloneValidator
