/* !
 * loupe
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
import inspectArray from './array.js';
import inspectTypedArray from './typedarray.js';
import inspectDate from './date.js';
import inspectFunction from './function.js';
import inspectMap from './map.js';
import inspectNumber from './number.js';
import inspectBigInt from './bigint.js';
import inspectRegExp from './regexp.js';
import inspectSet from './set.js';
import inspectString from './string.js';
import inspectSymbol from './symbol.js';
import inspectPromise from './promise.js';
import inspectClass from './class.js';
import inspectObject from './object.js';
import inspectArguments from './arguments.js';
import inspectError from './error.js';
import inspectHTMLElement, { inspectNodeCollection } from './html.js';
import { normaliseOptions } from './helpers.js';
const symbolsSupported = typeof Symbol === 'function' && typeof Symbol.for === 'function';
const chaiInspect = symbolsSupported ? Symbol.for('chai/inspect') : '@@chai/inspect';
const nodeInspect = Symbol.for('nodejs.util.inspect.custom');
const constructorMap = new WeakMap();
const stringTagMap = {};
const baseTypesMap = {
    undefined: (value, options) => options.stylize('undefined', 'undefined'),
    null: (value, options) => options.stylize('null', 'null'),
    boolean: (value, options) => options.stylize(String(value), 'boolean'),
    Boolean: (value, options) => options.stylize(String(value), 'boolean'),
    number: inspectNumber,
    Number: inspectNumber,
    bigint: inspectBigInt,
    BigInt: inspectBigInt,
    string: inspectString,
    String: inspectString,
    function: inspectFunction,
    Function: inspectFunction,
    symbol: inspectSymbol,
    // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
    Symbol: inspectSymbol,
    Array: inspectArray,
    Date: inspectDate,
    Map: inspectMap,
    Set: inspectSet,
    RegExp: inspectRegExp,
    Promise: inspectPromise,
    // WeakSet, WeakMap are totally opaque to us
    WeakSet: (value, options) => options.stylize('WeakSet{…}', 'special'),
    WeakMap: (value, options) => options.stylize('WeakMap{…}', 'special'),
    Arguments: inspectArguments,
    Int8Array: inspectTypedArray,
    Uint8Array: inspectTypedArray,
    Uint8ClampedArray: inspectTypedArray,
    Int16Array: inspectTypedArray,
    Uint16Array: inspectTypedArray,
    Int32Array: inspectTypedArray,
    Uint32Array: inspectTypedArray,
    Float32Array: inspectTypedArray,
    Float64Array: inspectTypedArray,
    Generator: () => '',
    DataView: () => '',
    ArrayBuffer: () => '',
    Error: inspectError,
    HTMLCollection: inspectNodeCollection,
    NodeList: inspectNodeCollection,
};
// eslint-disable-next-line complexity
const inspectCustom = (value, options, type, inspectFn) => {
    if (chaiInspect in value && typeof value[chaiInspect] === 'function') {
        return value[chaiInspect](options);
    }
    if (nodeInspect in value && typeof value[nodeInspect] === 'function') {
        return value[nodeInspect](options.depth, options, inspectFn);
    }
    if ('inspect' in value && typeof value.inspect === 'function') {
        return value.inspect(options.depth, options);
    }
    if ('constructor' in value && constructorMap.has(value.constructor)) {
        return constructorMap.get(value.constructor)(value, options);
    }
    if (stringTagMap[type]) {
        return stringTagMap[type](value, options);
    }
    return '';
};
const toString = Object.prototype.toString;
// eslint-disable-next-line complexity
export function inspect(value, opts = {}) {
    const options = normaliseOptions(opts, inspect);
    const { customInspect } = options;
    let type = value === null ? 'null' : typeof value;
    if (type === 'object') {
        type = toString.call(value).slice(8, -1);
    }
    // If it is a base value that we already support, then use Loupe's inspector
    if (type in baseTypesMap) {
        return baseTypesMap[type](value, options);
    }
    // If `options.customInspect` is set to true then try to use the custom inspector
    if (customInspect && value) {
        const output = inspectCustom(value, options, type, inspect);
        if (output) {
            if (typeof output === 'string')
                return output;
            return inspect(output, options);
        }
    }
    const proto = value ? Object.getPrototypeOf(value) : false;
    // If it's a plain Object then use Loupe's inspector
    if (proto === Object.prototype || proto === null) {
        return inspectObject(value, options);
    }
    // Specifically account for HTMLElements
    // @ts-ignore
    if (value && typeof HTMLElement === 'function' && value instanceof HTMLElement) {
        return inspectHTMLElement(value, options);
    }
    if ('constructor' in value) {
        // If it is a class, inspect it like an object but add the constructor name
        if (value.constructor !== Object) {
            return inspectClass(value, options);
        }
        // If it is an object with an anonymous prototype, display it as an object.
        return inspectObject(value, options);
    }
    // last chance to check if it's an object
    if (value === Object(value)) {
        return inspectObject(value, options);
    }
    // We have run out of options! Just stringify the value
    return options.stylize(String(value), type);
}
export function registerConstructor(constructor, inspector) {
    if (constructorMap.has(constructor)) {
        return false;
    }
    constructorMap.set(constructor, inspector);
    return true;
}
export function registerStringTag(stringTag, inspector) {
    if (stringTag in stringTagMap) {
        return false;
    }
    stringTagMap[stringTag] = inspector;
    return true;
}
export const custom = chaiInspect;
export default inspect;
