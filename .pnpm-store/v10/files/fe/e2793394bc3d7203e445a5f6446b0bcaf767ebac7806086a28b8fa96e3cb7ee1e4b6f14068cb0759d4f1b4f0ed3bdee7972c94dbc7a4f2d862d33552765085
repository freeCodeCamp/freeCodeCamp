"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExecutableSchema = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("@graphql-tools/utils");
const addResolversToSchema_js_1 = require("./addResolversToSchema.js");
const assertResolversPresent_js_1 = require("./assertResolversPresent.js");
const merge_1 = require("@graphql-tools/merge");
/**
 * Builds a schema from the provided type definitions and resolvers.
 *
 * The type definitions are written using Schema Definition Language (SDL). They
 * can be provided as a string, a `DocumentNode`, a function, or an array of any
 * of these. If a function is provided, it will be passed no arguments and
 * should return an array of strings or `DocumentNode`s.
 *
 * Note: You can use GraphQL magic comment provide additional syntax
 * highlighting in your editor (with the appropriate editor plugin).
 *
 * ```js
 * const typeDefs = /* GraphQL *\/ `
 *   type Query {
 *     posts: [Post]
 *     author(id: Int!): Author
 *   }
 * `;
 * ```
 *
 * The `resolvers` object should be a map of type names to nested object, which
 * themselves map the type's fields to their appropriate resolvers.
 * See the [Resolvers](/docs/resolvers) section of the documentation for more details.
 *
 * ```js
 * const resolvers = {
 *   Query: {
 *     posts: (obj, args, ctx, info) => getAllPosts(),
 *     author: (obj, args, ctx, info) => getAuthorById(args.id)
 *   }
 * };
 * ```
 *
 * Once you've defined both the `typeDefs` and `resolvers`, you can create your
 * schema:
 *
 * ```js
 * const schema = makeExecutableSchema({
 *   typeDefs,
 *   resolvers,
 * })
 * ```
 */
function makeExecutableSchema({ typeDefs, resolvers = {}, resolverValidationOptions = {}, inheritResolversFromInterfaces = false, updateResolversInPlace = false, schemaExtensions, ...otherOptions }) {
    // Validate and clean up arguments
    if (typeof resolverValidationOptions !== 'object') {
        throw new Error('Expected `resolverValidationOptions` to be an object');
    }
    if (!typeDefs) {
        throw new Error('Must provide typeDefs');
    }
    let schema;
    if ((0, graphql_1.isSchema)(typeDefs)) {
        schema = typeDefs;
    }
    else if (otherOptions === null || otherOptions === void 0 ? void 0 : otherOptions.commentDescriptions) {
        const mergedTypeDefs = (0, merge_1.mergeTypeDefs)(typeDefs, {
            ...otherOptions,
            commentDescriptions: true,
        });
        schema = (0, graphql_1.buildSchema)(mergedTypeDefs, otherOptions);
    }
    else {
        const mergedTypeDefs = (0, merge_1.mergeTypeDefs)(typeDefs, otherOptions);
        schema = (0, graphql_1.buildASTSchema)(mergedTypeDefs, otherOptions);
    }
    // We allow passing in an array of resolver maps, in which case we merge them
    schema = (0, addResolversToSchema_js_1.addResolversToSchema)({
        schema,
        resolvers: (0, merge_1.mergeResolvers)(resolvers),
        resolverValidationOptions,
        inheritResolversFromInterfaces,
        updateResolversInPlace,
    });
    if (Object.keys(resolverValidationOptions).length > 0) {
        (0, assertResolversPresent_js_1.assertResolversPresent)(schema, resolverValidationOptions);
    }
    if (schemaExtensions) {
        schemaExtensions = (0, merge_1.mergeExtensions)((0, utils_1.asArray)(schemaExtensions));
        (0, merge_1.applyExtensions)(schema, schemaExtensions);
    }
    return schema;
}
exports.makeExecutableSchema = makeExecutableSchema;
