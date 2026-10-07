// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Check as SchemaCheck } from '../../schema/index.mjs';
/** Checks a value matches the provided type. */
export function Check(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value]
    });
    return SchemaCheck(context, type, value);
}
