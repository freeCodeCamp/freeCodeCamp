// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromUnion(context, type) {
    if (Guard.IsEqual(type.anyOf.length, 0)) {
        throw Error('Unable to create Union with no variants');
    }
    return FromType(context, type.anyOf[0]);
}
