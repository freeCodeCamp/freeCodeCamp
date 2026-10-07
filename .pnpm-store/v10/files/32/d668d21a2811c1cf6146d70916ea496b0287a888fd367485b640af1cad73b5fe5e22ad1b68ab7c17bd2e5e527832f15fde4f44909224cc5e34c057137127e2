"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relocatedError = exports.createGraphQLError = void 0;
const graphql_1 = require("graphql");
function createGraphQLError(message, options) {
    if (graphql_1.versionInfo.major >= 17) {
        return new graphql_1.GraphQLError(message, options);
    }
    return new graphql_1.GraphQLError(message, options === null || options === void 0 ? void 0 : options.nodes, options === null || options === void 0 ? void 0 : options.source, options === null || options === void 0 ? void 0 : options.positions, options === null || options === void 0 ? void 0 : options.path, options === null || options === void 0 ? void 0 : options.originalError, options === null || options === void 0 ? void 0 : options.extensions);
}
exports.createGraphQLError = createGraphQLError;
function relocatedError(originalError, path) {
    return createGraphQLError(originalError.message, {
        nodes: originalError.nodes,
        source: originalError.source,
        positions: originalError.positions,
        path: path == null ? originalError.path : path,
        originalError,
        extensions: originalError.extensions,
    });
}
exports.relocatedError = relocatedError;
