import { Source, Kind } from 'graphql';
export function isStringTypes(types) {
    return typeof types === 'string';
}
export function isSourceTypes(types) {
    return types instanceof Source;
}
export function extractType(type) {
    let visitedType = type;
    while (visitedType.kind === Kind.LIST_TYPE || visitedType.kind === 'NonNullType') {
        visitedType = visitedType.type;
    }
    return visitedType;
}
export function isWrappingTypeNode(type) {
    return type.kind !== Kind.NAMED_TYPE;
}
export function isListTypeNode(type) {
    return type.kind === Kind.LIST_TYPE;
}
export function isNonNullTypeNode(type) {
    return type.kind === Kind.NON_NULL_TYPE;
}
export function printTypeNode(type) {
    if (isListTypeNode(type)) {
        return `[${printTypeNode(type.type)}]`;
    }
    if (isNonNullTypeNode(type)) {
        return `${printTypeNode(type.type)}!`;
    }
    return type.name.value;
}
export var CompareVal;
(function (CompareVal) {
    CompareVal[CompareVal["A_SMALLER_THAN_B"] = -1] = "A_SMALLER_THAN_B";
    CompareVal[CompareVal["A_EQUALS_B"] = 0] = "A_EQUALS_B";
    CompareVal[CompareVal["A_GREATER_THAN_B"] = 1] = "A_GREATER_THAN_B";
})(CompareVal || (CompareVal = {}));
export function defaultStringComparator(a, b) {
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
