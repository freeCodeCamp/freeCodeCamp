// deno-fmt-ignore-file
import { Try } from './try/index.mjs';
export function FromNull(_context, _type, value) {
    const result = Try.TryNull(value);
    return Try.IsOk(result) ? result.value : value;
}
