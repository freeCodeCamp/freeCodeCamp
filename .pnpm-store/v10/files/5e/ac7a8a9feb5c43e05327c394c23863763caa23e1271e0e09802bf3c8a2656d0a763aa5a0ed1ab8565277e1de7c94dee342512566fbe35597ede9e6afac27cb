'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })
const fastifyPlain = require('fastify')

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'vatsimoauth',
  scope: ['full_name', 'email', 'vatsim_details', 'country'],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.VATSIM_CONFIGURATION
  },
  startRedirectPath: '/login/vatsim',
  callbackUri: 'http://localhost:3000/login/vatsim/callback'
})

fastify.get('/login/vatsim/callback', function (request, reply) {
  this.vatsimoauthdev.getAccessTokenFromAuthorizationCodeFlow(
    request,
    (err, result) => {
      if (err) {
        reply.send(err)
        return
      }

      fastifyPlain.concat(
        {
          url: 'https://auth.vatsim.net/api/user',
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + result.access_token
          },
          json: true
        },
        function (err, _res, data) {
          if (err) {
            reply.send(err)
            return
          }
          reply.send(data)
        }
      )
    }
  )
})

fastify.listen({ port: 3000 })
