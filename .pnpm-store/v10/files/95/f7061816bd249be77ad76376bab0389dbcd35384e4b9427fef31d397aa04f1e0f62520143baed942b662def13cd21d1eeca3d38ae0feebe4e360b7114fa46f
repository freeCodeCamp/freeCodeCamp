/**
Pick only index signatures from the given object type, leaving out all explicitly defined properties.

This is the counterpart of `OmitIndexSignature`.

@example
```
import type {PickIndexSignature} from 'type-fest';

declare const symbolKey: unique symbol;

type Example = {
	// These index signatures will remain.
	[x: string]: unknown;
	[x: number]: unknown;
	[x: symbol]: unknown;
	[x: `head-${string}`]: string;
	[x: `${string}-tail`]: string;
	[x: `head-${string}-tail`]: string;
	[x: `${bigint}`]: string;
	[x: `embedded-${number}`]: string;

	// These explicitly defined keys will be removed.
	['kebab-case-key']: string;
	[symbolKey]: string;
	foo: 'bar';
	qux?: 'baz';
};

type ExampleIndexSignature = PickIndexSignature<Example>;
// {
// 	[x: string]: unknown;
// 	[x: number]: unknown;
// 	[x: symbol]: unknown;
// 	[x: `head-${string}`]: string;
// 	[x: `${string}-tail`]: string;
// 	[x: `head-${string}-tail`]: string;
// 	[x: `${bigint}`]: string;
// 	[x: `embedded-${number}`]: string;
// }
```

@see {@link OmitIndexSignature}
@category Object
*/
export type PickIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
		? KeyType
		: never]: ObjectType[KeyType];
};

export {};
