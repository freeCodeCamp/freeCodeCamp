'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'googleOAuth2',
  scope: ['profile'],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.GOOGLE_CONFIGURATION
  },
  startRedirectPath: '/login/google',
  callbackUri: 'http://localhost:3000/login/google/callback'
})

fastify.get('/login/google/callback', function (request, reply) {
  this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, async (err, result) => {
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
