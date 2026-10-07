"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlVersion = exports.getGraphqlVersion = void 0;
function getGraphqlVersion() {
    var _a, _b, _c;
    const graphql = require('../graphql');
    if ((_a = graphql === null || graphql === void 0 ? void 0 : graphql.versionInfo) === null || _a === void 0 ? void 0 : _a.major) {
        return parseFloat(`${(_b = graphql === null || graphql === void 0 ? void 0 : graphql.versionInfo) === null || _b === void 0 ? void 0 : _b.major}.${(_c = graphql === null || graphql === void 0 ? void 0 : graphql.versionInfo) === null || _c === void 0 ? void 0 : _c.minor}`);
    }
    else if (graphql.getOperationRootType) {
        return 14.0;
    }
    else if (graphql.lexicographicSortSchema) {
        return 13.0;
    }
    else if (graphql.lexographicSortSchema) {
        return 13.0;
    }
    return 11.0;
}
exports.getGraphqlVersion = getGraphqlVersion;
exports.graphqlVersion = getGraphqlVersion();
//# sourceMappingURL=graphqlVersion.js.map