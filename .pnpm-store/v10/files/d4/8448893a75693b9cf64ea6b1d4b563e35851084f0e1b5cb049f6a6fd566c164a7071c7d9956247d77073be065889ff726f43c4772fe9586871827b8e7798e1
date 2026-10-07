'use strict'

function Negotiator (options) {
  if (!new.target) {
    return new Negotiator(options)
  }

  const {
    supportedValues = [],
    cache
  } = (options && typeof options === 'object' && options) || {}

  this.supportedValues = supportedValues

  this.cache = cache
}

Negotiator.prototype.negotiate = function (header) {
  if (typeof header !== 'string') {
    return null
  }
  if (!this.cache) {
    return negotiate(header, this.supportedValues)
  }
  if (!this.cache.has(header)) {
    this.cache.set(header, negotiate(header, this.supportedValues))
  }
  return this.cache.get(header)
}

function negotiate (header, supportedValues) {
  if (
    !header ||
    !Array.isArray(supportedValues) ||
    supportedValues.length === 0
  ) {
    return null
  }

  if (header === '*') {
    return supportedValues[0]
  }

  let preferredEncoding = null
  let preferredEncodingPriority = Infinity
  let preferredEncodingQuality = 0

  function processMatch (enc, quality) {
    if (quality === 0 || preferredEncodingQuality > quality) {
      return false
    }

    const encoding = (enc === '*' && supportedValues[0]) || enc
    const priority = supportedValues.indexOf(encoding)
    if (priority === -1) {
      return false
    }

    if (priority === 0 && quality === 1) {
      preferredEncoding = encoding
      return true
    } else if (preferredEncodingQuality < quality) {
      preferredEncoding = encoding
      preferredEncodingPriority = priority
      preferredEncodingQuality = quality
    } else if (preferredEncodingPriority > priority) {
      preferredEncoding = encoding
      preferredEncodingPriority = priority
      preferredEncodingQuality = quality
    }
    return false
  }

  parse(header, processMatch)

  return preferredEncoding
}

const BEGIN = 0
const TOKEN = 1
const QUALITY = 2
const END = 3

function parse (header, processMatch) {
  let str = ''
  let quality
  let state = BEGIN
  for (let i = 0, il = header.length; i < il; ++i) {
    const char = header[i]

    if (char === ' ' || char === '\t') {
      continue
    } else if (char === ';') {
      if (state === TOKEN) {
        state = QUALITY
        quality = ''
      }
      continue
    } else if (char === ',') {
      if (state === TOKEN) {
        if (processMatch(str, 1)) {
          state = END
          break
        }
        state = BEGIN
        str = ''
      } else if (state === QUALITY) {
        if (processMatch(str, parseFloat(quality) || 0)) {
          state = END
          break
        }
        state = BEGIN
        str = ''
        quality = ''
      }
      continue
    } else if (
      state === QUALITY
    ) {
      if (char === 'q' || char === '=') {
        continue
      } else if (
        char === '.' ||
        char === '1' ||
        char === '0' ||
        char === '2' ||
        char === '3' ||
        char === '4' ||
        char === '5' ||
        char === '6' ||
        char === '7' ||
        char === '8' ||
        char === '9'
      ) {
        quality += char
        continue
      }
    } else if (state === BEGIN) {
      state = TOKEN
      str += char
      continue
    }
    if (state === TOKEN) {
      const prevChar = header[i - 1]
      if (prevChar === ' ' || prevChar === '\t') {
        str = ''
      }
      str += char
      continue
    }
    if (processMatch(str, parseFloat(quality) || 0)) {
      state = END
      break
    }
    state = BEGIN
    str = char
    quality = ''
  }

  if (state === TOKEN) {
    processMatch(str, 1)
  } else if (state === QUALITY) {
    processMatch(str, parseFloat(quality) || 0)
  }
}

module.exports = negotiate
module.exports.default = negotiate
module.exports.negotiate = negotiate
module.exports.Negotiator = Negotiator
