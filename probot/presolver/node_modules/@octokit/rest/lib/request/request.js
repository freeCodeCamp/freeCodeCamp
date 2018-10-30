'use strict'

module.exports = request

const fetch = require('node-fetch').default
const debug = require('debug')('octokit:rest')
const defaults = require('lodash/defaults')
const isPlainObject = require('lodash/isPlainObject')
const pick = require('lodash/pick')

const deprecate = require('../deprecate')
const getBuffer = require('./get-buffer-response')
const HttpError = require('./http-error')

function request (requestOptions) {
  debug('REQUEST:', requestOptions)

  // calculate content length unless body is a stream, in which case the
  // content length is already set per option
  if (requestOptions.body) {
    defaults(requestOptions.headers, {
      'content-type': 'application/json; charset=utf-8'
    })
  }

  // https://fetch.spec.whatwg.org/#methods
  requestOptions.method = requestOptions.method.toUpperCase()

  // GitHub expects "content-length: 0" header for PUT/PATCH requests without body
  // fetch does not allow to set `content-length` header, but we can set body to an empty string
  if (['PATCH', 'PUT'].indexOf(requestOptions.method) >= 0 && !requestOptions.body) {
    requestOptions.body = ''
  }

  if (isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body)
  }

  let headers = {}
  let status

  return fetch(requestOptions.url, pick(requestOptions, 'method', 'body', 'headers', 'timeout', 'agent'))

    .then(response => {
      status = response.status
      for (const keyAndValue of response.headers.entries()) {
        headers[keyAndValue[0]] = keyAndValue[1]
      }

      if (status === 204 || status === 205) {
        return
      }

      // GitHub API returns 200 for HEAD requsets
      if (requestOptions.method === 'HEAD') {
        if (status < 400) {
          return
        }

        throw new HttpError(response.statusText, status, headers)
      }

      if (status === 304) {
        requestOptions.url = response.headers.location
        throw new HttpError('Not modified', status, headers)
      }

      if (status >= 400) {
        return response.text()

          .then(message => {
            throw new HttpError(message, status, headers)
          })
      }

      const contentType = response.headers.get('content-type')
      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBuffer(response)
    })

    .then(data => {
      return {
        data,
        status,
        headers,
        get meta () {
          deprecate('response.meta – use response.headers instead (#896)')
          return headers
        }
      }
    })

    .catch(error => {
      if (error instanceof HttpError) {
        throw error
      }

      throw new HttpError(error.message, 500, headers)
    })
}
