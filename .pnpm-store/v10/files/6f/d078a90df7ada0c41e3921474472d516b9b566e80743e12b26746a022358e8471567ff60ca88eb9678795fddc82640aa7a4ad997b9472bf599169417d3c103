type Awaitable<T> = T | PromiseLike<T>;
type Nullable<T> = T | null | undefined;
type Arrayable<T> = T | Array<T>;
type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
type MergeInsertions<T> = T extends object ? { [K in keyof T] : MergeInsertions<T[K]> } : T;
type DeepMerge<
	F,
	S
> = MergeInsertions<{ [K in keyof F | keyof S] : K extends keyof S & keyof F ? DeepMerge<F[K], S[K]> : K extends keyof S ? S[K] : K extends keyof F ? F[K] : never }>;
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
	stacks?: ParsedStack[];
	stack?: string;
	name?: string;
	cause?: SerializedError;
	[key: string]: unknown;
}
interface TestError extends SerializedError {
	cause?: TestError;
	diff?: string;
	actual?: string;
	expected?: string;
}

export type { ArgumentsType, Arrayable, Awaitable, Constructable, DeepMerge, MergeInsertions, Nullable, ParsedStack, SerializedError, TestError };
