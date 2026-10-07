// deno-fmt-ignore-file
import { Try } from './try/index.mjs';
export function FromBigInt(_context, _type, value) {
    const result = Try.TryBigInt(value);
    return Try.IsOk(result) ? result.value : value;
}
