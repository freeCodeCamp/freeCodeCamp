'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'yandexOAuth2',
  scope: ['login:email'],
  credentials: {
    client: {
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    },
    auth: oauthPlugin.YANDEX_CONFIGURATION
  },
  startRedirectPath: '/login/yandex',
  callbackUri: `http://localhost:${process.env.PORT}/login/yandex/callback`
})

fastify.get('/login/yandex/callback', async (req, reply) => {
  const token = await fastify.yandexOAuth2.getAccessTokenFromAuthorizationCodeFlow(req)

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
