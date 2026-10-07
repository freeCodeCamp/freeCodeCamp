import { GraphQLError, versionInfo } from 'graphql';
export function createGraphQLError(message, options) {
    if (versionInfo.major >= 17) {
        return new GraphQLError(message, options);
    }
    return new GraphQLError(message, options === null || options === void 0 ? void 0 : options.nodes, options === null || options === void 0 ? void 0 : options.source, options === null || options === void 0 ? void 0 : options.positions, options === null || options === void 0 ? void 0 : options.path, options === null || options === void 0 ? void 0 : options.originalError, options === null || options === void 0 ? void 0 : options.extensions);
}
export function relocatedError(originalError, path) {
    return createGraphQLError(originalError.message, {
        nodes: originalError.nodes,
        source: originalError.source,
        positions: originalError.positions,
        path: path == null ? originalError.path : path,
        originalError,
        extensions: originalError.extensions,
    });
}
