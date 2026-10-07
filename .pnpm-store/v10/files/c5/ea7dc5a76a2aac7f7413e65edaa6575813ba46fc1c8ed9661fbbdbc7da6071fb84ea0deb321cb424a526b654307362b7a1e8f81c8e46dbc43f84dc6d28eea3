// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { FromType } from './from_type.mjs';
/**
 * Patches missing properties on the value using default annotations specified on the provided type. This
 * function returns unknown so callers should Check the return value before use. This function mutates the
 * provided value. If mutation is not wanted, you should Clone the value before passing to this function.
 */
export function Default(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value],
    });
    return FromType(context, type, value);
}
