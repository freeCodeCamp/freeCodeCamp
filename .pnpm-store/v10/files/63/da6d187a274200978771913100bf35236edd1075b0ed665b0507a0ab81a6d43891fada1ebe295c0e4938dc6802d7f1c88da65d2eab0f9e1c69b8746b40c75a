// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { Trim } from './internal/trim.mjs';
import { NewLine } from './internal/char.mjs';
import { Take } from './internal/take.mjs';
import { Until } from './until.mjs';
function MultiLine(start, end, input) {
    return Match(Take([start], input), (_, Rest) => Match(Until([end], Rest), (Until, UntilRest) => Match(Take([end], UntilRest), (_, Rest) => [`${Until}`, Rest], () => []), // fail: did not match End
    () => []), // fail: did not match Until
    () => []); // fail: did not match Start
}
function SingleLine(start, end, input) {
    return Match(Take([start], input), (_, Rest) => Match(Until([NewLine, end], Rest), (Until, UntilRest) => Match(Take([end], UntilRest), (_, EndRest) => [`${Until}`, EndRest], () => []), // fail: did not match End
    () => []), // fail: did not match Until
    () => []); // fail: not match Start
}
/** Matches from Start and End capturing everything in-between. Start and End are consumed. */
export function Span(start, end, multiLine, input) {
    return (multiLine
        ? MultiLine(start, end, Trim(input))
        : SingleLine(start, end, Trim(input)));
}
// deno-coverage-ignore-stop
