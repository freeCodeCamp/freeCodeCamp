// deno-fmt-ignore-file
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { IsObject } from '../../types/object.mjs';
import { CollapseToObject } from '../object/index.mjs';
// deno-coverage-ignore-start - symmetric unreachable
/** Transforms a type into a TProperties used for indexing operations */
export function ToIndexable(type) {
    const collapsed = CollapseToObject(type);
    const result = IsObject(collapsed)
        ? collapsed.properties
        : Unreachable();
    return result;
}
// deno-coverage-ignore-stop
