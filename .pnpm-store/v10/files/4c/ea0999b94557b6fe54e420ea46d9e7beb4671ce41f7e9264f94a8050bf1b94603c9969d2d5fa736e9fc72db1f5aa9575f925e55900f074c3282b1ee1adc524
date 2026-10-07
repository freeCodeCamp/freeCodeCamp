'use strict'

const browsers = require('./browsers').browsers

function unpackRegion(packed) {
  return Object.keys(packed).reduce((list, browser) => {
    let data = packed[browser]
    list[browsers[browser]] = Object.keys(data).reduce((memo, key) => {
      let stats = data[key]
      if (key === '_') {
        stats.split(' ').forEach(version => (memo[version] = null))
      } else {
        memo[key] = stats
      }
      return memo
    }, {})
    return list
  }, {})
}

module.exports = unpackRegion
module.exports.default = unpackRegion
