'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'linkedinOAuth2',
  scope: ['profile', 'email', 'openid'],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.LINKEDIN_CONFIGURATION
  },
  tokenRequestParams: {
    client_id: '<CLIENT_ID>',
    client_secret: '<CLIENT_SECRET>'
  },
  startRedirectPath: '/login/linkedin',
  callbackUri: 'http://localhost:3000/login/linkedin/callback'
})

fastify.get('/login/linkedin/callback', function (request, reply) {
  this.linkedinOAuth2.getAccessTokenFromAuthorizationCodeFlow(
    request,
    async (err, result) => {
      if (err) {
        reply.send(err)
        return
      }

      const fetchResult = await fetch('https://api.linkedin.com/v2/userinfo', {
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
    }
  )
})

fastify.listen({ port: 3000 })
