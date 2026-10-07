// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { FromType } from './from_type.mjs';
/** Creates a value from the provided type. This function will use `default` annotations if present. */
export function Create(...args) {
    const [context, type] = Arguments.Match(args, {
        2: (context, type) => [context, type],
        1: (type) => [{}, type],
    });
    return FromType(context, type);
}
