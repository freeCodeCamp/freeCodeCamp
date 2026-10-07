"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootTypeMap = exports.getRootTypes = exports.getRootTypeNames = exports.getDefinedRootType = void 0;
const errors_js_1 = require("./errors.js");
const memoize_js_1 = require("./memoize.js");
function getDefinedRootType(schema, operation, nodes) {
    const rootTypeMap = (0, exports.getRootTypeMap)(schema);
    const rootType = rootTypeMap.get(operation);
    if (rootType == null) {
        throw (0, errors_js_1.createGraphQLError)(`Schema is not configured to execute ${operation} operation.`, {
            nodes,
        });
    }
    return rootType;
}
exports.getDefinedRootType = getDefinedRootType;
exports.getRootTypeNames = (0, memoize_js_1.memoize1)(function getRootTypeNames(schema) {
    const rootTypes = (0, exports.getRootTypes)(schema);
    return new Set([...rootTypes].map(type => type.name));
});
exports.getRootTypes = (0, memoize_js_1.memoize1)(function getRootTypes(schema) {
    const rootTypeMap = (0, exports.getRootTypeMap)(schema);
    return new Set(rootTypeMap.values());
});
exports.getRootTypeMap = (0, memoize_js_1.memoize1)(function getRootTypeMap(schema) {
    const rootTypeMap = new Map();
    const queryType = schema.getQueryType();
    if (queryType) {
        rootTypeMap.set('query', queryType);
    }
    const mutationType = schema.getMutationType();
    if (mutationType) {
        rootTypeMap.set('mutation', mutationType);
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType) {
        rootTypeMap.set('subscription', subscriptionType);
    }
    return rootTypeMap;
});
