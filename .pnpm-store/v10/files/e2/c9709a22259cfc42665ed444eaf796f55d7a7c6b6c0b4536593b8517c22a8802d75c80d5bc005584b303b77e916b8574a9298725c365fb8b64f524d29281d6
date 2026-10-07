import { DirectiveLocation, GraphQLBoolean, GraphQLDirective, GraphQLInt, GraphQLNonNull, GraphQLString, } from 'graphql';
/**
 * Used to conditionally defer fragments.
 */
export const GraphQLDeferDirective = new GraphQLDirective({
    name: 'defer',
    description: 'Directs the executor to defer this fragment when the `if` argument is true or undefined.',
    locations: [DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
    args: {
        if: {
            type: new GraphQLNonNull(GraphQLBoolean),
            description: 'Deferred when true or undefined.',
            defaultValue: true,
        },
        label: {
            type: GraphQLString,
            description: 'Unique name',
        },
    },
});
/**
 * Used to conditionally stream list fields.
 */
export const GraphQLStreamDirective = new GraphQLDirective({
    name: 'stream',
    description: 'Directs the executor to stream plural fields when the `if` argument is true or undefined.',
    locations: [DirectiveLocation.FIELD],
    args: {
        if: {
            type: new GraphQLNonNull(GraphQLBoolean),
            description: 'Stream when true or undefined.',
            defaultValue: true,
        },
        label: {
            type: GraphQLString,
            description: 'Unique name',
        },
        initialCount: {
            defaultValue: 0,
            type: GraphQLInt,
            description: 'Number of items to return immediately',
        },
    },
});
