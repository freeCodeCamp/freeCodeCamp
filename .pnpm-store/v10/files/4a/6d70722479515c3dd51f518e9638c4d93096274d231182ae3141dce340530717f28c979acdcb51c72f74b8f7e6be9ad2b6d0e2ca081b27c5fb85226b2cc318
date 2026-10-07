'use strict'

// It must spot all the chars where decodeURIComponent(x) !== decodeURI(x)
// The chars are: # $ & + , / : ; = ? @
function decodeComponentChar (highCharCode, lowCharCode) {
  if (highCharCode === 50) {
    if (lowCharCode === 53) return '%'

    if (lowCharCode === 51) return '#'
    if (lowCharCode === 52) return '$'
    if (lowCharCode === 54) return '&'
    if (lowCharCode === 66) return '+'
    if (lowCharCode === 98) return '+'
    if (lowCharCode === 67) return ','
    if (lowCharCode === 99) return ','
    if (lowCharCode === 70) return '/'
    if (lowCharCode === 102) return '/'
    return null
  }
  if (highCharCode === 51) {
    if (lowCharCode === 65) return ':'
    if (lowCharCode === 97) return ':'
    if (lowCharCode === 66) return ';'
    if (lowCharCode === 98) return ';'
    if (lowCharCode === 68) return '='
    if (lowCharCode === 100) return '='
    if (lowCharCode === 70) return '?'
    if (lowCharCode === 102) return '?'
    return null
  }
  if (highCharCode === 52 && lowCharCode === 48) {
    return '@'
  }
  return null
}

function safeDecodeURI (path, useSemicolonDelimiter) {
  let shouldDecode = false
  let shouldDecodeParam = false

  let querystring = ''

  for (let i = 1; i < path.length; i++) {
    const charCode = path.charCodeAt(i)

    if (charCode === 37) {
      const highCharCode = path.charCodeAt(i + 1)
      const lowCharCode = path.charCodeAt(i + 2)

      if (decodeComponentChar(highCharCode, lowCharCode) === null) {
        shouldDecode = true
      } else {
        shouldDecodeParam = true
        // %25 - encoded % char. We need to encode one more time to prevent double decoding
        if (highCharCode === 50 && lowCharCode === 53) {
          shouldDecode = true
          path = path.slice(0, i + 1) + '25' + path.slice(i + 1)
          i += 2
        }
        i += 2
      }
    // Some systems do not follow RFC and separate the path and query
    // string with a `;` character (code 59), e.g. `/foo;jsessionid=123456`.
    // Thus, we need to split on `;` as well as `?` and `#` if the useSemicolonDelimiter option is enabled.
    } else if (charCode === 63 || charCode === 35 || (charCode === 59 && useSemicolonDelimiter)) {
      querystring = path.slice(i + 1)
      path = path.slice(0, i)
      break
    }
  }
  const decodedPath = shouldDecode ? decodeURI(path) : path
  return { path: decodedPath, querystring, shouldDecodeParam }
}

function safeDecodeURIComponent (uriComponent) {
  const startIndex = uriComponent.indexOf('%')
  if (startIndex === -1) return uriComponent

  let decoded = ''
  let lastIndex = startIndex

  for (let i = startIndex; i < uriComponent.length; i++) {
    if (uriComponent.charCodeAt(i) === 37) {
      const highCharCode = uriComponent.charCodeAt(i + 1)
      const lowCharCode = uriComponent.charCodeAt(i + 2)

      const decodedChar = decodeComponentChar(highCharCode, lowCharCode)
      decoded += uriComponent.slice(lastIndex, i) + decodedChar

      lastIndex = i + 3
    }
  }
  return uriComponent.slice(0, startIndex) + decoded + uriComponent.slice(lastIndex)
}

module.exports = { safeDecodeURI, safeDecodeURIComponent }
