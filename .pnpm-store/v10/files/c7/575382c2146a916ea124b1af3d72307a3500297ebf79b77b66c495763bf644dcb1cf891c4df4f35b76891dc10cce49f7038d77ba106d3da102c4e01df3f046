// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { InstanceTypeAction } from '../engine/instance_type/instantiate.mjs';
/** Creates a deferred InstanceType action. */
export function InstanceTypeDeferred(type, options = {}) {
    return Deferred('InstanceType', [type], options);
}
/** Applies a InstanceType action to the given type. */
export function InstanceType(type, options = {}) {
    return InstanceTypeAction(type, options);
}
