// deno-fmt-ignore-file
import { Guard, GlobalsGuard } from '../../guard/index.mjs';
import { Equal } from '../equal/index.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
function CreateUpdate(path, value) {
    return { type: 'update', path, value };
}
function CreateInsert(path, value) {
    return { type: 'insert', path, value };
}
function CreateDelete(path) {
    return { type: 'delete', path };
}
// ------------------------------------------------------------------
// Assert
// ------------------------------------------------------------------
function AssertCanDiffObject(value) {
    if (Guard.IsObject(value) && Guard.IsEqual(Guard.Symbols(value).length, 0))
        return;
    throw new Error('Cannot create diffs for objects with symbols keys');
}
// ------------------------------------------------------------------
// Object
// ------------------------------------------------------------------
function* FromObject(path, left, right) {
    if (!Guard.IsObject(right) || Guard.IsArray(right))
        return yield CreateUpdate(path, right);
    AssertCanDiffObject(left);
    AssertCanDiffObject(right);
    const leftKeys = Guard.Keys(left);
    const rightKeys = Guard.Keys(right);
    // ----------------------------------------------------------------
    // Insert
    // ----------------------------------------------------------------
    for (const key of rightKeys) {
        if (Guard.HasPropertyKey(left, key))
            continue;
        yield CreateInsert(`${path}/${key}`, right[key]);
    }
    // ----------------------------------------------------------------
    // Update
    // ----------------------------------------------------------------
    for (const key of leftKeys) {
        if (!Guard.HasPropertyKey(right, key))
            continue;
        if (Equal(left, right))
            continue;
        yield* FromValue(`${path}/${key}`, left[key], right[key]);
    }
    // ----------------------------------------------------------------
    // Delete
    // ----------------------------------------------------------------
    for (const key of leftKeys) {
        if (Guard.HasPropertyKey(right, key))
            continue;
        yield CreateDelete(`${path}/${key}`);
    }
}
// ------------------------------------------------------------------
// Array
// ------------------------------------------------------------------
function* FromArray(path, left, right) {
    if (!Guard.IsArray(right))
        return yield CreateUpdate(path, right);
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
        yield* FromValue(`${path}/${i}`, left[i], right[i]);
    }
    for (let i = 0; i < right.length; i++) {
        if (i < left.length)
            continue;
        yield CreateInsert(`${path}/${i}`, right[i]);
    }
    for (let i = left.length - 1; i >= 0; i--) {
        if (i < right.length)
            continue;
        yield CreateDelete(`${path}/${i}`);
    }
}
// ------------------------------------------------------------------
// TypedArray
// ------------------------------------------------------------------
function* FromTypedArray(path, left, right) {
    const typeLeft = globalThis.Object.getPrototypeOf(left).constructor.name;
    const typeRight = globalThis.Object.getPrototypeOf(right).constructor.name;
    const predicate = GlobalsGuard.IsTypeArray(right)
        && Guard.IsEqual(left.length, right.length)
        && Guard.IsEqual(typeLeft, typeRight);
    if (predicate) {
        for (let index = 0; index < Math.min(left.length, right.length); index++) {
            yield* FromValue(`${path}/${index}`, left[index], right[index]);
        }
    }
    else {
        return yield CreateUpdate(path, right);
    }
}
// ------------------------------------------------------------------
// Unknown
// ------------------------------------------------------------------
function* FromUnknown(path, left, right) {
    if (left === right)
        return;
    yield CreateUpdate(path, right);
}
// ------------------------------------------------------------------
// Value
// ------------------------------------------------------------------
function* FromValue(path, left, right) {
    return (GlobalsGuard.IsTypeArray(left) ? yield* FromTypedArray(path, left, right) :
        Guard.IsArray(left) ? yield* FromArray(path, left, right) :
            Guard.IsObject(left) ? yield* FromObject(path, left, right) :
                yield* FromUnknown(path, left, right));
}
// ------------------------------------------------------------------
// Diff
// ------------------------------------------------------------------
/**
 * Generates a sequence of Edit commands to transform the current value into the next value.
 * These commands can be serialized and sent over a network to synchronize a remote
 * value, applied with Patch, or tested with Hash. Edit commands should be treated as
 * opaque data structures; TypeBox may enhance this functionality in the future to
 * support full operational transformation and may change the commands. Do not apply
 * any logic directly to the command structures.
 */
export function Diff(current, next) {
    return [...FromValue('', current, next)];
}
