declare function forEach<O extends readonly unknown[], This = undefined>(
    arr: O,
    callback: (this: This | void, value: O[number], index: number, array: O) => void,
    thisArg?: This,
): void;

declare function forEach<O extends ArrayLike<unknown>, This = undefined>(
    arr: O,
    callback: (this: This | void, value: O[number], index: number, array: O) => void,
    thisArg?: This,
): void;

declare function forEach<O extends object, This = undefined>(
    obj: O,
    callback: (this: This | void, value: O[keyof O], key: keyof O, obj: O) => void,
    thisArg?: This,
): void;

declare function forEach<O extends string, This = undefined>(
    str: O,
    callback: (this: This | void, value: O[number], index: number, str: O) => void,
    thisArg: This,
): void;

export = forEach;

declare function forEachInternal<O, C extends (this: This | void, value: unknown, index: PropertyKey, obj: O) => void, This = undefined>(
	value: O,
	callback: C,
	thisArg?: This,
): void;

declare namespace forEach {
	export type _internal = typeof forEachInternal;
}
