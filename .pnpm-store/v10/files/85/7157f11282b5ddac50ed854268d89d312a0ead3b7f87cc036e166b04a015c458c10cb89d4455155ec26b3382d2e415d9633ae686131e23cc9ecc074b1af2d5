import {
	DRAFT_STATE,
	DRAFTABLE,
	hasSet,
	Objectish,
	Drafted,
	AnyObject,
	AnyMap,
	AnySet,
	ImmerState,
	hasMap,
	Archtype,
	die
} from "../internal"

/** Returns true if the given value is an Immer draft */
/*#__PURE__*/
export function isDraft(value: any): boolean {
	return !!value && !!value[DRAFT_STATE]
}

/** Returns true if the given value can be drafted by Immer */
/*#__PURE__*/
export function isDraftable(value: any): boolean {
	if (!value) return false
	return (
		isPlainObject(value) ||
		Array.isArray(value) ||
		!!value[DRAFTABLE] ||
		!!value.constructor?.[DRAFTABLE] ||
		isMap(value) ||
		isSet(value)
	)
}

const objectCtorString = Object.prototype.constructor.toString()
/*#__PURE__*/
export function isPlainObject(value: any): boolean {
	if (!value || typeof value !== "object") return false
	const proto = Object.getPrototypeOf(value)
	if (proto === null) {
		return true
	}
	const Ctor =
		Object.hasOwnProperty.call(proto, "constructor") && proto.constructor

	if (Ctor === Object) return true

	return (
		typeof Ctor == "function" &&
		Function.toString.call(Ctor) === objectCtorString
	)
}

/** Get the underlying object that is represented by the given draft */
/*#__PURE__*/
export function original<T>(value: T): T | undefined
export function original(value: Drafted<any>): any {
	if (!isDraft(value)) die(23, value)
	return value[DRAFT_STATE].base_
}

/*#__PURE__*/
export const ownKeys: (target: AnyObject) => PropertyKey[] =
	typeof Reflect !== "undefined" && Reflect.ownKeys
		? Reflect.ownKeys
		: typeof Object.getOwnPropertySymbols !== "undefined"
		? obj =>
				Object.getOwnPropertyNames(obj).concat(
					Object.getOwnPropertySymbols(obj) as any
				)
		: /* istanbul ignore next */ Object.getOwnPropertyNames

export const getOwnPropertyDescriptors =
	Object.getOwnPropertyDescriptors ||
	function getOwnPropertyDescriptors(target: any) {
		// Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
		const res: any = {}
		ownKeys(target).forEach(key => {
			res[key] = Object.getOwnPropertyDescriptor(target, key)
		})
		return res
	}

export function each<T extends Objectish>(
	obj: T,
	iter: (key: string | number, value: any, source: T) => void,
	enumerableOnly?: boolean
): void
export function each(obj: any, iter: any, enumerableOnly = false) {
	if (getArchtype(obj) === Archtype.Object) {
		;(enumerableOnly ? Object.keys : ownKeys)(obj).forEach(key => {
			if (!enumerableOnly || typeof key !== "symbol") iter(key, obj[key], obj)
		})
	} else {
		obj.forEach((entry: any, index: any) => iter(index, entry, obj))
	}
}

/*#__PURE__*/
export function getArchtype(thing: any): Archtype {
	/* istanbul ignore next */
	const state: undefined | ImmerState = thing[DRAFT_STATE]
	return state
		? state.type_ > 3
			? state.type_ - 4 // cause Object and Array map back from 4 and 5
			: (state.type_ as any) // others are the same
		: Array.isArray(thing)
		? Archtype.Array
		: isMap(thing)
		? Archtype.Map
		: isSet(thing)
		? Archtype.Set
		: Archtype.Object
}

/*#__PURE__*/
export function has(thing: any, prop: PropertyKey): boolean {
	return getArchtype(thing) === Archtype.Map
		? thing.has(prop)
		: Object.prototype.hasOwnProperty.call(thing, prop)
}

/*#__PURE__*/
export function get(thing: AnyMap | AnyObject, prop: PropertyKey): any {
	// @ts-ignore
	return getArchtype(thing) === Archtype.Map ? thing.get(prop) : thing[prop]
}

/*#__PURE__*/
export function set(thing: any, propOrOldValue: PropertyKey, value: any) {
	const t = getArchtype(thing)
	if (t === Archtype.Map) thing.set(propOrOldValue, value)
	else if (t === Archtype.Set) {
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

/*#__PURE__*/
export function isMap(target: any): target is AnyMap {
	return hasMap && target instanceof Map
}

/*#__PURE__*/
export function isSet(target: any): target is AnySet {
	return hasSet && target instanceof Set
}
/*#__PURE__*/
export function latest(state: ImmerState): any {
	return state.copy_ || state.base_
}

/*#__PURE__*/
export function shallowCopy(base: any) {
	if (Array.isArray(base)) return Array.prototype.slice.call(base)
	const descriptors = getOwnPropertyDescriptors(base)
	delete descriptors[DRAFT_STATE as any]
	let keys = ownKeys(descriptors)
	for (let i = 0; i < keys.length; i++) {
		const key: any = keys[i]
		const desc = descriptors[key]
		if (desc.writable === false) {
			desc.writable = true
			desc.configurable = true
		}
		// like object.assign, we will read any _own_, get/set accessors. This helps in dealing
		// with libraries that trap values, like mobx or vue
		// unlike object.assign, non-enumerables will be copied as well
		if (desc.get || desc.set)
			descriptors[key] = {
				configurable: true,
				writable: true, // could live with !!desc.set as well here...
				enumerable: desc.enumerable,
				value: base[key]
			}
	}
	return Object.create(Object.getPrototypeOf(base), descriptors)
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
		obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections as any
	}
	Object.freeze(obj)
	if (deep) each(obj, (key, value) => freeze(value, true), true)
	return obj
}

function dontMutateFrozenCollections() {
	die(2)
}

export function isFrozen(obj: any): boolean {
	if (obj == null || typeof obj !== "object") return true
	// See #600, IE dies on non-objects in Object.isFrozen
	return Object.isFrozen(obj)
}
