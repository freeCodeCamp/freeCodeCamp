module.exports = getRequestAgent

const urlParse = require('url').parse

const HttpAgent = require('http').Agent
const HttpsAgent = require('https').Agent
const HttpProxyAgent = require('http-proxy-agent')
const HttpsProxyAgent = require('https-proxy-agent')
const merge = require('lodash/merge')
const omit = require('lodash/omit')
const pick = require('lodash/pick')

const deprecate = require('./deprecate')

function getRequestAgent (baseUrl, options) {
  if (options.agent) {
    return options.agent
  }

  const agentOptionNames = ['ca', 'proxy', 'rejectUnauthorized', 'family'].filter(key => key in options)

  if (agentOptionNames.length === 0) {
    return
  }
  agentOptionNames.forEach(option => {
    deprecate(`options.${option} (use "options.agent" instead)`)
  })

  const agentOptions = pick(options, agentOptionNames)

  const protocol = urlParse(baseUrl).protocol.replace(':', '')

  /* istanbul ignore if */
  if ('proxy' in options) {
    const proxyAgentOptions = merge(
      urlParse(agentOptions.proxy),
      omit(agentOptions, 'proxy')
    )

    if (protocol === 'http') {
      return new HttpProxyAgent(proxyAgentOptions)
    }

    return new HttpsProxyAgent(proxyAgentOptions)
  }

  /* istanbul ignore if */
  if (protocol === 'http') {
    return new HttpAgent(agentOptions)
  }

  return new HttpsAgent(agentOptions)
}
