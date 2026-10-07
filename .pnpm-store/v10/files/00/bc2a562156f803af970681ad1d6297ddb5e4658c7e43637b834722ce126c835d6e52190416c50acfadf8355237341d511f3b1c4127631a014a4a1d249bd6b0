import { defaultFieldResolver } from 'graphql';
export function chainResolvers(resolvers) {
    return (root, args, ctx, info) => resolvers.reduce((prev, curResolver) => {
        if (curResolver != null) {
            return curResolver(prev, args, ctx, info);
        }
        return defaultFieldResolver(prev, args, ctx, info);
    }, root);
}
