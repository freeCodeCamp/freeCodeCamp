module.exports = parseOptions

const defaults = require('lodash/defaults')
const pick = require('lodash/pick')

const deprecate = require('./deprecate')
const getRequestAgent = require('./get-request-agent')
const DEFAULTS = require('./defaults')
const OPTION_NAMES = [
  'timeout',
  'baseUrl',
  'agent',
  'headers'
]

function parseOptions (userOptions) {
  if (!userOptions) {
    userOptions = {}
  }

  if ('followRedirects' in userOptions) {
    deprecate('followRedirects option is no longer supported. All redirects are followed correctly')
  }

  if ('protocol' in userOptions) {
    deprecate('protocol option is no longer supported')
  }

  if ('host' in userOptions) {
    deprecate('host option is no longer supported')
  }

  if ('port' in userOptions) {
    deprecate('port option is no longer supported')
  }

  if ('pathPrefix' in userOptions) {
    deprecate('pathPrefix option is no longer supported')
  }

  if ('Promise' in userOptions) {
    deprecate('Promise option is no longer supported. The native Promise API is used')
  }

  const options = defaults(pick(userOptions, OPTION_NAMES), DEFAULTS)

  const clientDefaults = {
    baseUrl: options.baseUrl,
    headers: options.headers,
    request: {
      timeout: options.timeout
    }
  }
  if (userOptions.protocol) {
    clientDefaults.baseUrl = `${userOptions.protocol}://${userOptions.host}`

    /* istanbul ignore else */
    if (userOptions.port) {
      clientDefaults.baseUrl += `:${userOptions.port}`
    }

    // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
    /* istanbul ignore else */
    if (userOptions.pathPrefix) {
      clientDefaults.baseUrl += '/' + userOptions.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
    }
  }
  /* istanbul ignore else */

  if (!process.browser) {
    clientDefaults.request.agent = getRequestAgent(clientDefaults.baseUrl, userOptions)
  }

  return clientDefaults
}
