import type {JsonPrimitive, JsonValue} from './json-value.d.ts';
import type {EmptyObject} from './empty-object.d.ts';
import type {UndefinedToOptional} from './internal/index.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {IsUnknown} from './is-unknown.d.ts';
import type {NegativeInfinity, PositiveInfinity} from './numeric.d.ts';
import type {TypedArray} from './typed-array.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

// Note: The return value has to be `any` and not `unknown` so it can match `void`.
type NotJsonable = ((...arguments_: any[]) => any) | undefined | symbol;

type NeverToNull<T> = IsNever<T> extends true ? null : T;
type UndefinedToNull<T> = T extends undefined ? null : T;

// Handles tuples and arrays
type JsonifyList<T extends UnknownArray> = T extends readonly []
	? []
	: T extends readonly [infer F, ...infer R]
		? [F, ...R] extends T // With TS 5.8.3, if `string[] & ['foo']`, `R` is `unknown[]` here, making the inferred types not equal to the original one
			? [NeverToNull<Jsonify<F>>, ...JsonifyList<R>]
			: [NeverToNull<Jsonify<F>>]
		: IsUnknown<T[number]> extends true
			? JsonValue[]
			: Array<T[number] extends NotJsonable ? null : Jsonify<UndefinedToNull<T[number]>>>;

type FilterJsonableKeys<T extends object> = {
	[Key in keyof T]: T[Key] extends NotJsonable ? never : Key;
}[keyof T];

/**
JSON serialize objects (not including arrays) and classes.
*/
type JsonifyObject<T extends object> = {
	[Key in keyof Pick<T, FilterJsonableKeys<T>>]: Jsonify<T[Key]>;
};

/**
Transform a type to one that is assignable to the `JsonValue` type.

This includes:
1. Transforming JSON `interface` to a `type` that is assignable to `JsonValue`.
2. Transforming non-JSON value that is *jsonable* to a type that is assignable to `JsonValue`, where *jsonable* means the non-JSON value implements the `.toJSON()` method that returns a value that is assignable to `JsonValue`.

@remarks

An interface cannot be structurally compared to `JsonValue` because an interface can be re-opened to add properties that may not satisfy `JsonValue`.

@example
```
import type {Jsonify, JsonValue} from 'type-fest';

interface Geometry {
	type: 'Point' | 'Polygon';
	coordinates: [number, number];
}

const point: Geometry = {
	type: 'Point',
	coordinates: [1, 1],
};

declare function problemFn(data: JsonValue): void;

// @ts-expect-error
problemFn(point); // Error: type Geometry is not assignable to parameter of type JsonValue because it is an interface

declare function fixedFn<T>(data: Jsonify<T>): void;

fixedFn(point); // Good: point is assignable. Jsonify<T> transforms Geometry into value assignable to JsonValue

// @ts-expect-error
fixedFn(new Date()); // Error: As expected, Date is not assignable. Jsonify<T> cannot transform Date into a value assignable to JsonValue
```

Non-JSON values such as `Date` implement `.toJSON()`, so they can be transformed to a value assignable to `JsonValue`:

@example
```
import type {Jsonify} from 'type-fest';

const time = {
	timeValue: new Date(),
};

// `Jsonify<typeof time>` is equivalent to `{timeValue: string}`
const timeJson = JSON.parse(JSON.stringify(time)) as Jsonify<typeof time>;
```

@link https://github.com/Microsoft/TypeScript/issues/1897#issuecomment-710744173

@category JSON
*/
export type Jsonify<T> = IsAny<T> extends true
	? any
	: T extends PositiveInfinity | NegativeInfinity
		? null
		: T extends JsonPrimitive
			? T
			// Any object with toJSON is special case
			: T extends {toJSON(): infer J}
				? (() => J) extends () => JsonValue // Is J assignable to JsonValue?
					? J // Then T is Jsonable and its Jsonable value is J
					: Jsonify<J> // Maybe if we look a level deeper we'll find a JsonValue
				// Instanced primitives are objects
				: T extends Number
					? number
					: T extends String
						? string
						: T extends Boolean
							? boolean
							: T extends Map<any, any> | Set<any>
								? EmptyObject
								: T extends TypedArray
									? Record<string, number>
									: T extends NotJsonable
										? never // Non-JSONable type union was found not empty
										: T extends UnknownArray
											? JsonifyList<T>
											: T extends object
												? JsonifyObject<UndefinedToOptional<T>> // JsonifyObject recursive call for its children
												: IsUnknown<T> extends true
													? JsonValue
													: never; // Otherwise any other non-object is removed

export {};
