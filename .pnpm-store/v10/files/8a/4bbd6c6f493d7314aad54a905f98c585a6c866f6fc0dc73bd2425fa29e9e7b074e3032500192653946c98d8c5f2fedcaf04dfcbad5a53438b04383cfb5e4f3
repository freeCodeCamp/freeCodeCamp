// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Arguments } from '../system/arguments/index.mjs';
import * as Engine from './engine/index.mjs';
/** Checks a value against the provided schema */
export function Check(...args) {
    const [context, schema, value] = Arguments.Match(args, {
        3: (context, schema, value) => [context, schema, value],
        2: (schema, value) => [{}, schema, value]
    });
    const stack = new Engine.Stack(context, schema);
    const checkContext = new Engine.CheckContext();
    return Engine.CheckSchema(stack, checkContext, schema, value);
}
