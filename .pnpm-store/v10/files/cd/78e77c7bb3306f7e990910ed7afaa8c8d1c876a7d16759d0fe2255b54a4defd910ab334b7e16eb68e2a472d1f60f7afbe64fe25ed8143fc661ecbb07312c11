// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { Take } from './internal/take.mjs';
import { Integer } from './integer.mjs';
function TakeBigInt(input) {
    return Match(Integer(input), (Integer, IntegerRest) => Match(Take(['n'], IntegerRest), (_N, NRest) => [`${Integer}`, NRest], () => []), // fail: did not match 'n'
    () => []); // fail: did not match Integer
}
/** Matches if next is a Integer literal with trailing 'n'. Trailing 'n' is omitted in result. */
export function BigInt(input) {
    return TakeBigInt(input);
}
// deno-coverage-ignore-stop
