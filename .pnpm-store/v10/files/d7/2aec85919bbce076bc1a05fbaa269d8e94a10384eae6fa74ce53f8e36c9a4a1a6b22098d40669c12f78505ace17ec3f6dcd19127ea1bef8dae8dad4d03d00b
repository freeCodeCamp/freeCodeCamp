'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require("@fastify/oauth2");
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'xOAuth2',
  // See the full list of supported X OAuth2 scopes:
  // https://docs.x.com/fundamentals/authentication/oauth-2-0/authorization-code#scopes
  scope: ['users.read'],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.X_CONFIGURATION,
  },
  startRedirectPath: '/login/x',
  callbackUri: 'http://localhost:3000/login/x/callback',
  // PKCE is required for X OAuth2 (`S256` or `plain`).
  pkce: 'S256',
})

fastify.get('/login/x/callback', async function (request, reply) {
  const { token } = await this.xOAuth2.getAccessTokenFromAuthorizationCodeFlow(
    request
  )

  reply.send({ access_token: token.access_token })
})

fastify.listen({ port: 3000 })
