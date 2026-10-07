// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
// ------------------------------------------------------------------
// Pipeline
// ------------------------------------------------------------------
/** Creates a value processing pipeline. */
export function Pipeline(pipeline) {
    return (...args) => {
        const [context, type, value] = Arguments.Match(args, {
            3: (context, type, value) => [context, type, value],
            2: (type, value) => [{}, type, value],
        });
        return pipeline.reduce((result, func) => func(context, type, result), value);
    };
}
