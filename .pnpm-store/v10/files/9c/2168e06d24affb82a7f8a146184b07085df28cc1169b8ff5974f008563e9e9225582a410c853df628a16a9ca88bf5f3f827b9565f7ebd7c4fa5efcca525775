"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var graphql_exports = {};
__export(graphql_exports, {
  graphql: () => graphql
});
module.exports = __toCommonJS(graphql_exports);
var import_RequestHandler = require("./handlers/RequestHandler");
var import_GraphQLHandler = require("./handlers/GraphQLHandler");
function createScopedGraphQLHandler(operationType, url) {
  return (predicate, resolver, options = {}) => {
    return new import_GraphQLHandler.GraphQLHandler(operationType, predicate, url, resolver, options);
  };
}
function createGraphQLOperationHandler(url) {
  return (resolver, options) => {
    return new import_GraphQLHandler.GraphQLHandler("all", new RegExp(".*"), url, resolver, options);
  };
}
const graphql = {
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
  query: createScopedGraphQLHandler("query", "*"),
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
  mutation: createScopedGraphQLHandler("mutation", "*"),
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
  operation: createGraphQLOperationHandler("*"),
  /**
   * Intercepts GraphQL operations scoped by the given URL.
   *
   * @example
   * const github = graphql.link('https://api.github.com/graphql')
   * github.query('GetRepo', resolver)
   *
   * @see {@link https://mswjs.io/docs/api/graphql#graphqllinkurl `graphql.link()` API reference}
   */
  link(url) {
    return {
      operation: createGraphQLOperationHandler(url),
      query: createScopedGraphQLHandler("query", url),
      mutation: createScopedGraphQLHandler(
        "mutation",
        url
      )
    };
  }
};
//# sourceMappingURL=graphql.js.map