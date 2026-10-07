'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'vatsimoauthdev',
  scope: ['full_name', 'email', 'vatsim_details', 'country'],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.VATSIM_DEV_CONFIGURATION
  },
  startRedirectPath: '/login/vatsim',
  callbackUri: 'http://localhost:3000/login/vatsim/callback'
})

fastify.get('/login/vatsim/callback', function (request, reply) {
  this.vatsimoauthdev.getAccessTokenFromAuthorizationCodeFlow(
    request,
    async (err, result) => {
      if (err) {
        reply.send(err)
        return
      }

      const fetchResult = await fetch('https://auth-dev.vatsim.net/api/user', {
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
