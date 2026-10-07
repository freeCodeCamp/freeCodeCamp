// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { IsEqual } from './internal/guard.mjs';
/** Match remaining characters in the buffer until end. If no characters are in buffer, no match */
export function Rest(input) {
    const result = IsEqual(input, '') ? [] : [input, ''];
    return result;
}
// deno-coverage-ignore-stop
