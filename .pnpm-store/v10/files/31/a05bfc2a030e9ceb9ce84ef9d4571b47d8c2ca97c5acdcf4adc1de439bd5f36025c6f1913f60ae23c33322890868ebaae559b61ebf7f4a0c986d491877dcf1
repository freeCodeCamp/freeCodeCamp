import { isObjectType } from 'graphql';
export function getObjectTypeFromTypeMap(typeMap, type) {
    if (type) {
        const maybeObjectType = typeMap[type.name];
        if (isObjectType(maybeObjectType)) {
            return maybeObjectType;
        }
    }
}
