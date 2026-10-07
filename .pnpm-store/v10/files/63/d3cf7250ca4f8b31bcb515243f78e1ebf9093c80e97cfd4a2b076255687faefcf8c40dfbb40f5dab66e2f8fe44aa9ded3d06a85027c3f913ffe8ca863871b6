'use strict'

const url = require('node:url')
const http = require('node:http')
const https = require('node:https')

const { randomBytes, createHash } = require('node:crypto')

const fp = require('fastify-plugin')
const { AuthorizationCode } = require('simple-oauth2')
const kGenerateCallbackUriParams = Symbol.for('fastify-oauth2.generate-callback-uri-params')

const { promisify, callbackify } = require('node:util')

const DEFAULT_VERIFIER_COOKIE_NAME = 'oauth2-code-verifier'
const DEFAULT_REDIRECT_STATE_COOKIE_NAME = 'oauth2-redirect-state'
const USER_AGENT = 'fastify-oauth2'
const PKCE_METHODS = ['S256', 'plain']

const random = (bytes = 32) => randomBytes(bytes).toString('base64url')
const codeVerifier = random
const codeChallenge = verifier => createHash('sha256').update(verifier).digest('base64url')

function defaultGenerateStateFunction (_request, callback) {
  callback(null, random(16))
}

function defaultCheckStateFunction (request, callback) {
  const state = request.query.state
  const stateCookie =
    request.cookies[
      this.redirectStateCookieName
    ]
  if (stateCookie && state === stateCookie) {
    callback()
    return
  }
  callback(new Error('Invalid state'))
}

function defaultGenerateCallbackUriParams (callbackUriParams) {
  return callbackUriParams
}

/**
 * @param {FastifyInstance} fastify
 * @param {Partial<FastifyOAuth2Options>} options
 * @param {Function} next
 * @return {*}
 */
function fastifyOauth2 (fastify, options, next) {
  if (typeof options.name !== 'string') {
    return next(new Error('options.name should be a string'))
  }
  if (typeof options.credentials !== 'object') {
    return next(new Error('options.credentials should be an object'))
  }
  if (typeof options.callbackUri !== 'string' && typeof options.callbackUri !== 'function') {
    return next(new Error('options.callbackUri should be a string or a function'))
  }
  if (options.callbackUriParams && typeof options.callbackUriParams !== 'object') {
    return next(new Error('options.callbackUriParams should be a object'))
  }
  if (options.tokenRequestParams && typeof options.tokenRequestParams !== 'object') {
    return next(new Error('options.tokenRequestParams should be a object'))
  }
  if (options.generateStateFunction && typeof options.generateStateFunction !== 'function') {
    return next(new Error('options.generateStateFunction should be a function'))
  }
  if (options.checkStateFunction && typeof options.checkStateFunction !== 'function') {
    return next(new Error('options.checkStateFunction should be a function'))
  }
  if (options.startRedirectPath && typeof options.startRedirectPath !== 'string') {
    return next(new Error('options.startRedirectPath should be a string'))
  }
  if (!options.generateStateFunction ^ !options.checkStateFunction) {
    return next(new Error('options.checkStateFunction and options.generateStateFunction have to be given'))
  }
  if (options.tags && !Array.isArray(options.tags)) {
    return next(new Error('options.tags should be a array'))
  }
  if (options.schema && typeof options.schema !== 'object') {
    return next(new Error('options.schema should be a object'))
  }
  if (options.cookie && typeof options.cookie !== 'object') {
    return next(new Error('options.cookie should be an object'))
  }
  if (options.userAgent && typeof options.userAgent !== 'string') {
    return next(new Error('options.userAgent should be a string'))
  }
  if (options.pkce && (typeof options.pkce !== 'string' || !PKCE_METHODS.includes(options.pkce))) {
    return next(new Error('options.pkce should be one of "S256" | "plain" when used'))
  }
  if (options.discovery && (typeof options.discovery !== 'object')) {
    return next(new Error('options.discovery should be an object'))
  }
  if (options.discovery && (typeof options.discovery.issuer !== 'string')) {
    return next(new Error('options.discovery.issuer should be a URL in string format'))
  }
  if (options.discovery && options.credentials.auth) {
    return next(new Error('when options.discovery.issuer is configured, credentials.auth should not be used'))
  }
  if (!options.discovery && !options.credentials.auth) {
    return next(new Error('options.discovery.issuer or credentials.auth have to be given'))
  }
  if (
    options.verifierCookieName &&
    typeof options.verifierCookieName !== 'string'
  ) {
    return next(new Error('options.verifierCookieName should be a string'))
  }
  if (
    options.redirectStateCookieName &&
    typeof options.redirectStateCookieName !== 'string'
  ) {
    return next(
      new Error('options.redirectStateCookieName should be a string')
    )
  }
  if (!fastify.hasReplyDecorator('cookie')) {
    fastify.register(require('@fastify/cookie'))
  }
  const omitUserAgent = options.userAgent === false
  const discovery = options.discovery
  const userAgent = options.userAgent === false
    ? undefined
    : (options.userAgent || USER_AGENT)

  const configure = (configured, fetchedMetadata) => {
    const {
      name,
      callbackUri,
      callbackUriParams = {},
      credentials,
      tokenRequestParams = {},
      scope,
      generateStateFunction = defaultGenerateStateFunction,
      checkStateFunction = defaultCheckStateFunction.bind({
        redirectStateCookieName:
          configured.redirectStateCookieName ||
          DEFAULT_REDIRECT_STATE_COOKIE_NAME
      }),
      startRedirectPath,
      tags = [],
      schema = { tags },
      redirectStateCookieName = DEFAULT_REDIRECT_STATE_COOKIE_NAME,
      verifierCookieName = DEFAULT_VERIFIER_COOKIE_NAME
    } = configured

    if (userAgent) {
      configured.credentials.http = {
        ...configured.credentials.http,
        headers: {
          'User-Agent': userAgent,
          ...configured.credentials.http?.headers
        }
      }
    }
    const generateCallbackUriParams = credentials.auth?.[kGenerateCallbackUriParams] || defaultGenerateCallbackUriParams
    const cookieOpts = Object.assign({ httpOnly: true, sameSite: 'lax' }, options.cookie)

    const generateStateFunctionCallbacked = function (request, callback) {
      const boundGenerateStateFunction = generateStateFunction.bind(fastify)

      if (generateStateFunction.length <= 1) {
        callbackify(function (request) {
          return Promise.resolve(boundGenerateStateFunction(request))
        })(request, callback)
      } else {
        boundGenerateStateFunction(request, callback)
      }
    }

    function generateAuthorizationUriCallbacked (request, reply, callback) {
      generateStateFunctionCallbacked(request, function (err, state) {
        if (err) {
          callback(err, null)
          return
        }

        reply.setCookie(redirectStateCookieName, state, cookieOpts)

        // when PKCE extension is used
        let pkceParams = {}
        if (configured.pkce) {
          const verifier = codeVerifier()
          const challenge = configured.pkce === 'S256' ? codeChallenge(verifier) : verifier
          pkceParams = {
            code_challenge: challenge,
            code_challenge_method: configured.pkce
          }
          reply.setCookie(verifierCookieName, verifier, cookieOpts)
        }

        const urlOptions = Object.assign({}, generateCallbackUriParams(callbackUriParams, request, scope, state), {
          redirect_uri: typeof callbackUri === 'function' ? callbackUri(request) : callbackUri,
          scope,
          state
        }, pkceParams)

        callback(null, oauth2.authorizeURL(urlOptions))
      })
    }

    const generateAuthorizationUriPromisified = promisify(generateAuthorizationUriCallbacked)

    function generateAuthorizationUri (request, reply, callback) {
      if (!callback) {
        return generateAuthorizationUriPromisified(request, reply)
      }

      generateAuthorizationUriCallbacked(request, reply, callback)
    }

    function startRedirectHandler (request, reply) {
      generateAuthorizationUriCallbacked(request, reply, function (err, authorizationUri) {
        if (err) {
          reply.code(500).send(err.message)
          return
        }

        reply.redirect(authorizationUri)
      })
    }

    const cbk = function (o, request, code, pkceParams, callback) {
      const body = Object.assign({}, tokenRequestParams, {
        code,
        redirect_uri: typeof callbackUri === 'function' ? callbackUri(request) : callbackUri
      }, pkceParams)

      return callbackify(o.oauth2.getToken.bind(o.oauth2, body))(callback)
    }

    function checkStateFunctionCallbacked (request, callback) {
      const boundCheckStateFunction = checkStateFunction.bind(fastify)

      if (checkStateFunction.length <= 1) {
        Promise.resolve(boundCheckStateFunction(request))
          .then(function (result) {
            if (result) {
              callback()
            } else {
              callback(new Error('Invalid state'))
            }
          })
          .catch(function (err) { callback(err) })
      } else {
        boundCheckStateFunction(request, callback)
      }
    }

    function getAccessTokenFromAuthorizationCodeFlowCallbacked (request, reply, callback) {
      const code = request.query.code
      const pkceParams = configured.pkce ? { code_verifier: request.cookies[verifierCookieName] } : {}

      const _callback = typeof reply === 'function' ? reply : callback

      if (reply && typeof reply !== 'function') {
        // cleanup a cookie if plugin user uses (req, res, cb) signature variant of getAccessToken fn
        clearCodeVerifierCookie(reply)
      }

      checkStateFunctionCallbacked(request, function (err) {
        if (err) {
          callback(err)
          return
        }
        cbk(fastify[name], request, code, pkceParams, _callback)
      })
    }

    const getAccessTokenFromAuthorizationCodeFlowPromisified = promisify(getAccessTokenFromAuthorizationCodeFlowCallbacked)

    function getAccessTokenFromAuthorizationCodeFlow (request, reply, callback) {
      const _callback = typeof reply === 'function' ? reply : callback

      if (!_callback) {
        return getAccessTokenFromAuthorizationCodeFlowPromisified(request, reply)
      }
      getAccessTokenFromAuthorizationCodeFlowCallbacked(request, reply, _callback)
    }

    function getNewAccessTokenUsingRefreshTokenCallbacked (refreshToken, params, callback) {
      const accessToken = fastify[name].oauth2.createToken(refreshToken)
      callbackify(accessToken.refresh.bind(accessToken, params))(callback)
    }

    const getNewAccessTokenUsingRefreshTokenPromisified = promisify(getNewAccessTokenUsingRefreshTokenCallbacked)

    function getNewAccessTokenUsingRefreshToken (refreshToken, params, callback) {
      if (!callback) {
        return getNewAccessTokenUsingRefreshTokenPromisified(refreshToken, params)
      }
      getNewAccessTokenUsingRefreshTokenCallbacked(refreshToken, params, callback)
    }

    function revokeTokenCallbacked (token, tokenType, params, callback) {
      const accessToken = fastify[name].oauth2.createToken(token)
      callbackify(accessToken.revoke.bind(accessToken, tokenType, params))(callback)
    }

    const revokeTokenPromisified = promisify(revokeTokenCallbacked)

    function revokeToken (token, tokenType, params, callback) {
      if (!callback) {
        return revokeTokenPromisified(token, tokenType, params)
      }
      revokeTokenCallbacked(token, tokenType, params, callback)
    }

    function revokeAllTokenCallbacked (token, params, callback) {
      const accessToken = fastify[name].oauth2.createToken(token)
      callbackify(accessToken.revokeAll.bind(accessToken, token, params))(callback)
    }

    const revokeAllTokenPromisified = promisify(revokeAllTokenCallbacked)

    function revokeAllToken (token, params, callback) {
      if (!callback) {
        return revokeAllTokenPromisified(token, params)
      }
      revokeAllTokenCallbacked(token, params, callback)
    }

    function clearCodeVerifierCookie (reply) {
      reply.clearCookie(verifierCookieName, cookieOpts)
    }

    const pUserInfo = promisify(userInfoCallbacked)

    function userinfo (tokenSetOrToken, options, callback) {
      const _callback = typeof options === 'function' ? options : callback
      if (!_callback) {
        return pUserInfo(tokenSetOrToken, options)
      }
      return userInfoCallbacked(tokenSetOrToken, options, _callback)
    }

    function userInfoCallbacked (tokenSetOrToken, { method = 'GET', via = 'header', params = {} } = {}, callback) {
      if (!configured.discovery) {
        callback(new Error('userinfo can not be used without discovery'))
        return
      }
      const _method = method.toUpperCase()
      if (!['GET', 'POST'].includes(_method)) {
        callback(new Error('userinfo methods supported are only GET and POST'))
        return
      }

      if (method === 'GET' && via === 'body') {
        callback(new Error('body is supported only with POST'))
        return
      }

      let token
      if (typeof tokenSetOrToken !== 'object' && typeof tokenSetOrToken !== 'string') {
        callback(new Error('you should provide token object containing access_token or access_token as string directly'))
        return
      }

      if (typeof tokenSetOrToken === 'object') {
        if (typeof tokenSetOrToken.access_token !== 'string') {
          callback(new Error('access_token should be string'))
          return
        }
        token = tokenSetOrToken.access_token
      } else {
        token = tokenSetOrToken
      }

      fetchUserInfo(fetchedMetadata.userinfo_endpoint, token, { method: _method, params, via }, callback)
    }

    const oauth2 = new AuthorizationCode(configured.credentials)

    if (startRedirectPath) {
      fastify.get(startRedirectPath, { schema }, startRedirectHandler)
    }

    const decoration = {
      oauth2,
      getAccessTokenFromAuthorizationCodeFlow,
      getNewAccessTokenUsingRefreshToken,
      generateAuthorizationUri,
      revokeToken,
      revokeAllToken,
      userinfo
    }

    try {
      fastify.decorate(name, decoration)
      fastify.decorate(`oauth2${name.slice(0, 1).toUpperCase()}${name.slice(1)}`, decoration)
    } catch (e) {
      next(e)
    }
  }

  if (discovery) {
    discoverMetadata(discovery.issuer, (err, fetchedMetadata) => {
      if (err) {
        next(err)
        return
      }
      const authFromMetadata = getAuthFromMetadata(fetchedMetadata)

      const discoveredOptions = {
        ...options,
        credentials: {
          ...options.credentials,
          auth: authFromMetadata
        }
      }
      // respect users choice if they provided PKCE method explicitly
      // even with usage of discovery
      if (!options.pkce) {
        // otherwise select optimal pkce method for them,
        discoveredOptions.pkce = selectPkceFromMetadata(fetchedMetadata)
      }
      configure(discoveredOptions, fetchedMetadata)
      next()
    })
  } else {
    configure(options)
    next()
  }
  function discoverMetadata (issuer, cb) {
    const discoveryUri = getDiscoveryUri(issuer)

    const httpOpts = {
      headers: {
        /* c8 ignore next */
        ...options.credentials.http?.headers,
        'User-Agent': userAgent
      }
    }
    if (omitUserAgent) {
      delete httpOpts.headers['User-Agent']
    }

    const req = (discoveryUri.startsWith('https://') ? https : http).get(discoveryUri, httpOpts, onDiscoveryResponse)

    req.on('error', (e) => {
      const err = new Error('Problem calling discovery endpoint. See innerError for details.')
      err.innerError = e
      cb(err)
    })

    function onDiscoveryResponse (res) {
      let rawData = ''
      res.on('data', (chunk) => { rawData += chunk })
      res.on('end', () => {
        try {
          cb(null, JSON.parse(rawData))
        } catch (err) {
          cb(err)
        }
      })
    }
  }

  function fetchUserInfo (userinfoEndpoint, token, { method, via, params }, cb) {
    const httpOpts = {
      method,
      headers: {
        /* c8 ignore next */
        ...options.credentials.http?.headers,
        'User-Agent': userAgent,
        Authorization: `Bearer ${token}`
      }
    }

    if (omitUserAgent) {
      delete httpOpts.headers['User-Agent']
    }

    const infoUrl = new URL(userinfoEndpoint)

    let body

    if (method === 'GET') {
      Object.entries(params).forEach(([k, v]) => {
        infoUrl.searchParams.append(k, v)
      })
    } else {
      httpOpts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      body = new URLSearchParams()
      if (via === 'body') {
        delete httpOpts.headers.Authorization
        body.append('access_token', token)
      }
      Object.entries(params).forEach(([k, v]) => {
        body.append(k, v)
      })
    }

    const aClient = (userinfoEndpoint.startsWith('https://') ? https : http)

    if (method === 'GET') {
      aClient.get(infoUrl, httpOpts, onUserinfoResponse)
        .on('error', errHandler)
      return
    }

    const req = aClient.request(infoUrl, httpOpts, onUserinfoResponse)
      .on('error', errHandler)

    req.write(body.toString())
    req.end()

    function onUserinfoResponse (res) {
      let rawData = ''
      res.on('data', (chunk) => { rawData += chunk })
      res.on('end', () => {
        try {
          cb(null, JSON.parse(rawData)) // should always be JSON since we don't do jwt auth response
        } catch (err) {
          cb(err)
        }
      })
    }

    function errHandler (e) {
      const err = new Error('Problem calling userinfo endpoint. See innerError for details.')
      err.innerError = e
      cb(err)
    }
  }
}

function getDiscoveryUri (issuer) {
  // eslint-disable-next-line
  const parsed = url.parse(issuer)

  if (parsed.pathname.includes('/.well-known/')) {
    return issuer
  } else {
    let pathname
    if (parsed.pathname.endsWith('/')) {
      pathname = `${parsed.pathname}.well-known/openid-configuration`
    } else {
      pathname = `${parsed.pathname}/.well-known/openid-configuration`
    }
    return url.format({ ...parsed, pathname })
  }
}

function selectPkceFromMetadata (metadata) {
  const methodsSupported = metadata.code_challenge_methods_supported
  if (methodsSupported && methodsSupported.length === 1 && methodsSupported.includes('plain')) {
    return 'plain'
  }
  return 'S256'
}

function getAuthFromMetadata (metadata) {
  /* bellow comments are from RFC 8414 (https://www.rfc-editor.org/rfc/rfc8414.html#section-2) documentation */

  const processedResponse = {}
  /*
    authorization_endpoint
      URL of the authorization server's authorization endpoint
      [RFC6749].  This is REQUIRED unless no grant types are supported
      that use the authorization endpoint.
  */
  if (metadata.authorization_endpoint) {
    const { path, host } = formatEndpoint(metadata.authorization_endpoint)
    processedResponse.authorizePath = path
    processedResponse.authorizeHost = host
  }
  /*
    token_endpoint
      URL of the authorization server's token endpoint [RFC6749].  This
      is REQUIRED unless only the implicit grant type is supported.
  */
  if (metadata.token_endpoint) {
    const { path, host } = formatEndpoint(metadata.token_endpoint)
    processedResponse.tokenPath = path
    processedResponse.tokenHost = host
  }
  /*
    revocation_endpoint
      OPTIONAL.  URL of the authorization server's OAuth 2.0 revocation
      endpoint [RFC7009].
  */
  if (metadata.revocation_endpoint) {
    const { path } = formatEndpoint(metadata.revocation_endpoint)
    processedResponse.revokePath = path
  }

  return processedResponse
}

function formatEndpoint (ep) {
  const { host, protocol, pathname } = new URL(ep)
  return { host: `${protocol}//${host}`, path: pathname }
}

fastifyOauth2.APPLE_CONFIGURATION = {
  authorizeHost: 'https://appleid.apple.com',
  authorizePath: '/auth/authorize',
  tokenHost: 'https://appleid.apple.com',
  tokenPath: '/auth/token',
  revokePath: '/auth/revoke',
  // kGenerateCallbackUriParams is used for dedicated behavior for each OAuth2.0 provider
  // It can update the callbackUriParams based on requestObject, scope and state
  //
  // Symbol used in here because we would not like the user to modify this behavior and
  // do not want to mess up with property name collision
  [kGenerateCallbackUriParams]: function (callbackUriParams, _requestObject, scope, _state) {
    const stringifyScope = Array.isArray(scope) ? scope.join(' ') : scope
    // This behavior is not documented on Apple Developer Docs, but it displays through runtime error.
    // Related Docs: https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms
    // Related Issue: https://github.com/fastify/fastify-oauth2/issues/116
    //
    // `response_mode` must be `form_post` when scope include `email` or `name`
    if (stringifyScope.includes('email') || stringifyScope.includes('name')) {
      callbackUriParams.response_mode = 'form_post'
    }
    return callbackUriParams
  }
}

fastifyOauth2.FACEBOOK_CONFIGURATION = {
  authorizeHost: 'https://facebook.com',
  authorizePath: '/v6.0/dialog/oauth',
  tokenHost: 'https://graph.facebook.com',
  tokenPath: '/v6.0/oauth/access_token'
}

fastifyOauth2.GITHUB_CONFIGURATION = {
  tokenHost: 'https://github.com',
  tokenPath: '/login/oauth/access_token',
  authorizePath: '/login/oauth/authorize'
}

fastifyOauth2.GITLAB_CONFIGURATION = {
  authorizeHost: 'https://gitlab.com',
  authorizePath: '/oauth/authorize',
  tokenHost: 'https://gitlab.com',
  tokenPath: '/oauth/token',
  revokePath: '/oauth/revoke'
}

fastifyOauth2.LINKEDIN_CONFIGURATION = {
  authorizeHost: 'https://www.linkedin.com',
  authorizePath: '/oauth/v2/authorization',
  tokenHost: 'https://www.linkedin.com',
  tokenPath: '/oauth/v2/accessToken',
  revokePath: '/oauth/v2/revoke'
}

fastifyOauth2.GOOGLE_CONFIGURATION = {
  authorizeHost: 'https://accounts.google.com',
  authorizePath: '/o/oauth2/v2/auth',
  tokenHost: 'https://www.googleapis.com',
  tokenPath: '/oauth2/v4/token'
}

fastifyOauth2.MICROSOFT_CONFIGURATION = {
  authorizeHost: 'https://login.microsoftonline.com',
  authorizePath: '/common/oauth2/v2.0/authorize',
  tokenHost: 'https://login.microsoftonline.com',
  tokenPath: '/common/oauth2/v2.0/token'
}

fastifyOauth2.VKONTAKTE_CONFIGURATION = {
  authorizeHost: 'https://oauth.vk.com',
  authorizePath: '/authorize',
  tokenHost: 'https://oauth.vk.com',
  tokenPath: '/access_token'
}

fastifyOauth2.SPOTIFY_CONFIGURATION = {
  authorizeHost: 'https://accounts.spotify.com',
  authorizePath: '/authorize',
  tokenHost: 'https://accounts.spotify.com',
  tokenPath: '/api/token'
}

fastifyOauth2.DISCORD_CONFIGURATION = {
  authorizeHost: 'https://discord.com',
  authorizePath: '/api/oauth2/authorize',
  tokenHost: 'https://discord.com',
  tokenPath: '/api/oauth2/token',
  revokePath: '/api/oauth2/token/revoke'
}

fastifyOauth2.TWITCH_CONFIGURATION = {
  authorizeHost: 'https://id.twitch.tv',
  authorizePath: '/oauth2/authorize',
  tokenHost: 'https://id.twitch.tv',
  tokenPath: '/oauth2/token',
  revokePath: '/oauth2/revoke'
}

fastifyOauth2.VATSIM_CONFIGURATION = {
  authorizeHost: 'https://auth.vatsim.net',
  authorizePath: '/oauth/authorize',
  tokenHost: 'https://auth.vatsim.net',
  tokenPath: '/oauth/token'
}

fastifyOauth2.VATSIM_DEV_CONFIGURATION = {
  authorizeHost: 'https://auth-dev.vatsim.net',
  authorizePath: '/oauth/authorize',
  tokenHost: 'https://auth-dev.vatsim.net',
  tokenPath: '/oauth/token'
}

fastifyOauth2.EPIC_GAMES_CONFIGURATION = {
  authorizeHost: 'https://www.epicgames.com',
  authorizePath: '/id/authorize',
  tokenHost: 'https://api.epicgames.dev',
  tokenPath: '/epic/oauth/v1/token'
}

/**
 * Yandex ID docs https://yandex.ru/dev/id/doc/en/
 */
fastifyOauth2.YANDEX_CONFIGURATION = {
  authorizeHost: 'https://oauth.yandex.com',
  authorizePath: '/authorize',
  tokenHost: 'https://oauth.yandex.com',
  tokenPath: '/token',
  revokePath: '/revoke_token'
}

fastifyOauth2.X_CONFIGURATION = {
  authorizeHost: 'https://x.com',
  authorizePath: '/i/oauth2/authorize',
  tokenHost: 'https://api.x.com',
  tokenPath: '/2/oauth2/token'
}

module.exports = fp(fastifyOauth2, {
  fastify: '5.x',
  name: '@fastify/oauth2'
})
module.exports.default = fastifyOauth2
module.exports.fastifyOauth2 = fastifyOauth2
