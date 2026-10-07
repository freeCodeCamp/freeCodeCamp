'use strict'

const { AsyncResource } = require('node:async_hooks')
const { FifoMap: Fifo } = require('toad-cache')
const { parse: secureJsonParse } = require('secure-json-parse')
const ContentType = require('./content-type')
const {
  kDefaultJsonParse,
  kContentTypeParser,
  kBodyLimit,
  kRequestPayloadStream,
  kState,
  kTestInternals,
  kReplyIsError,
  kRouteContext
} = require('./symbols')

const {
  FST_ERR_CTP_INVALID_TYPE,
  FST_ERR_CTP_EMPTY_TYPE,
  FST_ERR_CTP_ALREADY_PRESENT,
  FST_ERR_CTP_INVALID_HANDLER,
  FST_ERR_CTP_INVALID_PARSE_TYPE,
  FST_ERR_CTP_BODY_TOO_LARGE,
  FST_ERR_CTP_INVALID_MEDIA_TYPE,
  FST_ERR_CTP_INVALID_CONTENT_LENGTH,
  FST_ERR_CTP_EMPTY_JSON_BODY,
  FST_ERR_CTP_INSTANCE_ALREADY_STARTED,
  FST_ERR_CTP_INVALID_JSON_BODY
} = require('./errors')
const { FSTSEC001 } = require('./warnings')

function ContentTypeParser (bodyLimit, onProtoPoisoning, onConstructorPoisoning) {
  this[kDefaultJsonParse] = getDefaultJsonParser(onProtoPoisoning, onConstructorPoisoning)
  // using a map instead of a plain object to avoid prototype hijack attacks
  this.customParsers = new Map()
  this.customParsers.set('application/json', new Parser(true, false, bodyLimit, this[kDefaultJsonParse]))
  this.customParsers.set('text/plain', new Parser(true, false, bodyLimit, defaultPlainTextParser))
  this.parserList = ['application/json', 'text/plain']
  this.parserRegExpList = []
  this.cache = new Fifo(100)
}

ContentTypeParser.prototype.add = function (contentType, opts, parserFn) {
  const contentTypeIsString = typeof contentType === 'string'

  if (contentTypeIsString) {
    contentType = contentType.trim().toLowerCase()
    if (contentType.length === 0) throw new FST_ERR_CTP_EMPTY_TYPE()
  } else if (!(contentType instanceof RegExp)) {
    throw new FST_ERR_CTP_INVALID_TYPE()
  }

  if (typeof parserFn !== 'function') {
    throw new FST_ERR_CTP_INVALID_HANDLER()
  }

  if (this.existingParser(contentType)) {
    throw new FST_ERR_CTP_ALREADY_PRESENT(contentType)
  }

  if (opts.parseAs !== undefined) {
    if (opts.parseAs !== 'string' && opts.parseAs !== 'buffer') {
      throw new FST_ERR_CTP_INVALID_PARSE_TYPE(opts.parseAs)
    }
  }

  const parser = new Parser(
    opts.parseAs === 'string',
    opts.parseAs === 'buffer',
    opts.bodyLimit,
    parserFn
  )

  if (contentType === '*') {
    this.customParsers.set('', parser)
  } else {
    if (contentTypeIsString) {
      const ct = new ContentType(contentType)
      if (ct.isValid === false) {
        throw new FST_ERR_CTP_INVALID_TYPE()
      }
      const normalizedContentType = ct.toString()
      this.parserList.unshift(normalizedContentType)
      this.customParsers.set(normalizedContentType, parser)
    } else {
      validateRegExp(contentType)
      this.parserRegExpList.unshift(contentType)
      this.customParsers.set(contentType.toString(), parser)
    }
  }
}

ContentTypeParser.prototype.hasParser = function (contentType) {
  if (typeof contentType === 'string') {
    contentType = new ContentType(contentType).toString()
  } else {
    if (!(contentType instanceof RegExp)) throw new FST_ERR_CTP_INVALID_TYPE()
    contentType = contentType.toString()
  }

  return this.customParsers.has(contentType)
}

ContentTypeParser.prototype.existingParser = function (contentType) {
  if (typeof contentType === 'string') {
    const ct = new ContentType(contentType).toString()
    if (contentType === 'application/json' && this.customParsers.has(contentType)) {
      return this.customParsers.get(ct).fn !== this[kDefaultJsonParse]
    }
    if (contentType === 'text/plain' && this.customParsers.has(contentType)) {
      return this.customParsers.get(ct).fn !== defaultPlainTextParser
    }
  }

  return this.hasParser(contentType)
}

ContentTypeParser.prototype.getParser = function (contentType) {
  if (typeof contentType === 'string') {
    contentType = new ContentType(contentType)
  }
  const ct = contentType.toString()

  let parser = this.cache.get(ct)
  if (parser !== undefined) return parser
  parser = this.customParsers.get(ct)
  if (parser !== undefined) {
    this.cache.set(ct, parser)
    return parser
  }

  // We have conflicting desires across our test suite. In some cases, we
  // expect to get a parser by just passing the media-type. In others, we expect
  // to get a parser registered under the media-type while also providing
  // parameters. And in yet others, we expect to register a parser under the
  // media-type and have it apply to any request with a header that starts
  // with that type.
  parser = this.customParsers.get(contentType.mediaType)
  if (parser !== undefined) {
    return parser
  }

  for (let j = 0; j !== this.parserRegExpList.length; ++j) {
    const parserRegExp = this.parserRegExpList[j]
    if (parserRegExp.test(ct)) {
      parser = this.customParsers.get(parserRegExp.toString())
      this.cache.set(ct, parser)
      return parser
    }
  }

  return this.customParsers.get('')
}

ContentTypeParser.prototype.removeAll = function () {
  this.customParsers = new Map()
  this.parserRegExpList = []
  this.parserList = []
  this.cache = new Fifo(100)
}

ContentTypeParser.prototype.remove = function (contentType) {
  let parsers

  if (typeof contentType === 'string') {
    contentType = new ContentType(contentType).toString()
    parsers = this.parserList
  } else {
    if (!(contentType instanceof RegExp)) throw new FST_ERR_CTP_INVALID_TYPE()
    contentType = contentType.toString()
    parsers = this.parserRegExpList
  }

  const removed = this.customParsers.delete(contentType)
  const idx = parsers.findIndex(ct => ct.toString() === contentType)

  if (idx > -1) {
    parsers.splice(idx, 1)
  }

  return removed || idx > -1
}

ContentTypeParser.prototype.run = function (contentType, handler, request, reply) {
  const parser = this.getParser(contentType)

  if (parser === undefined) {
    if (request.is404 === true) {
      handler(request, reply)
      return
    }

    reply[kReplyIsError] = true
    reply.send(new FST_ERR_CTP_INVALID_MEDIA_TYPE())
    return
  }

  const resource = new AsyncResource('content-type-parser:run', request)
  const done = resource.bind(onDone)

  if (parser.asString === true || parser.asBuffer === true) {
    rawBody(
      request,
      reply,
      reply[kRouteContext]._parserOptions,
      parser,
      done
    )
    return
  }

  const result = parser.fn(request, request[kRequestPayloadStream], done)
  if (result && typeof result.then === 'function') {
    result.then(body => { done(null, body) }, done)
  }

  function onDone (error, body) {
    resource.emitDestroy()
    if (error != null) {
      // We must close the connection as the client may
      // send more data
      reply.header('connection', 'close')
      reply[kReplyIsError] = true
      reply.send(error)
      return
    }
    request.body = body
    handler(request, reply)
  }
}

function rawBody (request, reply, options, parser, done) {
  const asString = parser.asString === true
  const limit = options.limit === null ? parser.bodyLimit : options.limit
  const contentLength = Number(request.headers['content-length'])

  if (contentLength > limit) {
    done(new FST_ERR_CTP_BODY_TOO_LARGE(), undefined)
    return
  }

  let receivedLength = 0
  let body = asString ? '' : []
  const payload = request[kRequestPayloadStream] || request.raw

  if (asString) {
    payload.setEncoding('utf8')
  }

  payload.on('data', onData)
  payload.on('end', onEnd)
  payload.on('error', onEnd)
  payload.resume()

  function onData (chunk) {
    receivedLength += asString ? Buffer.byteLength(chunk) : chunk.length
    const { receivedEncodedLength = 0 } = payload
    // The resulting body length must not exceed bodyLimit (see "zip bomb").
    // The case when encoded length is larger than received length is rather theoretical,
    // unless the stream returned by preParsing hook is broken and reports wrong value.
    if (receivedLength > limit || receivedEncodedLength > limit) {
      payload.removeListener('data', onData)
      payload.removeListener('end', onEnd)
      payload.removeListener('error', onEnd)
      done(new FST_ERR_CTP_BODY_TOO_LARGE(), undefined)
      return
    }

    if (asString) {
      body += chunk
    } else {
      body.push(chunk)
    }
  }

  function onEnd (err) {
    payload.removeListener('data', onData)
    payload.removeListener('end', onEnd)
    payload.removeListener('error', onEnd)

    if (err != null) {
      if (!(typeof err.statusCode === 'number' && err.statusCode >= 400)) {
        err.statusCode = 400
      }
      done(err, undefined)
      return
    }

    if (!Number.isNaN(contentLength) && (payload.receivedEncodedLength || receivedLength) !== contentLength) {
      done(new FST_ERR_CTP_INVALID_CONTENT_LENGTH(), undefined)
      return
    }

    if (!asString) {
      body = Buffer.concat(body)
    }

    const result = parser.fn(request, body, done)
    if (result && typeof result.then === 'function') {
      result.then(body => { done(null, body) }, done)
    }
  }
}

function getDefaultJsonParser (onProtoPoisoning, onConstructorPoisoning) {
  const parseOptions = { protoAction: onProtoPoisoning, constructorAction: onConstructorPoisoning }

  return defaultJsonParser

  function defaultJsonParser (req, body, done) {
    if (body.length === 0) {
      done(new FST_ERR_CTP_EMPTY_JSON_BODY(), undefined)
      return
    }
    try {
      done(null, secureJsonParse(body, parseOptions))
    } catch {
      done(new FST_ERR_CTP_INVALID_JSON_BODY(), undefined)
    }
  }
}

function defaultPlainTextParser (req, body, done) {
  done(null, body)
}

function Parser (asString, asBuffer, bodyLimit, fn) {
  this.asString = asString
  this.asBuffer = asBuffer
  this.bodyLimit = bodyLimit
  this.fn = fn
}

function buildContentTypeParser (c) {
  const contentTypeParser = new ContentTypeParser()
  contentTypeParser[kDefaultJsonParse] = c[kDefaultJsonParse]
  contentTypeParser.customParsers = new Map(c.customParsers.entries())
  contentTypeParser.parserList = c.parserList.slice()
  contentTypeParser.parserRegExpList = c.parserRegExpList.slice()
  return contentTypeParser
}

function addContentTypeParser (contentType, opts, parser) {
  if (this[kState].started) {
    throw new FST_ERR_CTP_INSTANCE_ALREADY_STARTED('addContentTypeParser')
  }

  if (typeof opts === 'function') {
    parser = opts
    opts = {}
  }

  if (!opts) opts = {}
  if (!opts.bodyLimit) opts.bodyLimit = this[kBodyLimit]

  if (Array.isArray(contentType)) {
    contentType.forEach((type) => this[kContentTypeParser].add(type, opts, parser))
  } else {
    this[kContentTypeParser].add(contentType, opts, parser)
  }

  return this
}

function hasContentTypeParser (contentType) {
  return this[kContentTypeParser].hasParser(contentType)
}

function removeContentTypeParser (contentType) {
  if (this[kState].started) {
    throw new FST_ERR_CTP_INSTANCE_ALREADY_STARTED('removeContentTypeParser')
  }

  if (Array.isArray(contentType)) {
    for (const type of contentType) {
      this[kContentTypeParser].remove(type)
    }
  } else {
    this[kContentTypeParser].remove(contentType)
  }
}

function removeAllContentTypeParsers () {
  if (this[kState].started) {
    throw new FST_ERR_CTP_INSTANCE_ALREADY_STARTED('removeAllContentTypeParsers')
  }

  this[kContentTypeParser].removeAll()
}

function validateRegExp (regexp) {
  // RegExp should either start with ^ or include ;?
  // It can ensure the user is properly detect the essence
  // MIME types.
  if (regexp.source[0] !== '^' && regexp.source.includes(';?') === false) {
    FSTSEC001(regexp.source)
  }
}

module.exports = ContentTypeParser
module.exports.helpers = {
  buildContentTypeParser,
  addContentTypeParser,
  hasContentTypeParser,
  removeContentTypeParser,
  removeAllContentTypeParsers
}
module.exports.defaultParsers = {
  getDefaultJsonParser,
  defaultTextParser: defaultPlainTextParser
}
module.exports[kTestInternals] = { rawBody }
