import fastify, { FastifyInstance } from 'fastify'
import { expectAssignable, expectError, expectNotAssignable, expectType } from 'tsd'
import fastifyOauth2, {
  FastifyOAuth2Options,
  Credentials,
  OAuth2Namespace,
  OAuth2Token,
  ProviderConfiguration,
  UserInfoExtraOptions
} from '..'
import type { ModuleOptions } from 'simple-oauth2'

/**
 * Preparing some data for testing.
 */
const auth = fastifyOauth2.GOOGLE_CONFIGURATION
const scope = ['r_emailaddress', 'r_basicprofile']
const tags = ['oauth2', 'oauth']
const credentials: Credentials = {
  client: {
    id: 'test_id',
    secret: 'test_secret',
  },
  auth,
}

const simpleOauth2Options: ModuleOptions = {
  client: {
    id: 'test_id',
    secret: 'test_secret',
  },
  auth,
}

const OAuth2NoneOptional: FastifyOAuth2Options = {
  name: 'testOAuthName',
  credentials,
  callbackUri: 'http://localhost/testOauth/callback'
}

const OAuth2Options: FastifyOAuth2Options = {
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  callbackUriParams: {},
  generateStateFunction: function () {
    expectType<FastifyInstance>(this)
    return 'test'
  },
  checkStateFunction: function () {
    expectType<FastifyInstance>(this)
    return true
  },
  startRedirectPath: '/login/testOauth',
  cookie: {
    secure: true,
    sameSite: 'none'
  },
  redirectStateCookieName: 'redirect-state-cookie',
  verifierCookieName: 'verifier-cookie',
}

expectAssignable<FastifyOAuth2Options>({
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  callbackUriParams: {},
  startRedirectPath: '/login/testOauth',
  pkce: 'S256'
})

expectAssignable<FastifyOAuth2Options>({
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: req => `${req.protocol}://${req.hostname}/callback`,
  callbackUriParams: {},
  startRedirectPath: '/login/testOauth',
  pkce: 'S256'
})

expectAssignable<FastifyOAuth2Options>({
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  callbackUriParams: {},
  startRedirectPath: '/login/testOauth',
  discovery: { issuer: 'https://idp.mycompany.com' }
})

expectNotAssignable<FastifyOAuth2Options>({
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  callbackUriParams: {},
  startRedirectPath: '/login/testOauth',
  discovery: { issuer: 1 }
})

expectAssignable<FastifyOAuth2Options>({
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  callbackUriParams: {},
  startRedirectPath: '/login/testOauth',
  pkce: 'plain'
})

expectNotAssignable<FastifyOAuth2Options>({
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  callbackUriParams: {},
  generateStateFunction: () => {
  },
  checkStateFunction: () => {
  },
  startRedirectPath: '/login/testOauth',
  pkce: 'SOMETHING'
})

const server = fastify()

server.register(fastifyOauth2, OAuth2NoneOptional)
server.register(fastifyOauth2, OAuth2Options)

server.register(fastifyOauth2, {
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  checkStateFunction: () => true,
})

expectError(server.register(fastifyOauth2, {
  name: 'testOAuthName',
  scope,
  credentials,
  callbackUri: 'http://localhost/testOauth/callback',
  checkStateFunction: () => true,
  startRedirectPath: 2,
}))

declare module 'fastify' {
  // Developers need to define this in their code like they have to do with all decorators.
  interface FastifyInstance {
    testOAuthName: OAuth2Namespace;
  }
}

/**
 * Actual testing.
 */
expectType<ProviderConfiguration>(auth)
expectType<string[]>(scope)
expectType<string[]>(tags)
expectType<Credentials>(credentials)

// Ensure duplicayed simple-oauth2 are compatible with simple-oauth2
expectAssignable<ModuleOptions<string>>({ auth: { tokenHost: '' }, ...credentials })
expectAssignable<ModuleOptions['auth']>(auth)
// Ensure published types of simple-oauth2 are accepted
expectAssignable<Credentials>(simpleOauth2Options)
expectAssignable<ProviderConfiguration>(simpleOauth2Options.auth)

expectError(fastifyOauth2()) // error because missing required arguments
expectError(fastifyOauth2(server, {}, () => {
})) // error because missing required options

expectAssignable<ProviderConfiguration>(fastifyOauth2.DISCORD_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.FACEBOOK_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.GITHUB_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.GITLAB_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.GOOGLE_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.LINKEDIN_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.MICROSOFT_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.SPOTIFY_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.VKONTAKTE_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.TWITCH_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.VATSIM_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.VATSIM_DEV_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.EPIC_GAMES_CONFIGURATION)
expectAssignable<ProviderConfiguration>(fastifyOauth2.YANDEX_CONFIGURATION)

server.get('/testOauth/callback', async (request, reply) => {
  expectType<OAuth2Namespace>(server.testOAuthName)
  expectType<OAuth2Namespace | undefined>(server.oauth2TestOAuthName)

  expectType<OAuth2Token>(await server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request))
  expectType<Promise<OAuth2Token>>(server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request))

  expectType<OAuth2Token>(await server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request, reply))
  expectType<Promise<OAuth2Token>>(server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request, reply))
  expectType<void>(
    server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request, (_err: any, _t: OAuth2Token): void => {
    })
  )
  expectType<void>(
    server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request, reply, (_err: any, _t: OAuth2Token): void => {
    })
  )
  // error because Promise should not return void
  expectError<void>(await server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request))
  // error because non-Promise function call should return void and have a callback argument
  expectError<OAuth2Token>(
    server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request, (_err: any, _t: OAuth2Token): void => {
    })
  )

  // error because function call does not pass a callback as second argument.
  expectError<void>(server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request))

  const token = await server.testOAuthName.getAccessTokenFromAuthorizationCodeFlow(request)
  if (token.token.refresh_token) {
    expectType<OAuth2Token>(
      await server.testOAuthName.getNewAccessTokenUsingRefreshToken(token.token, {})
    )
    expectType<Promise<OAuth2Token>>(
      server.testOAuthName.getNewAccessTokenUsingRefreshToken(token.token, {})
    )
    expectType<void>(
      server.testOAuthName.getNewAccessTokenUsingRefreshToken(
        token.token,
        {},
        (_err: any, _t: OAuth2Token): void => {
        }
      )
    )
    // Expect error because Promise should not return void
    expectError<void>(server.testOAuthName.revokeToken(token.token, 'access_token', undefined))
    // Correct way
    expectType<Promise<void>>(server.testOAuthName.revokeToken(token.token, 'access_token', undefined))
    // Expect error because invalid Type test isn't an access_token or refresh_token
    expectError<Promise<void>>(server.testOAuthName.revokeToken(token.token, 'test', undefined))
    // Correct way
    expectType<void>(
      server.testOAuthName.revokeToken(token.token, 'refresh_token', undefined, (_err: any): void => {
      })
    )
    // Expect error because invalid Type test isn't an access_token or refresh_token
    expectError<void>(
      server.testOAuthName.revokeToken(token.token, 'test', undefined, (_err: any): void => {
      })
    )
    // Expect error because invalid Type test isn't an access_token or refresh_token
    expectError<void>(
      server.testOAuthName.revokeToken(token.token, 'access_token', undefined, undefined)
    )

    // Expect error because Promise should not return void
    expectError<void>(server.testOAuthName.revokeAllToken(token.token, undefined))
    // Correct way
    expectType<Promise<void>>(server.testOAuthName.revokeAllToken(token.token, undefined))
    // Correct way too
    expectType<void>(server.testOAuthName.revokeAllToken(token.token, undefined, (_err: any): void => {
    }))
    // Invalid content
    expectError<void>(server.testOAuthName.revokeAllToken(token.token, undefined, undefined))
    // error because Promise should not return void
    expectError<void>(await server.testOAuthName.getNewAccessTokenUsingRefreshToken(token.token, {}))
    // error because non-Promise function call should return void and have a callback argument
    expectError<OAuth2Token>(
      server.testOAuthName.getNewAccessTokenUsingRefreshToken(
        token.token,
        {},
        (_err: any, _t: OAuth2Token): void => {
        }
      )
    )
    // error because function call does not pass a callback as second argument.
    expectError<void>(server.testOAuthName.getNewAccessTokenUsingRefreshToken(token.token, {}))
  }

  expectType<Promise<string>>(server.testOAuthName.generateAuthorizationUri(request, reply))
  expectType<void>(server.testOAuthName.generateAuthorizationUri(request, reply, (_err) => {}))
  // BEGIN userinfo tests
  expectType<Promise<Object>>(server.testOAuthName.userinfo(token.token))
  expectType<Promise<Object>>(server.testOAuthName.userinfo(token.token.access_token))
  expectType<Object>(await server.testOAuthName.userinfo(token.token.access_token))
  expectType<void>(server.testOAuthName.userinfo(token.token.access_token, () => {}))
  expectType<void>(server.testOAuthName.userinfo(token.token.access_token, undefined, () => {}))
  expectAssignable<UserInfoExtraOptions>({ method: 'GET', params: {}, via: 'header' })
  expectAssignable<UserInfoExtraOptions>({ method: 'POST', params: { a: 1 }, via: 'header' })
  expectAssignable<UserInfoExtraOptions>({ via: 'body' })
  expectNotAssignable<UserInfoExtraOptions>({ via: 'donkey' })
  expectNotAssignable<UserInfoExtraOptions>({ something: 1 })
  // END userinfo tests

  expectType<string>(await server.testOAuthName.generateAuthorizationUri(request, reply))
  // error because missing reply argument
  expectError<string>(server.testOAuthName.generateAuthorizationUri(request))

  return {
    access_token: token.token.access_token,
  }
})
