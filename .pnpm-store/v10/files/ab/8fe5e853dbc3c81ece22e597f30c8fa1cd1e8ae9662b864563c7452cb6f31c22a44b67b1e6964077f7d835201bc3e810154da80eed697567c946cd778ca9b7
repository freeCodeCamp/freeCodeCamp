import type {IfNotAnyOrNever, IsExactOptionalPropertyTypesEnabled} from './internal/type.d.ts';
import type {ApplyDefaultOptions} from './internal/object.d.ts';
import type {IsOptionalKeyOf} from './is-optional-key-of.d.ts';
import type {IsArrayReadonly} from './internal/array.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';
import type {If} from './if.d.ts';

/**
{@link SplitOnRestElement} options.
*/
type SplitOnRestElementOptions = {
	/**
	Whether to preserve the optional modifier (`?`).

	- When set to `true`, the optional modifiers are preserved as-is. For example:
		`SplitOnRestElement<[number, string?, ...boolean[]], {preserveOptionalModifier: true}>` returns `[[number, string?], boolean[], []]`.

	- When set to `false`, optional elements like `T?` are transformed to `T | undefined` or simply `T` depending on the `exactOptionalPropertyTypes` compiler option. For example:
		- With `exactOptionalPropertyTypes` enabled: `SplitOnRestElement<[number, string?, ...boolean[]], {preserveOptionalModifier: false}>` returns `[[number, string], boolean[], []]`
		- And, with it disabled, the result is: `[[number, string | undefined], boolean[], []]`

	@default true
	*/
	preserveOptionalModifier?: boolean;
};

type DefaultSplitOnRestElementOptions = {
	preserveOptionalModifier: true;
};

/**
Splits an array into three parts, where the first contains all elements before the rest element, the second is the [`rest`](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) element itself, and the third contains all elements after the rest element.

Note: If any of the parts are missing, then they will be represented as empty arrays. For example, `SplitOnRestElement<[string, number]>` returns `[[string, number], [], []]`, where parts corresponding to the rest element and elements after it are empty.

By default, the optional modifier (`?`) is preserved.
See {@link SplitOnRestElementOptions `SplitOnRestElementOptions`}.

@example
```ts
import type {SplitOnRestElement} from 'type-fest';

type T1 = SplitOnRestElement<[number, ...string[], boolean]>;
//=> [[number], string[], [boolean]]

type T2 = SplitOnRestElement<readonly [...boolean[], string]>;
//=> readonly [[], boolean[], [string]]

type T3 = SplitOnRestElement<[number, string?]>;
//=> [[number, string?], [], []]

type T4 = SplitOnRestElement<[number, string?], {preserveOptionalModifier: false}>;
//=> [[number, string], [], []]

type T5 = SplitOnRestElement<readonly [string?, ...number[]], {preserveOptionalModifier: false}>;
//=> readonly [[string], number[], []]
```

@see {@link ExtractRestElement}
@see {@link ExcludeRestElement}
@category Array
*/
export type SplitOnRestElement<
	Array_ extends UnknownArray,
	Options extends SplitOnRestElementOptions = {},
> =
	Array_ extends unknown // For distributing `Array_`
		? IfNotAnyOrNever<Array_, _SplitOnRestElement<
			Array_,
			ApplyDefaultOptions<SplitOnRestElementOptions, DefaultSplitOnRestElementOptions, Options>
		>> extends infer Result extends UnknownArray
			? If<IsArrayReadonly<Array_>, Readonly<Result>, Result>
			: never // Should never happen
		: never; // Should never happen

/**
Deconstructs an array on its rest element and returns the split portions.
*/
export type _SplitOnRestElement<
	Array_ extends UnknownArray,
	Options extends Required<SplitOnRestElementOptions>,
	HeadAcc extends UnknownArray = [],
	TailAcc extends UnknownArray = [],
> =
	keyof Array_ & `${number}` extends never
		// Enters this branch, if `Array_` is empty (e.g., []),
		// or `Array_` contains no non-rest elements preceding the rest element (e.g., `[...string[]]` or `[...string[], string]`).
		? Array_ extends readonly [...infer Rest, infer Last]
			? _SplitOnRestElement<Rest, Options, HeadAcc, [Last, ...TailAcc]> // Accumulate elements that are present after the rest element.
			: [HeadAcc, Array_ extends readonly [] ? [] : Array_, TailAcc] // Add the rest element between the accumulated elements.
		: Array_ extends readonly [(infer First)?, ...infer Rest]
			? _SplitOnRestElement<
				Rest, Options,
				[
					...HeadAcc,
					...IsOptionalKeyOf<Array_, '0'> extends true
						? Options['preserveOptionalModifier'] extends false
							? [If<IsExactOptionalPropertyTypesEnabled, First, First | undefined>] // Add `| undefined` for optional elements, if `exactOptionalPropertyTypes` is disabled.
							: [First?]
						: [First],
				],
				TailAcc
			> // Accumulate elements that are present before the rest element.
			: never; // Should never happen, since `[(infer First)?, ...infer Rest]` is a top-type for arrays.

export {};
