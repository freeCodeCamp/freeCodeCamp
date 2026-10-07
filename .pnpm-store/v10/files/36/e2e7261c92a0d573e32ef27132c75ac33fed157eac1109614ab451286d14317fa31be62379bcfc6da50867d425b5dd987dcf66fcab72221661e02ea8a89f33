// deno-coverage-ignore-start - parsebox tested
import { IsEqual } from './guard.mjs';
/** Checks the value is a Tuple-2 [string, string] result */
export function IsMatch(value) {
    return IsEqual(value.length, 2);
}
/** Matches on a result and dispatches either left or right arm */
export function Match(input, ok, fail) {
    return IsMatch(input) ? ok(input[0], input[1]) : fail();
}
// deno-coverage-ignore-stop
