// deno-fmt-ignore-file
import { Try } from './try/index.mjs';
export function FromVoid(_context, _type, value) {
    const result = Try.TryUndefined(value);
    return Try.IsOk(result) ? (void 0) : value;
}
