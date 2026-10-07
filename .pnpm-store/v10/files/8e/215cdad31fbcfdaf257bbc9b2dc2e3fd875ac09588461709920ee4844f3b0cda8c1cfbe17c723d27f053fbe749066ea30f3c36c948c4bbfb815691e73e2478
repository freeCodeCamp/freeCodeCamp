// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { Take } from './internal/take.mjs';
import { Trim } from './internal/trim.mjs';
import { Span } from './span.mjs';
function TakeInitial(quotes, input) {
    return Take(quotes, input);
}
function TakeSpan(quote, input) {
    return Span(quote, quote, false, input);
}
function TakeString(quotes, input) {
    return Match(TakeInitial(quotes, input), (Initial, InitialRest) => TakeSpan(Initial, `${Initial}${InitialRest}`), () => []); // fail: did not match Initial
}
/** Matches a literal String with the given quotes */
export function String(quotes, input) {
    return TakeString(quotes, Trim(input));
}
// deno-coverage-ignore-stop
