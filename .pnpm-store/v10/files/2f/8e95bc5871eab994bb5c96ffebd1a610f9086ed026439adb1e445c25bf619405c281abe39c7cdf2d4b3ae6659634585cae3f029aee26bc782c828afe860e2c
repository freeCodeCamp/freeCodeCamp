'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'vkOAuth2',
  scope: ['email'],
  credentials: {
    client: {
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    },
    auth: oauthPlugin.VKONTAKTE_CONFIGURATION
  },
  startRedirectPath: '/login/vk',
  callbackUri: `http://localhost:${process.env.PORT}/login/vk/callback`
})

fastify.get('/login/vk/callback', async (req, reply) => {
  const token = await fastify.vkOAuth2.getAccessTokenFromAuthorizationCodeFlow(req)

  console.log(token)
  reply.send({ access_token: token.access_token })
})

fastify.listen(process.env.PORT, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
