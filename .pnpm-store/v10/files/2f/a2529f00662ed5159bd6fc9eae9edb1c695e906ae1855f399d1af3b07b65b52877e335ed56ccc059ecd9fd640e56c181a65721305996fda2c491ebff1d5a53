'use strict'

const fastify = require('fastify')({ logger: { level: 'trace' } })

const cookieOpts = {
  path: '/',
  secure: true,
  sameSite: 'lax',
  httpOnly: true
}

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

fastify.register(require('@fastify/cookie'), {
  secret: ['my-secret'],
  parseOptions: cookieOpts
})

fastify.register(oauthPlugin, {
  name: 'googleOAuth2',
  // when provided, this userAgent will also be used at discovery endpoint
  // to fully omit for whatever reason, set it to false
  userAgent: 'my custom app (v1.0.0)',
  scope: ['openid', 'profile', 'email'],
  credentials: {
    client: {
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    }
  },
  startRedirectPath: '/login/google',
  callbackUri: 'http://localhost:3000/interaction/callback/google',
  cookie: cookieOpts,
  discovery: {
    issuer: 'https://accounts.google.com'
  }
})

// using async/await (promises API) ->
// 1. simple one with async
fastify.get('/interaction/callback/google', async function (request, reply) {
  const tokenResponse = await this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, reply)
  const userinfo = await this.googleOAuth2.userinfo(tokenResponse.token /* or tokenResponse.token.access_token */)
  return userinfo
})

// 2. custom params one with async
// fastify.get('/interaction/callback/google', { method: 'GET', params: { /* custom parameters to be added */ } }, async function (request, reply) {
//   const tokenResponse = await this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, reply)
//   const userinfo = await this.googleOAuth2.userinfo(tokenResponse.token /* or tokenResponse.token.access_token */)
//   return userinfo
// })

// OR with a callback API

// 3. simple one with callback
// fastify.get('/interaction/callback/google', function (request, reply) {
//   const userInfoCallback = (err, userinfo) => {
//     if (err) {
//       reply.send(err)
//       return
//     }
//     reply.send(userinfo)
//   }

//   const accessTokenCallback = (err, result) => {
//     if (err) {
//       reply.send(err)
//       return
//     }
//     this.googleOAuth2.userinfo(result.token, userInfoCallback)
//   }

//   this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, reply, accessTokenCallback)
// })

// 4. custom params one with with callback
// fastify.get('/interaction/callback/google', { method: 'GET', params: { /** custom parameters to be added */ } }, function (request, reply) {
//   const userInfoCallback = (err, userinfo) => {
//     if (err) {
//       reply.send(err)
//       return
//     }
//     reply.send(userinfo)
//   }

//   const accessTokenCallback = (err, result) => {
//     if (err) {
//       reply.send(err)
//       return
//     }
//     this.googleOAuth2.userinfo(result.token, userInfoCallback)
//   }

//   this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, reply, accessTokenCallback)
// })

fastify.listen({ port: 3000 })
fastify.log.info('go to http://localhost:3000/login/google')
