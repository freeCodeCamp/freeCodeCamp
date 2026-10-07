'use strict'

const { createError } = require('@fastify/error')

module.exports = {
  AVV_ERR_EXPOSE_ALREADY_DEFINED: createError(
    'AVV_ERR_EXPOSE_ALREADY_DEFINED',
    "'%s' is already defined, specify an expose option for '%s'"
  ),
  AVV_ERR_ATTRIBUTE_ALREADY_DEFINED: createError(
    'AVV_ERR_ATTRIBUTE_ALREADY_DEFINED',
    "'%s' is already defined"
  ),
  AVV_ERR_CALLBACK_NOT_FN: createError(
    'AVV_ERR_CALLBACK_NOT_FN',
    "Callback for '%s' hook is not a function. Received: '%s'"
  ),
  AVV_ERR_PLUGIN_NOT_VALID: createError(
    'AVV_ERR_PLUGIN_NOT_VALID',
    "Plugin must be a function or a promise. Received: '%s'"
  ),
  AVV_ERR_ROOT_PLG_BOOTED: createError(
    'AVV_ERR_ROOT_PLG_BOOTED',
    'Root plugin has already booted'
  ),
  AVV_ERR_PARENT_PLG_LOADED: createError(
    'AVV_ERR_PARENT_PLG_LOADED',
    "Impossible to load '%s' plugin because the parent '%s' was already loaded"
  ),
  AVV_ERR_READY_TIMEOUT: createError(
    'AVV_ERR_READY_TIMEOUT',
    "Plugin did not start in time: '%s'. You may have forgotten to call 'done' function or to resolve a Promise"
  ),
  AVV_ERR_PLUGIN_EXEC_TIMEOUT: createError(
    'AVV_ERR_PLUGIN_EXEC_TIMEOUT',
    "Plugin did not start in time: '%s'. You may have forgotten to call 'done' function or to resolve a Promise"
  )
}
