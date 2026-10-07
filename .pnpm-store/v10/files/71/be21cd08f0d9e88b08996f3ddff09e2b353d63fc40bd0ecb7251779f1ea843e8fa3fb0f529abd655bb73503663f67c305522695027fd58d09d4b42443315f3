// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from '../types/schema.mjs';
import { Unknown } from '../types/unknown.mjs';
/** Creates an Infer instruction. */
export function Infer(...args) {
    const [name, extends_] = Arguments.Match(args, {
        2: (name, extends_) => [name, extends_, extends_],
        1: (name) => [name, Unknown(), Unknown()],
    });
    return Memory.Create({ ['~kind']: 'Infer' }, { type: 'infer', name, extends: extends_ }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TInfer. */
export function IsInfer(value) {
    return IsKind(value, 'Infer');
}
