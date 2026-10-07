// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
import { Unknown } from './unknown.mjs';
/** Creates a Parameter type. */
export function Parameter(...args) {
    const [name, extends_, equals] = Arguments.Match(args, {
        3: (name, extends_, equals) => [name, extends_, equals],
        2: (name, extends_) => [name, extends_, extends_],
        1: (name) => [name, Unknown(), Unknown()],
    });
    return Memory.Create({ '~kind': 'Parameter' }, { name, extends: extends_, equals }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TParameter. */
export function IsParameter(value) {
    return IsKind(value, 'Parameter');
}
