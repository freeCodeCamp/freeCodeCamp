// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './match.mjs';
import { Take } from './take.mjs';
/** Matches the given Value or empty string if no match. This function never fails */
export function Optional(value, input) {
    return Match(Take([value], input), (Optional, Rest) => [Optional, Rest], () => ['', input]);
}
// deno-coverage-ignore-stop
