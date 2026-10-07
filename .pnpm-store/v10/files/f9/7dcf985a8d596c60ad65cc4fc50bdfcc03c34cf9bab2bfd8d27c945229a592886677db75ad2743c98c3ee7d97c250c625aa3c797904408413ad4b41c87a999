'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(oauthPlugin, {
  name: 'githubOAuth2',
  scope: [],
  credentials: {
    client: {
      id: '<CLIENT_ID>',
      secret: '<CLIENT_SECRET>'
    },
    auth: oauthPlugin.GITHUB_CONFIGURATION
  },
  startRedirectPath: '/login/github',
  callbackUri: 'http://localhost:3000/login/github/callback'
})

const memStore = new Map()

async function saveAccessToken (token) {
  memStore.set(token.refresh_token, token)
}

async function retrieveAccessToken (token) {
  // remove Bearer if needed
  if (token.startsWith('Bearer ')) {
    token = token.substring(6)
  }
  // any database or in-memory operation here
  // we use in-memory variable here
  if (memStore.has(token)) {
    memStore.get(token)
  }
  throw new Error('invalid refresh token')
}

fastify.get('/login/github/callback', async function (request, reply) {
  const token = await this.githubOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)

  console.log(token.access_token)

  // you should store the `token` for further usage
  await saveAccessToken(token)

  reply.send({ access_token: token.access_token })
})

fastify.get('/login/github/refreshAccessToken', async function (request, reply) {
  // we assume the token is passed by authorization header
  const refreshToken = await retrieveAccessToken(request.headers.authorization)
  const newToken = await this.githubOAuth2.getAccessTokenFromRefreshToken(refreshToken, {})

  // we save the token again
  await saveAccessToken(newToken)

  reply.send({ access_token: newToken.access_token })
})

// Check access token: https://docs.github.com/en/rest/apps/oauth-applications#check-a-token
fastify.get('/login/github/verifyAccessToken', async function (request, reply) {
  const { accessToken } = request.query

  const result = await fetch('https://api.github.com/applications/<CLIENT_ID>/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from('<CLIENT_ID>' + ':' + '<CLIENT_SECRET').toString(
          'base64'
        )
    },
    body: JSON.stringify({ access_token: accessToken }),
  })

  if (!result.ok) {
    reply.send(new Error('Failed to verify access token'))
    return
  }

  const data = await result.json()
  reply.send(data)
})

fastify.listen({ port: 3000 })
