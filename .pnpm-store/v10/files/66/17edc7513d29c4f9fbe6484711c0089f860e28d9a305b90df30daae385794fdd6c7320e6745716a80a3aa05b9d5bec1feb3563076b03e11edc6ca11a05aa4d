type Awaitable<T> = T | PromiseLike<T>;
type Nullable<T> = T | null | undefined;
type Arrayable<T> = T | Array<T>;
type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
type MergeInsertions<T> = T extends object ? { [K in keyof T] : MergeInsertions<T[K]> } : T;
type DeepMerge<
	F,
	S
> = MergeInsertions<{ [K in keyof F | keyof S] : K extends keyof S & keyof F ? DeepMerge<F[K], S[K]> : K extends keyof S ? S[K] : K extends keyof F ? F[K] : never }>;
type MutableArray<T extends readonly any[]> = { -readonly [k in keyof T] : T[k] };
interface Constructable {
	new (...args: any[]): any;
}
interface ParsedStack {
	method: string;
	file: string;
	line: number;
	column: number;
}
interface SerializedError {
	message: string;
	stack?: string;
	name?: string;
	stacks?: ParsedStack[];
	cause?: SerializedError;
	[key: string]: unknown;
}
interface TestError extends SerializedError {
	cause?: TestError;
	diff?: string;
	actual?: string;
	expected?: string;
}
/**
* @deprecated Use `TestError` instead
*/
interface ErrorWithDiff {
	message: string;
	name?: string;
	cause?: unknown;
	stack?: string;
	stacks?: ParsedStack[];
	showDiff?: boolean;
	actual?: any;
	expected?: any;
	operator?: string;
	type?: string;
	frame?: string;
	diff?: string;
	codeFrame?: string;
}

export type { ArgumentsType, Arrayable, Awaitable, Constructable, DeepMerge, ErrorWithDiff, MergeInsertions, MutableArray, Nullable, ParsedStack, SerializedError, TestError };
