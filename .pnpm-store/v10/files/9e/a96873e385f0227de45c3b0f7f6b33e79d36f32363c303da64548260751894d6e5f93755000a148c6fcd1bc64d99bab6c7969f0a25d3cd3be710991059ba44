import { safeApply } from './apply.js';
const SArray = typeof Array !== 'undefined' ? Array : undefined;
export { SArray as Array };
const SBigInt = typeof BigInt !== 'undefined' ? BigInt : undefined;
export { SBigInt as BigInt };
const SBigInt64Array = typeof BigInt64Array !== 'undefined' ? BigInt64Array : undefined;
export { SBigInt64Array as BigInt64Array };
const SBigUint64Array = typeof BigUint64Array !== 'undefined' ? BigUint64Array : undefined;
export { SBigUint64Array as BigUint64Array };
const SBoolean = typeof Boolean !== 'undefined' ? Boolean : undefined;
export { SBoolean as Boolean };
const SDate = typeof Date !== 'undefined' ? Date : undefined;
export { SDate as Date };
const SError = typeof Error !== 'undefined' ? Error : undefined;
export { SError as Error };
const SFloat32Array = typeof Float32Array !== 'undefined' ? Float32Array : undefined;
export { SFloat32Array as Float32Array };
const SFloat64Array = typeof Float64Array !== 'undefined' ? Float64Array : undefined;
export { SFloat64Array as Float64Array };
const SInt8Array = typeof Int8Array !== 'undefined' ? Int8Array : undefined;
export { SInt8Array as Int8Array };
const SInt16Array = typeof Int16Array !== 'undefined' ? Int16Array : undefined;
export { SInt16Array as Int16Array };
const SInt32Array = typeof Int32Array !== 'undefined' ? Int32Array : undefined;
export { SInt32Array as Int32Array };
const SNumber = typeof Number !== 'undefined' ? Number : undefined;
export { SNumber as Number };
const SString = typeof String !== 'undefined' ? String : undefined;
export { SString as String };
const SSet = typeof Set !== 'undefined' ? Set : undefined;
export { SSet as Set };
const SUint8Array = typeof Uint8Array !== 'undefined' ? Uint8Array : undefined;
export { SUint8Array as Uint8Array };
const SUint8ClampedArray = typeof Uint8ClampedArray !== 'undefined' ? Uint8ClampedArray : undefined;
export { SUint8ClampedArray as Uint8ClampedArray };
const SUint16Array = typeof Uint16Array !== 'undefined' ? Uint16Array : undefined;
export { SUint16Array as Uint16Array };
const SUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : undefined;
export { SUint32Array as Uint32Array };
const SencodeURIComponent = typeof encodeURIComponent !== 'undefined' ? encodeURIComponent : undefined;
export { SencodeURIComponent as encodeURIComponent };
const SMap = Map;
export { SMap as Map };
const SSymbol = Symbol;
export { SSymbol as Symbol };
const untouchedForEach = Array.prototype.forEach;
const untouchedIndexOf = Array.prototype.indexOf;
const untouchedJoin = Array.prototype.join;
const untouchedMap = Array.prototype.map;
const untouchedFilter = Array.prototype.filter;
const untouchedPush = Array.prototype.push;
const untouchedPop = Array.prototype.pop;
const untouchedSplice = Array.prototype.splice;
const untouchedSlice = Array.prototype.slice;
const untouchedSort = Array.prototype.sort;
const untouchedEvery = Array.prototype.every;
function extractForEach(instance) {
    try {
        return instance.forEach;
    }
    catch (err) {
        return undefined;
    }
}
function extractIndexOf(instance) {
    try {
        return instance.indexOf;
    }
    catch (err) {
        return undefined;
    }
}
function extractJoin(instance) {
    try {
        return instance.join;
    }
    catch (err) {
        return undefined;
    }
}
function extractMap(instance) {
    try {
        return instance.map;
    }
    catch (err) {
        return undefined;
    }
}
function extractFilter(instance) {
    try {
        return instance.filter;
    }
    catch (err) {
        return undefined;
    }
}
function extractPush(instance) {
    try {
        return instance.push;
    }
    catch (err) {
        return undefined;
    }
}
function extractPop(instance) {
    try {
        return instance.pop;
    }
    catch (err) {
        return undefined;
    }
}
function extractSplice(instance) {
    try {
        return instance.splice;
    }
    catch (err) {
        return undefined;
    }
}
function extractSlice(instance) {
    try {
        return instance.slice;
    }
    catch (err) {
        return undefined;
    }
}
function extractSort(instance) {
    try {
        return instance.sort;
    }
    catch (err) {
        return undefined;
    }
}
function extractEvery(instance) {
    try {
        return instance.every;
    }
    catch (err) {
        return undefined;
    }
}
export function safeForEach(instance, fn) {
    if (extractForEach(instance) === untouchedForEach) {
        return instance.forEach(fn);
    }
    return safeApply(untouchedForEach, instance, [fn]);
}
export function safeIndexOf(instance, ...args) {
    if (extractIndexOf(instance) === untouchedIndexOf) {
        return instance.indexOf(...args);
    }
    return safeApply(untouchedIndexOf, instance, args);
}
export function safeJoin(instance, ...args) {
    if (extractJoin(instance) === untouchedJoin) {
        return instance.join(...args);
    }
    return safeApply(untouchedJoin, instance, args);
}
export function safeMap(instance, fn) {
    if (extractMap(instance) === untouchedMap) {
        return instance.map(fn);
    }
    return safeApply(untouchedMap, instance, [fn]);
}
export function safeFilter(instance, predicate) {
    if (extractFilter(instance) === untouchedFilter) {
        return instance.filter(predicate);
    }
    return safeApply(untouchedFilter, instance, [predicate]);
}
export function safePush(instance, ...args) {
    if (extractPush(instance) === untouchedPush) {
        return instance.push(...args);
    }
    return safeApply(untouchedPush, instance, args);
}
export function safePop(instance) {
    if (extractPop(instance) === untouchedPop) {
        return instance.pop();
    }
    return safeApply(untouchedPop, instance, []);
}
export function safeSplice(instance, ...args) {
    if (extractSplice(instance) === untouchedSplice) {
        return instance.splice(...args);
    }
    return safeApply(untouchedSplice, instance, args);
}
export function safeSlice(instance, ...args) {
    if (extractSlice(instance) === untouchedSlice) {
        return instance.slice(...args);
    }
    return safeApply(untouchedSlice, instance, args);
}
export function safeSort(instance, ...args) {
    if (extractSort(instance) === untouchedSort) {
        return instance.sort(...args);
    }
    return safeApply(untouchedSort, instance, args);
}
export function safeEvery(instance, ...args) {
    if (extractEvery(instance) === untouchedEvery) {
        return instance.every(...args);
    }
    return safeApply(untouchedEvery, instance, args);
}
const untouchedGetTime = Date.prototype.getTime;
const untouchedToISOString = Date.prototype.toISOString;
function extractGetTime(instance) {
    try {
        return instance.getTime;
    }
    catch (err) {
        return undefined;
    }
}
function extractToISOString(instance) {
    try {
        return instance.toISOString;
    }
    catch (err) {
        return undefined;
    }
}
export function safeGetTime(instance) {
    if (extractGetTime(instance) === untouchedGetTime) {
        return instance.getTime();
    }
    return safeApply(untouchedGetTime, instance, []);
}
export function safeToISOString(instance) {
    if (extractToISOString(instance) === untouchedToISOString) {
        return instance.toISOString();
    }
    return safeApply(untouchedToISOString, instance, []);
}
const untouchedAdd = Set.prototype.add;
const untouchedHas = Set.prototype.has;
function extractAdd(instance) {
    try {
        return instance.add;
    }
    catch (err) {
        return undefined;
    }
}
function extractHas(instance) {
    try {
        return instance.has;
    }
    catch (err) {
        return undefined;
    }
}
export function safeAdd(instance, value) {
    if (extractAdd(instance) === untouchedAdd) {
        return instance.add(value);
    }
    return safeApply(untouchedAdd, instance, [value]);
}
export function safeHas(instance, value) {
    if (extractHas(instance) === untouchedHas) {
        return instance.has(value);
    }
    return safeApply(untouchedHas, instance, [value]);
}
const untouchedSet = WeakMap.prototype.set;
const untouchedGet = WeakMap.prototype.get;
function extractSet(instance) {
    try {
        return instance.set;
    }
    catch (err) {
        return undefined;
    }
}
function extractGet(instance) {
    try {
        return instance.get;
    }
    catch (err) {
        return undefined;
    }
}
export function safeSet(instance, key, value) {
    if (extractSet(instance) === untouchedSet) {
        return instance.set(key, value);
    }
    return safeApply(untouchedSet, instance, [key, value]);
}
export function safeGet(instance, key) {
    if (extractGet(instance) === untouchedGet) {
        return instance.get(key);
    }
    return safeApply(untouchedGet, instance, [key]);
}
const untouchedMapSet = Map.prototype.set;
const untouchedMapGet = Map.prototype.get;
function extractMapSet(instance) {
    try {
        return instance.set;
    }
    catch (err) {
        return undefined;
    }
}
function extractMapGet(instance) {
    try {
        return instance.get;
    }
    catch (err) {
        return undefined;
    }
}
export function safeMapSet(instance, key, value) {
    if (extractMapSet(instance) === untouchedMapSet) {
        return instance.set(key, value);
    }
    return safeApply(untouchedMapSet, instance, [key, value]);
}
export function safeMapGet(instance, key) {
    if (extractMapGet(instance) === untouchedMapGet) {
        return instance.get(key);
    }
    return safeApply(untouchedMapGet, instance, [key]);
}
const untouchedSplit = String.prototype.split;
const untouchedStartsWith = String.prototype.startsWith;
const untouchedEndsWith = String.prototype.endsWith;
const untouchedSubstring = String.prototype.substring;
const untouchedToLowerCase = String.prototype.toLowerCase;
const untouchedToUpperCase = String.prototype.toUpperCase;
const untouchedPadStart = String.prototype.padStart;
const untouchedCharCodeAt = String.prototype.charCodeAt;
const untouchedNormalize = String.prototype.normalize;
const untouchedReplace = String.prototype.replace;
function extractSplit(instance) {
    try {
        return instance.split;
    }
    catch (err) {
        return undefined;
    }
}
function extractStartsWith(instance) {
    try {
        return instance.startsWith;
    }
    catch (err) {
        return undefined;
    }
}
function extractEndsWith(instance) {
    try {
        return instance.endsWith;
    }
    catch (err) {
        return undefined;
    }
}
function extractSubstring(instance) {
    try {
        return instance.substring;
    }
    catch (err) {
        return undefined;
    }
}
function extractToLowerCase(instance) {
    try {
        return instance.toLowerCase;
    }
    catch (err) {
        return undefined;
    }
}
function extractToUpperCase(instance) {
    try {
        return instance.toUpperCase;
    }
    catch (err) {
        return undefined;
    }
}
function extractPadStart(instance) {
    try {
        return instance.padStart;
    }
    catch (err) {
        return undefined;
    }
}
function extractCharCodeAt(instance) {
    try {
        return instance.charCodeAt;
    }
    catch (err) {
        return undefined;
    }
}
function extractNormalize(instance) {
    try {
        return instance.normalize;
    }
    catch (err) {
        return undefined;
    }
}
function extractReplace(instance) {
    try {
        return instance.replace;
    }
    catch (err) {
        return undefined;
    }
}
export function safeSplit(instance, ...args) {
    if (extractSplit(instance) === untouchedSplit) {
        return instance.split(...args);
    }
    return safeApply(untouchedSplit, instance, args);
}
export function safeStartsWith(instance, ...args) {
    if (extractStartsWith(instance) === untouchedStartsWith) {
        return instance.startsWith(...args);
    }
    return safeApply(untouchedStartsWith, instance, args);
}
export function safeEndsWith(instance, ...args) {
    if (extractEndsWith(instance) === untouchedEndsWith) {
        return instance.endsWith(...args);
    }
    return safeApply(untouchedEndsWith, instance, args);
}
export function safeSubstring(instance, ...args) {
    if (extractSubstring(instance) === untouchedSubstring) {
        return instance.substring(...args);
    }
    return safeApply(untouchedSubstring, instance, args);
}
export function safeToLowerCase(instance) {
    if (extractToLowerCase(instance) === untouchedToLowerCase) {
        return instance.toLowerCase();
    }
    return safeApply(untouchedToLowerCase, instance, []);
}
export function safeToUpperCase(instance) {
    if (extractToUpperCase(instance) === untouchedToUpperCase) {
        return instance.toUpperCase();
    }
    return safeApply(untouchedToUpperCase, instance, []);
}
export function safePadStart(instance, ...args) {
    if (extractPadStart(instance) === untouchedPadStart) {
        return instance.padStart(...args);
    }
    return safeApply(untouchedPadStart, instance, args);
}
export function safeCharCodeAt(instance, index) {
    if (extractCharCodeAt(instance) === untouchedCharCodeAt) {
        return instance.charCodeAt(index);
    }
    return safeApply(untouchedCharCodeAt, instance, [index]);
}
export function safeNormalize(instance, form) {
    if (extractNormalize(instance) === untouchedNormalize) {
        return instance.normalize(form);
    }
    return safeApply(untouchedNormalize, instance, [form]);
}
export function safeReplace(instance, pattern, replacement) {
    if (extractReplace(instance) === untouchedReplace) {
        return instance.replace(pattern, replacement);
    }
    return safeApply(untouchedReplace, instance, [pattern, replacement]);
}
const untouchedNumberToString = Number.prototype.toString;
function extractNumberToString(instance) {
    try {
        return instance.toString;
    }
    catch (err) {
        return undefined;
    }
}
export function safeNumberToString(instance, ...args) {
    if (extractNumberToString(instance) === untouchedNumberToString) {
        return instance.toString(...args);
    }
    return safeApply(untouchedNumberToString, instance, args);
}
const untouchedHasOwnProperty = Object.prototype.hasOwnProperty;
const untouchedToString = Object.prototype.toString;
export function safeHasOwnProperty(instance, v) {
    return safeApply(untouchedHasOwnProperty, instance, [v]);
}
export function safeToString(instance) {
    return safeApply(untouchedToString, instance, []);
}
