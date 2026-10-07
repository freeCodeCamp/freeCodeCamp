import type { Defu, DefuInstance, DefuFn } from "../dist/defu.mts";

type _Input = Record<string | number | symbol, any>;
type _IgnoredInput = boolean | number | null | any[] | Record<never, any> | undefined;

declare function defuProxy<Source extends _Input, Defaults extends Array<_Input | _IgnoredInput>>(
	source: Source | _IgnoredInput,
	...defaults: Defaults
): Defu<Source, Defaults>;

declare namespace defuProxy {
	export type { Defu, DefuFn, DefuInstance };
	export var fn: DefuFn;
	export var arrayFn: DefuFn;
	export function extend(merger?: (...args: any[]) => any): DefuFn;
	var _default: DefuInstance;
	export { _default as default };
	export var defu: DefuInstance;
	export var createDefu: typeof import("../dist/defu.mts").createDefu;
	export var defuFn: DefuFn;
	export var defuArrayFn: DefuFn;
}

export = defuProxy;
