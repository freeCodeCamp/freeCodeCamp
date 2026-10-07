'use strict'

const { URL } = require('node:url')

const BASE_URL = 'http://localhost'

/**
 * Parse URL
 *
 * @param {(Object|String)} url
 * @param {Object} [query]
 * @return {URL}
 */
module.exports = function parseURL (url, query) {
  if ((typeof url === 'string' || Object.prototype.toString.call(url) === '[object String]') && url.startsWith('//')) {
    url = BASE_URL + url
  }
  const result = typeof url === 'object'
    ? Object.assign(new URL(BASE_URL), url)
    : new URL(url, BASE_URL)

  if (typeof query === 'string') {
    query = new URLSearchParams(query)
    for (const key of query.keys()) {
      result.searchParams.delete(key)
      for (const value of query.getAll(key)) {
        result.searchParams.append(key, value)
      }
    }
  } else {
    const merged = Object.assign({}, url.query, query)
    for (const key in merged) {
      const value = merged[key]

      if (Array.isArray(value)) {
        result.searchParams.delete(key)
        for (const param of value) {
          result.searchParams.append(key, param)
        }
      } else {
        result.searchParams.set(key, value)
      }
    }
  }

  return result
}
