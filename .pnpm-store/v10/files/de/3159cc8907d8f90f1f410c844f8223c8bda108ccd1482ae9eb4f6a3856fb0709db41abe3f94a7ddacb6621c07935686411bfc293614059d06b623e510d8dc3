// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Errors as SchemaErrors, } from '../../schema/index.mjs';
/**
 * Performs an exhaustive Check on the specified value and reports any errors found.
 * If no errors are found, an empty array is returned. Unlike Check, this function
 * does not terminate at the first occurance of an error. For best performance, call
 * Check first and call Errors only if Check returns false.
 */
export function Errors(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value],
    });
    const [_, errors] = SchemaErrors(context, type, value);
    return errors;
}
