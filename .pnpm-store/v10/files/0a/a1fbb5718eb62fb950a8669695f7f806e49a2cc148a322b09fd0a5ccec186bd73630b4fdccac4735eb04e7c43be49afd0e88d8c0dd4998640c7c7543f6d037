/**
Extract the keys from a type where the value type of the key extends the given `Condition`.

Internally this is used for the `ConditionalPick` and `ConditionalExcept` types.

@example
```
import {ConditionalKeys} from 'type-fest';

interface Example {
	a: string;
	b: string | number;
	c?: string;
	d: {};
}

type StringKeysOnly = ConditionalKeys<Example, string>;
//=> 'a'
```

To support partial types, make sure your `Condition` is a union of undefined (for example, `string | undefined`) as demonstrated below.

@example
```
type StringKeysAndUndefined = ConditionalKeys<Example, string | undefined>;
//=> 'a' | 'c'
```
*/
export type ConditionalKeys<Base, Condition> = NonNullable<
	// Wrap in `NonNullable` to strip away the `undefined` type from the produced union.
	{
		// Map through all the keys of the given base type.
		[Key in keyof Base]:
			// Pick only keys with types extending the given `Condition` type.
			Base[Key] extends Condition
				// Retain this key since the condition passes.
				? Key
				// Discard this key since the condition fails.
				: never;

	// Convert the produced object into a union type of the keys which passed the conditional test.
	}[keyof Base]
>;
