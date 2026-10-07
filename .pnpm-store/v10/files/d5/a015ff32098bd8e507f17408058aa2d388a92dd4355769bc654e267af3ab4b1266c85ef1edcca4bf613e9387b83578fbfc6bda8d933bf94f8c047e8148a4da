// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { IsEqual } from './internal/guard.mjs';
import { IsMatch, Match } from './internal/match.mjs';
import { Trim } from './internal/trim.mjs';
import { Take } from './internal/take.mjs';
import { Many } from './internal/many.mjs';
import { Digit, UnderScore } from './internal/char.mjs';
import { Dot } from './internal/char.mjs';
import { UnsignedInteger } from './unsigned_integer.mjs';
const AllowedDigits = [...Digit, UnderScore];
function IsLeadingDot(input) {
    return IsMatch(Take([Dot], input));
}
function TakeFractional(input) {
    return Match(Many(AllowedDigits, [UnderScore], input), (Digits, DigitsRest) => IsEqual(Digits, '')
        ? [] // fail: no Digits
        : [Digits, DigitsRest], () => []); // fail: did not match Digits
}
function LeadingDot(input) {
    return Match(Take([Dot], input), (Dot, DotRest) => Match(TakeFractional(DotRest), (Fractional, FractionalRest) => [`0${Dot}${Fractional}`, FractionalRest], () => []), // fail: did not match Fractional
    () => []); // fail: did not match Dot
}
function LeadingInteger(input) {
    return Match(UnsignedInteger(input), (Integer, IntegerRest) => Match(Take([Dot], IntegerRest), (Dot, DotRest) => Match(TakeFractional(DotRest), (Fractional, FractionalRest) => [`${Integer}${Dot}${Fractional}`, FractionalRest], () => [`${Integer}`, DotRest]), // fail: did not match Fractional, use Integer
    () => [`${Integer}`, IntegerRest]), // fail: did not match Dot, use Integer
    () => []); // fail: did not match Integer
}
function TakeUnsignedNumber(input) {
    return (IsLeadingDot(input)
        ? LeadingDot(input)
        : LeadingInteger(input));
}
/** Matches if next is a UnsignedNumber */
export function UnsignedNumber(input) {
    return TakeUnsignedNumber(Trim(input));
}
// deno-coverage-ignore-stop
