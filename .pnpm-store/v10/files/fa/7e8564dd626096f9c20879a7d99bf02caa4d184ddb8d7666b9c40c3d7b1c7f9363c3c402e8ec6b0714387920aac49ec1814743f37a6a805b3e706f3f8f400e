'use strict'

const fastify = require('fastify')({ logger: true })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'Spotify',
  scope: ['user-read-currently-playing'],
  credentials: {
    client: {
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    },
    auth: oauthPlugin.SPOTIFY_CONFIGURATION
  },
  startRedirectPath: '/login/spotify',
  callbackUri: `http://localhost:${process.env.PORT}/login/spotify/callback`
})

fastify.get('/login/spotify/callback', async (req, reply) => {
  const result = await fastify.Spotify.getAccessTokenFromAuthorizationCodeFlow(req)

  req.log.info('The Spotify token is %o', result.token)
  reply.send({ access_token: result.token.access_token })
})

fastify.listen({ port: process.env.PORT })
