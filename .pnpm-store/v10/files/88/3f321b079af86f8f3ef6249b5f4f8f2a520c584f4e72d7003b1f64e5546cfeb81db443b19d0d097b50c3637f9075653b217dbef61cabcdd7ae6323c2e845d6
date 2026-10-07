import type {If} from './if.d.ts';
import type {IfNotAnyOrNever, IsArrayReadonly} from './internal/index.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Extract the type of an array or tuple minus the first element.

@example
```
import type {ArrayTail} from 'type-fest';

type A = ArrayTail<[1, 2, 3]>;
//=> [2, 3]

type B = ArrayTail<readonly [1, 2, 3]>;
//=> readonly [2, 3]

type C = ArrayTail<[1, 2, 3?, ...string[]]>;
//=> [2, 3?, ...string[]]

type D = ArrayTail<readonly [1]>;
//=> readonly []

type E = ArrayTail<[]>;
//=> []

type F = ArrayTail<string[]>;
//=> string[]

type G = ArrayTail<readonly [...string[], 1, 2]>;
//=> readonly [...string[], 1, 2]
```

@example
```
import type {ArrayTail} from 'type-fest';

type Curry<Func> = Func extends (...agruments_: infer Arguments) => infer Return
	? Arguments extends readonly []
		? Return
		: (agrument: Arguments[0]) => Curry<(...agruments_: ArrayTail<Arguments>) => Return>
	: never;

declare function curry<Func extends Function>(fn: Func): Curry<Func>;

declare function searchBooks(genre: string, minRating: number, available: boolean): string[];

const availableTopSciFi = curry(searchBooks)('sci-fi')(4.5)(true);
//=> string[]
```

@category Array
*/
export type ArrayTail<TArray extends UnknownArray> = IfNotAnyOrNever<TArray,
	TArray extends UnknownArray // For distributing `TArray`
		? _ArrayTail<TArray> extends infer Result
			? If<IsArrayReadonly<TArray>, Readonly<Result>, Result>
			: never // Should never happen
		: never
>;

type _ArrayTail<TArray extends UnknownArray> = TArray extends readonly [unknown?, ...infer Tail]
	? keyof TArray & `${number}` extends never
		? TArray extends readonly []
			? []
			: TArray // Happens when `TArray` is a non-tuple array (e.g., `string[]`) or has a leading rest element (e.g., `[...string[], number]`)
		: Tail
	: [];

export {};
