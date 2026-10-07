"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLStreamDirective = exports.GraphQLDeferDirective = void 0;
const graphql_1 = require("graphql");
/**
 * Used to conditionally defer fragments.
 */
exports.GraphQLDeferDirective = new graphql_1.GraphQLDirective({
    name: 'defer',
    description: 'Directs the executor to defer this fragment when the `if` argument is true or undefined.',
    locations: [graphql_1.DirectiveLocation.FRAGMENT_SPREAD, graphql_1.DirectiveLocation.INLINE_FRAGMENT],
    args: {
        if: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
            description: 'Deferred when true or undefined.',
            defaultValue: true,
        },
        label: {
            type: graphql_1.GraphQLString,
            description: 'Unique name',
        },
    },
});
/**
 * Used to conditionally stream list fields.
 */
exports.GraphQLStreamDirective = new graphql_1.GraphQLDirective({
    name: 'stream',
    description: 'Directs the executor to stream plural fields when the `if` argument is true or undefined.',
    locations: [graphql_1.DirectiveLocation.FIELD],
    args: {
        if: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
            description: 'Stream when true or undefined.',
            defaultValue: true,
        },
        label: {
            type: graphql_1.GraphQLString,
            description: 'Unique name',
        },
        initialCount: {
            defaultValue: 0,
            type: graphql_1.GraphQLInt,
            description: 'Number of items to return immediately',
        },
    },
});
