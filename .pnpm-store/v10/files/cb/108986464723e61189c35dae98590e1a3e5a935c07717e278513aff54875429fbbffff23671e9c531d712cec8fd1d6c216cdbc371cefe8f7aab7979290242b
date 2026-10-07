// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Asserts
// ------------------------------------------------------------------
function AssertNotRoot(indices) {
    if (indices.length === 0)
        throw Error('Cannot set root');
}
function AssertCanSet(value) {
    if (!Guard.IsObject(value))
        throw Error('Cannot set value');
}
// ------------------------------------------------------------------
// Indices
// ------------------------------------------------------------------
function IsNumericIndex(index) {
    return /^(0|[1-9]\d*)$/.test(index);
}
function TakeIndexRight(indices) {
    return [
        indices.slice(0, indices.length - 1),
        indices.slice(indices.length - 1)[0]
    ];
}
function HasIndex(index, value) {
    return Guard.IsObject(value) && Guard.HasPropertyKey(value, index);
}
function GetIndex(index, value) {
    return Guard.IsObject(value) ? value[index] : undefined;
}
function GetIndices(indices, value) {
    return indices.reduce((value, index) => GetIndex(index, value), value);
}
// ------------------------------------------------------------------
// Indices
// ------------------------------------------------------------------
/** Returns an array of path indices for the given pointer */
export function Indices(pointer) {
    if (Guard.IsEqual(pointer.length, 0))
        return [];
    const indices = pointer.split("/").map(index => index.replace(/~1/g, "/").replace(/~0/g, "~"));
    return (indices.length > 0 && indices[0] === '') ? indices.slice(1) : indices;
}
// ------------------------------------------------------------------
// Has
// ------------------------------------------------------------------
/** Returns true if a value exists at the current pointer */
export function Has(value, pointer) {
    let current = value;
    return Indices(pointer).every(index => {
        if (!HasIndex(index, current))
            return false;
        current = current[index];
        return true;
    });
}
// ------------------------------------------------------------------
// Get
// ------------------------------------------------------------------
/** Gets a value at the pointer, or undefined if not exists */
export function Get(value, pointer) {
    const indices = Indices(pointer);
    return GetIndices(indices, value);
}
// ------------------------------------------------------------------
// Set
// ------------------------------------------------------------------
/** Sets a value at the given pointer. May throw if the target value is not indexable */
export function Set(value, pointer, next) {
    const indices = Indices(pointer);
    AssertNotRoot(indices);
    const [head, index] = TakeIndexRight(indices);
    const parent = GetIndices(head, value);
    AssertCanSet(parent);
    parent[index] = next;
    return value;
}
// ------------------------------------------------------------------
// Delete
// ------------------------------------------------------------------
/** Deletes the value at the given pointer. May throw if the target value is not indexable */
export function Delete(value, pointer) {
    const indices = Indices(pointer);
    AssertNotRoot(indices);
    const [head, index] = TakeIndexRight(indices);
    const parent = GetIndices(head, value);
    AssertCanSet(parent);
    if (Guard.IsArray(parent) && IsNumericIndex(index)) {
        parent.splice(+index, 1);
    }
    else {
        delete parent[index];
    }
    return value;
}
