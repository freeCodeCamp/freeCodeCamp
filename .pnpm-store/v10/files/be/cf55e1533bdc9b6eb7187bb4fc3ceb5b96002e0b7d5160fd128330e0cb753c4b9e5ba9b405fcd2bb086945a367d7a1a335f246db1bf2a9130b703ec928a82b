import { f as GraphQLQuery, g as GraphQLVariables, p as GraphQLPredicate, a as ResponseResolver, q as GraphQLResolverExtras, i as GraphQLResponseBody, c as RequestHandlerOptions, G as GraphQLHandler } from './HttpResponse-CxHR1nNN.mjs';
import { Path } from './utils/matching/matchRequestUrl.mjs';
import '@mswjs/interceptors';
import './utils/internal/isIterable.mjs';
import './typeUtils.mjs';
import 'graphql';

type GraphQLRequestHandler = <Query extends GraphQLQuery = GraphQLQuery, Variables extends GraphQLVariables = GraphQLVariables>(predicate: GraphQLPredicate<Query, Variables>, resolver: GraphQLResponseResolver<[
    Query
] extends [never] ? GraphQLQuery : Query, Variables>, options?: RequestHandlerOptions) => GraphQLHandler;
type GraphQLOperationHandler = <Query extends GraphQLQuery = GraphQLQuery, Variables extends GraphQLVariables = GraphQLVariables>(resolver: GraphQLResponseResolver<[
    Query
] extends [never] ? GraphQLQuery : Query, Variables>, options?: RequestHandlerOptions) => GraphQLHandler;
type GraphQLResponseResolver<Query extends GraphQLQuery = GraphQLQuery, Variables extends GraphQLVariables = GraphQLVariables> = ResponseResolver<GraphQLResolverExtras<Variables>, null, GraphQLResponseBody<[Query] extends [never] ? GraphQLQuery : Query>>;
interface GraphQLLinkHandlers {
    query: GraphQLRequestHandler;
    mutation: GraphQLRequestHandler;
    operation: GraphQLOperationHandler;
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
declare const graphql: {
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
    query: GraphQLRequestHandler;
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
    mutation: GraphQLRequestHandler;
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
    operation: GraphQLOperationHandler;
    /**
     * Intercepts GraphQL operations scoped by the given URL.
     *
     * @example
     * const github = graphql.link('https://api.github.com/graphql')
     * github.query('GetRepo', resolver)
     *
     * @see {@link https://mswjs.io/docs/api/graphql#graphqllinkurl `graphql.link()` API reference}
     */
    link(url: Path): GraphQLLinkHandlers;
};

export { type GraphQLLinkHandlers, type GraphQLOperationHandler, type GraphQLRequestHandler, type GraphQLResponseResolver, graphql };
