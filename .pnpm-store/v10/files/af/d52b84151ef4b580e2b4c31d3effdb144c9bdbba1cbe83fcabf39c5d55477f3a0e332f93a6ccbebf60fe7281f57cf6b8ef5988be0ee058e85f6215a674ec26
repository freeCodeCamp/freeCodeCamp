'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'facebookOAuth2',
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.FACEBOOK_CONFIGURATION
  },
  startRedirectPath: '/login/facebook',
  callbackUri: 'http://localhost:3000/login/facebook/callback'
})

fastify.get('/login/facebook/callback', function (request, reply) {
  this.facebookOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, async (err, result) => {
    if (err) {
      reply.send(err)
      return
    }

    const fetchResult = await fetch('https://graph.facebook.com/v6.0/me', {
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
