// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { IsEqual } from './internal/guard.mjs';
import { Match } from './internal/match.mjs';
import { Until } from './until.mjs';
/** Match Input until but not including End. No match if End not found or match is zero-length. */
export function Until_1(end, input) {
    return Match(Until(end, input), (Until, UntilRest) => IsEqual(Until, '')
        ? [] // fail: match has no characters
        : [Until, UntilRest], () => []); // fail: did not match Until
}
// deno-coverage-ignore-stop
