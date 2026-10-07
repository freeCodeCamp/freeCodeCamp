// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { Trim } from './internal/trim.mjs';
import { Optional } from './internal/optional.mjs';
import { Hyphen } from './internal/char.mjs';
import { UnsignedNumber } from './unsigned_number.mjs';
function TakeSign(input) {
    return Optional(Hyphen, input);
}
function TakeSignedNumber(input) {
    return Match(TakeSign(input), (Sign, SignRest) => Match(UnsignedNumber(SignRest), (UnsignedInteger, UnsignedIntegerRest) => [`${Sign}${UnsignedInteger}`, UnsignedIntegerRest], () => []), // fail: did not match unsigned integer
    () => []); // fail: did not match Sign
}
/** Matches if next is a signed or unsigned Number */
export function Number(input) {
    return TakeSignedNumber(Trim(input));
}
// deno-coverage-ignore-stop
