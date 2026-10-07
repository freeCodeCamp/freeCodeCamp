/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface IDebugNameData {
	/**
	 * The owner object of an observable.
	 * Used for debugging only, such as computing a name for the observable by iterating over the fields of the owner.
	 */
	readonly owner?: DebugOwner | undefined;

	/**
	 * A string or function that returns a string that represents the name of the observable.
	 * Used for debugging only.
	 */
	readonly debugName?: DebugNameSource | undefined;

	/**
	 * A function that points to the defining function of the object.
	 * Used for debugging only.
	 */
	readonly debugReferenceFn?: Function | undefined;
}

export class DebugNameData {
	constructor(
		public readonly owner: DebugOwner | undefined,
		public readonly debugNameSource: DebugNameSource | undefined,
		public readonly referenceFn: Function | undefined,
	) { }

	public getDebugName(target: object): string | undefined {
		return getDebugName(target, this);
	}
}

/**
 * The owning object of an observable.
 * Is only used for debugging purposes, such as computing a name for the observable by iterating over the fields of the owner.
 */
export type DebugOwner = object | undefined;
export type DebugNameSource = string | (() => string | undefined);

const countPerName = new Map<string, number>();
const cachedDebugName = new WeakMap<object, string>();

export function getDebugName(target: object, data: DebugNameData): string | undefined {
	const cached = cachedDebugName.get(target);
	if (cached) {
		return cached;
	}

	const dbgName = computeDebugName(target, data);
	if (dbgName) {
		let count = countPerName.get(dbgName) ?? 0;
		count++;
		countPerName.set(dbgName, count);
		const result = count === 1 ? dbgName : `${dbgName}#${count}`;
		cachedDebugName.set(target, result);
		return result;
	}
	return undefined;
}

function computeDebugName(self: object, data: DebugNameData): string | undefined {
	const cached = cachedDebugName.get(self);
	if (cached) {
		return cached;
	}

	const ownerStr = data.owner ? formatOwner(data.owner) + `.` : '';

	let result: string | undefined;
	const debugNameSource = data.debugNameSource;
	if (debugNameSource !== undefined) {
		if (typeof debugNameSource === 'function') {
			result = debugNameSource();
			if (result !== undefined) {
				return ownerStr + result;
			}
		} else {
			return ownerStr + debugNameSource;
		}
	}

	const referenceFn = data.referenceFn;
	if (referenceFn !== undefined) {
		result = getFunctionName(referenceFn);
		if (result !== undefined) {
			return ownerStr + result;
		}
	}

	if (data.owner !== undefined) {
		const key = findKey(data.owner, self);
		if (key !== undefined) {
			return ownerStr + key;
		}
	}
	return undefined;
}

function findKey(obj: object, value: object): string | undefined {
	for (const key in obj) {
		if ((obj as any)[key] === value) {
			return key;
		}
	}
	return undefined;
}

const countPerClassName = new Map<string, number>();
const ownerId = new WeakMap<object, string>();

function formatOwner(owner: object): string {
	const id = ownerId.get(owner);
	if (id) {
		return id;
	}
	const className = getClassName(owner);
	let count = countPerClassName.get(className) ?? 0;
	count++;
	countPerClassName.set(className, count);
	const result = count === 1 ? className : `${className}#${count}`;
	ownerId.set(owner, result);
	return result;
}

function getClassName(obj: object): string {
	const ctor = obj.constructor;
	if (ctor) {
		return ctor.name;
	}
	return 'Object';
}

export function getFunctionName(fn: Function): string | undefined {
	const fnSrc = fn.toString();
	// Pattern: /** @description ... */
	const regexp = /\/\*\*\s*@description\s*([^*]*)\*\//;
	const match = regexp.exec(fnSrc);
	const result = match ? match[1] : undefined;
	return result?.trim();
}
