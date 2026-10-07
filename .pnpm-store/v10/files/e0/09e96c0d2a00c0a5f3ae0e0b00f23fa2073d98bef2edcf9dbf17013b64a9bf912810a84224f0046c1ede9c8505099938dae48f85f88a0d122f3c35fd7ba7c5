'use strict'
const assert = require('node:assert')

function HostStorage () {
  const hosts = new Map()
  const regexHosts = []
  return {
    get: (host) => {
      const exact = hosts.get(host)
      if (exact) {
        return exact
      }
      for (const regex of regexHosts) {
        if (regex.host.test(host)) {
          return regex.value
        }
      }
    },
    set: (host, value) => {
      if (host instanceof RegExp) {
        regexHosts.push({ host, value })
      } else {
        hosts.set(host, value)
      }
    }
  }
}

module.exports = {
  name: 'host',
  mustMatchWhenDerived: false,
  storage: HostStorage,
  validate (value) {
    assert(typeof value === 'string' || Object.prototype.toString.call(value) === '[object RegExp]', 'Host should be a string or a RegExp')
  }
}
