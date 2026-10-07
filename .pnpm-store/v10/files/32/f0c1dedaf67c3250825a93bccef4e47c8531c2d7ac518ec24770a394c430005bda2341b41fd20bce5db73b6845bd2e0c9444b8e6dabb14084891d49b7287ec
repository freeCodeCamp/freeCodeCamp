import { isAudioBuffer, isAudioNode, isAudioParam, } from "./AdvancedTypeCheck.js";
import { isDefined, isObject, isUndef } from "./TypeCheck.js";
/**
 * Some objects should not be merged
 */
function noCopy(key, arg) {
    return (key === "value" ||
        isAudioParam(arg) ||
        isAudioNode(arg) ||
        isAudioBuffer(arg));
}
/**
 * Recursively merge an object
 * @param target the object to merge into
 * @param sources the source objects to merge
 */
export function deepMerge(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (noCopy(key, source[key])) {
                target[key] = source[key];
            }
            else if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                deepMerge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    // @ts-ignore
    return deepMerge(target, ...sources);
}
/**
 * Returns true if the two arrays have the same value for each of the elements
 */
export function deepEquals(arrayA, arrayB) {
    return (arrayA.length === arrayB.length &&
        arrayA.every((element, index) => arrayB[index] === element));
}
/**
 * Convert an args array into an object.
 * @internal
 */
export function optionsFromArguments(defaults, argsArray, keys = [], objKey) {
    const opts = {};
    const args = Array.from(argsArray);
    // if the first argument is an object and has an object key
    if (isObject(args[0]) && objKey && !Reflect.has(args[0], objKey)) {
        // if it's not part of the defaults
        const partOfDefaults = Object.keys(args[0]).some((key) => Reflect.has(defaults, key));
        if (!partOfDefaults) {
            // merge that key
            deepMerge(opts, { [objKey]: args[0] });
            // remove the obj key from the keys
            keys.splice(keys.indexOf(objKey), 1);
            // shift the first argument off
            args.shift();
        }
    }
    if (args.length === 1 && isObject(args[0])) {
        deepMerge(opts, args[0]);
    }
    else {
        for (let i = 0; i < keys.length; i++) {
            if (isDefined(args[i])) {
                opts[keys[i]] = args[i];
            }
        }
    }
    return deepMerge(defaults, opts);
}
/**
 * Return this instances default values by calling Constructor.getDefaults()
 */
export function getDefaultsFromInstance(instance) {
    return instance.constructor.getDefaults();
}
/**
 * Returns the fallback if the given object is undefined.
 * Take an array of arguments and return a formatted options object.
 * @internal
 */
export function defaultArg(given, fallback) {
    if (isUndef(given)) {
        return fallback;
    }
    else {
        return given;
    }
}
/**
 * Remove all of the properties belonging to omit from obj.
 */
export function omitFromObject(obj, omit) {
    omit.forEach((prop) => {
        if (Reflect.has(obj, prop)) {
            delete obj[prop];
        }
    });
    return obj;
}
//# sourceMappingURL=Defaults.js.map