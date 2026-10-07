import {
	DRAFT_STATE,
	DRAFTABLE,
	Objectish,
	Drafted,
	AnyObject,
	AnyMap,
	AnySet,
	ImmerState,
	ArchType,
	die,
	StrictMode
} from "../internal"

const O = Object

export const getPrototypeOf = O.getPrototypeOf

export const CONSTRUCTOR = "constructor"
export const PROTOTYPE = "prototype"

export const CONFIGURABLE = "configurable"
export const ENUMERABLE = "enumerable"
export const WRITABLE = "writable"
export const VALUE = "value"

/** Returns true if the given value is an Immer draft */
/*#__PURE__*/
export let isDraft = (value: any): boolean => !!value && !!value[DRAFT_STATE]

/** Returns true if the given value can be drafted by Immer */
/*#__PURE__*/
export function isDraftable(value: any): boolean {
	if (!value) return false
	return (
		isPlainObject(value) ||
		isArray(value) ||
		!!value[DRAFTABLE] ||
		!!value[CONSTRUCTOR]?.[DRAFTABLE] ||
		isMap(value) ||
		isSet(value)
	)
}

const objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString()
const cachedCtorStrings = new WeakMap()
/*#__PURE__*/
export function isPlainObject(value: any): boolean {
	if (!value || !isObjectish(value)) return false
	const proto = getPrototypeOf(value)
	if (proto === null || proto === O[PROTOTYPE]) return true

	const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR]
	if (Ctor === Object) return true

	if (!isFunction(Ctor)) return false

	let ctorString = cachedCtorStrings.get(Ctor)
	if (ctorString === undefined) {
		ctorString = Function.toString.call(Ctor)
		cachedCtorStrings.set(Ctor, ctorString)
	}

	return ctorString === objectCtorString
}

/** Get the underlying object that is represented by the given draft */
/*#__PURE__*/
export function original<T>(value: T): T | undefined
export function original(value: Drafted<any>): any {
	if (!isDraft(value)) die(15, value)
	return value[DRAFT_STATE].base_
}

/**
 * Each iterates a map, set or array.
 * Or, if any other kind of object, all of its own properties.
 *
 * @param obj The object to iterate over
 * @param iter The iterator function
 * @param strict When true (default), includes symbols and non-enumerable properties.
 *               When false, uses looseiteration over only enumerable string properties.
 */
export function each<T extends Objectish>(
	obj: T,
	iter: (key: string | number, value: any, source: T) => void,
	strict?: boolean
): void
export function each(obj: any, iter: any, strict: boolean = true) {
	if (getArchtype(obj) === ArchType.Object) {
		// If strict, we do a full iteration including symbols and non-enumerable properties
		// Otherwise, we only iterate enumerable string properties for performance
		const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj)
		keys.forEach(key => {
			iter(key, obj[key], obj)
		})
	} else {
		obj.forEach((entry: any, index: any) => iter(index, entry, obj))
	}
}

/*#__PURE__*/
export function getArchtype(thing: any): ArchType {
	const state: undefined | ImmerState = thing[DRAFT_STATE]
	return state
		? state.type_
		: isArray(thing)
		? ArchType.Array
		: isMap(thing)
		? ArchType.Map
		: isSet(thing)
		? ArchType.Set
		: ArchType.Object
}

/*#__PURE__*/
export let has = (
	thing: any,
	prop: PropertyKey,
	type = getArchtype(thing)
): boolean =>
	type === ArchType.Map
		? thing.has(prop)
		: O[PROTOTYPE].hasOwnProperty.call(thing, prop)

/*#__PURE__*/
export let get = (
	thing: AnyMap | AnyObject,
	prop: PropertyKey,
	type = getArchtype(thing)
): any =>
	// @ts-ignore
	type === ArchType.Map ? thing.get(prop) : thing[prop]

/*#__PURE__*/
export let set = (
	thing: any,
	propOrOldValue: PropertyKey,
	value: any,
	type = getArchtype(thing)
) => {
	if (type === ArchType.Map) thing.set(propOrOldValue, value)
	else if (type === ArchType.Set) {
		thing.add(value)
	} else thing[propOrOldValue] = value
}

/*#__PURE__*/
export function is(x: any, y: any): boolean {
	// From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
	if (x === y) {
		return x !== 0 || 1 / x === 1 / y
	} else {
		return x !== x && y !== y
	}
}

export let isArray = Array.isArray

/*#__PURE__*/
export let isMap = (target: any): target is AnyMap => target instanceof Map

/*#__PURE__*/
export let isSet = (target: any): target is AnySet => target instanceof Set

export let isObjectish = (target: any) => typeof target === "object"

export let isFunction = (target: any): target is Function =>
	typeof target === "function"

export let isBoolean = (target: any): target is boolean =>
	typeof target === "boolean"

export function isArrayIndex(value: string | number): value is number | string {
	const n = +value
	return Number.isInteger(n) && String(n) === value
}

export let getProxyDraft = <T extends any>(value: T): ImmerState | null => {
	if (!isObjectish(value)) return null
	return (value as {[DRAFT_STATE]: any})?.[DRAFT_STATE]
}

/*#__PURE__*/
export let latest = (state: ImmerState): any => state.copy_ || state.base_

export let getValue = <T extends object>(value: T): T => {
	const proxyDraft = getProxyDraft(value)
	return proxyDraft ? proxyDraft.copy_ ?? proxyDraft.base_ : value
}

export let getFinalValue = (state: ImmerState): any =>
	state.modified_ ? state.copy_ : state.base_

/*#__PURE__*/
export function shallowCopy(base: any, strict: StrictMode) {
	if (isMap(base)) {
		return new Map(base)
	}
	if (isSet(base)) {
		return new Set(base)
	}
	if (isArray(base)) return Array[PROTOTYPE].slice.call(base)

	const isPlain = isPlainObject(base)

	if (strict === true || (strict === "class_only" && !isPlain)) {
		// Perform a strict copy
		const descriptors = O.getOwnPropertyDescriptors(base)
		delete descriptors[DRAFT_STATE as any]
		let keys = Reflect.ownKeys(descriptors)
		for (let i = 0; i < keys.length; i++) {
			const key: any = keys[i]
			const desc = descriptors[key]
			if (desc[WRITABLE] === false) {
				desc[WRITABLE] = true
				desc[CONFIGURABLE] = true
			}
			// like object.assign, we will read any _own_, get/set accessors. This helps in dealing
			// with libraries that trap values, like mobx or vue
			// unlike object.assign, non-enumerables will be copied as well
			if (desc.get || desc.set)
				descriptors[key] = {
					[CONFIGURABLE]: true,
					[WRITABLE]: true, // could live with !!desc.set as well here...
					[ENUMERABLE]: desc[ENUMERABLE],
					[VALUE]: base[key]
				}
		}
		return O.create(getPrototypeOf(base), descriptors)
	} else {
		// perform a sloppy copy
		const proto = getPrototypeOf(base)
		if (proto !== null && isPlain) {
			return {...base} // assumption: better inner class optimization than the assign below
		}
		const obj = O.create(proto)
		return O.assign(obj, base)
	}
}

/**
 * Freezes draftable objects. Returns the original object.
 * By default freezes shallowly, but if the second argument is `true` it will freeze recursively.
 *
 * @param obj
 * @param deep
 */
export function freeze<T>(obj: T, deep?: boolean): T
export function freeze<T>(obj: any, deep: boolean = false): T {
	if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj
	if (getArchtype(obj) > 1 /* Map or Set */) {
		O.defineProperties(obj, {
			set: dontMutateMethodOverride,
			add: dontMutateMethodOverride,
			clear: dontMutateMethodOverride,
			delete: dontMutateMethodOverride
		})
	}
	O.freeze(obj)
	if (deep)
		// See #590, don't recurse into non-enumerable / Symbol properties when freezing
		// So use Object.values (only string-like, enumerables) instead of each()
		each(
			obj,
			(_key, value) => {
				freeze(value, true)
			},
			false
		)
	return obj
}

function dontMutateFrozenCollections() {
	die(2)
}

const dontMutateMethodOverride = {
	[VALUE]: dontMutateFrozenCollections
}

export function isFrozen(obj: any): boolean {
	// Fast path: primitives and null/undefined are always "frozen"
	if (obj === null || !isObjectish(obj)) return true
	return O.isFrozen(obj)
}
