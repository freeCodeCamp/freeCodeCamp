import { OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { expectAssignable } from 'tsd'

expectAssignable<OpenAPIV3.Document>({
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Test OpenApiv3 specification',
  },
  components: {
    securitySchemes: {
      myAuth: {
        type: 'oauth2',
        'x-tokenName': 'id_token',
        flows: {
          implicit: {
            authorizationUrl: 'http.../login/oauth/authorize',
            scopes: {},
          },
        },
      },
    }
  },
  paths: {}
})

expectAssignable<OpenAPIV2.Document>({
  swagger: '2.0.0',
  info: {
    title: 'Test OpenApiv2 specification',
    version: '2.0.0'
  },
  securityDefinitions: {
    OAuth2AccessCodeFlow: {
      type: 'oauth2',
      flow: 'accessCode',
      authorizationUrl: 'https://example.com/oauth/authorize',
      tokenUrl: 'https://example.com/oauth/token',
      'x-tokenName': 'id_token',
      scopes: { }
    },
    OAuth2ApplicationFlow: {
      type: 'oauth2',
      flow: 'application',
      tokenUrl: 'https://example.com/oauth/token',
      'x-tokenName': 'id_token',
      scopes: { }
    },
    OAuth2ImplicitFlow: {
      type: 'oauth2',
      flow: 'implicit',
      authorizationUrl: 'https://example.com/oauth/authorize',
      'x-tokenName': 'id_token',
      scopes: { }
    },
    OAuth2PasswordFlow: {
      type: 'oauth2',
      flow: 'password',
      tokenUrl: 'https://example.com/oauth/token',
      'x-tokenName': 'id_token',
      scopes: { }
    },
  },
  paths: {}
})

expectAssignable<OpenAPIV2.Document>({
  swagger: '2.0.0',
  info: {
    title: 'Test OpenApiv2 specification',
    version: '2.0.0'
  },
  paths: {
    '/users/{userId}': {
      get: {
        summary: 'Gets a user by ID.',
        responses: {
        },
        parameters: [
          {
            in: 'path',
            name: 'userId',
            type: 'integer',
            required: true,
            description: 'Numeric ID of the user to get.',
            'x-example': 'BADC0FFEE'
          },
          {
            in: 'query',
            name: 'offset',
            type: 'integer',
            description: 'The number of items to skip before starting to collect the result set.',
            'x-example': 1337
          },
          {
            in: 'header',
            name: 'X-Request-ID',
            type: 'string',
            required: true,
            'x-example': 'wget'
          },
          {
            in: 'formData',
            name: 'name',
            type: 'string',
            description: "A person's name.",
            'x-example': 'John Doe'
          }
        ]
      }
    }
  }
})
