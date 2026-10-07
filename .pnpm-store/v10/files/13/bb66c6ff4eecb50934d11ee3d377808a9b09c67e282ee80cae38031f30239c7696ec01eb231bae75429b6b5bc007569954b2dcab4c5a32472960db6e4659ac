import { doTypesOverlap, isCompositeType } from 'graphql';
export function implementsAbstractType(schema, typeA, typeB) {
    if (typeB == null || typeA == null) {
        return false;
    }
    else if (typeA === typeB) {
        return true;
    }
    else if (isCompositeType(typeA) && isCompositeType(typeB)) {
        return doTypesOverlap(schema, typeA, typeB);
    }
    return false;
}
