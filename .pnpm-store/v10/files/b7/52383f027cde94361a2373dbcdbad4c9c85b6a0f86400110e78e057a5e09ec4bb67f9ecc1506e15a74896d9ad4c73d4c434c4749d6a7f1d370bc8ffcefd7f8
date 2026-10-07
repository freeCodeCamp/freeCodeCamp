// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Arguments } from '../system/arguments/index.mjs';
import * as Build from './build.mjs';
import { Errors } from './errors.mjs';
import { ParseError } from './parse.mjs';
// ------------------------------------------------------------------
// Validator
// ------------------------------------------------------------------
export class Validator {
    constructor(context, schema) {
        this.build = Build.Build(context, schema);
        this.result = this.build.Evaluate();
    }
    /** Returns true if this Validator is using JIT acceleration. */
    IsAccelerated() {
        return this.result.IsAccelerated;
    }
    /** Returns the underlying Schema used to construct this Validator. */
    Schema() {
        return this.build.Schema();
    }
    /** Performs a type-guard check on the provided value. */
    Check(value) {
        return this.result.Check(value);
    }
    /** Validates a value and returns it. Will throw if invalid. */
    Parse(value) {
        if (this.result.Check(value))
            return value;
        const [_result, errors] = Errors(this.build.Context(), this.build.Schema(), value);
        throw new ParseError(this.build.Schema(), value, errors);
    }
    /** Inspects a value and returns a detailed list of validation errors. */
    Errors(value) {
        return Errors(this.build.Context(), this.build.Schema(), value);
    }
}
/** Compiles this schema into a high performance Validator */
export function Compile(...args) {
    const [context, schema] = Arguments.Match(args, {
        2: (context, schema) => [context, schema],
        1: (schema) => [{}, schema]
    });
    return new Validator(context, schema);
}
