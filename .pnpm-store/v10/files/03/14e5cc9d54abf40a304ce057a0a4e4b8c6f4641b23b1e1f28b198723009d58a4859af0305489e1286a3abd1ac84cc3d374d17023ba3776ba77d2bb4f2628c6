// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { IsEqual, TakeLeft } from './internal/guard.mjs';
function TakeOne(input) {
    const result = IsEqual(input, '') ? [] : [input.slice(0, 1), input.slice(1)];
    return result;
}
function IsInputMatchSentinal(end, input) {
    return TakeLeft(end, (left, right) => input.startsWith(left)
        ? true
        : IsInputMatchSentinal(right, input), () => false);
}
/** Match Input until but not including End. No match if End not found. */
export function Until(end, input, result = '') {
    return Match(TakeOne(input), (One, Rest) => IsInputMatchSentinal(end, input)
        ? [result, input] // ok: at sentinal 
        : Until(end, Rest, `${result}${One}`) // fail: advance + 1
    , () => []);
}
// deno-coverage-ignore-stop
