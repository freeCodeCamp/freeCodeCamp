// deno-lint-ignore-file ban-types no-explicit-any
// deno-fmt-ignore-file
import { Metrics } from './metrics.mjs';
/**
 * Performs an Object assign using the Left and Right object types. We track this operation as it
 * creates a new GC handle per assignment.
 */
export function Assign(left, right) {
    Metrics.assign += 1;
    return { ...left, ...right };
}
