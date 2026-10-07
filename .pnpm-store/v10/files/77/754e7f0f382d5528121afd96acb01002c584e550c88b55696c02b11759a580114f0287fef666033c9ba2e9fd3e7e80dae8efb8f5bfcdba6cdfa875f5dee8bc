// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { IsEqual } from './internal/guard.mjs';
import { TrimWhitespace } from './internal/trim.mjs';
import { Trim } from './internal/trim.mjs';
import { Take } from './internal/take.mjs';
import { NewLine } from './internal/char.mjs';
import { WhiteSpace } from './internal/char.mjs';
function TakeConst(const_, input) {
    return Take([const_], input);
}
/** Matches if next is the given Const value */
export function Const(const_, input) {
    return (IsEqual(const_, '') ? ['', input] : (const_.startsWith(NewLine) ? TakeConst(const_, TrimWhitespace(input)) :
        const_.startsWith(WhiteSpace) ? TakeConst(const_, input) :
            TakeConst(const_, Trim(input))));
}
// deno-coverage-ignore-stop
