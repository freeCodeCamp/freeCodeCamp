// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { Trim } from './internal/trim.mjs';
import { Take } from './internal/take.mjs';
import { Many } from './internal/many.mjs';
import { Digit } from './internal/char.mjs';
import { Zero } from './internal/char.mjs';
import { NonZero } from './internal/char.mjs';
import { UnderScore } from './internal/char.mjs';
function TakeNonZero(input) {
    return Take(NonZero, input);
}
const AllowedDigits = [...Digit, UnderScore];
function TakeDigits(input) {
    return Many(AllowedDigits, [UnderScore], input);
}
function TakeUnsignedInteger(input) {
    return Match(Take([Zero], input), (Zero, ZeroRest) => [Zero, ZeroRest], () => Match(TakeNonZero(input), (NonZero, NonZeroRest) => Match(TakeDigits(NonZeroRest), (Digits, DigitsRest) => [`${NonZero}${Digits}`, DigitsRest], () => []), // fail: did not match Digits
    () => [])); // fail: did not match NonZero
}
/** Matches if next is a UnsignedInteger */
export function UnsignedInteger(input) {
    return TakeUnsignedInteger(Trim(input));
}
// deno-coverage-ignore-stop
