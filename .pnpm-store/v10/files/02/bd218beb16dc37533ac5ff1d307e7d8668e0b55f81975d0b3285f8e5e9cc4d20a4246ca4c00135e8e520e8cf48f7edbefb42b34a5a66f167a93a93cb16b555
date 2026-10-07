import type {ObjectValue} from './internal/index.d.ts';
import type {ArrayElement} from './array-element.d.ts';
import type {IsEqual} from './is-equal.d.ts';
import type {KeysOfUnion} from './keys-of-union.d.ts';
import type {IsUnknown} from './is-unknown.d.ts';
import type {Primitive} from './primitive.d.ts';

/**
Create a type from `ParameterType` and `InputType` and change keys exclusive to `InputType` to `never`.
- Generate a list of keys that exists in `InputType` but not in `ParameterType`.
- Mark these excess keys as `never`.
*/
type ExactObject<ParameterType, InputType> = {[Key in keyof ParameterType]: Exact<ParameterType[Key], ObjectValue<InputType, Key>>}
	& Record<Exclude<keyof InputType, KeysOfUnion<ParameterType>>, never>;

/**
Create a type that does not allow extra properties, meaning it only allows properties that are explicitly declared.

This is useful for function type-guarding to reject arguments with excess properties. Due to the nature of TypeScript, it does not complain if excess properties are provided unless the provided value is an object literal.

*Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/12936) if you want to have this type as a built-in in TypeScript.*

@example
```
type OnlyAcceptName = {name: string};

declare function onlyAcceptName(arguments_: OnlyAcceptName): void;

// TypeScript complains about excess properties when an object literal is provided.
// @ts-expect-error
onlyAcceptName({name: 'name', id: 1});
// `id` is excess

// TypeScript does not complain about excess properties when the provided value is a variable (not an object literal).
const invalidInput = {name: 'name', id: 1};
onlyAcceptName(invalidInput); // No errors
```

Having `Exact` allows TypeScript to reject excess properties.

@example
```
import type {Exact} from 'type-fest';

type OnlyAcceptName = {name: string};

declare function onlyAcceptNameImproved<T extends Exact<OnlyAcceptName, T>>(arguments_: T): void;

const invalidInput = {name: 'name', id: 1};
// @ts-expect-error
onlyAcceptNameImproved(invalidInput); // Compilation error
```

[Read more](https://stackoverflow.com/questions/49580725/is-it-possible-to-restrict-typescript-object-to-contain-only-properties-defined)

@category Utilities
*/
export type Exact<ParameterType, InputType> =
	// Before distributing, check if the two types are equal and if so, return the parameter type immediately
	IsEqual<ParameterType, InputType> extends true ? ParameterType
		// If the parameter is a primitive, return it as is immediately to avoid it being converted to a complex type
		: ParameterType extends Primitive ? ParameterType
			// If the parameter is an unknown, return it as is immediately to avoid it being converted to a complex type
			: IsUnknown<ParameterType> extends true ? unknown
				// If the parameter is a Function, return it as is because this type is not capable of handling function, leave it to TypeScript
				: ParameterType extends Function ? ParameterType
					// Convert union of array to array of union: A[] & B[] => (A & B)[]
					: ParameterType extends unknown[] ? Array<Exact<ArrayElement<ParameterType>, ArrayElement<InputType>>>
						// In TypeScript, Array is a subtype of ReadonlyArray, so always test Array before ReadonlyArray.
						: ParameterType extends readonly unknown[] ? ReadonlyArray<Exact<ArrayElement<ParameterType>, ArrayElement<InputType>>>
							: ExactObject<ParameterType, InputType>;

export {};
