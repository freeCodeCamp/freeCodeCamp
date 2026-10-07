import type {Merge} from './merge.d.ts';

/**
Override existing properties of the given type. Similar to `Merge`, but enforces that the original type has the properties you want to override.

This is useful when you want to override existing properties with a different type and make sure that these properties really exist in the original.

@example
```
import type {OverrideProperties} from 'type-fest';

type Foo = {
	a: string;
	b: string;
};

type Bar = OverrideProperties<Foo, {b: number}>;
//=> {a: string; b: number}

// @ts-expect-error
type Baz = OverrideProperties<Foo, {c: number}>;
// Error, type '{ c: number; }' does not satisfy the constraint '{ c: never; }'

// @ts-expect-error
type Fizz = OverrideProperties<Foo, {b: number; c: number}>;
// Error, type '{ b: number; c: number; }' does not satisfy the constraint '{ b: number; c: never; }'
```

@category Object
*/
export type OverrideProperties<
	TOriginal,
	// This first bit where we use `Partial` is to enable autocomplete
	// and the second bit with the mapped type is what enforces that we don't try
	// to override properties that doesn't exist in the original type.
	TOverride extends Partial<Record<keyof TOriginal, unknown>> & {
		[Key in keyof TOverride]: Key extends keyof TOriginal
			? TOverride[Key]
			: never;
	},
> = Merge<TOriginal, TOverride>;

export {};
