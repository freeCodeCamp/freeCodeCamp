'use strict'

const fastUri = require('fast-uri')

module.exports = Object.freeze({
  coerceTypes: 'array',
  useDefaults: true,
  removeAdditional: true,
  uriResolver: fastUri,
  addUsedSchema: false,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false
})
