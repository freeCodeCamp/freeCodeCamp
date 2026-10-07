// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { FromType } from './from_type.mjs';
import { Assert } from '../assert/index.mjs';
/**
 * Repairs a value to match the provided type. This function is intended for data migration
 * scenarios where existing values need to be migrating to an updated type. This function will
 * repair partially mismatched values by populating missing sub-properties and elements with
 * default structures derived from the type. If the value already conforms to the type, no
 * action is performed.
 */
export function Repair(...args) {
    const [context, type, value] = Arguments.Match(args, {
        3: (context, type, value) => [context, type, value],
        2: (type, value) => [{}, type, value],
    });
    const repaired = FromType(context, type, value);
    Assert(context, type, repaired);
    return repaired;
}
