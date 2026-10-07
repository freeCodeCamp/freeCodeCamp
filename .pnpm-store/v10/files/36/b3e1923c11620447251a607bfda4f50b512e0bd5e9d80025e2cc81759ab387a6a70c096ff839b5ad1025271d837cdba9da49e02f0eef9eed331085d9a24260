// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './internal/match.mjs';
import { Trim } from './internal/trim.mjs';
import { Take } from './internal/take.mjs';
import { Alpha } from './internal/char.mjs';
import { Digit } from './internal/char.mjs';
import { UnderScore } from './internal/char.mjs';
import { DollarSign } from './internal/char.mjs';
const Initial = [...Alpha, UnderScore, DollarSign];
function TakeInitial(input) {
    return Take(Initial, input);
}
const Remaining = [...Initial, ...Digit];
function TakeRemaining(input, result = '') {
    return Match(Take(Remaining, input), (Remaining, RemainingRest) => TakeRemaining(RemainingRest, `${result}${Remaining}`), () => [result, input]);
}
function TakeIdent(input) {
    return Match(TakeInitial(input), (Initial, InitialRest) => Match(TakeRemaining(InitialRest), (Remaining, RemainingRest) => [`${Initial}${Remaining}`, RemainingRest], () => []), // fail: did not match Remaining
    () => []); // fail: did not match Initial
}
/** Matches if next is an Ident */
export function Ident(input) {
    return TakeIdent(Trim(input));
}
// deno-coverage-ignore-stop
