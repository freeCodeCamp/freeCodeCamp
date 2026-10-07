// deno-fmt-ignore-file
import { Try } from './try/index.mjs';
export function FromString(_context, _type, value) {
    const result = Try.TryString(value);
    return Try.IsOk(result) ? result.value : value;
}
