import { Arguments } from '../../system/arguments/index.mjs';
import { FromType } from './from_type.mjs';
/**
 * Cleans a value by removing non-evaluated properties and elements as derived from the provided type.
 * This function returns unknown so callers should Check the return value before use. This function
 * mutates the provided value. If mutation is not wanted, you should Clone the value before passing
 * to this function.
 */
export function Clean(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value]
    });
    return FromType(context, type, value);
}
