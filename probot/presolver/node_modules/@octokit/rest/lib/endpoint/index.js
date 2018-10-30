'use strict'

module.exports = restEndpoint

const defaultsDeep = require('lodash/defaultsDeep')
const intersection = require('lodash/intersection')
const mapKeys = require('lodash/mapKeys')
const omit = require('lodash/omit')
const urlTemplate = require('url-template')
const getUserAgent = require('universal-user-agent')

const addQueryParameters = require('./add-query-parameters')
const extractUrlVariableNames = require('./extract-url-variable-names')
const pkg = require('../../package.json')

const DEFAULTS = module.exports.DEFAULTS = require('./defaults')
const NON_PARAMETERS = [
  'request',
  'baseUrl'
]

function restEndpoint (options) {
  // lowercase header names (#760)
  options.headers = mapKeys(options.headers, (value, key) => key.toLowerCase())

  let userAgent = `octokit.js/${pkg.version} ${getUserAgent()}`
  if (options.headers['user-agent']) {
    userAgent = `${options.headers['user-agent']} ${userAgent}`
  }
  options.headers['user-agent'] = userAgent

  options = defaultsDeep({}, options, DEFAULTS)

  let method = options.method.toLowerCase()
  let baseUrl = options.baseUrl
  let url = options.url
  let body = options.body
  let headers = options.headers
  let remainingOptions = omit(options, ['method', 'baseUrl', 'url', 'headers'])

  // replace :varname with {varname} to make it RFC 6570 compatible
  url = url.replace(/:([a-z]\w+)/g, '{+$1}')

  // extract variable names from URL to calculate remaining variables later
  const urlVariableNames = extractUrlVariableNames(url)

  url = urlTemplate.parse(url).expand(remainingOptions)

  if (!/^http/.test(url)) {
    url = (baseUrl) + url
  }

  const requestOptions = remainingOptions.request
  remainingOptions = omit(remainingOptions, intersection(Object.keys(options), urlVariableNames).concat(NON_PARAMETERS))

  if (method === 'get' || method === 'head') {
    url = addQueryParameters(url, remainingOptions)
  } else {
    if ('input' in remainingOptions) {
      body = remainingOptions.input
    } else {
      body = Object.keys(remainingOptions).length ? remainingOptions : undefined
    }
  }

  return Object.assign(requestOptions, {
    method,
    url,
    headers,
    body
  })
}
