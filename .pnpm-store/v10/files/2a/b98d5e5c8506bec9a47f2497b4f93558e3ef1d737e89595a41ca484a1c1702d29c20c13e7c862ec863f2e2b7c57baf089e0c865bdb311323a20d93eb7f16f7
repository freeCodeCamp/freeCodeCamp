import { Error, safeEvery } from '../../../utils/globals.js';
const safeObjectCreate = Object.create;
const safeObjectDefineProperty = Object.defineProperty;
const safeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const safeObjectGetPrototypeOf = Object.getPrototypeOf;
const safeObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
const safeObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
const safeObjectEntries = Object.entries;
export function keyValuePairsToObjectMapper(definition) {
    const obj = definition[1] ? safeObjectCreate(null) : {};
    for (const keyValue of definition[0]) {
        safeObjectDefineProperty(obj, keyValue[0], {
            enumerable: true,
            configurable: true,
            writable: true,
            value: keyValue[1],
        });
    }
    return obj;
}
function buildIsValidPropertyNameFilter(obj) {
    return function isValidPropertyNameFilter(key) {
        const descriptor = safeObjectGetOwnPropertyDescriptor(obj, key);
        return (descriptor !== undefined &&
            !!descriptor.configurable &&
            !!descriptor.enumerable &&
            !!descriptor.writable &&
            descriptor.get === undefined &&
            descriptor.set === undefined);
    };
}
export function keyValuePairsToObjectUnmapper(value) {
    if (typeof value !== 'object' || value === null) {
        throw new Error('Incompatible instance received: should be a non-null object');
    }
    const hasNullPrototype = safeObjectGetPrototypeOf(value) === null;
    const hasObjectPrototype = 'constructor' in value && value.constructor === Object;
    if (!hasNullPrototype && !hasObjectPrototype) {
        throw new Error('Incompatible instance received: should be of exact type Object');
    }
    if (safeObjectGetOwnPropertySymbols(value).length > 0) {
        throw new Error('Incompatible instance received: should contain symbols');
    }
    if (!safeEvery(safeObjectGetOwnPropertyNames(value), buildIsValidPropertyNameFilter(value))) {
        throw new Error('Incompatible instance received: should contain only c/e/w properties without get/set');
    }
    return [safeObjectEntries(value), hasNullPrototype];
}
