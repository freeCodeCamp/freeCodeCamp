// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { AssertError } from '../assert/index.mjs';
import { Check } from '../check/index.mjs';
import { Errors } from '../errors/index.mjs';
import { Clean } from '../clean/index.mjs';
import { Clone } from '../clone/index.mjs';
import { Convert } from '../convert/index.mjs';
import { Default } from '../default/index.mjs';
import { Pipeline } from '../pipeline/index.mjs';
import { FromType } from './from_type.mjs';
// ------------------------------------------------------------------
// Assert
// ------------------------------------------------------------------
export class EncodeError extends AssertError {
    constructor(value, errors) {
        super('Encode', value, errors);
    }
}
function Assert(context, type, value) {
    if (!Check(context, type, value))
        throw new EncodeError(value, Errors(context, type, value));
    return value;
}
// ------------------------------------------------------------------
// EncodeUnsafe
// ------------------------------------------------------------------
/** Executes Encode callbacks only */
export function EncodeUnsafe(context, type, value) {
    return FromType('Encode', context, type, value);
}
// ------------------------------------------------------------------
// Encoder
// ------------------------------------------------------------------
const Encoder = Pipeline([
    (_context, _type, value) => Clone(value),
    (context, type, value) => EncodeUnsafe(context, type, value),
    (context, type, value) => Default(context, type, value),
    (context, type, value) => Convert(context, type, value),
    (context, type, value) => Clean(context, type, value),
    (context, type, value) => Assert(context, type, value),
]);
/** Encodes a value with the given type. */
export function Encode(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value],
    });
    return Encoder(context, type, value);
}
