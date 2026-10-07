// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
import { Try } from './try/index.mjs';
export function FromArray(context, type, value) {
    const result = Try.TryArray(value);
    return result.value.map(value => FromType(context, type.items, value));
}
