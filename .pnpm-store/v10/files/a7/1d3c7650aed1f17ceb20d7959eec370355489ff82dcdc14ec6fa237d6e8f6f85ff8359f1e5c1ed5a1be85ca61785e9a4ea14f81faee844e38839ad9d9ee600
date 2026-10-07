// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Arguments } from '../system/arguments/index.mjs';
import { Check } from './check.mjs';
import { Errors } from './errors.mjs';
// ------------------------------------------------------------------
// ParseError
// ------------------------------------------------------------------
export class ParseError {
    constructor(schema, value, errors) {
        this.schema = schema;
        this.value = value;
        this.errors = errors;
    }
}
/** Parses a value against the provided schema */
export function Parse(...args) {
    const [context, schema, value] = Arguments.Match(args, {
        3: (context, schema, value) => [context, schema, value],
        2: (schema, value) => [{}, schema, value]
    });
    if (!Check(context, schema, value)) {
        const [_result, errors] = Errors(context, schema, value);
        throw new ParseError(schema, value, errors);
    }
    return value;
}
