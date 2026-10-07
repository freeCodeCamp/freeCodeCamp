'use strict'

const fs = require('node:fs')
const path = require('node:path')
const stream = require('node:stream')
const debug = require('node:util').debuglog('send')

const decode = require('fast-decode-uri-component')
const escapeHtml = require('escape-html')
const mime = require('mime')
const ms = require('@lukeed/ms')

const { collapseLeadingSlashes } = require('./collapseLeadingSlashes')
const { containsDotFile } = require('../lib/containsDotFile')
const { contentRange } = require('../lib/contentRange')
const { createHtmlDocument } = require('../lib/createHtmlDocument')
const { isUtf8MimeType } = require('../lib/isUtf8MimeType')
const { normalizeList } = require('../lib/normalizeList')
const { parseBytesRange } = require('../lib/parseBytesRange')
const { parseTokenList } = require('./parseTokenList')
const { createHttpError } = require('./createHttpError')

/**
 * Path function references.
 * @private
 */

const extname = path.extname
const join = path.join
const normalize = path.normalize
const resolve = path.resolve
const sep = path.sep

/**
 * Stream function references.
 * @private
 */
const Readable = stream.Readable

/**
 * Regular expression for identifying a bytes Range header.
 * @private
 */

const BYTES_RANGE_REGEXP = /^ *bytes=/

/**
 * Maximum value allowed for the max age.
 * @private
 */

const MAX_MAXAGE = 60 * 60 * 24 * 365 * 1000 // 1 year

/**
 * Regular expression to match a path with a directory up component.
 * @private
 */

const UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/

const ERROR_RESPONSES = {
  400: createHtmlDocument('Error', 'Bad Request'),
  403: createHtmlDocument('Error', 'Forbidden'),
  404: createHtmlDocument('Error', 'Not Found'),
  412: createHtmlDocument('Error', 'Precondition Failed'),
  416: createHtmlDocument('Error', 'Range Not Satisfiable'),
  500: createHtmlDocument('Error', 'Internal Server Error')
}

const validDotFilesOptions = [
  'allow',
  'ignore',
  'deny'
]

function normalizeMaxAge (_maxage) {
  let maxage
  if (typeof _maxage === 'string') {
    maxage = ms.parse(_maxage)
  } else {
    maxage = Number(_maxage)
  }

  // eslint-disable-next-line no-self-compare
  if (maxage !== maxage) {
    // fast path of isNaN(number)
    return 0
  }

  return Math.min(Math.max(0, maxage), MAX_MAXAGE)
}

function normalizeOptions (options) {
  options = options ?? {}

  const acceptRanges = options.acceptRanges !== undefined
    ? Boolean(options.acceptRanges)
    : true

  const cacheControl = options.cacheControl !== undefined
    ? Boolean(options.cacheControl)
    : true

  const contentType = options.contentType !== undefined
    ? Boolean(options.contentType)
    : true

  const etag = options.etag !== undefined
    ? Boolean(options.etag)
    : true

  const dotfiles = options.dotfiles !== undefined
    ? validDotFilesOptions.indexOf(options.dotfiles)
    : 1 // 'ignore'
  if (dotfiles === -1) {
    throw new TypeError('dotfiles option must be "allow", "deny", or "ignore"')
  }

  const extensions = options.extensions !== undefined
    ? normalizeList(options.extensions, 'extensions option')
    : []

  const immutable = options.immutable !== undefined
    ? Boolean(options.immutable)
    : false

  const index = options.index !== undefined
    ? normalizeList(options.index, 'index option')
    : ['index.html']

  const lastModified = options.lastModified !== undefined
    ? Boolean(options.lastModified)
    : true

  const maxage = normalizeMaxAge(options.maxAge ?? options.maxage)

  const maxContentRangeChunkSize = options.maxContentRangeChunkSize !== undefined
    ? Number(options.maxContentRangeChunkSize)
    : null

  const root = options.root
    ? resolve(options.root)
    : null

  return {
    acceptRanges,
    cacheControl,
    contentType,
    etag,
    dotfiles,
    extensions,
    immutable,
    index,
    lastModified,
    maxage,
    maxContentRangeChunkSize,
    root,
    start: options.start,
    end: options.end
  }
}

function normalizePath (_path, root) {
  // decode the path
  let path = decode(_path)
  if (path == null) {
    return { statusCode: 400 }
  }

  // null byte(s)
  if (~path.indexOf('\0')) {
    return { statusCode: 400 }
  }

  let parts
  if (root !== null) {
    // normalize
    if (path) {
      path = normalize('.' + sep + path)
    }

    // malicious path
    if (UP_PATH_REGEXP.test(path)) {
      debug('malicious path "%s"', path)
      return { statusCode: 403 }
    }

    // explode path parts
    parts = path.split(sep)

    // join / normalize from optional root dir
    path = normalize(join(root, path))
  } else {
    // ".." is malicious without "root"
    if (UP_PATH_REGEXP.test(path)) {
      debug('malicious path "%s"', path)
      return { statusCode: 403 }
    }

    // explode path parts
    parts = normalize(path).split(sep)

    // resolve the path
    path = resolve(path)
  }

  return { path, parts }
}

/**
 * Check if the pathname ends with "/".
 *
 * @return {boolean}
 * @private
 */

function hasTrailingSlash (path) {
  return path[path.length - 1] === '/'
}

/**
 * Check if this is a conditional GET request.
 *
 * @return {Boolean}
 * @api private
 */

function isConditionalGET (request) {
  return request.headers['if-match'] ||
    request.headers['if-unmodified-since'] ||
    request.headers['if-none-match'] ||
    request.headers['if-modified-since']
}

function isNotModifiedFailure (request, headers) {
  // Always return stale when Cache-Control: no-cache
  // to support end-to-end reload requests
  // https://tools.ietf.org/html/rfc2616#section-14.9.4
  if (
    'cache-control' in request.headers &&
    request.headers['cache-control'].indexOf('no-cache') !== -1
  ) {
    return false
  }

  // if-none-match
  if ('if-none-match' in request.headers) {
    const ifNoneMatch = request.headers['if-none-match']

    if (ifNoneMatch === '*') {
      return true
    }

    const etag = headers.ETag

    if (typeof etag !== 'string') {
      return false
    }

    const etagL = etag.length
    const isMatching = parseTokenList(ifNoneMatch, function (match) {
      const mL = match.length

      if (
        (etagL === mL && match === etag) ||
        (etagL > mL && 'W/' + match === etag)
      ) {
        return true
      }
    })

    if (isMatching) {
      return true
    }

    /**
     * A recipient MUST ignore If-Modified-Since if the request contains an
     * If-None-Match header field; the condition in If-None-Match is considered
     * to be a more accurate replacement for the condition in If-Modified-Since,
     * and the two are only combined for the sake of interoperating with older
     * intermediaries that might not implement If-None-Match.
     *
     * @see RFC 9110 section 13.1.3
     */
    return false
  }

  // if-modified-since
  if ('if-modified-since' in request.headers) {
    const ifModifiedSince = request.headers['if-modified-since']
    const lastModified = headers['Last-Modified']

    if (!lastModified || (Date.parse(lastModified) <= Date.parse(ifModifiedSince))) {
      return true
    }
  }

  return false
}

/**
 * Check if the request preconditions failed.
 *
 * @return {boolean}
 * @private
 */

function isPreconditionFailure (request, headers) {
  // if-match
  const ifMatch = request.headers['if-match']
  if (ifMatch) {
    const etag = headers.ETag

    if (ifMatch !== '*') {
      const isMatching = parseTokenList(ifMatch, function (match) {
        if (
          match === etag ||
          'W/' + match === etag
        ) {
          return true
        }
      }) || false

      if (isMatching !== true) {
        return true
      }
    }
  }

  // if-unmodified-since
  if ('if-unmodified-since' in request.headers) {
    const ifUnmodifiedSince = request.headers['if-unmodified-since']
    const unmodifiedSince = Date.parse(ifUnmodifiedSince)
    // eslint-disable-next-line no-self-compare
    if (unmodifiedSince === unmodifiedSince) { // fast path of isNaN(number)
      const lastModified = Date.parse(headers['Last-Modified'])
      if (
        // eslint-disable-next-line no-self-compare
        lastModified !== lastModified ||// fast path of isNaN(number)
        lastModified > unmodifiedSince
      ) {
        return true
      }
    }
  }

  return false
}

/**
 * Check if the range is fresh.
 *
 * @return {Boolean}
 * @api private
 */

function isRangeFresh (request, headers) {
  if (!('if-range' in request.headers)) {
    return true
  }

  const ifRange = request.headers['if-range']

  // if-range as etag
  if (ifRange.indexOf('"') !== -1) {
    const etag = headers.ETag
    return (etag && ifRange.indexOf(etag) !== -1) || false
  }

  const ifRangeTimestamp = Date.parse(ifRange)
  // eslint-disable-next-line no-self-compare
  if (ifRangeTimestamp !== ifRangeTimestamp) { // fast path of isNaN(number)
    return false
  }

  // if-range as modified date
  const lastModified = Date.parse(headers['Last-Modified'])

  return (
    // eslint-disable-next-line no-self-compare
    lastModified !== lastModified || // fast path of isNaN(number)
    lastModified <= ifRangeTimestamp
  )
}

// we provide stat function that will always resolve
// without throwing
function tryStat (path) {
  return new Promise((resolve) => {
    fs.stat(path, function onstat (error, stat) {
      resolve({ error, stat })
    })
  })
}

function sendError (statusCode, err) {
  const headers = {}

  // add error headers
  if (err && err.headers) {
    for (const headerName in err.headers) {
      headers[headerName] = err.headers[headerName]
    }
  }

  const doc = ERROR_RESPONSES[statusCode]

  // basic response
  headers['Content-Type'] = 'text/html; charset=utf-8'
  headers['Content-Length'] = doc[1]
  headers['Content-Security-Policy'] = "default-src 'none'"
  headers['X-Content-Type-Options'] = 'nosniff'

  return {
    statusCode,
    headers,
    stream: Readable.from(doc[0]),
    // metadata
    type: 'error',
    metadata: { error: createHttpError(statusCode, err) }
  }
}

function sendStatError (err) {
  // POSIX throws ENAMETOOLONG and ENOTDIR, Windows only ENOENT
  /* c8 ignore start */
  switch (err.code) {
    case 'ENAMETOOLONG':
    case 'ENOTDIR':
    case 'ENOENT':
      return sendError(404, err)
    default:
      return sendError(500, err)
  }
  /* c8 ignore stop */
}

/**
 * Respond with 304 not modified.
 *
 * @api private
 */

function sendNotModified (headers, path, stat) {
  debug('not modified')

  delete headers['Content-Encoding']
  delete headers['Content-Language']
  delete headers['Content-Length']
  delete headers['Content-Range']
  delete headers['Content-Type']

  return {
    statusCode: 304,
    headers,
    stream: Readable.from(''),
    // metadata
    type: 'file',
    metadata: { path, stat }
  }
}

function sendFileDirectly (request, path, stat, options) {
  let len = stat.size
  let offset = options.start ?? 0

  let statusCode = 200
  const headers = {}

  debug('send "%s"', path)

  // set header fields
  if (options.acceptRanges) {
    debug('accept ranges')
    headers['Accept-Ranges'] = 'bytes'
  }

  if (options.cacheControl) {
    let cacheControl = 'public, max-age=' + Math.floor(options.maxage / 1000)

    if (options.immutable) {
      cacheControl += ', immutable'
    }

    debug('cache-control %s', cacheControl)
    headers['Cache-Control'] = cacheControl
  }

  if (options.lastModified) {
    const modified = stat.mtime.toUTCString()
    debug('modified %s', modified)
    headers['Last-Modified'] = modified
  }

  if (options.etag) {
    const etag = 'W/"' + stat.size.toString(16) + '-' + stat.mtime.getTime().toString(16) + '"'
    debug('etag %s', etag)
    headers.ETag = etag
  }

  // set content-type
  if (options.contentType) {
    let type = mime.getType(path) || mime.default_type
    debug('content-type %s', type)
    if (type && isUtf8MimeType(type)) {
      type += '; charset=utf-8'
    }
    if (type) {
      headers['Content-Type'] = type
    }
  }

  // conditional GET support
  if (isConditionalGET(request)) {
    if (isPreconditionFailure(request, headers)) {
      return sendError(412)
    }

    if (isNotModifiedFailure(request, headers)) {
      return sendNotModified(headers, path, stat)
    }
  }

  // adjust len to start/end options
  len = Math.max(0, len - offset)
  if (options.end !== undefined) {
    const bytes = options.end - offset + 1
    if (len > bytes) len = bytes
  }

  // Range support
  if (options.acceptRanges) {
    const rangeHeader = request.headers.range

    if (
      rangeHeader !== undefined &&
      BYTES_RANGE_REGEXP.test(rangeHeader)
    ) {
      // If-Range support
      if (isRangeFresh(request, headers)) {
        // parse
        const ranges = parseBytesRange(len, rangeHeader)

        // unsatisfiable
        if (ranges.length === 0) {
          debug('range unsatisfiable')

          // Content-Range
          headers['Content-Range'] = contentRange('bytes', len)

          // 416 Requested Range Not Satisfiable
          return sendError(416, {
            headers: { 'Content-Range': headers['Content-Range'] }
          })
          // valid (syntactically invalid/multiple ranges are treated as a regular response)
        } else if (ranges.length === 1) {
          debug('range %j', ranges)

          // Content-Range
          statusCode = 206
          if (options.maxContentRangeChunkSize) {
            ranges[0].end = Math.min(ranges[0].end, ranges[0].start + options.maxContentRangeChunkSize - 1)
          }
          headers['Content-Range'] = contentRange('bytes', len, ranges[0])

          // adjust for requested range
          offset += ranges[0].start
          len = ranges[0].end - ranges[0].start + 1
        }
      } else {
        debug('range stale')
      }
    }
  }

  // content-length
  headers['Content-Length'] = len

  // HEAD support
  if (request.method === 'HEAD') {
    return {
      statusCode,
      headers,
      stream: Readable.from(''),
      // metadata
      type: 'file',
      metadata: { path, stat }
    }
  }

  const stream = fs.createReadStream(path, {
    start: offset,
    end: Math.max(offset, offset + len - 1)
  })

  return {
    statusCode,
    headers,
    stream,
    // metadata
    type: 'file',
    metadata: { path, stat }
  }
}

function sendRedirect (path, options) {
  if (hasTrailingSlash(options.path)) {
    return sendError(403)
  }

  const loc = encodeURI(collapseLeadingSlashes(options.path + '/'))
  const doc = createHtmlDocument('Redirecting', 'Redirecting to ' + escapeHtml(loc))

  const headers = {}
  headers['Content-Type'] = 'text/html; charset=utf-8'
  headers['Content-Length'] = doc[1]
  headers['Content-Security-Policy'] = "default-src 'none'"
  headers['X-Content-Type-Options'] = 'nosniff'
  headers.Location = loc

  return {
    statusCode: 301,
    headers,
    stream: Readable.from(doc[0]),
    // metadata
    type: 'directory',
    metadata: { requestPath: options.path, path }
  }
}

async function sendIndex (request, path, options) {
  let err
  for (let i = 0; i < options.index.length; i++) {
    const index = options.index[i]
    const p = join(path, index)
    const { error, stat } = await tryStat(p)
    if (error) {
      err = error
      continue
    }
    if (stat.isDirectory()) continue
    return sendFileDirectly(request, p, stat, options)
  }

  if (err) {
    return sendStatError(err)
  }

  return sendError(404)
}

async function sendFile (request, path, options) {
  const { error, stat } = await tryStat(path)
  if (error && error.code === 'ENOENT' && !extname(path) && path[path.length - 1] !== sep) {
    let err = error
    // not found, check extensions
    for (let i = 0; i < options.extensions.length; i++) {
      const extension = options.extensions[i]
      const p = path + '.' + extension
      const { error, stat } = await tryStat(p)
      if (error) {
        err = error
        continue
      }
      if (stat.isDirectory()) {
        err = null
        continue
      }
      return sendFileDirectly(request, p, stat, options)
    }
    if (err) {
      return sendStatError(err)
    }
    return sendError(404)
  }
  if (error) return sendStatError(error)
  if (stat.isDirectory()) return sendRedirect(path, options)
  return sendFileDirectly(request, path, stat, options)
}

async function send (request, _path, options) {
  const opts = normalizeOptions(options)
  opts.path = _path

  const parsed = normalizePath(_path, opts.root)
  const { path, parts } = parsed
  if (parsed.statusCode !== undefined) {
    return sendError(parsed.statusCode)
  }

  // dotfile handling
  if (
    (
      debug.enabled || // if debugging is enabled, then check for all cases to log allow case
      opts.dotfiles !== 0 // if debugging is not enabled, then only check if 'deny' or 'ignore' is set
    ) &&
    containsDotFile(parts)
  ) {
    switch (opts.dotfiles) {
      /* c8 ignore start */ /* unreachable, because NODE_DEBUG can not be set after process is running */
      case 0: // 'allow'
        debug('allow dotfile "%s"', path)
        break
      /* c8 ignore stop */
      case 2: // 'deny'
        debug('deny dotfile "%s"', path)
        return sendError(403)
      case 1: // 'ignore'
      default:
        debug('ignore dotfile "%s"', path)
        return sendError(404)
    }
  }

  // index file support
  if (opts.index.length && hasTrailingSlash(_path)) {
    return sendIndex(request, path, opts)
  }

  return sendFile(request, path, opts)
}

module.exports.send = send
