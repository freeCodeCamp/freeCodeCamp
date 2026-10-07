const {
  CHAR_DOT,
  CHAR_FORWARD_SLASH
} = require('./constants')

exports.normalizeString = function normalizeString (path, allowAboveRoot, separator, isPathSeparator) {
  let res = ''
  let lastSegmentLength = 0
  let lastSlash = -1
  let dots = 0
  let code = 0
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) {
      code = path.charCodeAt(i)
    } else if (isPathSeparator(code)) {
      break
    } else {
      code = CHAR_FORWARD_SLASH
    }

    if (isPathSeparator(code)) {
      if (lastSlash === i - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator)
            if (lastSlashIndex === -1) {
              res = ''
              lastSegmentLength = 0
            } else {
              res = res.substring(0, lastSlashIndex)
              lastSegmentLength =
                res.length - 1 - res.lastIndexOf(separator)
            }
            lastSlash = i
            dots = 0
            continue
          } else if (res.length !== 0) {
            res = ''
            lastSegmentLength = 0
            lastSlash = i
            dots = 0
            continue
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : '..'
          lastSegmentLength = 2
        }
      } else {
        if (res.length > 0) {
          res += `${separator}${path.substring(lastSlash + 1, i)}`
        } else {
          res = path.substring(lastSlash + 1, i)
        }
        lastSegmentLength = i - lastSlash - 1
      }
      lastSlash = i
      dots = 0
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots
    } else {
      dots = -1
    }
  }
  return res
}
