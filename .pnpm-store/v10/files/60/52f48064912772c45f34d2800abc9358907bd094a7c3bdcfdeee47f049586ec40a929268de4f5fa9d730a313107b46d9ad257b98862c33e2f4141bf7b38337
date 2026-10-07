'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'egOAuth2',
  scope: ['basic_profile'], // 'basic_profile', 'friends_list', 'presence',
  credentials: {
    client: {
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    },
    auth: oauthPlugin.EPIC_GAMES_CONFIGURATION
  },
  startRedirectPath: '/login/eg',
  callbackUri: `http://localhost:${process.env.PORT}/login/eg/callback`
})

fastify.get('/login/eg/callback', async (req, reply) => {
  const token = await fastify.egOAuth2.getAccessTokenFromAuthorizationCodeFlow(req)

  req.log.info('The Epic Games token is %o', token)
  reply.send({ access_token: token.access_token })
})

fastify.listen(process.env.PORT, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
