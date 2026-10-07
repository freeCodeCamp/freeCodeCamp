'use strict'

const validate = require('./config-validator')
const deepClone = require('rfdc')({ circles: true, proto: false })
const { FST_ERR_INIT_OPTS_INVALID } = require('./errors')

function validateInitialConfig (options) {
  const opts = deepClone(options)

  if (!validate(opts)) {
    const error = new FST_ERR_INIT_OPTS_INVALID(JSON.stringify(validate.errors.map(e => e.message)))
    error.errors = validate.errors
    throw error
  }

  return deepFreezeObject(opts)
}

function deepFreezeObject (object) {
  const properties = Object.getOwnPropertyNames(object)

  for (const name of properties) {
    const value = object[name]

    if (ArrayBuffer.isView(value) && !(value instanceof DataView)) {
      continue
    }

    object[name] = value && typeof value === 'object' ? deepFreezeObject(value) : value
  }

  return Object.freeze(object)
}

module.exports = validateInitialConfig
module.exports.defaultInitOptions = validate.defaultInitOptions
module.exports.utils = { deepFreezeObject }
