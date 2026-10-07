'use strict'

/**
 * This example assumes the use of the npm package `apple-signin-auth` in your code.
 * This library is not included with fastify-oauth2. If you wish to implement
 * the verification part of Apple's Sign In REST API yourself,
 * look at {@link https://github.com/a-tokyo/apple-signin-auth} to see how they did
 * it, or look at {@link https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api}
 * for more details on how to do it from scratch.
 */

const fastify = require('fastify')({ logger: { level: 'trace' } })
const appleSignin = require('apple-signin-auth')

// const oauthPlugin = require('fastify-oauth2')
const oauthPlugin = require('..')

// All fields below must come from environment variables
const [CLIENT_ID, TEAM_ID, PRIVATE_KEY, KEY_ID] = ['<CLIENT_ID>', '<TEAM_ID>', '<PRIVATE_KEY>', '<KEY_ID>']
// In Apple OAuth2 the CLIENT_SECRET is not static and must be generated
const CLIENT_SECRET = generateClientSecret()

fastify.register(oauthPlugin, {
  name: 'appleOAuth2',
  credentials: {
    client: {
      id: CLIENT_ID,
      secret: CLIENT_SECRET
    },
    auth: oauthPlugin.APPLE_CONFIGURATION,
    options: {
      /**
       * Based on offical Apple OAuth2 docs, an HTTP POST request is sent to the redirectURI for the `form_post` value.
       * And the result of the authorization is stored in the body as application/x-www-form-urlencoded content type.
       * See {@link https://developer.apple.com/documentation/sign_in_with_apple/request_an_authorization_to_the_sign_in_with_apple_server}
       */
      authorizationMethod: 'body'
    }
  },
  startRedirectPath: '/login/apple',
  callbackUri: 'http://localhost:3000/login/apple/callback'
})

fastify.get('/login/apple/callback', function (request, reply) {
  /**
   * NOTE: Apple returns the "user" object only the 1st time the user authorizes the app.
   * For more information, visit https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api/authenticating_users_with_sign_in_with_apple
   */
  const { code, state, error, user } = request.body

  if (user) {
    // Make sure to validate and persist it. All subsequent authorization requests will not contain the user object
  }

  if (!state) {
    // If the endpoint was not redirected from social oauth flow
    throw new Error('Illegal invoking of endpoint.')
  }

  if (error === Error.CancelledAuth) {
    // If a user cancelled authorization process, redirect him back to the app
    const webClientUrl = '<WEB_CLIENT_URL>'
    reply.status(303).redirect(webClientUrl)
  }

  const authCodeFlow = { ...request, query: { code, state } }

  this.appleOAuth2
    .getAccessTokenFromAuthorizationCodeFlow(authCodeFlow, (err, result) => {
      if (err) {
        reply.send(err)
        return
      }

      decryptToken(result.id_token)
        .then(payload => {
          const userAppleId = payload.sub
          reply.send(userAppleId)
        })
        .catch(err => {
          // Token is not verified
          reply.send(err)
        })
    })
})

/**
 * Decrypts Token from Apple and returns decrypted user's info
 *
 * @param { string } token Info received from Apple's Authorization flow on Token request
 * @returns { object } Decrypted user's info
 */
function decryptToken (token) {
  /**
   * NOTE: Data format returned by Apple
   *
   * {
   *   email: 'user_email@abc.com',
   *   iss: 'https://appleid.apple.com'
   *   sub: '10*****************27' // User ID,
   *   email_verified: 'true',
   *   is_private_email: 'false',
   *   ...
   * }
   *
   * PS: All fields can be found here - {@link https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api/authenticating_users_with_sign_in_with_apple}
   */

  return appleSignin.verifyIdToken(token, CLIENT_ID)
}

/**
 * Generates Apple's OAuth2 secret key based on expiration date, Client ID, Team ID, Private key and Key ID.
 * See more {@link https://github.com/a-tokyo/apple-signin-auth} for implementation details.
 *
 * @returns { string } Apple Secret Key
 */
function generateClientSecret () {
  const expiresIn = 180 // in days (6 months) - custom time set based on requirements

  return appleSignin.getClientSecret({
    clientID: CLIENT_ID,
    teamID: TEAM_ID,
    privateKey: PRIVATE_KEY,
    keyIdentifier: KEY_ID,
    expAfter: expiresIn * 24 * 3600 // in seconds
  })
}

fastify.listen({ port: 3000 })
