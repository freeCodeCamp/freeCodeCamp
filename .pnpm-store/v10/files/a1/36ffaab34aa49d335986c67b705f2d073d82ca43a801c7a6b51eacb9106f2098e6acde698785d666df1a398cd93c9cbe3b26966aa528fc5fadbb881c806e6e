// deno-fmt-ignore-file
import { Try } from './try/index.mjs';
export function FromUndefined(_context, _type, value) {
    const result = Try.TryUndefined(value);
    return Try.IsOk(result) ? result.value : value;
}
