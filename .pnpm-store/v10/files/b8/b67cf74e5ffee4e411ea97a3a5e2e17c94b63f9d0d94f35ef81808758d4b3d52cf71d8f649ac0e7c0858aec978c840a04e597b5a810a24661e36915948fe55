'use strict'

const assert = require('node:assert')
const fp = require('fastify-plugin')
const CSRF = require('@fastify/csrf')
const createError = require('@fastify/error')

const MissingCSRFSecretError = createError('FST_CSRF_MISSING_SECRET', 'Missing csrf secret', 403)
const InvalidCSRFTokenError = createError('FST_CSRF_INVALID_TOKEN', 'Invalid csrf token', 403)

const defaultOptions = {
  cookieKey: '_csrf',
  cookieOpts: { path: '/', sameSite: true, httpOnly: true },
  sessionKey: '_csrf',
  getToken: getTokenDefault,
  getUserInfo: getUserInfoDefault,
  sessionPlugin: '@fastify/cookie',
  logLevel: 'warn'
}

async function fastifyCsrfProtection (fastify, opts) {
  const {
    cookieKey,
    cookieOpts,
    sessionKey,
    getToken,
    getUserInfo,
    sessionPlugin,
    logLevel
  } = Object.assign({}, defaultOptions, opts)

  const csrfOpts = opts?.csrfOpts ? opts.csrfOpts : {}

  assert(typeof cookieKey === 'string', 'cookieKey should be a string')
  assert(typeof sessionKey === 'string', 'sessionKey should be a string')
  assert(typeof getToken === 'function', 'getToken should be a function')
  assert(typeof getUserInfo === 'function', 'getUserInfo should be a function')
  assert(typeof cookieOpts === 'object', 'cookieOpts should be a object')
  assert(typeof logLevel === 'string', 'logLevel should be a string')
  assert(
    ['@fastify/cookie', '@fastify/session', '@fastify/secure-session'].includes(sessionPlugin),
    "sessionPlugin should be one of the following: '@fastify/cookie', '@fastify/session', '@fastify/secure-session'"
  )

  if (opts.getUserInfo) {
    csrfOpts.userInfo = true
  }

  if (sessionPlugin === '@fastify/cookie' && csrfOpts.userInfo) {
    assert(csrfOpts.hmacKey, 'csrfOpts.hmacKey is required')
  }

  const tokens = new CSRF(csrfOpts)

  const isCookieSigned = cookieOpts?.signed

  if (sessionPlugin === '@fastify/secure-session') {
    fastify.decorateReply('generateCsrf', generateCsrfSecureSession)
  } else if (sessionPlugin === '@fastify/session') {
    fastify.decorateReply('generateCsrf', generateCsrfSession)
  } else {
    fastify.decorateReply('generateCsrf', generateCsrfCookie)
  }

  fastify.decorate('csrfProtection', csrfProtection)

  let getSecret

  if (sessionPlugin === '@fastify/secure-session') {
    getSecret = function getSecret (req, _reply) { return req.session.get(sessionKey) }
  } else if (sessionPlugin === '@fastify/session') {
    getSecret = function getSecret (req, _reply) { return req.session[sessionKey] }
  } else {
    getSecret = function getSecret (req, reply) {
      return isCookieSigned
        ? reply.unsignCookie(req.cookies[cookieKey] || '').value
        : req.cookies[cookieKey]
    }
  }

  function generateCsrfCookie (opts) {
    let secret = isCookieSigned
      ? this.unsignCookie(this.request.cookies[cookieKey] || '').value
      : this.request.cookies[cookieKey]
    const userInfo = opts ? opts.userInfo : undefined
    if (!secret) {
      secret = tokens.secretSync()
      this.setCookie(cookieKey, secret, Object.assign({}, cookieOpts, opts))
    }
    return tokens.create(secret, userInfo)
  }

  function generateCsrfSecureSession (opts) {
    let secret = this.request.session.get(sessionKey)
    if (!secret) {
      secret = tokens.secretSync()
      this.request.session.set(sessionKey, secret)
    }
    const userInfo = opts ? opts.userInfo : undefined
    if (opts) {
      this.request.session.options(opts)
    }
    return tokens.create(secret, userInfo)
  }

  function generateCsrfSession (opts) {
    let secret = this.request.session[sessionKey]
    const userInfo = opts ? opts.userInfo : undefined
    if (!secret) {
      secret = tokens.secretSync()
      this.request.session[sessionKey] = secret
    }
    return tokens.create(secret, userInfo)
  }

  function csrfProtection (req, reply, next) {
    const secret = getSecret(req, reply)
    if (!secret) {
      req.log[logLevel]('Missing csrf secret')
      return reply.send(new MissingCSRFSecretError())
    }
    if (!tokens.verify(secret, getToken(req), getUserInfo(req))) {
      req.log[logLevel]('Invalid csrf token')
      return reply.send(new InvalidCSRFTokenError())
    }
    next()
  }
}

function getTokenDefault (req) {
  return req.body?._csrf ||
    req.headers['csrf-token'] ||
    req.headers['xsrf-token'] ||
    req.headers['x-csrf-token'] ||
    req.headers['x-xsrf-token']
}

function getUserInfoDefault (_req) {
  return undefined
}

module.exports = fp(fastifyCsrfProtection, {
  fastify: '5.x',
  name: '@fastify/csrf-protection'
})
module.exports.default = fastifyCsrfProtection
module.exports.fastifyCsrfProtection = fastifyCsrfProtection
