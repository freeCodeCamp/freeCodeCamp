"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectTypeFromTypeMap = void 0;
const graphql_1 = require("graphql");
function getObjectTypeFromTypeMap(typeMap, type) {
    if (type) {
        const maybeObjectType = typeMap[type.name];
        if ((0, graphql_1.isObjectType)(maybeObjectType)) {
            return maybeObjectType;
        }
    }
}
exports.getObjectTypeFromTypeMap = getObjectTypeFromTypeMap;
