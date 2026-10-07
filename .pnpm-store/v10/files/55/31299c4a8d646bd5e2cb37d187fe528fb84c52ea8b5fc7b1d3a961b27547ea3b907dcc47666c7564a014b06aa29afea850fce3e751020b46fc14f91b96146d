// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { Trim } from './internal/trim.mjs';
import { Optional } from './internal/optional.mjs';
import { Hyphen } from './internal/char.mjs';
import { UnsignedInteger } from './unsigned_integer.mjs';
function TakeSign(input) {
    return Optional(Hyphen, input);
}
function TakeSignedInteger(input) {
    return Match(TakeSign(input), (Sign, SignRest) => Match(UnsignedInteger(SignRest), (UnsignedInteger, UnsignedIntegerRest) => [`${Sign}${UnsignedInteger}`, UnsignedIntegerRest], () => []), // fail: did not match unsigned integer
    () => []); // fail: did not match Sign
}
/** Matches if next is a signed or unsigned Integer */
export function Integer(input) {
    return TakeSignedInteger(Trim(input));
}
// deno-coverage-ignore-stop
