const os = require('bare-os')

const { normalizeString } = require('./shared')
const {
  CHAR_DOT,
  CHAR_FORWARD_SLASH
} = require('./constants')

function isPosixPathSeparator (code) {
  return code === CHAR_FORWARD_SLASH
}

exports.win32 = require('./win32')
exports.posix = exports

exports.sep = '/'
exports.delimiter = ':'

exports.resolve = function resolve (...args) {
  let resolvedPath = ''
  let resolvedAbsolute = false

  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path = i >= 0 ? args[i] : os.cwd()

    if (path.length === 0) {
      continue
    }

    resolvedPath = `${path}/${resolvedPath}`
    resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
  }

  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/', isPosixPathSeparator)

  if (resolvedAbsolute) {
    return `/${resolvedPath}`
  }

  return resolvedPath.length > 0 ? resolvedPath : '.'
}

exports.normalize = function normalize (path) {
  if (path.length === 0) return '.'

  const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
  const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH

  path = normalizeString(path, !isAbsolute, '/', isPosixPathSeparator)

  if (path.length === 0) {
    if (isAbsolute) return '/'
    return trailingSeparator ? './' : '.'
  }

  if (trailingSeparator) path += '/'

  return isAbsolute ? `/${path}` : path
}

exports.isAbsolute = function isAbsolute (path) {
  return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH
}

exports.join = function join (...args) {
  if (args.length === 0) return '.'
  let joined
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i]
    if (arg.length > 0) {
      if (joined === undefined) joined = arg
      else joined += `/${arg}`
    }
  }
  if (joined === undefined) return '.'
  return exports.normalize(joined)
}

exports.relative = function relative (from, to) {
  if (from === to) return ''

  from = exports.resolve(from)
  to = exports.resolve(to)

  if (from === to) return ''

  const fromStart = 1
  const fromEnd = from.length
  const fromLen = fromEnd - fromStart
  const toStart = 1
  const toLen = to.length - toStart

  const length = (fromLen < toLen ? fromLen : toLen)
  let lastCommonSep = -1
  let i = 0
  for (; i < length; i++) {
    const fromCode = from.charCodeAt(fromStart + i)
    if (fromCode !== to.charCodeAt(toStart + i)) {
      break
    } else if (fromCode === CHAR_FORWARD_SLASH) {
      lastCommonSep = i
    }
  }
  if (i === length) {
    if (toLen > length) {
      if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
        return to.substring(toStart + i + 1)
      }
      if (i === 0) {
        return to.substring(toStart + i)
      }
    } else if (fromLen > length) {
      if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
        lastCommonSep = i
      } else if (i === 0) {
        lastCommonSep = 0
      }
    }
  }

  let out = ''
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      out += out.length === 0 ? '..' : '/..'
    }
  }

  return `${out}${to.substring(toStart + lastCommonSep)}`
}

exports.toNamespacedPath = function toNamespacedPath (path) {
  return path
}

exports.dirname = function dirname (path) {
  if (path.length === 0) return '.'
  const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH
  let end = -1
  let matchedSlash = true
  for (let i = path.length - 1; i >= 1; --i) {
    if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      matchedSlash = false
    }
  }

  if (end === -1) return hasRoot ? '/' : '.'
  if (hasRoot && end === 1) return '//'
  return path.substring(0, end)
}

exports.basename = function basename (path, suffix) {
  let start = 0
  let end = -1
  let matchedSlash = true

  if (suffix !== undefined && suffix.length > 0 && suffix.length <= path.length) {
    if (suffix === path) { return '' }
    let extIdx = suffix.length - 1
    let firstNonSlashEnd = -1
    for (let i = path.length - 1; i >= 0; --i) {
      const code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1
          break
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false
          firstNonSlashEnd = i + 1
        }
        if (extIdx >= 0) {
          if (code === suffix.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i
            }
          } else {
            extIdx = -1
            end = firstNonSlashEnd
          }
        }
      }
    }

    if (start === end) end = firstNonSlashEnd
    else if (end === -1) end = path.length
    return path.substring(start, end)
  }

  for (let i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        start = i + 1
        break
      }
    } else if (end === -1) {
      matchedSlash = false
      end = i + 1
    }
  }

  if (end === -1) return ''
  return path.substring(start, end)
}

exports.extname = function extname (path) {
  let startDot = -1
  let startPart = 0
  let end = -1
  let matchedSlash = true
  let preDotState = 0
  for (let i = path.length - 1; i >= 0; --i) {
    const code = path.charCodeAt(i)
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1
        break
      }
      continue
    }
    if (end === -1) {
      matchedSlash = false
      end = i + 1
    }
    if (code === CHAR_DOT) {
      if (startDot === -1) startDot = i
      else if (preDotState !== 1) preDotState = 1
    } else if (startDot !== -1) {
      preDotState = -1
    }
  }

  if (startDot === -1 || end === -1 || preDotState === 0 || (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
    return ''
  }
  return path.substring(startDot, end)
}
