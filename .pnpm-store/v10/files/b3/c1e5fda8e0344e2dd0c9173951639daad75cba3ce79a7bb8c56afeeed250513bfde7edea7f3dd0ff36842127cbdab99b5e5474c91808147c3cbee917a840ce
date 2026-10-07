// deno-fmt-ignore-file
import { IsUnion } from '../../types/union.mjs';
function FlattenType(type) {
    const result = IsUnion(type) ? Flatten(type.anyOf) : [type];
    return result;
}
export function Flatten(types) {
    return types.reduce((result, type) => {
        return [...result, ...FlattenType(type)];
    }, []);
}
