/**
Create a type that represents either the value or `undefined`, while stripping `null` from the type.

Use-cases:
- Enforcing the practice of using `undefined` instead of `null` as the "absence of value" marker.
- Converting APIs that return `null` (DOM, JSON, legacy libraries) to use `undefined` consistently.

@example
```
import type {Optional} from 'type-fest';

// Adds `undefined` to the type
type MaybeNumber = Optional<number>;
//=> number | undefined

// Strips `null` from the type
type NullableString = Optional<string | null>;
//=> string | undefined

type Config = {
	name: string;
	description: Optional<string>;
	//=> string | undefined
};
```

@category Utilities
*/
export type Optional<Value> = Exclude<Value, null> | undefined;

export {};
