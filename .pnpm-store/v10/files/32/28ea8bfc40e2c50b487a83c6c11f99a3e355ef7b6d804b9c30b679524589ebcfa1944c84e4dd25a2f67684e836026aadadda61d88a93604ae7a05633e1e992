const os = require('bare-os')

const { normalizeString } = require('./shared')
const {
  CHAR_UPPERCASE_A,
  CHAR_LOWERCASE_A,
  CHAR_UPPERCASE_Z,
  CHAR_LOWERCASE_Z,
  CHAR_DOT,
  CHAR_FORWARD_SLASH,
  CHAR_BACKWARD_SLASH,
  CHAR_COLON,
  CHAR_QUESTION_MARK
} = require('./constants')

function isWindowsPathSeparator (code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH
}

function isWindowsDeviceRoot (code) {
  return (code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z) ||
         (code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z)
}

exports.posix = require('./posix')
exports.win32 = exports

exports.sep = '\\'
exports.delimiter = ';'

exports.resolve = function resolve (...args) {
  let resolvedDevice = ''
  let resolvedTail = ''
  let resolvedAbsolute = false

  for (let i = args.length - 1; i >= -1; i--) {
    let path
    if (i >= 0) {
      path = args[i]

      if (path.length === 0) continue
    } else if (resolvedDevice.length === 0) {
      path = os.cwd()
    } else {
      path = os.getEnv(`=${resolvedDevice}`) || os.cwd()

      if (path === undefined || (path.substring(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === CHAR_BACKWARD_SLASH)) {
        path = `${resolvedDevice}\\`
      }
    }

    const len = path.length
    let rootEnd = 0
    let device = ''
    let isAbsolute = false
    const code = path.charCodeAt(0)

    if (len === 1) {
      if (isWindowsPathSeparator(code)) {
        rootEnd = 1
        isAbsolute = true
      }
    } else if (isWindowsPathSeparator(code)) {
      isAbsolute = true

      if (isWindowsPathSeparator(path.charCodeAt(1))) {
        let j = 2
        let last = j
        while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
          j++
        }
        if (j < len && j !== last) {
          const firstPart = path.substring(last, j)
          last = j
          while (j < len && isWindowsPathSeparator(path.charCodeAt(j))) {
            j++
          }
          if (j < len && j !== last) {
            last = j
            while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
              j++
            }
            if (j === len || j !== last) {
              device = `\\\\${firstPart}\\${path.substring(last, j)}`
              rootEnd = j
            }
          }
        }
      } else {
        rootEnd = 1
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      device = path.substring(0, 2)
      rootEnd = 2
      if (len > 2 && isWindowsPathSeparator(path.charCodeAt(2))) {
        isAbsolute = true
        rootEnd = 3
      }
    }

    if (device.length > 0) {
      if (resolvedDevice.length > 0) {
        if (device.toLowerCase() !== resolvedDevice.toLowerCase()) { continue }
      } else {
        resolvedDevice = device
      }
    }

    if (resolvedAbsolute) {
      if (resolvedDevice.length > 0) { break }
    } else {
      resolvedTail = `${path.substring(rootEnd)}\\${resolvedTail}`
      resolvedAbsolute = isAbsolute
      if (isAbsolute && resolvedDevice.length > 0) {
        break
      }
    }
  }

  resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\', isWindowsPathSeparator)

  return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || '.'
}

exports.normalize = function normalize (path) {
  const len = path.length
  if (len === 0) return '.'
  let rootEnd = 0
  let device
  let isAbsolute = false
  const code = path.charCodeAt(0)

  if (len === 1) {
    return code === CHAR_FORWARD_SLASH ? '\\' : path
  }

  if (isWindowsPathSeparator(code)) {
    isAbsolute = true

    if (isWindowsPathSeparator(path.charCodeAt(1))) {
      let j = 2
      let last = j
      while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
        j++
      }
      if (j < len && j !== last) {
        const firstPart = path.substring(last, j)
        last = j
        while (j < len && isWindowsPathSeparator(path.charCodeAt(j))) {
          j++
        }
        if (j < len && j !== last) {
          last = j
          while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
            j++
          }
          if (j === len) {
            return `\\\\${firstPart}\\${path.substring(last)}\\`
          }
          if (j !== last) {
            device = `\\\\${firstPart}\\${path.substring(last, j)}`
            rootEnd = j
          }
        }
      }
    } else {
      rootEnd = 1
    }
  } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
    device = path.substring(0, 2)
    rootEnd = 2
    if (len > 2 && isWindowsPathSeparator(path.charCodeAt(2))) {
      isAbsolute = true
      rootEnd = 3
    }
  }

  let tail = rootEnd < len ? normalizeString(path.substring(rootEnd), !isAbsolute, '\\', isWindowsPathSeparator) : ''
  if (tail.length === 0 && !isAbsolute) {
    tail = '.'
  }
  if (tail.length > 0 && isWindowsPathSeparator(path.charCodeAt(len - 1))) {
    tail += '\\'
  }
  if (device === undefined) {
    return isAbsolute ? `\\${tail}` : tail
  }
  return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`
}

exports.isAbsolute = function isAbsolute (path) {
  const len = path.length
  if (len === 0) return false

  const code = path.charCodeAt(0)

  return isWindowsPathSeparator(code) || (len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON && isWindowsPathSeparator(path.charCodeAt(2)))
}

exports.join = function join (...args) {
  if (args.length === 0) return '.'

  let joined
  let firstPart
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i]
    if (arg.length > 0) {
      if (joined === undefined) joined = firstPart = arg
      else joined += `\\${arg}`
    }
  }

  if (joined === undefined) return '.'

  let needsReplace = true
  let slashCount = 0
  if (isWindowsPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount
    const firstLen = firstPart.length
    if (firstLen > 1 && isWindowsPathSeparator(firstPart.charCodeAt(1))) {
      ++slashCount
      if (firstLen > 2) {
        if (isWindowsPathSeparator(firstPart.charCodeAt(2))) {
          ++slashCount
        } else {
          needsReplace = false
        }
      }
    }
  }
  if (needsReplace) {
    while (slashCount < joined.length && isWindowsPathSeparator(joined.charCodeAt(slashCount))) {
      slashCount++
    }

    if (slashCount >= 2) {
      joined = `\\${joined.substring(slashCount)}`
    }
  }

  return exports.normalize(joined)
}

exports.relative = function relative (from, to) {
  if (from === to) return ''

  const fromOrig = exports.resolve(from)
  const toOrig = exports.resolve(to)

  if (fromOrig === toOrig) return ''

  from = fromOrig.toLowerCase()
  to = toOrig.toLowerCase()

  if (from === to) return ''

  let fromStart = 0
  while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
    fromStart++
  }
  let fromEnd = from.length
  while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
    fromEnd--
  }
  const fromLen = fromEnd - fromStart

  let toStart = 0
  while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
    toStart++
  }
  let toEnd = to.length
  while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
    toEnd--
  }
  const toLen = toEnd - toStart

  const length = fromLen < toLen ? fromLen : toLen
  let lastCommonSep = -1
  let i = 0
  for (; i < length; i++) {
    const fromCode = from.charCodeAt(fromStart + i)
    if (fromCode !== to.charCodeAt(toStart + i)) {
      break
    } else if (fromCode === CHAR_BACKWARD_SLASH) {
      lastCommonSep = i
    }
  }

  if (i !== length) {
    if (lastCommonSep === -1) return toOrig
  } else {
    if (toLen > length) {
      if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
        return toOrig.substring(toStart + i + 1)
      }
      if (i === 2) {
        return toOrig.substring(toStart + i)
      }
    }
    if (fromLen > length) {
      if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
        lastCommonSep = i
      } else if (i === 2) {
        lastCommonSep = 3
      }
    }
    if (lastCommonSep === -1) lastCommonSep = 0
  }

  let out = ''
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      out += out.length === 0 ? '..' : '\\..'
    }
  }

  toStart += lastCommonSep

  if (out.length > 0) {
    return `${out}${toOrig.substring(toStart, toEnd)}`
  }
  if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
    ++toStart
  }
  return toOrig.substring(toStart, toEnd)
}

exports.toNamespacedPath = function toNamespacedPath (path) {
  if (path.length === 0) return path

  const resolvedPath = exports.resolve(path)

  if (resolvedPath.length <= 2) return path

  if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const code = resolvedPath.charCodeAt(2)
      if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
        return `\\\\?\\UNC\\${resolvedPath.substring(2)}`
      }
    }
  } else if (
    isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) &&
      resolvedPath.charCodeAt(1) === CHAR_COLON &&
      resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH
  ) {
    return `\\\\?\\${resolvedPath}`
  }

  return path
}

exports.dirname = function dirname (path) {
  const len = path.length
  if (len === 0) return '.'
  let rootEnd = -1
  let offset = 0
  const code = path.charCodeAt(0)

  if (len === 1) {
    return isWindowsPathSeparator(code) ? path : '.'
  }

  if (isWindowsPathSeparator(code)) {
    rootEnd = offset = 1

    if (isWindowsPathSeparator(path.charCodeAt(1))) {
      let j = 2
      let last = j
      while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
        j++
      }
      if (j < len && j !== last) {
        last = j
        while (j < len && isWindowsPathSeparator(path.charCodeAt(j))) {
          j++
        }
        if (j < len && j !== last) {
          last = j
          while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
            j++
          }
          if (j === len) {
            return path
          }
          if (j !== last) {
            rootEnd = offset = j + 1
          }
        }
      }
    }
  } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
    rootEnd = len > 2 && isWindowsPathSeparator(path.charCodeAt(2)) ? 3 : 2
    offset = rootEnd
  }

  let end = -1
  let matchedSlash = true
  for (let i = len - 1; i >= offset; --i) {
    if (isWindowsPathSeparator(path.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      matchedSlash = false
    }
  }

  if (end === -1) {
    if (rootEnd === -1) return '.'

    end = rootEnd
  }
  return path.substring(0, end)
}

exports.basename = function basename (path, suffix) {
  let start = 0
  let end = -1
  let matchedSlash = true

  if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === CHAR_COLON) {
    start = 2
  }

  if (suffix !== undefined && suffix.length > 0 && suffix.length <= path.length) {
    if (suffix === path) return ''
    let extIdx = suffix.length - 1
    let firstNonSlashEnd = -1
    for (let i = path.length - 1; i >= start; --i) {
      const code = path.charCodeAt(i)
      if (isWindowsPathSeparator(code)) {
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
  for (let i = path.length - 1; i >= start; --i) {
    if (isWindowsPathSeparator(path.charCodeAt(i))) {
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
  let start = 0
  let startDot = -1
  let startPart = 0
  let end = -1
  let matchedSlash = true
  let preDotState = 0

  if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
    start = startPart = 2
  }

  for (let i = path.length - 1; i >= start; --i) {
    const code = path.charCodeAt(i)
    if (isWindowsPathSeparator(code)) {
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
