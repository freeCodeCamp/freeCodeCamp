import type {Except} from './except.d.ts';
import type {If} from './if.d.ts';
import type {HomomorphicPick, IsArrayReadonly} from './internal/index.d.ts';
import type {OptionalKeysOf} from './optional-keys-of.d.ts';
import type {Simplify} from './simplify.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Create a type that makes the given keys required, while keeping the remaining keys as is.

Use-case: You want to define a single model where the only thing that changes is whether or not some of the keys are required.

@example
```
import type {SetRequired} from 'type-fest';

type Foo = {
	a?: number;
	b: string;
	c?: boolean;
};

type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
//=> {a?: number; b: string; c: boolean}

// Set specific indices in an array to be required.
type ArrayExample = SetRequired<[number?, number?, number?], 0 | 1>;
//=> [number, number, number?]
```

@category Object
*/
export type SetRequired<BaseType, Keys extends keyof BaseType> =
	(BaseType extends (...arguments_: never) => any
		? (...arguments_: Parameters<BaseType>) => ReturnType<BaseType>
		: unknown)
	& _SetRequired<BaseType, Keys>;

type _SetRequired<BaseType, Keys extends keyof BaseType> =
	BaseType extends UnknownArray
		? SetArrayRequired<BaseType, Keys> extends infer ResultantArray
			? If<IsArrayReadonly<BaseType>, Readonly<ResultantArray>, ResultantArray>
			: never
		: Simplify<
		// Pick just the keys that are optional from the base type.
			Except<BaseType, Keys>
		// Pick the keys that should be required from the base type and make them required.
			& Required<HomomorphicPick<BaseType, Keys>>
		>;

/**
Remove the optional modifier from the specified keys in an array.
*/
type SetArrayRequired<
	TArray extends UnknownArray,
	Keys,
	Counter extends any[] = [],
	Accumulator extends UnknownArray = [],
> = TArray extends unknown // For distributing `TArray` when it's a union
	? keyof TArray & `${number}` extends never
		// Exit if `TArray` is empty (e.g., []), or
		// `TArray` contains no non-rest elements preceding the rest element (e.g., `[...string[]]` or `[...string[], string]`).
		? [...Accumulator, ...TArray]
		: TArray extends readonly [(infer First)?, ...infer Rest]
			? '0' extends OptionalKeysOf<TArray> // If the first element of `TArray` is optional
				? `${Counter['length']}` extends `${Keys & (string | number)}` // If the current index needs to be required
					? SetArrayRequired<Rest, Keys, [...Counter, any], [...Accumulator, First]>
					// If the current element is optional, but it doesn't need to be required,
					// then we can exit early, since no further elements can now be made required.
					: [...Accumulator, ...TArray]
				: SetArrayRequired<Rest, Keys, [...Counter, any], [...Accumulator, TArray[0]]>
			: never // Should never happen, since `[(infer F)?, ...infer R]` is a top-type for arrays.
	: never; // Should never happen

export {};
