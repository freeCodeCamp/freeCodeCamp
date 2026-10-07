"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = exports.Map = exports.encodeURIComponent = exports.Uint32Array = exports.Uint16Array = exports.Uint8ClampedArray = exports.Uint8Array = exports.Set = exports.String = exports.Number = exports.Int32Array = exports.Int16Array = exports.Int8Array = exports.Float64Array = exports.Float32Array = exports.Error = exports.Date = exports.Boolean = exports.BigUint64Array = exports.BigInt64Array = exports.BigInt = exports.Array = void 0;
exports.safeForEach = safeForEach;
exports.safeIndexOf = safeIndexOf;
exports.safeJoin = safeJoin;
exports.safeMap = safeMap;
exports.safeFilter = safeFilter;
exports.safePush = safePush;
exports.safePop = safePop;
exports.safeSplice = safeSplice;
exports.safeSlice = safeSlice;
exports.safeSort = safeSort;
exports.safeEvery = safeEvery;
exports.safeGetTime = safeGetTime;
exports.safeToISOString = safeToISOString;
exports.safeAdd = safeAdd;
exports.safeHas = safeHas;
exports.safeSet = safeSet;
exports.safeGet = safeGet;
exports.safeMapSet = safeMapSet;
exports.safeMapGet = safeMapGet;
exports.safeSplit = safeSplit;
exports.safeStartsWith = safeStartsWith;
exports.safeEndsWith = safeEndsWith;
exports.safeSubstring = safeSubstring;
exports.safeToLowerCase = safeToLowerCase;
exports.safeToUpperCase = safeToUpperCase;
exports.safePadStart = safePadStart;
exports.safeCharCodeAt = safeCharCodeAt;
exports.safeNormalize = safeNormalize;
exports.safeReplace = safeReplace;
exports.safeNumberToString = safeNumberToString;
exports.safeHasOwnProperty = safeHasOwnProperty;
exports.safeToString = safeToString;
const apply_1 = require("./apply");
const SArray = typeof Array !== 'undefined' ? Array : undefined;
exports.Array = SArray;
const SBigInt = typeof BigInt !== 'undefined' ? BigInt : undefined;
exports.BigInt = SBigInt;
const SBigInt64Array = typeof BigInt64Array !== 'undefined' ? BigInt64Array : undefined;
exports.BigInt64Array = SBigInt64Array;
const SBigUint64Array = typeof BigUint64Array !== 'undefined' ? BigUint64Array : undefined;
exports.BigUint64Array = SBigUint64Array;
const SBoolean = typeof Boolean !== 'undefined' ? Boolean : undefined;
exports.Boolean = SBoolean;
const SDate = typeof Date !== 'undefined' ? Date : undefined;
exports.Date = SDate;
const SError = typeof Error !== 'undefined' ? Error : undefined;
exports.Error = SError;
const SFloat32Array = typeof Float32Array !== 'undefined' ? Float32Array : undefined;
exports.Float32Array = SFloat32Array;
const SFloat64Array = typeof Float64Array !== 'undefined' ? Float64Array : undefined;
exports.Float64Array = SFloat64Array;
const SInt8Array = typeof Int8Array !== 'undefined' ? Int8Array : undefined;
exports.Int8Array = SInt8Array;
const SInt16Array = typeof Int16Array !== 'undefined' ? Int16Array : undefined;
exports.Int16Array = SInt16Array;
const SInt32Array = typeof Int32Array !== 'undefined' ? Int32Array : undefined;
exports.Int32Array = SInt32Array;
const SNumber = typeof Number !== 'undefined' ? Number : undefined;
exports.Number = SNumber;
const SString = typeof String !== 'undefined' ? String : undefined;
exports.String = SString;
const SSet = typeof Set !== 'undefined' ? Set : undefined;
exports.Set = SSet;
const SUint8Array = typeof Uint8Array !== 'undefined' ? Uint8Array : undefined;
exports.Uint8Array = SUint8Array;
const SUint8ClampedArray = typeof Uint8ClampedArray !== 'undefined' ? Uint8ClampedArray : undefined;
exports.Uint8ClampedArray = SUint8ClampedArray;
const SUint16Array = typeof Uint16Array !== 'undefined' ? Uint16Array : undefined;
exports.Uint16Array = SUint16Array;
const SUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : undefined;
exports.Uint32Array = SUint32Array;
const SencodeURIComponent = typeof encodeURIComponent !== 'undefined' ? encodeURIComponent : undefined;
exports.encodeURIComponent = SencodeURIComponent;
const SMap = Map;
exports.Map = SMap;
const SSymbol = Symbol;
exports.Symbol = SSymbol;
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
function safeForEach(instance, fn) {
    if (extractForEach(instance) === untouchedForEach) {
        return instance.forEach(fn);
    }
    return (0, apply_1.safeApply)(untouchedForEach, instance, [fn]);
}
function safeIndexOf(instance, ...args) {
    if (extractIndexOf(instance) === untouchedIndexOf) {
        return instance.indexOf(...args);
    }
    return (0, apply_1.safeApply)(untouchedIndexOf, instance, args);
}
function safeJoin(instance, ...args) {
    if (extractJoin(instance) === untouchedJoin) {
        return instance.join(...args);
    }
    return (0, apply_1.safeApply)(untouchedJoin, instance, args);
}
function safeMap(instance, fn) {
    if (extractMap(instance) === untouchedMap) {
        return instance.map(fn);
    }
    return (0, apply_1.safeApply)(untouchedMap, instance, [fn]);
}
function safeFilter(instance, predicate) {
    if (extractFilter(instance) === untouchedFilter) {
        return instance.filter(predicate);
    }
    return (0, apply_1.safeApply)(untouchedFilter, instance, [predicate]);
}
function safePush(instance, ...args) {
    if (extractPush(instance) === untouchedPush) {
        return instance.push(...args);
    }
    return (0, apply_1.safeApply)(untouchedPush, instance, args);
}
function safePop(instance) {
    if (extractPop(instance) === untouchedPop) {
        return instance.pop();
    }
    return (0, apply_1.safeApply)(untouchedPop, instance, []);
}
function safeSplice(instance, ...args) {
    if (extractSplice(instance) === untouchedSplice) {
        return instance.splice(...args);
    }
    return (0, apply_1.safeApply)(untouchedSplice, instance, args);
}
function safeSlice(instance, ...args) {
    if (extractSlice(instance) === untouchedSlice) {
        return instance.slice(...args);
    }
    return (0, apply_1.safeApply)(untouchedSlice, instance, args);
}
function safeSort(instance, ...args) {
    if (extractSort(instance) === untouchedSort) {
        return instance.sort(...args);
    }
    return (0, apply_1.safeApply)(untouchedSort, instance, args);
}
function safeEvery(instance, ...args) {
    if (extractEvery(instance) === untouchedEvery) {
        return instance.every(...args);
    }
    return (0, apply_1.safeApply)(untouchedEvery, instance, args);
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
function safeGetTime(instance) {
    if (extractGetTime(instance) === untouchedGetTime) {
        return instance.getTime();
    }
    return (0, apply_1.safeApply)(untouchedGetTime, instance, []);
}
function safeToISOString(instance) {
    if (extractToISOString(instance) === untouchedToISOString) {
        return instance.toISOString();
    }
    return (0, apply_1.safeApply)(untouchedToISOString, instance, []);
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
function safeAdd(instance, value) {
    if (extractAdd(instance) === untouchedAdd) {
        return instance.add(value);
    }
    return (0, apply_1.safeApply)(untouchedAdd, instance, [value]);
}
function safeHas(instance, value) {
    if (extractHas(instance) === untouchedHas) {
        return instance.has(value);
    }
    return (0, apply_1.safeApply)(untouchedHas, instance, [value]);
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
function safeSet(instance, key, value) {
    if (extractSet(instance) === untouchedSet) {
        return instance.set(key, value);
    }
    return (0, apply_1.safeApply)(untouchedSet, instance, [key, value]);
}
function safeGet(instance, key) {
    if (extractGet(instance) === untouchedGet) {
        return instance.get(key);
    }
    return (0, apply_1.safeApply)(untouchedGet, instance, [key]);
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
function safeMapSet(instance, key, value) {
    if (extractMapSet(instance) === untouchedMapSet) {
        return instance.set(key, value);
    }
    return (0, apply_1.safeApply)(untouchedMapSet, instance, [key, value]);
}
function safeMapGet(instance, key) {
    if (extractMapGet(instance) === untouchedMapGet) {
        return instance.get(key);
    }
    return (0, apply_1.safeApply)(untouchedMapGet, instance, [key]);
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
function safeSplit(instance, ...args) {
    if (extractSplit(instance) === untouchedSplit) {
        return instance.split(...args);
    }
    return (0, apply_1.safeApply)(untouchedSplit, instance, args);
}
function safeStartsWith(instance, ...args) {
    if (extractStartsWith(instance) === untouchedStartsWith) {
        return instance.startsWith(...args);
    }
    return (0, apply_1.safeApply)(untouchedStartsWith, instance, args);
}
function safeEndsWith(instance, ...args) {
    if (extractEndsWith(instance) === untouchedEndsWith) {
        return instance.endsWith(...args);
    }
    return (0, apply_1.safeApply)(untouchedEndsWith, instance, args);
}
function safeSubstring(instance, ...args) {
    if (extractSubstring(instance) === untouchedSubstring) {
        return instance.substring(...args);
    }
    return (0, apply_1.safeApply)(untouchedSubstring, instance, args);
}
function safeToLowerCase(instance) {
    if (extractToLowerCase(instance) === untouchedToLowerCase) {
        return instance.toLowerCase();
    }
    return (0, apply_1.safeApply)(untouchedToLowerCase, instance, []);
}
function safeToUpperCase(instance) {
    if (extractToUpperCase(instance) === untouchedToUpperCase) {
        return instance.toUpperCase();
    }
    return (0, apply_1.safeApply)(untouchedToUpperCase, instance, []);
}
function safePadStart(instance, ...args) {
    if (extractPadStart(instance) === untouchedPadStart) {
        return instance.padStart(...args);
    }
    return (0, apply_1.safeApply)(untouchedPadStart, instance, args);
}
function safeCharCodeAt(instance, index) {
    if (extractCharCodeAt(instance) === untouchedCharCodeAt) {
        return instance.charCodeAt(index);
    }
    return (0, apply_1.safeApply)(untouchedCharCodeAt, instance, [index]);
}
function safeNormalize(instance, form) {
    if (extractNormalize(instance) === untouchedNormalize) {
        return instance.normalize(form);
    }
    return (0, apply_1.safeApply)(untouchedNormalize, instance, [form]);
}
function safeReplace(instance, pattern, replacement) {
    if (extractReplace(instance) === untouchedReplace) {
        return instance.replace(pattern, replacement);
    }
    return (0, apply_1.safeApply)(untouchedReplace, instance, [pattern, replacement]);
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
function safeNumberToString(instance, ...args) {
    if (extractNumberToString(instance) === untouchedNumberToString) {
        return instance.toString(...args);
    }
    return (0, apply_1.safeApply)(untouchedNumberToString, instance, args);
}
const untouchedHasOwnProperty = Object.prototype.hasOwnProperty;
const untouchedToString = Object.prototype.toString;
function safeHasOwnProperty(instance, v) {
    return (0, apply_1.safeApply)(untouchedHasOwnProperty, instance, [v]);
}
function safeToString(instance) {
    return (0, apply_1.safeApply)(untouchedToString, instance, []);
}
