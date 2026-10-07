// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Arguments } from '../system/arguments/index.mjs';
import { Validator } from './validator.mjs';
/** Compiles a type into a high performance Validator */
export function Compile(...args) {
    const [context, type] = Arguments.Match(args, {
        2: (context, type) => [context, type],
        1: (type) => [{}, type]
    });
    return new Validator(context, type);
}
