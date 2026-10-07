"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUniqueESSymbolType = exports.isUnionType = exports.isUnionOrIntersectionType = exports.isTypeVariable = exports.isTypeReference = exports.isTypeParameter = exports.isSubstitutionType = exports.isObjectType = exports.isLiteralType = exports.isIntersectionType = exports.isInterfaceType = exports.isInstantiableType = exports.isIndexedAccessype = exports.isIndexedAccessType = exports.isGenericType = exports.isEnumType = exports.isConditionalType = void 0;
const ts = require("typescript");
function isConditionalType(type) {
    return (type.flags & ts.TypeFlags.Conditional) !== 0;
}
exports.isConditionalType = isConditionalType;
function isEnumType(type) {
    return (type.flags & ts.TypeFlags.Enum) !== 0;
}
exports.isEnumType = isEnumType;
function isGenericType(type) {
    return (type.flags & ts.TypeFlags.Object) !== 0 &&
        (type.objectFlags & ts.ObjectFlags.ClassOrInterface) !== 0 &&
        (type.objectFlags & ts.ObjectFlags.Reference) !== 0;
}
exports.isGenericType = isGenericType;
function isIndexedAccessType(type) {
    return (type.flags & ts.TypeFlags.IndexedAccess) !== 0;
}
exports.isIndexedAccessType = isIndexedAccessType;
function isIndexedAccessype(type) {
    return (type.flags & ts.TypeFlags.Index) !== 0;
}
exports.isIndexedAccessype = isIndexedAccessype;
function isInstantiableType(type) {
    return (type.flags & ts.TypeFlags.Instantiable) !== 0;
}
exports.isInstantiableType = isInstantiableType;
function isInterfaceType(type) {
    return (type.flags & ts.TypeFlags.Object) !== 0 &&
        (type.objectFlags & ts.ObjectFlags.ClassOrInterface) !== 0;
}
exports.isInterfaceType = isInterfaceType;
function isIntersectionType(type) {
    return (type.flags & ts.TypeFlags.Intersection) !== 0;
}
exports.isIntersectionType = isIntersectionType;
function isLiteralType(type) {
    return (type.flags & (ts.TypeFlags.StringOrNumberLiteral | ts.TypeFlags.BigIntLiteral)) !== 0;
}
exports.isLiteralType = isLiteralType;
function isObjectType(type) {
    return (type.flags & ts.TypeFlags.Object) !== 0;
}
exports.isObjectType = isObjectType;
function isSubstitutionType(type) {
    return (type.flags & ts.TypeFlags.Substitution) !== 0;
}
exports.isSubstitutionType = isSubstitutionType;
function isTypeParameter(type) {
    return (type.flags & ts.TypeFlags.TypeParameter) !== 0;
}
exports.isTypeParameter = isTypeParameter;
function isTypeReference(type) {
    return (type.flags & ts.TypeFlags.Object) !== 0 &&
        (type.objectFlags & ts.ObjectFlags.Reference) !== 0;
}
exports.isTypeReference = isTypeReference;
function isTypeVariable(type) {
    return (type.flags & ts.TypeFlags.TypeVariable) !== 0;
}
exports.isTypeVariable = isTypeVariable;
function isUnionOrIntersectionType(type) {
    return (type.flags & ts.TypeFlags.UnionOrIntersection) !== 0;
}
exports.isUnionOrIntersectionType = isUnionOrIntersectionType;
function isUnionType(type) {
    return (type.flags & ts.TypeFlags.Union) !== 0;
}
exports.isUnionType = isUnionType;
function isUniqueESSymbolType(type) {
    return (type.flags & ts.TypeFlags.UniqueESSymbol) !== 0;
}
exports.isUniqueESSymbolType = isUniqueESSymbolType;
//# sourceMappingURL=type.js.map