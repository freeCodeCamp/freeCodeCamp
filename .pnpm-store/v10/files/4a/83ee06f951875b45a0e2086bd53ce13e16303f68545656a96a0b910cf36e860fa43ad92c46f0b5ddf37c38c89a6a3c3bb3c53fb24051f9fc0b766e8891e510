/**
 * @vitest-environment jsdom
 */
import { encodeBuffer } from '@mswjs/interceptors'
import { OperationTypeNode } from 'graphql'
import type { ParsedGraphQLRequest } from './parseGraphQLRequest'
import { parseGraphQLRequest } from './parseGraphQLRequest'

test('returns true given a GraphQL-compatible request', async () => {
  const getRequest = new Request(
    new URL(
      'http://localhost:8080/graphql?query=mutation Login { user { id } }',
    ),
  )
  expect(await parseGraphQLRequest(getRequest)).toEqual<
    ParsedGraphQLRequest<any>
  >({
    operationType: OperationTypeNode.MUTATION,
    operationName: 'Login',
    query: `mutation Login { user { id } }`,
    variables: undefined,
  })

  const postRequest = new Request(new URL('http://localhost:8080/graphql'), {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: encodeBuffer(
      JSON.stringify({
        query: `query GetUser { user { firstName } }`,
      }),
    ),
  })

  expect(await parseGraphQLRequest(postRequest)).toEqual<
    ParsedGraphQLRequest<any>
  >({
    operationType: OperationTypeNode.QUERY,
    operationName: 'GetUser',
    query: `query GetUser { user { firstName } }`,
    variables: undefined,
  })
})

test('throws an exception given an invalid GraphQL request', async () => {
  const getRequest = new Request(
    new URL('http://localhost:8080/graphql?query=mutation Login() { user { {}'),
  )

  await expect(parseGraphQLRequest(getRequest)).rejects.toThrowError(
    '[MSW] Failed to intercept a GraphQL request to "GET http://localhost:8080/graphql": cannot parse query. See the error message from the parser below.',
  )

  const postRequest = new Request(new URL('http://localhost:8080/graphql'), {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: encodeBuffer(
      JSON.stringify({
        query: `query GetUser() { user {{}`,
      }),
    ),
  })

  await expect(parseGraphQLRequest(postRequest)).rejects.toThrowError(
    '[MSW] Failed to intercept a GraphQL request to "POST http://localhost:8080/graphql": cannot parse query. See the error message from the parser below.\n\nSyntax Error: Expected "$", found ")".',
  )
})

test('returns false given a GraphQL-incompatible request', async () => {
  const getRequest = new Request(new URL('http://localhost:8080/graphql'), {
    headers: new Headers({ 'Content-Type': 'application/json' }),
  })
  expect(await parseGraphQLRequest(getRequest)).toBeUndefined()

  const postRequest = new Request(new URL('http://localhost:8080/graphql'), {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: encodeBuffer(
      JSON.stringify({
        queryUser: true,
      }),
    ),
  })
  expect(await parseGraphQLRequest(postRequest)).toBeUndefined()
})

test('does not read the original request body', async () => {
  const request = new Request(new URL('http://localhost/api'), {
    method: 'POST',
    body: JSON.stringify({ payload: 'value' }),
  })

  await parseGraphQLRequest(request)

  // Must not read the original request body because GraphQL parsing
  // is an internal operation that must not lock the body stream.
  expect(request.bodyUsed).toBe(false)
})
