// deno-fmt-ignore-file
import { Try } from './try/index.mjs';
export function FromInteger(_context, _type, value) {
    const result = Try.TryNumber(value);
    return Try.IsOk(result) ? Math.trunc(result.value) : value;
}
