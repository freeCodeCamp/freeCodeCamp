// deno-fmt-ignore-file
import { Settings } from '../../system/system.mjs';
import { Arguments } from '../../system/arguments/index.mjs';
import { AssertError } from '../assert/index.mjs';
import { Check } from '../check/index.mjs';
import { Errors } from '../errors/index.mjs';
import { Clean } from '../clean/index.mjs';
import { Clone } from '../clone/index.mjs';
import { Convert } from '../convert/index.mjs';
import { Default } from '../default/index.mjs';
import { Pipeline } from '../pipeline/index.mjs';
// ------------------------------------------------------------------
// Assert
// ------------------------------------------------------------------
export class ParseError extends AssertError {
    constructor(value, errors) {
        super('Parse', value, errors);
    }
}
function Assert(context, type, value) {
    if (!Check(context, type, value))
        throw new ParseError(value, Errors(context, type, value));
    return value;
}
// ------------------------------------------------------------------
// Parser
// ------------------------------------------------------------------
export const Parser = Pipeline([
    (_context, _type, value) => Clone(value),
    (context, type, value) => Default(context, type, value),
    (context, type, value) => Convert(context, type, value),
    (context, type, value) => Clean(context, type, value),
    (context, type, value) => Assert(context, type, value)
]);
/**  Parses a value with the given type. */
export function Parse(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value],
    });
    const checked = Check(context, type, value);
    if (checked)
        return value;
    if (Settings.Get().correctiveParse)
        return Parser(context, type, value);
    throw new ParseError(value, Errors(context, type, value));
}
