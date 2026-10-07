/**
Extract the type of the last element of an array.

Use-case: Defining the return type of functions that extract the last element of an array, for example [`lodash.last`](https://lodash.com/docs/4.17.15#last).

@example
```
import type {LastArrayElement} from 'type-fest';

declare function lastOf<const V extends readonly any[]>(array: V): LastArrayElement<V>;

const last1 = lastOf(['foo', 'bar']);
//=> 'bar'

const last2 = lastOf([true, false, 'baz', 10]);
//=> 10
```

@category Array
@category Template literal
*/
export type LastArrayElement<Elements extends readonly unknown[], ElementBeforeTailingSpreadElement = never> =
	// If the last element of an array is a spread element, the `LastArrayElement` result should be `'the type of the element before the spread element' | 'the type of the spread element'`.
	Elements extends readonly []
		? ElementBeforeTailingSpreadElement
		: Elements extends readonly [...infer U, infer V]
			? V
			: Elements extends readonly [infer U, ...infer V]
				// If we return `V[number] | U` directly, it would be wrong for `[[string, boolean, object, ...number[]]`.
				// So we need to recurse type `V` and carry over the type of the element before the spread element.
				? LastArrayElement<V, U>
				: Elements extends ReadonlyArray<infer U>
					? U | ElementBeforeTailingSpreadElement
					: never;

export {};
