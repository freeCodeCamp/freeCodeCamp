import type { OperationTypeNode } from 'graphql'
import {
  type ResponseResolver,
  type RequestHandlerOptions,
} from './handlers/RequestHandler'
import {
  GraphQLHandler,
  type GraphQLVariables,
  type GraphQLOperationType,
  type GraphQLResolverExtras,
  type GraphQLResponseBody,
  type GraphQLQuery,
  type GraphQLPredicate,
} from './handlers/GraphQLHandler'
import type { Path } from './utils/matching/matchRequestUrl'

export type GraphQLRequestHandler = <
  Query extends GraphQLQuery = GraphQLQuery,
  Variables extends GraphQLVariables = GraphQLVariables,
>(
  predicate: GraphQLPredicate<Query, Variables>,
  resolver: GraphQLResponseResolver<
    [Query] extends [never] ? GraphQLQuery : Query,
    Variables
  >,
  options?: RequestHandlerOptions,
) => GraphQLHandler

export type GraphQLOperationHandler = <
  Query extends GraphQLQuery = GraphQLQuery,
  Variables extends GraphQLVariables = GraphQLVariables,
>(
  resolver: GraphQLResponseResolver<
    [Query] extends [never] ? GraphQLQuery : Query,
    Variables
  >,
  options?: RequestHandlerOptions,
) => GraphQLHandler

export type GraphQLResponseResolver<
  Query extends GraphQLQuery = GraphQLQuery,
  Variables extends GraphQLVariables = GraphQLVariables,
> = ResponseResolver<
  GraphQLResolverExtras<Variables>,
  null,
  GraphQLResponseBody<[Query] extends [never] ? GraphQLQuery : Query>
>

function createScopedGraphQLHandler(
  operationType: GraphQLOperationType,
  url: Path,
): GraphQLRequestHandler {
  return (predicate, resolver, options = {}) => {
    return new GraphQLHandler(operationType, predicate, url, resolver, options)
  }
}

function createGraphQLOperationHandler(url: Path): GraphQLOperationHandler {
  return (resolver, options) => {
    return new GraphQLHandler('all', new RegExp('.*'), url, resolver, options)
  }
}

export interface GraphQLLinkHandlers {
  query: GraphQLRequestHandler
  mutation: GraphQLRequestHandler
  operation: GraphQLOperationHandler
}

/**
 * A namespace to intercept and mock GraphQL operations
 *
 * @example
 * graphql.query('GetUser', resolver)
 * graphql.mutation('DeletePost', resolver)
 *
 * @see {@link https://mswjs.io/docs/api/graphql `graphql` API reference}
 */
export const graphql = {
  /**
   * Intercepts a GraphQL query by a given name.
   *
   * @example
   * graphql.query('GetUser', () => {
   *   return HttpResponse.json({ data: { user: { name: 'John' } } })
   * })
   *
   * @see {@link https://mswjs.io/docs/api/graphql#graphqlqueryqueryname-resolver `graphql.query()` API reference}
   */
  query: createScopedGraphQLHandler('query' as OperationTypeNode, '*'),

  /**
   * Intercepts a GraphQL mutation by its name.
   *
   * @example
   * graphql.mutation('SavePost', () => {
   *   return HttpResponse.json({ data: { post: { id: 'abc-123 } } })
   * })
   *
   * @see {@link https://mswjs.io/docs/api/graphql#graphqlmutationmutationname-resolver `graphql.query()` API reference}
   *
   */
  mutation: createScopedGraphQLHandler('mutation' as OperationTypeNode, '*'),

  /**
   * Intercepts any GraphQL operation, regardless of its type or name.
   *
   * @example
   * graphql.operation(() => {
   *   return HttpResponse.json({ data: { name: 'John' } })
   * })
   *
   * @see {@link https://mswjs.io/docs/api/graphql#graphqloperationresolver `graphql.operation()` API reference}
   */
  operation: createGraphQLOperationHandler('*'),

  /**
   * Intercepts GraphQL operations scoped by the given URL.
   *
   * @example
   * const github = graphql.link('https://api.github.com/graphql')
   * github.query('GetRepo', resolver)
   *
   * @see {@link https://mswjs.io/docs/api/graphql#graphqllinkurl `graphql.link()` API reference}
   */
  link(url: Path): GraphQLLinkHandlers {
    return {
      operation: createGraphQLOperationHandler(url),
      query: createScopedGraphQLHandler('query' as OperationTypeNode, url),
      mutation: createScopedGraphQLHandler(
        'mutation' as OperationTypeNode,
        url,
      ),
    }
  },
}
