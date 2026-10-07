"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStringComparator = exports.CompareVal = exports.printTypeNode = exports.isNonNullTypeNode = exports.isListTypeNode = exports.isWrappingTypeNode = exports.extractType = exports.isSourceTypes = exports.isStringTypes = void 0;
const graphql_1 = require("graphql");
function isStringTypes(types) {
    return typeof types === 'string';
}
exports.isStringTypes = isStringTypes;
function isSourceTypes(types) {
    return types instanceof graphql_1.Source;
}
exports.isSourceTypes = isSourceTypes;
function extractType(type) {
    let visitedType = type;
    while (visitedType.kind === graphql_1.Kind.LIST_TYPE || visitedType.kind === 'NonNullType') {
        visitedType = visitedType.type;
    }
    return visitedType;
}
exports.extractType = extractType;
function isWrappingTypeNode(type) {
    return type.kind !== graphql_1.Kind.NAMED_TYPE;
}
exports.isWrappingTypeNode = isWrappingTypeNode;
function isListTypeNode(type) {
    return type.kind === graphql_1.Kind.LIST_TYPE;
}
exports.isListTypeNode = isListTypeNode;
function isNonNullTypeNode(type) {
    return type.kind === graphql_1.Kind.NON_NULL_TYPE;
}
exports.isNonNullTypeNode = isNonNullTypeNode;
function printTypeNode(type) {
    if (isListTypeNode(type)) {
        return `[${printTypeNode(type.type)}]`;
    }
    if (isNonNullTypeNode(type)) {
        return `${printTypeNode(type.type)}!`;
    }
    return type.name.value;
}
exports.printTypeNode = printTypeNode;
var CompareVal;
(function (CompareVal) {
    CompareVal[CompareVal["A_SMALLER_THAN_B"] = -1] = "A_SMALLER_THAN_B";
    CompareVal[CompareVal["A_EQUALS_B"] = 0] = "A_EQUALS_B";
    CompareVal[CompareVal["A_GREATER_THAN_B"] = 1] = "A_GREATER_THAN_B";
})(CompareVal = exports.CompareVal || (exports.CompareVal = {}));
function defaultStringComparator(a, b) {
    if (a == null && b == null) {
        return CompareVal.A_EQUALS_B;
    }
    if (a == null) {
        return CompareVal.A_SMALLER_THAN_B;
    }
    if (b == null) {
        return CompareVal.A_GREATER_THAN_B;
    }
    if (a < b)
        return CompareVal.A_SMALLER_THAN_B;
    if (a > b)
        return CompareVal.A_GREATER_THAN_B;
    return CompareVal.A_EQUALS_B;
}
exports.defaultStringComparator = defaultStringComparator;
