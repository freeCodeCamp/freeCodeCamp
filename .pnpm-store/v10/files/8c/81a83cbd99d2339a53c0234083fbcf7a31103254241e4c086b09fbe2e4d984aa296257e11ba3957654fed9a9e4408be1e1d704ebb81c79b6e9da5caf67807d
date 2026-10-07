import { isNonNullType, Kind, isListType } from 'graphql';
import { inspect } from './inspect.js';
export function astFromType(type) {
    if (isNonNullType(type)) {
        const innerType = astFromType(type.ofType);
        if (innerType.kind === Kind.NON_NULL_TYPE) {
            throw new Error(`Invalid type node ${inspect(type)}. Inner type of non-null type cannot be a non-null type.`);
        }
        return {
            kind: Kind.NON_NULL_TYPE,
            type: innerType,
        };
    }
    else if (isListType(type)) {
        return {
            kind: Kind.LIST_TYPE,
            type: astFromType(type.ofType),
        };
    }
    return {
        kind: Kind.NAMED_TYPE,
        name: {
            kind: Kind.NAME,
            value: type.name,
        },
    };
}
