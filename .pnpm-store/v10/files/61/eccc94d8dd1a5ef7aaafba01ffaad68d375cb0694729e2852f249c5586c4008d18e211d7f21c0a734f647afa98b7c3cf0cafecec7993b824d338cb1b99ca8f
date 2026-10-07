// deno-lint-ignore-file
// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { InstantiateType } from '../engine/instantiate.mjs';
import { Never } from '../types/index.mjs';
import * as Parser from './parser.mjs';
/** Parses a type from a TypeScript type expression */
export function Script(...args) {
    const [context, input, options] = Arguments.Match(args, {
        2: (script, options) => Guard.IsString(script) ? [{}, script, options] : [script, options, {}],
        3: (context, script, options) => [context, script, options],
        1: (script) => [{}, script, {}],
    });
    const result = Parser.Script(input);
    const parsed = Guard.IsArray(result) && Guard.IsEqual(result.length, 2)
        ? InstantiateType(context, { callstack: [] }, result[0])
        : Never();
    return Memory.Update(parsed, {}, options);
}
