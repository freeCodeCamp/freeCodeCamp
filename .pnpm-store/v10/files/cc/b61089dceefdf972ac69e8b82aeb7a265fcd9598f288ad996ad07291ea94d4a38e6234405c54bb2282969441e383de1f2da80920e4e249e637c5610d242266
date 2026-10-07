// deno-fmt-ignore-file
import { Union } from '../../types/union.mjs';
import { FromType } from './from_type.mjs';
export function FromUnion(mapping, types) {
    const result = types.map(type => FromType(mapping, type));
    return Union(result);
}
