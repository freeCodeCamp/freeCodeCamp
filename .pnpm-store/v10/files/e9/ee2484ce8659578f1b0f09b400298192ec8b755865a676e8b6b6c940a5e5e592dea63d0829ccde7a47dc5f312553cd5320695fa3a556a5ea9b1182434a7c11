type FixedSizeArray<T extends number, U> = T extends 0
	? void[]
	: ReadonlyArray<U> & {
			0: U;
			length: T;
		};
type Measure<T extends number> = T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
	? T
	: never;
type Append<T extends any[], U> = {
	0: [U];
	1: [T[0], U];
	2: [T[0], T[1], U];
	3: [T[0], T[1], T[2], U];
	4: [T[0], T[1], T[2], T[3], U];
	5: [T[0], T[1], T[2], T[3], T[4], U];
	6: [T[0], T[1], T[2], T[3], T[4], T[5], U];
	7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], U];
	8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], U];
}[Measure<T["length"]>];
type AsArray<T> = T extends any[] ? T : [T];

declare class UnsetAdditionalOptions {
	_UnsetAdditionalOptions: true;
}
type IfSet<X> = X extends UnsetAdditionalOptions ? {} : X;

type Callback<E, T> = (error: E | null, result?: T) => void;
type InnerCallback<E, T> = (error?: E | null | false, result?: T) => void;

type FullTap = Tap & {
	type: "sync" | "async" | "promise";
	fn: Function;
};

type Tap = TapOptions & {
	name: string;
};

type TapOptions = {
	before?: string;
	stage?: number;
};

interface HookInterceptor<T, R, AdditionalOptions = UnsetAdditionalOptions> {
	name?: string;
	tap?: (tap: FullTap & IfSet<AdditionalOptions>) => void;
	call?: (...args: any[]) => void;
	loop?: (...args: any[]) => void;
	error?: (err: Error) => void;
	result?: (result: R) => void;
	done?: () => void;
	register?: (
		tap: FullTap & IfSet<AdditionalOptions>
	) => FullTap & IfSet<AdditionalOptions>;
}

type ArgumentNames<T extends any[]> = FixedSizeArray<T["length"], string>;

declare class Hook<T, R, AdditionalOptions = UnsetAdditionalOptions> {
	constructor(args?: ArgumentNames<AsArray<T>>, name?: string);
	name: string | undefined;
	interceptors: HookInterceptor<T, R, AdditionalOptions>[];
	taps: FullTap[];
	intercept(interceptor: HookInterceptor<T, R, AdditionalOptions>): void;
	isUsed(): boolean;
	callAsync(...args: Append<AsArray<T>, Callback<Error, R>>): void;
	promise(...args: AsArray<T>): Promise<R>;
	tap(
		options: string | (Tap & IfSet<AdditionalOptions>),
		fn: (...args: AsArray<T>) => R
	): void;
	withOptions(
		options: TapOptions & IfSet<AdditionalOptions>
	): Omit<this, "call" | "callAsync" | "promise">;
}

export class SyncHook<
	T,
	R = void,
	AdditionalOptions = UnsetAdditionalOptions
> extends Hook<T, R, AdditionalOptions> {
	call(...args: AsArray<T>): R;
}

export class SyncBailHook<
	T,
	R,
	AdditionalOptions = UnsetAdditionalOptions
> extends SyncHook<T, R, AdditionalOptions> {}
export class SyncLoopHook<
	T,
	AdditionalOptions = UnsetAdditionalOptions
> extends SyncHook<T, void, AdditionalOptions> {}
export class SyncWaterfallHook<
	T,
	R = AsArray<T>[0],
	AdditionalOptions = UnsetAdditionalOptions
> extends SyncHook<T, R, AdditionalOptions> {}

declare class AsyncHook<
	T,
	R,
	AdditionalOptions = UnsetAdditionalOptions
> extends Hook<T, R, AdditionalOptions> {
	tapAsync(
		options: string | (Tap & IfSet<AdditionalOptions>),
		fn: (...args: Append<AsArray<T>, InnerCallback<Error, R>>) => void
	): void;
	tapPromise(
		options: string | (Tap & IfSet<AdditionalOptions>),
		fn: (...args: AsArray<T>) => Promise<R>
	): void;
}

export class AsyncParallelHook<
	T,
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, void, AdditionalOptions> {}
export class AsyncParallelBailHook<
	T,
	R,
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, R, AdditionalOptions> {}
export class AsyncSeriesHook<
	T,
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, void, AdditionalOptions> {}
export class AsyncSeriesBailHook<
	T,
	R,
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, R, AdditionalOptions> {}
export class AsyncSeriesLoopHook<
	T,
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, void, AdditionalOptions> {}
export class AsyncSeriesWaterfallHook<
	T,
	R = AsArray<T>[0],
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, R, AdditionalOptions> {}

type HookFactory<H, K = any> = (key: K) => H;

interface HookMapInterceptor<H, K = any> {
	factory?: (key: K, hook: H) => H;
}

export class HookMap<H> {
	constructor(factory: HookFactory<H>, name?: string);
	name: string | undefined;
	get(key: any): H | undefined;
	for(key: any): H;
	intercept(interceptor: HookMapInterceptor<H>): void;
}

type AnyHook = Hook<any, any>;

export class TypedHookMap<M extends Record<any, AnyHook>> {
	constructor(factory: HookFactory<M[keyof M], keyof M>, name?: string);
	name: string | undefined;
	get<K extends keyof M>(key: K): M[K] | undefined;
	for<K extends keyof M>(key: K): M[K];
	intercept(interceptor: HookMapInterceptor<M[keyof M], keyof M>): void;
}

export class MultiHook<H> {
	constructor(hooks: H[], name?: string);
	name: string | undefined;
	tap(options: string | Tap, fn?: Function): void;
	tapAsync(options: string | Tap, fn?: Function): void;
	tapPromise(options: string | Tap, fn?: Function): void;
}
