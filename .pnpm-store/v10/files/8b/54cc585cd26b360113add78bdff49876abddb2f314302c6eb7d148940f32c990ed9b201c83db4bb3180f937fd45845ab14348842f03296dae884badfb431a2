'use strict'

const { HEX } = require('./scopedChars')

const IPV4_REG = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u

function normalizeIPv4 (host) {
  if (findToken(host, '.') < 3) { return { host, isIPV4: false } }
  const matches = host.match(IPV4_REG) || []
  const [address] = matches
  if (address) {
    return { host: stripLeadingZeros(address, '.'), isIPV4: true }
  } else {
    return { host, isIPV4: false }
  }
}

/**
 * @param {string[]} input
 * @param {boolean} [keepZero=false]
 * @returns {string|undefined}
 */
function stringArrayToHexStripped (input, keepZero = false) {
  let acc = ''
  let strip = true
  for (const c of input) {
    if (HEX[c] === undefined) return undefined
    if (c !== '0' && strip === true) strip = false
    if (!strip) acc += c
  }
  if (keepZero && acc.length === 0) acc = '0'
  return acc
}

function getIPV6 (input) {
  let tokenCount = 0
  const output = { error: false, address: '', zone: '' }
  const address = []
  const buffer = []
  let isZone = false
  let endipv6Encountered = false
  let endIpv6 = false

  function consume () {
    if (buffer.length) {
      if (isZone === false) {
        const hex = stringArrayToHexStripped(buffer)
        if (hex !== undefined) {
          address.push(hex)
        } else {
          output.error = true
          return false
        }
      }
      buffer.length = 0
    }
    return true
  }

  for (let i = 0; i < input.length; i++) {
    const cursor = input[i]
    if (cursor === '[' || cursor === ']') { continue }
    if (cursor === ':') {
      if (endipv6Encountered === true) {
        endIpv6 = true
      }
      if (!consume()) { break }
      tokenCount++
      address.push(':')
      if (tokenCount > 7) {
        // not valid
        output.error = true
        break
      }
      if (i - 1 >= 0 && input[i - 1] === ':') {
        endipv6Encountered = true
      }
      continue
    } else if (cursor === '%') {
      if (!consume()) { break }
      // switch to zone detection
      isZone = true
    } else {
      buffer.push(cursor)
      continue
    }
  }
  if (buffer.length) {
    if (isZone) {
      output.zone = buffer.join('')
    } else if (endIpv6) {
      address.push(buffer.join(''))
    } else {
      address.push(stringArrayToHexStripped(buffer))
    }
  }
  output.address = address.join('')
  return output
}

function normalizeIPv6 (host) {
  if (findToken(host, ':') < 2) { return { host, isIPV6: false } }
  const ipv6 = getIPV6(host)

  if (!ipv6.error) {
    let newHost = ipv6.address
    let escapedHost = ipv6.address
    if (ipv6.zone) {
      newHost += '%' + ipv6.zone
      escapedHost += '%25' + ipv6.zone
    }
    return { host: newHost, escapedHost, isIPV6: true }
  } else {
    return { host, isIPV6: false }
  }
}

function stripLeadingZeros (str, token) {
  let out = ''
  let skip = true
  const l = str.length
  for (let i = 0; i < l; i++) {
    const c = str[i]
    if (c === '0' && skip) {
      if ((i + 1 <= l && str[i + 1] === token) || i + 1 === l) {
        out += c
        skip = false
      }
    } else {
      if (c === token) {
        skip = true
      } else {
        skip = false
      }
      out += c
    }
  }
  return out
}

function findToken (str, token) {
  let ind = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === token) ind++
  }
  return ind
}

const RDS1 = /^\.\.?\//u
const RDS2 = /^\/\.(?:\/|$)/u
const RDS3 = /^\/\.\.(?:\/|$)/u
const RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/u

function removeDotSegments (input) {
  const output = []

  while (input.length) {
    if (input.match(RDS1)) {
      input = input.replace(RDS1, '')
    } else if (input.match(RDS2)) {
      input = input.replace(RDS2, '/')
    } else if (input.match(RDS3)) {
      input = input.replace(RDS3, '/')
      output.pop()
    } else if (input === '.' || input === '..') {
      input = ''
    } else {
      const im = input.match(RDS5)
      if (im) {
        const s = im[0]
        input = input.slice(s.length)
        output.push(s)
      } else {
        throw new Error('Unexpected dot segment condition')
      }
    }
  }
  return output.join('')
}

function normalizeComponentEncoding (components, esc) {
  const func = esc !== true ? escape : unescape
  if (components.scheme !== undefined) {
    components.scheme = func(components.scheme)
  }
  if (components.userinfo !== undefined) {
    components.userinfo = func(components.userinfo)
  }
  if (components.host !== undefined) {
    components.host = func(components.host)
  }
  if (components.path !== undefined) {
    components.path = func(components.path)
  }
  if (components.query !== undefined) {
    components.query = func(components.query)
  }
  if (components.fragment !== undefined) {
    components.fragment = func(components.fragment)
  }
  return components
}

function recomposeAuthority (components) {
  const uriTokens = []

  if (components.userinfo !== undefined) {
    uriTokens.push(components.userinfo)
    uriTokens.push('@')
  }

  if (components.host !== undefined) {
    let host = unescape(components.host)
    const ipV4res = normalizeIPv4(host)

    if (ipV4res.isIPV4) {
      host = ipV4res.host
    } else {
      const ipV6res = normalizeIPv6(ipV4res.host)
      if (ipV6res.isIPV6 === true) {
        host = `[${ipV6res.escapedHost}]`
      } else {
        host = components.host
      }
    }
    uriTokens.push(host)
  }

  if (typeof components.port === 'number' || typeof components.port === 'string') {
    uriTokens.push(':')
    uriTokens.push(String(components.port))
  }

  return uriTokens.length ? uriTokens.join('') : undefined
};

module.exports = {
  recomposeAuthority,
  normalizeComponentEncoding,
  removeDotSegments,
  normalizeIPv4,
  normalizeIPv6,
  stringArrayToHexStripped
}
