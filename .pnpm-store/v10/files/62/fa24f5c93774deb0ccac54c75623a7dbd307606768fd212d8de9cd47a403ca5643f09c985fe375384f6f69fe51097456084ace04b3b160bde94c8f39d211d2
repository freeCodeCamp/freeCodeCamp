"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.implementsAbstractType = void 0;
const graphql_1 = require("graphql");
function implementsAbstractType(schema, typeA, typeB) {
    if (typeB == null || typeA == null) {
        return false;
    }
    else if (typeA === typeB) {
        return true;
    }
    else if ((0, graphql_1.isCompositeType)(typeA) && (0, graphql_1.isCompositeType)(typeB)) {
        return (0, graphql_1.doTypesOverlap)(schema, typeA, typeB);
    }
    return false;
}
exports.implementsAbstractType = implementsAbstractType;
