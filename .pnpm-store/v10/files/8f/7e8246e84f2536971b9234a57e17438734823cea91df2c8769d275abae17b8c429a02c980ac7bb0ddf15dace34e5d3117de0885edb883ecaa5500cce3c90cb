// @vitest-environment jsdom
import { createRequestId, encodeBuffer } from '@mswjs/interceptors'
import { OperationTypeNode, parse } from 'graphql'
import type {
  GraphQLRequestBody,
  GraphQLResolverExtras,
} from './GraphQLHandler'
import { GraphQLHandler, isDocumentNode } from './GraphQLHandler'
import { HttpResponse } from '../HttpResponse'
import type { ResponseResolver } from './RequestHandler'

const resolver: ResponseResolver<GraphQLResolverExtras<{ userId: string }>> = ({
  variables,
}) => {
  return HttpResponse.json({
    data: {
      user: {
        id: variables.userId,
      },
    },
  })
}

function createGetGraphQLRequest(
  body: GraphQLRequestBody<any>,
  graphqlEndpoint = 'https://example.com',
) {
  const requestUrl = new URL(graphqlEndpoint)
  requestUrl.searchParams.set('query', body?.query)
  requestUrl.searchParams.set('variables', JSON.stringify(body?.variables))
  return new Request(requestUrl)
}

function createPostGraphQLRequest(
  body: GraphQLRequestBody<any>,
  graphqlEndpoint = 'https://example.com',
) {
  return new Request(new URL(graphqlEndpoint), {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: encodeBuffer(JSON.stringify(body)),
  })
}

const GET_USER = `
  query GetUser {
    user {
      id
    }
  }
`

const LOGIN = `
  mutation Login {
    user {
      id
    }
  }
`

describe('info', () => {
  it('exposes request handler information for query', () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      '*',
      resolver,
    )

    expect(handler.info.header).toEqual('query GetUser (origin: *)')
    expect(handler.info.operationType).toEqual('query')
    expect(handler.info.operationName).toEqual('GetUser')
  })

  it('exposes request handler information for mutation', () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.MUTATION,
      'Login',
      '*',
      resolver,
    )

    expect(handler.info.header).toEqual('mutation Login (origin: *)')
    expect(handler.info.operationType).toEqual('mutation')
    expect(handler.info.operationName).toEqual('Login')
  })

  it('parses a query operation name from a given DocumentNode', () => {
    const node = parse(`
      query GetUser {
        user {
          firstName
        }
      }
    `)

    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      node,
      '*',
      resolver,
    )

    expect(handler.info).toHaveProperty('header', 'query GetUser (origin: *)')
    expect(handler.info).toHaveProperty('operationType', 'query')
    expect(handler.info).toHaveProperty('operationName', 'GetUser')
  })

  it('parses a mutation operation name from a given DocumentNode', () => {
    const node = parse(`
      mutation Login {
        user {
          id
        }
      }
    `)
    const handler = new GraphQLHandler(
      OperationTypeNode.MUTATION,
      node,
      '*',
      resolver,
    )

    expect(handler.info).toHaveProperty('header', 'mutation Login (origin: *)')
    expect(handler.info).toHaveProperty('operationType', 'mutation')
    expect(handler.info).toHaveProperty('operationName', 'Login')
  })

  it('throws an exception given a DocumentNode with a mismatched operation type', () => {
    const node = parse(`
      mutation CreateUser {
        user {
          firstName
        }
      }
    `)

    expect(
      () => new GraphQLHandler(OperationTypeNode.QUERY, node, '*', resolver),
    ).toThrow(
      'Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "query" but got "mutation").',
    )
  })
})

describe('parse', () => {
  describe('query', () => {
    it('parses a query without variables (GET)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.QUERY,
        'GetUser',
        '*',
        resolver,
      )
      const request = createGetGraphQLRequest({
        query: GET_USER,
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'query',
        operationName: 'GetUser',
        query: GET_USER,
        variables: undefined,
      })
    })

    it('parses a query with variables (GET)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.QUERY,
        'GetUser',
        '*',
        resolver,
      )
      const request = createGetGraphQLRequest({
        query: GET_USER,
        variables: {
          userId: 'abc-123',
        },
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'query',
        operationName: 'GetUser',
        query: GET_USER,
        variables: {
          userId: 'abc-123',
        },
      })
    })

    it('parses a query without variables (POST)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.QUERY,
        'GetUser',
        '*',
        resolver,
      )
      const request = createPostGraphQLRequest({
        query: GET_USER,
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'query',
        operationName: 'GetUser',
        query: GET_USER,
        variables: undefined,
      })
    })

    it('parses a query with variables (POST)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.QUERY,
        'GetUser',
        '*',
        resolver,
      )
      const request = createPostGraphQLRequest({
        query: GET_USER,
        variables: {
          userId: 'abc-123',
        },
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'query',
        operationName: 'GetUser',
        query: GET_USER,
        variables: {
          userId: 'abc-123',
        },
      })
    })
  })

  describe('mutation', () => {
    it('parses a mutation without variables (GET)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.MUTATION,
        'GetUser',
        '*',
        resolver,
      )
      const request = createGetGraphQLRequest({
        query: LOGIN,
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'mutation',
        operationName: 'Login',
        query: LOGIN,
        variables: undefined,
      })
    })

    it('parses a mutation with variables (GET)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.MUTATION,
        'GetUser',
        '*',
        resolver,
      )
      const request = createGetGraphQLRequest({
        query: LOGIN,
        variables: {
          userId: 'abc-123',
        },
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'mutation',
        operationName: 'Login',
        query: LOGIN,
        variables: {
          userId: 'abc-123',
        },
      })
    })

    it('parses a mutation without variables (POST)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.MUTATION,
        'GetUser',
        '*',
        resolver,
      )
      const request = createPostGraphQLRequest({
        query: LOGIN,
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'mutation',
        operationName: 'Login',
        query: LOGIN,
        variables: undefined,
      })
    })

    it('parses a mutation with variables (POST)', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.MUTATION,
        'GetUser',
        '*',
        resolver,
      )
      const request = createPostGraphQLRequest({
        query: LOGIN,
        variables: {
          userId: 'abc-123',
        },
      })

      expect(await handler.parse({ request })).toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {
            '0': 'https://example.com/',
          },
        },
        operationType: 'mutation',
        operationName: 'Login',
        query: LOGIN,
        variables: {
          userId: 'abc-123',
        },
      })
    })
  })

  describe('with endpoint configuration', () => {
    it('parses the request and parses grapqhl properties from it when the graphql.link endpoint matches', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.QUERY,
        'GetUser',
        'https://mswjs.com/graphql',
        resolver,
      )

      await expect(
        handler.parse({
          request: createGetGraphQLRequest(
            {
              query: GET_USER,
              variables: {
                userId: 'abc-123',
              },
            },
            'https://mswjs.com/graphql',
          ),
        }),
      ).resolves.toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {},
        },
        operationType: 'query',
        operationName: 'GetUser',
        query: GET_USER,
        variables: {
          userId: 'abc-123',
        },
      })

      await expect(
        handler.parse({
          request: createPostGraphQLRequest(
            {
              query: GET_USER,
              variables: {
                userId: 'abc-123',
              },
            },
            'https://mswjs.com/graphql',
          ),
        }),
      ).resolves.toEqual({
        cookies: {},
        match: {
          matches: true,
          params: {},
        },
        operationType: 'query',
        operationName: 'GetUser',
        query: GET_USER,
        variables: {
          userId: 'abc-123',
        },
      })
    })

    it('parses a request but does not parse graphql properties from it graphql.link hostname does not match', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.QUERY,
        'GetUser',
        'https://mswjs.com/graphql',
        resolver,
      )

      await expect(
        handler.parse({
          request: createGetGraphQLRequest(
            {
              query: GET_USER,
              variables: {
                userId: 'abc-123',
              },
            },
            'https://example.com/graphql',
          ),
        }),
      ).resolves.toEqual({
        cookies: {},
        match: {
          matches: false,
          params: {},
        },
      })

      await expect(
        handler.parse({
          request: createPostGraphQLRequest(
            {
              query: GET_USER,
              variables: {
                userId: 'abc-123',
              },
            },
            'https://example.com/graphql',
          ),
        }),
      ).resolves.toEqual({
        cookies: {},
        match: {
          matches: false,
          params: {},
        },
      })
    })

    it('parses a request but does not parse graphql properties from it graphql.link pathname does not match', async () => {
      const handler = new GraphQLHandler(
        OperationTypeNode.QUERY,
        'GetUser',
        'https://mswjs.com/graphql',
        resolver,
      )

      await expect(
        handler.parse({
          request: createGetGraphQLRequest(
            {
              query: GET_USER,
              variables: {
                userId: 'abc-123',
              },
            },
            'https://mswjs.com/some/other/endpoint',
          ),
        }),
      ).resolves.toEqual({
        cookies: {},
        match: {
          matches: false,
          params: {},
        },
      })

      await expect(
        handler.parse({
          request: createPostGraphQLRequest(
            {
              query: GET_USER,
              variables: {
                userId: 'abc-123',
              },
            },
            'https://mswjs.com/some/other/endpoint',
          ),
        }),
      ).resolves.toEqual({
        cookies: {},
        match: {
          matches: false,
          params: {},
        },
      })
    })
  })
})

describe('predicate', () => {
  it('respects operation type', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      '*',
      resolver,
    )
    const request = createPostGraphQLRequest({
      query: GET_USER,
    })
    const alienRequest = createPostGraphQLRequest({
      query: LOGIN,
    })

    expect(
      await handler.predicate({
        request,
        parsedResult: await handler.parse({ request }),
      }),
    ).toBe(true)
    expect(
      await handler.predicate({
        request: alienRequest,
        parsedResult: await handler.parse({ request: alienRequest }),
      }),
    ).toBe(false)
  })

  it('respects operation name', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      '*',
      resolver,
    )
    const request = createPostGraphQLRequest({
      query: GET_USER,
    })
    const alienRequest = createPostGraphQLRequest({
      query: `
          query GetAllUsers {
            user {
              id
            }
          }
        `,
    })

    await expect(
      handler.predicate({
        request,
        parsedResult: await handler.parse({ request }),
      }),
    ).resolves.toBe(true)
    await expect(
      handler.predicate({
        request: alienRequest,
        parsedResult: await handler.parse({ request: alienRequest }),
      }),
    ).resolves.toBe(false)
  })

  it('allows anonymous GraphQL operations when using "all" expected operation type', async () => {
    const handler = new GraphQLHandler('all', new RegExp('.*'), '*', resolver)
    const request = createPostGraphQLRequest({
      query: `
        query {
          anonymousQuery {
            query
            variables
          }
        }
      `,
    })

    await expect(
      handler.predicate({
        request,
        parsedResult: await handler.parse({ request }),
      }),
    ).resolves.toBe(true)
  })

  it('respects custom endpoint', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      'https://api.github.com/graphql',
      resolver,
    )
    const request = createPostGraphQLRequest(
      {
        query: GET_USER,
      },
      'https://api.github.com/graphql',
    )
    const alienRequest = createPostGraphQLRequest({
      query: GET_USER,
    })

    await expect(
      handler.predicate({
        request,
        parsedResult: await handler.parse({ request }),
      }),
    ).resolves.toBe(true)
    await expect(
      handler.predicate({
        request: alienRequest,
        parsedResult: await handler.parse({ request: alienRequest }),
      }),
    ).resolves.toBe(false)
  })

  it('supports custom predicate function', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      ({ query }) => {
        return query.includes('password')
      },
      /.+/,
      resolver,
    )

    {
      const request = createPostGraphQLRequest({
        query: `query GetUser { user { password } }`,
      })

      await expect(
        handler.predicate({
          request,
          parsedResult: await handler.parse({ request }),
        }),
      ).resolves.toBe(true)
    }

    {
      const request = createPostGraphQLRequest({
        query: `query GetUser { user { nonMatching } }`,
      })

      await expect(
        handler.predicate({
          request,
          parsedResult: await handler.parse({ request }),
        }),
      ).resolves.toBe(false)
    }
  })
})

describe('test', () => {
  it('respects operation type', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      '*',
      resolver,
    )
    const request = createPostGraphQLRequest({
      query: GET_USER,
    })
    const alienRequest = createPostGraphQLRequest({
      query: LOGIN,
    })

    expect(await handler.test({ request })).toBe(true)
    expect(await handler.test({ request: alienRequest })).toBe(false)
  })

  it('respects operation name', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      '*',
      resolver,
    )
    const request = createPostGraphQLRequest({
      query: GET_USER,
    })
    const alienRequest = createPostGraphQLRequest({
      query: `
          query GetAllUsers {
            user {
              id
            }
          }
        `,
    })

    await expect(handler.test({ request })).resolves.toBe(true)
    await expect(handler.test({ request: alienRequest })).resolves.toBe(false)
  })

  it('respects custom endpoint', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      'https://api.github.com/graphql',
      resolver,
    )
    const request = createPostGraphQLRequest(
      {
        query: GET_USER,
      },
      'https://api.github.com/graphql',
    )
    const alienRequest = createPostGraphQLRequest({
      query: GET_USER,
    })

    await expect(handler.test({ request })).resolves.toBe(true)
    await expect(handler.test({ request: alienRequest })).resolves.toBe(false)
  })
})

describe('run', () => {
  it('returns a mocked response given a matching query', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      '*',
      resolver,
    )
    const request = createPostGraphQLRequest({
      query: GET_USER,
      variables: {
        userId: 'abc-123',
      },
    })
    const requestId = createRequestId()
    const result = await handler.run({ request, requestId })

    expect(result!.handler).toEqual(handler)
    expect(result!.parsedResult).toEqual({
      cookies: {},
      match: {
        matches: true,
        params: {
          '0': 'https://example.com/',
        },
      },
      operationType: 'query',
      operationName: 'GetUser',
      query: GET_USER,
      variables: {
        userId: 'abc-123',
      },
    })
    expect(result!.request.method).toBe('POST')
    expect(result!.request.url).toBe('https://example.com/')
    await expect(result!.request.json()).resolves.toEqual({
      query: GET_USER,
      variables: { userId: 'abc-123' },
    })
    expect(result!.response?.status).toBe(200)
    expect(result!.response?.statusText).toBe('OK')
    await expect(result!.response?.json()).resolves.toEqual({
      data: { user: { id: 'abc-123' } },
    })
  })

  it('returns null given a non-matching query', async () => {
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      'GetUser',
      '*',
      resolver,
    )
    const request = createPostGraphQLRequest({
      query: LOGIN,
    })
    const requestId = createRequestId()
    const result = await handler.run({ request, requestId })

    expect(result).toBeNull()
  })
})

describe('isDocumentNode', () => {
  it('returns true given a valid DocumentNode', () => {
    const node = parse(`
      query GetUser {
        user {
          login
        }
      }
    `)

    expect(isDocumentNode(node)).toEqual(true)
  })

  it('returns false given an arbitrary input', () => {
    expect(isDocumentNode(null)).toEqual(false)
    expect(isDocumentNode(undefined)).toEqual(false)
    expect(isDocumentNode('')).toEqual(false)
    expect(isDocumentNode('value')).toEqual(false)
    expect(isDocumentNode(/value/)).toEqual(false)
  })
})

describe('request', () => {
  it('has parsed operationName', async () => {
    const matchAllResolver = vi.fn()
    const handler = new GraphQLHandler(
      OperationTypeNode.QUERY,
      /.*/,
      '*',
      matchAllResolver,
    )
    const request = createPostGraphQLRequest({
      query: `
        query GetAllUsers {
          user {
            id
          }
        }
      `,
    })

    const requestId = createRequestId()
    await handler.run({ request, requestId })

    expect(matchAllResolver).toHaveBeenCalledTimes(1)
    expect(matchAllResolver.mock.calls[0][0]).toHaveProperty(
      'operationName',
      'GetAllUsers',
    )
  })
})
