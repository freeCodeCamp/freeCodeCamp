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
  // when provided, this userAgent will also be used at discovery endpoint
  // to fully omit for whatever reason, set it to false
  userAgent: 'my custom app (v1.0.0)',
  scope: ['openid', 'profile', 'email'],
  credentials: {
    client: {
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    }
  },
  startRedirectPath: '/login/google',
  callbackUri: 'http://localhost:3000/interaction/callback/google',
  cookie: cookieOpts,
  // pkce: 'S256' let discovery handle it itself
  discovery: {
    /*
    When OIDC provider is mounted at root:
    with trailing slash (99% of the cases)
    - 'https://accounts.google.com/'
    */
    issuer: 'https://accounts.google.com'
    /*
    also these variants work:
    When OIDC provider is mounted at root:
    with trailing slash
    - 'https://accounts.google.com/'

    When given explicit metadata endpoint:
    - issuer: 'https://accounts.google.com/.well-known/openid-configuration'

    When OIDC provider is nested at some route:
     - with trailing slash
    'https://id.mycustomdomain.com/nested/'
    - without trailing slash
    'https://id.mycustomdomain.com/nested'
    */
  }
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

    if (!result.ok) {
      reply.send(new Error('Failed to fetch user info'))
      return
    }

    const data = await fetchResult.json()
    reply.send(data)
  })
})

fastify.listen({ port: 3000 })
fastify.log.info('go to http://localhost:3000/login/google')
