'use strict'

const { createWarning } = require('process-warning')

/**
 * Deprecation codes:
 *   - FSTWRN001
 *   - FSTSEC001
 *   - FSTDEP022
 *
 * Deprecation Codes FSTDEP001 - FSTDEP021 were used by v4 and MUST NOT not be reused.
 *                             - FSTDEP022 is used by v5 and MUST NOT be reused.
 * Warning Codes FSTWRN001 - FSTWRN002 were used by v4 and MUST NOT not be reused.
 */

const FSTWRN001 = createWarning({
  name: 'FastifyWarning',
  code: 'FSTWRN001',
  message: 'The %s schema for %s: %s is missing. This may indicate the schema is not well specified.',
  unlimited: true
})

const FSTWRN003 = createWarning({
  name: 'FastifyWarning',
  code: 'FSTWRN003',
  message: 'The %s mixes async and callback styles that may lead to unhandled rejections. Please use only one of them.',
  unlimited: true
})

const FSTWRN004 = createWarning({
  name: 'FastifyWarning',
  code: 'FSTWRN004',
  message: 'It seems that you are overriding an errorHandler in the same scope, which can lead to subtle bugs.',
  unlimited: true
})

const FSTSEC001 = createWarning({
  name: 'FastifySecurity',
  code: 'FSTSEC001',
  message: 'You are using /%s/ Content-Type which may be vulnerable to CORS attack. Please make sure your RegExp start with "^" or include ";?" to proper detection of the essence MIME type.',
  unlimited: true
})

const FSTDEP022 = createWarning({
  name: 'FastifyWarning',
  code: 'FSTDEP022',
  message: 'The router options for %s property access is deprecated. Please use "options.routerOptions" instead for accessing router options. The router options will be removed in `fastify@6`.',
  unlimited: true
})

module.exports = {
  FSTWRN001,
  FSTWRN003,
  FSTWRN004,
  FSTSEC001,
  FSTDEP022
}
