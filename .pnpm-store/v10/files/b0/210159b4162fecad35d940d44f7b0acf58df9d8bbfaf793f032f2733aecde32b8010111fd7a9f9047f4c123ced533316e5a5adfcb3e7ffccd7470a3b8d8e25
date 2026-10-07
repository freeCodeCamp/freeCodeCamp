'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

const cookieOpts = {
  // domain: 'localhost',
  path: '/',
  secure: true,
  sameSite: 'lax',
  httpOnly: true
}

// const oauthPlugin = require('fastify-oauth2')
fastify.register(require('@fastify/cookie'), {
  secret: ['my-secret'],
  parseOptions: cookieOpts
})

const oauthPlugin = require('..')
fastify.register(oauthPlugin, {
  name: 'googleOAuth2',
  scope: ['openid', 'profile', 'email'],
  credentials: {
    client: {
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    },
    auth: oauthPlugin.GOOGLE_CONFIGURATION
  },
  startRedirectPath: '/login/google',
  callbackUri: 'http://localhost:3000/interaction/callback/google',
  cookie: cookieOpts,
  pkce: 'S256'
  /* use S256:

  Most modern providers (authorization servers) that are up to date with standards,
  will support S256 and also announce that in discovery endpoint (.well-known/openid-configuration):
  ...
  "code_challenge_methods_supported": [
    "S256",
    "plain"
  ]
  ...

  "plain" is also supported in this library but it's use is discouraged.
  Only do it in case that you use some legacy provider (authorization server),
  and you see provider's .well-known/openid-configuration
  endpoint has only that single challenge method:
  ...
  "code_challenge_methods_supported": [
    "plain"
  ]
  */
})

fastify.get('/interaction/callback/google', function (request, reply) {
  // Note that in this example a "reply" is also passed, it's so that code verifier cookie can be cleaned before
  // token is requested from token endpoint
  this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, reply, async (err, result) => {
    if (err) {
      reply.send(err)
      return
    }

    const fetchResult = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: 'Bearer ' + result.token.access_token
      }
    })

    if (!fetchResult.ok) {
      reply.send(new Error('Failed to fetch user info'))
      return
    }

    const data = await fetchResult.json()
    reply.send(data)
  })
})

fastify.listen({ port: 3000 })
fastify.log.info('go to http://localhost:3000/login/google')
