// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Check } from '../check/index.mjs';
import { Clone } from '../clone/index.mjs';
import { FromType } from './from_type.mjs';
export function FromUnion(context, schema, value) {
    for (const inner of schema.anyOf) {
        const result = FromType(context, inner, Clone(value));
        if (Check(context, inner, result)) {
            return result;
        }
    }
    return value;
}
