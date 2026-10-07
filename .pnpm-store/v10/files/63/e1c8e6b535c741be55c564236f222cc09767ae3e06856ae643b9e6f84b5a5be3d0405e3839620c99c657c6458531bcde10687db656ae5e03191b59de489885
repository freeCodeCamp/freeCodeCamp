import type {IsEqual} from './is-equal.d.ts';

/**
Returns a boolean for whether the given array includes the given item.

This can be useful if another type wants to make a decision based on whether the array includes that item.

@example
```
import type {Includes} from 'type-fest';

type hasRed<array extends any[]> = Includes<array, 'red'>;
```

@category Array
*/
export type Includes<Value extends readonly any[], Item> =
	Value extends readonly [Value[0], ...infer rest]
		? IsEqual<Value[0], Item> extends true
			? true
			: Includes<rest, Item>
		: false;

export {};
