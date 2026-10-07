'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'discordOAuth2',
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.DISCORD_CONFIGURATION
  },
  startRedirectPath: '/login/facebook',
  callbackUri: 'http://localhost:3000/login/discord/callback'
})

fastify.get('/login/discord/callback', async function (request, reply) {
  try {
    const token =
      await this.discordOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)
    return reply.send(token)
  } catch (error) {
    return reply.send(error)
  }
})

fastify.get('/login/discord', {}, (req, reply) => {
  fastify.discordOAuth2.generateAuthorizationUri(
    req,
    reply,
    (err, authorizationEndpoint) => {
      if (err) console.error(err)
      reply.redirect(authorizationEndpoint)
    }
  )
})

fastify.listen({ port: 3000 })
