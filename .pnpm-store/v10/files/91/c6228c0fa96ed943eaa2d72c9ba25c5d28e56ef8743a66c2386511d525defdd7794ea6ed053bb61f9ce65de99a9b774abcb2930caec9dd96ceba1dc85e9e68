// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Check } from '../check/index.mjs';
import { Errors } from '../errors/index.mjs';
// ------------------------------------------------------------------
// AssertError
// ------------------------------------------------------------------
export class AssertError extends Error {
    constructor(source, value, errors) {
        super(source);
        Object.defineProperty(this, 'cause', {
            value: { source, errors, value },
            writable: false,
            configurable: false,
            enumerable: false
        });
    }
}
/** Asserts the a value matches the given type. This function returns a TypeScript type asserts predicate and will throw AssertError if value does not match. */
export function Assert(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value]
    });
    const check = Check(context, type, value);
    if (!check)
        throw new AssertError('Assert', value, Errors(context, type, value));
}
