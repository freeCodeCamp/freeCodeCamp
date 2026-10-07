import {
	isAudioBuffer,
	isAudioNode,
	isAudioParam,
} from "./AdvancedTypeCheck.js";
import { isDefined, isObject, isUndef } from "./TypeCheck.js";
import type { BaseToneOptions } from "../Tone.js";

/**
 * Some objects should not be merged
 */
function noCopy(key: string, arg: any): boolean {
	return (
		key === "value" ||
		isAudioParam(arg) ||
		isAudioNode(arg) ||
		isAudioBuffer(arg)
	);
}

export function deepMerge<T>(target: T): T;
export function deepMerge<T, U>(target: T, source1: U): T & U;
export function deepMerge<T, U, V>(
	target: T,
	source1: U,
	source2: V
): T & U & V;
export function deepMerge<T, U, V, W>(
	target: T,
	source1: U,
	source2: V,
	source3: W
): T & U & V & W;
/**
 * Recursively merge an object
 * @param target the object to merge into
 * @param sources the source objects to merge
 */
export function deepMerge(target: any, ...sources: any[]): any {
	if (!sources.length) {
		return target;
	}
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (noCopy(key, source[key])) {
				target[key] = source[key];
			} else if (isObject(source[key])) {
				if (!target[key]) {
					Object.assign(target, { [key]: {} });
				}
				deepMerge(target[key], source[key] as any);
			} else {
				Object.assign(target, { [key]: source[key] as any });
			}
		}
	}
	// @ts-ignore
	return deepMerge(target, ...sources);
}

/**
 * Returns true if the two arrays have the same value for each of the elements
 */
export function deepEquals<T>(arrayA: T[], arrayB: T[]): boolean {
	return (
		arrayA.length === arrayB.length &&
		arrayA.every((element, index) => arrayB[index] === element)
	);
}

/**
 * Convert an args array into an object.
 * @internal
 */
export function optionsFromArguments<T extends object>(
	defaults: T,
	argsArray: IArguments,
	keys: Array<keyof T> = [],
	objKey?: keyof T
): T {
	const opts: Partial<T> = {};
	const args = Array.from(argsArray);
	// if the first argument is an object and has an object key
	if (isObject(args[0]) && objKey && !Reflect.has(args[0], objKey)) {
		// if it's not part of the defaults
		const partOfDefaults = Object.keys(args[0]).some((key) =>
			Reflect.has(defaults, key)
		);
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
	} else {
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
export function getDefaultsFromInstance<T>(instance: T): BaseToneOptions {
	type ToneClass = {
		constructor: ToneClass;
		getDefaults: () => BaseToneOptions;
	} & T;

	return (instance as ToneClass).constructor.getDefaults();
}

/**
 * Returns the fallback if the given object is undefined.
 * Take an array of arguments and return a formatted options object.
 * @internal
 */
export function defaultArg<T>(given: T, fallback: T): T {
	if (isUndef(given)) {
		return fallback;
	} else {
		return given;
	}
}

/**
 * Remove all of the properties belonging to omit from obj.
 */
export function omitFromObject<T extends object, O extends string[]>(
	obj: T,
	omit: O
): Omit<T, keyof O> {
	omit.forEach((prop) => {
		if (Reflect.has(obj, prop)) {
			delete obj[prop];
		}
	});
	return obj;
}
