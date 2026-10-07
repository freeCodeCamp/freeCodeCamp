"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncToStringMethod = exports.toStringMethod = void 0;
exports.hasToStringMethod = hasToStringMethod;
exports.hasAsyncToStringMethod = hasAsyncToStringMethod;
exports.stringifyInternal = stringifyInternal;
exports.stringify = stringify;
exports.possiblyAsyncStringify = possiblyAsyncStringify;
exports.asyncStringify = asyncStringify;
const globals_1 = require("./globals");
const safeArrayFrom = Array.from;
const safeBufferIsBuffer = typeof Buffer !== 'undefined' ? Buffer.isBuffer : undefined;
const safeJsonStringify = JSON.stringify;
const safeNumberIsNaN = Number.isNaN;
const safeObjectKeys = Object.keys;
const safeObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
const safeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const safeObjectGetPrototypeOf = Object.getPrototypeOf;
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
exports.toStringMethod = Symbol.for('fast-check/toStringMethod');
function hasToStringMethod(instance) {
    return (instance !== null &&
        (typeof instance === 'object' || typeof instance === 'function') &&
        exports.toStringMethod in instance &&
        typeof instance[exports.toStringMethod] === 'function');
}
exports.asyncToStringMethod = Symbol.for('fast-check/asyncToStringMethod');
function hasAsyncToStringMethod(instance) {
    return (instance !== null &&
        (typeof instance === 'object' || typeof instance === 'function') &&
        exports.asyncToStringMethod in instance &&
        typeof instance[exports.asyncToStringMethod] === 'function');
}
const findSymbolNameRegex = /^Symbol\((.*)\)$/;
function getSymbolDescription(s) {
    if (s.description !== undefined)
        return s.description;
    const m = findSymbolNameRegex.exec((0, globals_1.String)(s));
    return m && m[1].length ? m[1] : null;
}
function stringifyNumber(numValue) {
    switch (numValue) {
        case 0:
            return 1 / numValue === safeNegativeInfinity ? '-0' : '0';
        case safeNegativeInfinity:
            return 'Number.NEGATIVE_INFINITY';
        case safePositiveInfinity:
            return 'Number.POSITIVE_INFINITY';
        default:
            return numValue === numValue ? (0, globals_1.String)(numValue) : 'Number.NaN';
    }
}
function isSparseArray(arr) {
    let previousNumberedIndex = -1;
    for (const index in arr) {
        const numberedIndex = Number(index);
        if (numberedIndex !== previousNumberedIndex + 1)
            return true;
        previousNumberedIndex = numberedIndex;
    }
    return previousNumberedIndex + 1 !== arr.length;
}
function stringifyInternal(value, previousValues, getAsyncContent) {
    const currentValues = [...previousValues, value];
    if (typeof value === 'object') {
        if ((0, globals_1.safeIndexOf)(previousValues, value) !== -1) {
            return '[cyclic]';
        }
    }
    if (hasAsyncToStringMethod(value)) {
        const content = getAsyncContent(value);
        if (content.state === 'fulfilled') {
            return content.value;
        }
    }
    if (hasToStringMethod(value)) {
        try {
            return value[exports.toStringMethod]();
        }
        catch (err) {
        }
    }
    switch ((0, globals_1.safeToString)(value)) {
        case '[object Array]': {
            const arr = value;
            if (arr.length >= 50 && isSparseArray(arr)) {
                const assignments = [];
                for (const index in arr) {
                    if (!safeNumberIsNaN(Number(index)))
                        (0, globals_1.safePush)(assignments, `${index}:${stringifyInternal(arr[index], currentValues, getAsyncContent)}`);
                }
                return assignments.length !== 0
                    ? `Object.assign(Array(${arr.length}),{${(0, globals_1.safeJoin)(assignments, ',')}})`
                    : `Array(${arr.length})`;
            }
            const stringifiedArray = (0, globals_1.safeJoin)((0, globals_1.safeMap)(arr, (v) => stringifyInternal(v, currentValues, getAsyncContent)), ',');
            return arr.length === 0 || arr.length - 1 in arr ? `[${stringifiedArray}]` : `[${stringifiedArray},]`;
        }
        case '[object BigInt]':
            return `${value}n`;
        case '[object Boolean]': {
            const unboxedToString = value == true ? 'true' : 'false';
            return typeof value === 'boolean' ? unboxedToString : `new Boolean(${unboxedToString})`;
        }
        case '[object Date]': {
            const d = value;
            return safeNumberIsNaN((0, globals_1.safeGetTime)(d)) ? `new Date(NaN)` : `new Date(${safeJsonStringify((0, globals_1.safeToISOString)(d))})`;
        }
        case '[object Map]':
            return `new Map(${stringifyInternal(Array.from(value), currentValues, getAsyncContent)})`;
        case '[object Null]':
            return `null`;
        case '[object Number]':
            return typeof value === 'number' ? stringifyNumber(value) : `new Number(${stringifyNumber(Number(value))})`;
        case '[object Object]': {
            try {
                const toStringAccessor = value.toString;
                if (typeof toStringAccessor === 'function' && toStringAccessor !== Object.prototype.toString) {
                    return value.toString();
                }
            }
            catch (err) {
                return '[object Object]';
            }
            const mapper = (k) => `${k === '__proto__'
                ? '["__proto__"]'
                : typeof k === 'symbol'
                    ? `[${stringifyInternal(k, currentValues, getAsyncContent)}]`
                    : safeJsonStringify(k)}:${stringifyInternal(value[k], currentValues, getAsyncContent)}`;
            const stringifiedProperties = [
                ...(0, globals_1.safeMap)(safeObjectKeys(value), mapper),
                ...(0, globals_1.safeMap)((0, globals_1.safeFilter)(safeObjectGetOwnPropertySymbols(value), (s) => {
                    const descriptor = safeObjectGetOwnPropertyDescriptor(value, s);
                    return descriptor && descriptor.enumerable;
                }), mapper),
            ];
            const rawRepr = '{' + (0, globals_1.safeJoin)(stringifiedProperties, ',') + '}';
            if (safeObjectGetPrototypeOf(value) === null) {
                return rawRepr === '{}' ? 'Object.create(null)' : `Object.assign(Object.create(null),${rawRepr})`;
            }
            return rawRepr;
        }
        case '[object Set]':
            return `new Set(${stringifyInternal(Array.from(value), currentValues, getAsyncContent)})`;
        case '[object String]':
            return typeof value === 'string' ? safeJsonStringify(value) : `new String(${safeJsonStringify(value)})`;
        case '[object Symbol]': {
            const s = value;
            if (globals_1.Symbol.keyFor(s) !== undefined) {
                return `Symbol.for(${safeJsonStringify(globals_1.Symbol.keyFor(s))})`;
            }
            const desc = getSymbolDescription(s);
            if (desc === null) {
                return 'Symbol()';
            }
            const knownSymbol = desc.startsWith('Symbol.') && globals_1.Symbol[desc.substring(7)];
            return s === knownSymbol ? desc : `Symbol(${safeJsonStringify(desc)})`;
        }
        case '[object Promise]': {
            const promiseContent = getAsyncContent(value);
            switch (promiseContent.state) {
                case 'fulfilled':
                    return `Promise.resolve(${stringifyInternal(promiseContent.value, currentValues, getAsyncContent)})`;
                case 'rejected':
                    return `Promise.reject(${stringifyInternal(promiseContent.value, currentValues, getAsyncContent)})`;
                case 'pending':
                    return `new Promise(() => {/*pending*/})`;
                case 'unknown':
                default:
                    return `new Promise(() => {/*unknown*/})`;
            }
        }
        case '[object Error]':
            if (value instanceof Error) {
                return `new Error(${stringifyInternal(value.message, currentValues, getAsyncContent)})`;
            }
            break;
        case '[object Undefined]':
            return `undefined`;
        case '[object Int8Array]':
        case '[object Uint8Array]':
        case '[object Uint8ClampedArray]':
        case '[object Int16Array]':
        case '[object Uint16Array]':
        case '[object Int32Array]':
        case '[object Uint32Array]':
        case '[object Float32Array]':
        case '[object Float64Array]':
        case '[object BigInt64Array]':
        case '[object BigUint64Array]': {
            if (typeof safeBufferIsBuffer === 'function' && safeBufferIsBuffer(value)) {
                return `Buffer.from(${stringifyInternal(safeArrayFrom(value.values()), currentValues, getAsyncContent)})`;
            }
            const valuePrototype = safeObjectGetPrototypeOf(value);
            const className = valuePrototype && valuePrototype.constructor && valuePrototype.constructor.name;
            if (typeof className === 'string') {
                const typedArray = value;
                const valuesFromTypedArr = typedArray.values();
                return `${className}.from(${stringifyInternal(safeArrayFrom(valuesFromTypedArr), currentValues, getAsyncContent)})`;
            }
            break;
        }
    }
    try {
        return value.toString();
    }
    catch (_a) {
        return (0, globals_1.safeToString)(value);
    }
}
function stringify(value) {
    return stringifyInternal(value, [], () => ({ state: 'unknown', value: undefined }));
}
function possiblyAsyncStringify(value) {
    const stillPendingMarker = (0, globals_1.Symbol)();
    const pendingPromisesForCache = [];
    const cache = new globals_1.Map();
    function createDelay0() {
        let handleId = null;
        const cancel = () => {
            if (handleId !== null) {
                clearTimeout(handleId);
            }
        };
        const delay = new Promise((resolve) => {
            handleId = setTimeout(() => {
                handleId = null;
                resolve(stillPendingMarker);
            }, 0);
        });
        return { delay, cancel };
    }
    const unknownState = { state: 'unknown', value: undefined };
    const getAsyncContent = function getAsyncContent(data) {
        const cacheKey = data;
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }
        const delay0 = createDelay0();
        const p = exports.asyncToStringMethod in data
            ? Promise.resolve().then(() => data[exports.asyncToStringMethod]())
            : data;
        p.catch(() => { });
        pendingPromisesForCache.push(Promise.race([p, delay0.delay]).then((successValue) => {
            if (successValue === stillPendingMarker)
                cache.set(cacheKey, { state: 'pending', value: undefined });
            else
                cache.set(cacheKey, { state: 'fulfilled', value: successValue });
            delay0.cancel();
        }, (errorValue) => {
            cache.set(cacheKey, { state: 'rejected', value: errorValue });
            delay0.cancel();
        }));
        cache.set(cacheKey, unknownState);
        return unknownState;
    };
    function loop() {
        const stringifiedValue = stringifyInternal(value, [], getAsyncContent);
        if (pendingPromisesForCache.length === 0) {
            return stringifiedValue;
        }
        return Promise.all(pendingPromisesForCache.splice(0)).then(loop);
    }
    return loop();
}
async function asyncStringify(value) {
    return Promise.resolve(possiblyAsyncStringify(value));
}
