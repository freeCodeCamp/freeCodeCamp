// deno-fmt-ignore-file
import { Union } from '../../types/union.mjs';
import { FromType } from './from_type.mjs';
export function FromUnion(types) {
    const result = types.map(type => FromType(type));
    return Union(result);
}
