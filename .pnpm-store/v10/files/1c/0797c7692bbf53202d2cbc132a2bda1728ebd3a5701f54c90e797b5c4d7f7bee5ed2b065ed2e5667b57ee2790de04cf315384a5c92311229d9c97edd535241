/**
Create a type that makes the given keys required. The remaining keys are kept as is. The sister of the `SetOptional` type.

Use-case: You want to define a single model where the only thing that changes is whether or not some of the keys are required.

@example
```
import {SetRequired} from 'type-fest';

type Foo = {
	a?: number;
	b: string;
	c?: boolean;
}

type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
// type SomeRequired = {
// 	a?: number;
// 	b: string; // Was already required and still is.
// 	c: boolean; // Is now required.
// }
```
*/
export type SetRequired<BaseType, Keys extends keyof BaseType = keyof BaseType> =
	// Pick just the keys that are not required from the base type.
	Pick<BaseType, Exclude<keyof BaseType, Keys>> &
	// Pick the keys that should be required from the base type and make them required.
	Required<Pick<BaseType, Keys>> extends
	// If `InferredType` extends the previous, then for each key, use the inferred type key.
	infer InferredType
		? {[KeyType in keyof InferredType]: InferredType[KeyType]}
		: never;
