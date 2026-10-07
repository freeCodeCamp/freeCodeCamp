// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { Match } from './match.mjs';
import { Take } from './take.mjs';
function IsDiscard(discard, input) {
    return discard.includes(input);
}
/** Takes characters from the Input until no-match. The Discard set is used to omit characters from the match */
export function Many(allowed, discard, input, result = '') {
    return Match(Take(allowed, input), (Char, Rest) => IsDiscard(discard, Char)
        ? Many(allowed, discard, Rest, result)
        : Many(allowed, discard, Rest, `${result}${Char}`), () => [result, input]);
}
// deno-coverage-ignore-stop
