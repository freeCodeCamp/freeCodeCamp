/**
Returns a boolean for whether the given type is `any`.

@link https://stackoverflow.com/a/49928360/1490091

Useful in type utilities, such as disallowing `any`s to be passed to a function.

@example
```
import type {IsAny} from 'type-fest';

const typedObject = {a: 1, b: 2} as const;
const anyObject: any = {a: 1, b: 2};

function get<O extends (IsAny<O> extends true ? {} : Record<string, number>), K extends keyof O = keyof O>(obj: O, key: K) {
	return obj[key];
}

const typedA = get(typedObject, 'a');
//=> 1

const anyA = get(anyObject, 'a');
//=> any
```

@category Type Guard
@category Utilities
*/
type IsAny<T> = 0 extends 1 & NoInfer<T> ? true : false;

/**
Returns a boolean for whether the given key is an optional key of type.

This is useful when writing utility types or schema validators that need to differentiate `optional` keys.

@example
```
import type {IsOptionalKeyOf} from 'type-fest';

interface User {
	name: string;
	surname: string;

	luckyNumber?: number;
}

interface Admin {
	name: string;
	surname?: string;
}

type T1 = IsOptionalKeyOf<User, 'luckyNumber'>;
//=> true

type T2 = IsOptionalKeyOf<User, 'name'>;
//=> false

type T3 = IsOptionalKeyOf<User, 'name' | 'luckyNumber'>;
//=> boolean

type T4 = IsOptionalKeyOf<User | Admin, 'name'>;
//=> false

type T5 = IsOptionalKeyOf<User | Admin, 'surname'>;
//=> boolean
```

@category Type Guard
@category Utilities
*/
type IsOptionalKeyOf<Type extends object, Key extends keyof Type> =
	IsAny<Type | Key> extends true ? never
		: Key extends keyof Type
			? Type extends Record<Key, Type[Key]>
				? false
				: true
			: false;

/**
Extract all optional keys from the given type.

This is useful when you want to create a new type that contains different type values for the optional keys only.

@example
```
import type {OptionalKeysOf, Except} from 'type-fest';

interface User {
	name: string;
	surname: string;

	luckyNumber?: number;
}

const REMOVE_FIELD = Symbol('remove field symbol');
type UpdateOperation<Entity extends object> = Except<Partial<Entity>, OptionalKeysOf<Entity>> & {
	[Key in OptionalKeysOf<Entity>]?: Entity[Key] | typeof REMOVE_FIELD;
};

const update1: UpdateOperation<User> = {
	name: 'Alice'
};

const update2: UpdateOperation<User> = {
	name: 'Bob',
	luckyNumber: REMOVE_FIELD
};
```

@category Utilities
*/
type OptionalKeysOf<Type extends object> =
	Type extends unknown // For distributing `Type`
		? (keyof {[Key in keyof Type as
			IsOptionalKeyOf<Type, Key> extends false
				? never
				: Key
			]: never
		}) & keyof Type // Intersect with `keyof Type` to ensure result of `OptionalKeysOf<Type>` is always assignable to `keyof Type`
		: never; // Should never happen

/**
Extract all required keys from the given type.

This is useful when you want to create a new type that contains different type values for the required keys only or use the list of keys for validation purposes, etc...

@example
```
import type {RequiredKeysOf} from 'type-fest';

declare function createValidation<Entity extends object, Key extends RequiredKeysOf<Entity> = RequiredKeysOf<Entity>>(field: Key, validator: (value: Entity[Key]) => boolean): ValidatorFn;

interface User {
	name: string;
	surname: string;

	luckyNumber?: number;
}

const validator1 = createValidation<User>('name', value => value.length < 25);
const validator2 = createValidation<User>('surname', value => value.length < 25);
```

@category Utilities
*/
type RequiredKeysOf<Type extends object> =
	Type extends unknown // For distributing `Type`
		? Exclude<keyof Type, OptionalKeysOf<Type>>
		: never; // Should never happen

/**
Returns a boolean for whether the given type is `never`.

@link https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919
@link https://stackoverflow.com/a/53984913/10292952
@link https://www.zhenghao.io/posts/ts-never

Useful in type utilities, such as checking if something does not occur.

@example
```
import type {IsNever, And} from 'type-fest';

// https://github.com/andnp/SimplyTyped/blob/master/src/types/strings.ts
type AreStringsEqual<A extends string, B extends string> =
	And<
		IsNever<Exclude<A, B>> extends true ? true : false,
		IsNever<Exclude<B, A>> extends true ? true : false
	>;

type EndIfEqual<I extends string, O extends string> =
	AreStringsEqual<I, O> extends true
		? never
		: void;

function endIfEqual<I extends string, O extends string>(input: I, output: O): EndIfEqual<I, O> {
	if (input === output) {
		process.exit(0);
	}
}

endIfEqual('abc', 'abc');
//=> never

endIfEqual('abc', '123');
//=> void
```

@category Type Guard
@category Utilities
*/
type IsNever<T> = [T] extends [never] ? true : false;

/**
An if-else-like type that resolves depending on whether the given `boolean` type is `true` or `false`.

Use-cases:
- You can use this in combination with `Is*` types to create an if-else-like experience. For example, `If<IsAny<any>, 'is any', 'not any'>`.

Note:
- Returns a union of if branch and else branch if the given type is `boolean` or `any`. For example, `If<boolean, 'Y', 'N'>` will return `'Y' | 'N'`.
- Returns the else branch if the given type is `never`. For example, `If<never, 'Y', 'N'>` will return `'N'`.

@example
```
import {If} from 'type-fest';

type A = If<true, 'yes', 'no'>;
//=> 'yes'

type B = If<false, 'yes', 'no'>;
//=> 'no'

type C = If<boolean, 'yes', 'no'>;
//=> 'yes' | 'no'

type D = If<any, 'yes', 'no'>;
//=> 'yes' | 'no'

type E = If<never, 'yes', 'no'>;
//=> 'no'
```

@example
```
import {If, IsAny, IsNever} from 'type-fest';

type A = If<IsAny<unknown>, 'is any', 'not any'>;
//=> 'not any'

type B = If<IsNever<never>, 'is never', 'not never'>;
//=> 'is never'
```

@example
```
import {If, IsEqual} from 'type-fest';

type IfEqual<T, U, IfBranch, ElseBranch> = If<IsEqual<T, U>, IfBranch, ElseBranch>;

type A = IfEqual<string, string, 'equal', 'not equal'>;
//=> 'equal'

type B = IfEqual<string, number, 'equal', 'not equal'>;
//=> 'not equal'
```

@category Type Guard
@category Utilities
*/
type If<Type extends boolean, IfBranch, ElseBranch> =
	IsNever<Type> extends true
		? ElseBranch
		: Type extends true
			? IfBranch
			: ElseBranch;

/**
Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.

@example
```
import type {Simplify} from 'type-fest';

type PositionProps = {
	top: number;
	left: number;
};

type SizeProps = {
	width: number;
	height: number;
};

// In your editor, hovering over `Props` will show a flattened object with all the properties.
type Props = Simplify<PositionProps & SizeProps>;
```

Sometimes it is desired to pass a value as a function argument that has a different type. At first inspection it may seem assignable, and then you discover it is not because the `value`'s type definition was defined as an interface. In the following example, `fn` requires an argument of type `Record<string, unknown>`. If the value is defined as a literal, then it is assignable. And if the `value` is defined as type using the `Simplify` utility the value is assignable.  But if the `value` is defined as an interface, it is not assignable because the interface is not sealed and elsewhere a non-string property could be added to the interface.

If the type definition must be an interface (perhaps it was defined in a third-party npm package), then the `value` can be defined as `const value: Simplify<SomeInterface> = ...`. Then `value` will be assignable to the `fn` argument.  Or the `value` can be cast as `Simplify<SomeInterface>` if you can't re-declare the `value`.

@example
```
import type {Simplify} from 'type-fest';

interface SomeInterface {
	foo: number;
	bar?: string;
	baz: number | undefined;
}

type SomeType = {
	foo: number;
	bar?: string;
	baz: number | undefined;
};

const literal = {foo: 123, bar: 'hello', baz: 456};
const someType: SomeType = literal;
const someInterface: SomeInterface = literal;

function fn(object: Record<string, unknown>): void {}

fn(literal); // Good: literal object type is sealed
fn(someType); // Good: type is sealed
fn(someInterface); // Error: Index signature for type 'string' is missing in type 'someInterface'. Because `interface` can be re-opened
fn(someInterface as Simplify<SomeInterface>); // Good: transform an `interface` into a `type`
```

@link https://github.com/microsoft/TypeScript/issues/15300
@see SimplifyDeep
@category Object
*/
type Simplify<T> = {[KeyType in keyof T]: T[KeyType]} & {};

/**
Returns a boolean for whether the two given types are equal.

@link https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
@link https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796

Use-cases:
- If you want to make a conditional branch based on the result of a comparison of two types.

@example
```
import type {IsEqual} from 'type-fest';

// This type returns a boolean for whether the given array includes the given item.
// `IsEqual` is used to compare the given array at position 0 and the given item and then return true if they are equal.
type Includes<Value extends readonly any[], Item> =
	Value extends readonly [Value[0], ...infer rest]
		? IsEqual<Value[0], Item> extends true
			? true
			: Includes<rest, Item>
		: false;
```

@category Type Guard
@category Utilities
*/
type IsEqual<A, B> =
	[A, B] extends [infer AA, infer BB]
		? [AA] extends [never]
			? [BB] extends [never]
				? true
				: false
			: [BB] extends [never]
				? false
				: _IsEqual<AA, BB>
		: false;

// This version fails the `equalWrappedTupleIntersectionToBeNeverAndNeverExpanded` test in `test-d/is-equal.ts`.
type _IsEqual<A, B> =
	(<G>() => G extends A & G | G ? 1 : 2) extends
	(<G>() => G extends B & G | G ? 1 : 2)
		? true
		: false;

/**
Omit any index signatures from the given object type, leaving only explicitly defined properties.

This is the counterpart of `PickIndexSignature`.

Use-cases:
- Remove overly permissive signatures from third-party types.

This type was taken from this [StackOverflow answer](https://stackoverflow.com/a/68261113/420747).

It relies on the fact that an empty object (`{}`) is assignable to an object with just an index signature, like `Record<string, unknown>`, but not to an object with explicitly defined keys, like `Record<'foo' | 'bar', unknown>`.

(The actual value type, `unknown`, is irrelevant and could be any type. Only the key type matters.)

```
const indexed: Record<string, unknown> = {}; // Allowed

const keyed: Record<'foo', unknown> = {}; // Error
// => TS2739: Type '{}' is missing the following properties from type 'Record<"foo" | "bar", unknown>': foo, bar
```

Instead of causing a type error like the above, you can also use a [conditional type](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html) to test whether a type is assignable to another:

```
type Indexed = {} extends Record<string, unknown>
	? '✅ `{}` is assignable to `Record<string, unknown>`'
	: '❌ `{}` is NOT assignable to `Record<string, unknown>`';
// => '✅ `{}` is assignable to `Record<string, unknown>`'

type Keyed = {} extends Record<'foo' | 'bar', unknown>
	? "✅ `{}` is assignable to `Record<'foo' | 'bar', unknown>`"
	: "❌ `{}` is NOT assignable to `Record<'foo' | 'bar', unknown>`";
// => "❌ `{}` is NOT assignable to `Record<'foo' | 'bar', unknown>`"
```

Using a [mapped type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#further-exploration), you can then check for each `KeyType` of `ObjectType`...

```
import type {OmitIndexSignature} from 'type-fest';

type OmitIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType // Map each key of `ObjectType`...
	]: ObjectType[KeyType]; // ...to its original value, i.e. `OmitIndexSignature<Foo> == Foo`.
};
```

...whether an empty object (`{}`) would be assignable to an object with that `KeyType` (`Record<KeyType, unknown>`)...

```
import type {OmitIndexSignature} from 'type-fest';

type OmitIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType
		// Is `{}` assignable to `Record<KeyType, unknown>`?
		as {} extends Record<KeyType, unknown>
			? ... // ✅ `{}` is assignable to `Record<KeyType, unknown>`
			: ... // ❌ `{}` is NOT assignable to `Record<KeyType, unknown>`
	]: ObjectType[KeyType];
};
```

If `{}` is assignable, it means that `KeyType` is an index signature and we want to remove it. If it is not assignable, `KeyType` is a "real" key and we want to keep it.

@example
```
import type {OmitIndexSignature} from 'type-fest';

interface Example {
	// These index signatures will be removed.
	[x: string]: any
	[x: number]: any
	[x: symbol]: any
	[x: `head-${string}`]: string
	[x: `${string}-tail`]: string
	[x: `head-${string}-tail`]: string
	[x: `${bigint}`]: string
	[x: `embedded-${number}`]: string

	// These explicitly defined keys will remain.
	foo: 'bar';
	qux?: 'baz';
}

type ExampleWithoutIndexSignatures = OmitIndexSignature<Example>;
// => { foo: 'bar'; qux?: 'baz' | undefined; }
```

@see PickIndexSignature
@category Object
*/
type OmitIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
		? never
		: KeyType]: ObjectType[KeyType];
};

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

@see OmitIndexSignature
@category Object
*/
type PickIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
		? KeyType
		: never]: ObjectType[KeyType];
};

// Merges two objects without worrying about index signatures.
type SimpleMerge<Destination, Source> = {
	[Key in keyof Destination as Key extends keyof Source ? never : Key]: Destination[Key];
} & Source;

/**
Merge two types into a new type. Keys of the second type overrides keys of the first type.

@example
```
import type {Merge} from 'type-fest';

interface Foo {
	[x: string]: unknown;
	[x: number]: unknown;
	foo: string;
	bar: symbol;
}

type Bar = {
	[x: number]: number;
	[x: symbol]: unknown;
	bar: Date;
	baz: boolean;
};

export type FooBar = Merge<Foo, Bar>;
// => {
// 	[x: string]: unknown;
// 	[x: number]: number;
// 	[x: symbol]: unknown;
// 	foo: string;
// 	bar: Date;
// 	baz: boolean;
// }
```

@category Object
*/
type Merge<Destination, Source> =
Simplify<
	SimpleMerge<PickIndexSignature<Destination>, PickIndexSignature<Source>>
	& SimpleMerge<OmitIndexSignature<Destination>, OmitIndexSignature<Source>>
>;

/**
Merges user specified options with default options.

@example
```
type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10; leavesOnly: false};
type SpecifiedOptions = {leavesOnly: true};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//=> {maxRecursionDepth: 10; leavesOnly: true}
```

@example
```
// Complains if default values are not provided for optional options

type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10};
type SpecifiedOptions = {};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//                                              ~~~~~~~~~~~~~~~~~~~
// Property 'leavesOnly' is missing in type 'DefaultPathsOptions' but required in type '{ maxRecursionDepth: number; leavesOnly: boolean; }'.
```

@example
```
// Complains if an option's default type does not conform to the expected type

type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10; leavesOnly: 'no'};
type SpecifiedOptions = {};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//                                              ~~~~~~~~~~~~~~~~~~~
// Types of property 'leavesOnly' are incompatible. Type 'string' is not assignable to type 'boolean'.
```

@example
```
// Complains if an option's specified type does not conform to the expected type

type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10; leavesOnly: false};
type SpecifiedOptions = {leavesOnly: 'yes'};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//                                                                   ~~~~~~~~~~~~~~~~
// Types of property 'leavesOnly' are incompatible. Type 'string' is not assignable to type 'boolean'.
```
*/
type ApplyDefaultOptions<
	Options extends object,
	Defaults extends Simplify<Omit<Required<Options>, RequiredKeysOf<Options>> & Partial<Record<RequiredKeysOf<Options>, never>>>,
	SpecifiedOptions extends Options,
> =
	If<IsAny<SpecifiedOptions>, Defaults,
		If<IsNever<SpecifiedOptions>, Defaults,
			Simplify<Merge<Defaults, {
				[Key in keyof SpecifiedOptions
				as Key extends OptionalKeysOf<Options> ? undefined extends SpecifiedOptions[Key] ? never : Key : Key
				]: SpecifiedOptions[Key]
			}> & Required<Options>>>>;

/**
Filter out keys from an object.

Returns `never` if `Exclude` is strictly equal to `Key`.
Returns `never` if `Key` extends `Exclude`.
Returns `Key` otherwise.

@example
```
type Filtered = Filter<'foo', 'foo'>;
//=> never
```

@example
```
type Filtered = Filter<'bar', string>;
//=> never
```

@example
```
type Filtered = Filter<'bar', 'foo'>;
//=> 'bar'
```

@see {Except}
*/
type Filter<KeyType, ExcludeType> = IsEqual<KeyType, ExcludeType> extends true ? never : (KeyType extends ExcludeType ? never : KeyType);

type ExceptOptions = {
	/**
	Disallow assigning non-specified properties.

	Note that any omitted properties in the resulting type will be present in autocomplete as `undefined`.

	@default false
	*/
	requireExactProps?: boolean;
};

type DefaultExceptOptions = {
	requireExactProps: false;
};

/**
Create a type from an object type without certain keys.

We recommend setting the `requireExactProps` option to `true`.

This type is a stricter version of [`Omit`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html#the-omit-helper-type). The `Omit` type does not restrict the omitted keys to be keys present on the given type, while `Except` does. The benefits of a stricter type are avoiding typos and allowing the compiler to pick up on rename refactors automatically.

This type was proposed to the TypeScript team, which declined it, saying they prefer that libraries implement stricter versions of the built-in types ([microsoft/TypeScript#30825](https://github.com/microsoft/TypeScript/issues/30825#issuecomment-523668235)).

@example
```
import type {Except} from 'type-fest';

type Foo = {
	a: number;
	b: string;
};

type FooWithoutA = Except<Foo, 'a'>;
//=> {b: string}

const fooWithoutA: FooWithoutA = {a: 1, b: '2'};
//=> errors: 'a' does not exist in type '{ b: string; }'

type FooWithoutB = Except<Foo, 'b', {requireExactProps: true}>;
//=> {a: number} & Partial<Record<"b", never>>

const fooWithoutB: FooWithoutB = {a: 1, b: '2'};
//=> errors at 'b': Type 'string' is not assignable to type 'undefined'.

// The `Omit` utility type doesn't work when omitting specific keys from objects containing index signatures.

// Consider the following example:

type UserData = {
	[metadata: string]: string;
	email: string;
	name: string;
	role: 'admin' | 'user';
};

// `Omit` clearly doesn't behave as expected in this case:
type PostPayload = Omit<UserData, 'email'>;
//=> type PostPayload = { [x: string]: string; [x: number]: string; }

// In situations like this, `Except` works better.
// It simply removes the `email` key while preserving all the other keys.
type PostPayload = Except<UserData, 'email'>;
//=> type PostPayload = { [x: string]: string; name: string; role: 'admin' | 'user'; }
```

@category Object
*/
type Except<ObjectType, KeysType extends keyof ObjectType, Options extends ExceptOptions = {}> =
	_Except<ObjectType, KeysType, ApplyDefaultOptions<ExceptOptions, DefaultExceptOptions, Options>>;

type _Except<ObjectType, KeysType extends keyof ObjectType, Options extends Required<ExceptOptions>> = {
	[KeyType in keyof ObjectType as Filter<KeyType, KeysType>]: ObjectType[KeyType];
} & (Options['requireExactProps'] extends true
	? Partial<Record<KeysType, never>>
	: {});

declare namespace TsConfigJson {
	namespace CompilerOptions {
		type JSX =
			| 'preserve'
			| 'react'
			| 'react-jsx'
			| 'react-jsxdev'
			| 'react-native';

		type Module =
			| 'CommonJS'
			| 'AMD'
			| 'System'
			| 'UMD'
			| 'ES6'
			| 'ES2015'
			| 'ES2020'
			| 'ES2022'
			| 'ESNext'
			| 'Node16'
			| 'Node18'
			| 'Node20'
			| 'NodeNext'
			| 'Preserve'
			| 'None'
			// Lowercase alternatives
			| 'commonjs'
			| 'amd'
			| 'system'
			| 'umd'
			| 'es6'
			| 'es2015'
			| 'es2020'
			| 'es2022'
			| 'esnext'
			| 'node16'
			| 'node18'
			| 'node20'
			| 'nodenext'
			| 'preserve'
			| 'none';

		type NewLine =
			| 'CRLF'
			| 'LF'
			// Lowercase alternatives
			| 'crlf'
			| 'lf';

		type Target =
			| 'ES3'
			| 'ES5'
			| 'ES6'
			| 'ES2015'
			| 'ES2016'
			| 'ES2017'
			| 'ES2018'
			| 'ES2019'
			| 'ES2020'
			| 'ES2021'
			| 'ES2022'
			| 'ES2023'
			| 'ES2024'
			| 'ESNext'
			// Lowercase alternatives
			| 'es3'
			| 'es5'
			| 'es6'
			| 'es2015'
			| 'es2016'
			| 'es2017'
			| 'es2018'
			| 'es2019'
			| 'es2020'
			| 'es2021'
			| 'es2022'
			| 'es2023'
			| 'es2024'
			| 'esnext';

		type Lib =
			| 'ES5'
			| 'ES6'
			| 'ES7'
			| 'ES2015'
			| 'ES2015.Collection'
			| 'ES2015.Core'
			| 'ES2015.Generator'
			| 'ES2015.Iterable'
			| 'ES2015.Promise'
			| 'ES2015.Proxy'
			| 'ES2015.Reflect'
			| 'ES2015.Symbol.WellKnown'
			| 'ES2015.Symbol'
			| 'ES2016'
			| 'ES2016.Array.Include'
			| 'ES2017'
			| 'ES2017.ArrayBuffer'
			| 'ES2017.Date'
			| 'ES2017.Intl'
			| 'ES2017.Object'
			| 'ES2017.SharedMemory'
			| 'ES2017.String'
			| 'ES2017.TypedArrays'
			| 'ES2018'
			| 'ES2018.AsyncGenerator'
			| 'ES2018.AsyncIterable'
			| 'ES2018.Intl'
			| 'ES2018.Promise'
			| 'ES2018.Regexp'
			| 'ES2019'
			| 'ES2019.Array'
			| 'ES2019.Intl'
			| 'ES2019.Object'
			| 'ES2019.String'
			| 'ES2019.Symbol'
			| 'ES2020'
			| 'ES2020.BigInt'
			| 'ES2020.Date'
			| 'ES2020.Intl'
			| 'ES2020.Number'
			| 'ES2020.Promise'
			| 'ES2020.SharedMemory'
			| 'ES2020.String'
			| 'ES2020.Symbol.WellKnown'
			| 'ES2021'
			| 'ES2021.Intl'
			| 'ES2021.Promise'
			| 'ES2021.String'
			| 'ES2021.WeakRef'
			| 'ES2022'
			| 'ES2022.Array'
			| 'ES2022.Error'
			| 'ES2022.Intl'
			| 'ES2022.Object'
			| 'ES2022.RegExp'
			| 'ES2022.SharedMemory'
			| 'ES2022.String'
			| 'ES2023'
			| 'ES2023.Array'
			| 'ES2023.Collection'
			| 'ES2023.Intl'
			| 'ES2024'
			| 'ES2024.ArrayBuffer'
			| 'ES2024.Collection'
			| 'ES2024.Object'
			| 'ES2024.Promise'
			| 'ES2024.Regexp'
			| 'ES2024.SharedMemory'
			| 'ES2024.String'
			| 'ESNext'
			| 'ESNext.Array'
			| 'ESNext.AsyncIterable'
			| 'ESNext.BigInt'
			| 'ESNext.Collection'
			| 'ESNext.Decorators'
			| 'ESNext.Disposable'
			| 'ESNext.Error'
			| 'ESNext.Intl'
			| 'ESNext.Iterator'
			| 'ESNext.Object'
			| 'ESNext.Promise'
			| 'ESNext.Regexp'
			| 'ESNext.String'
			| 'ESNext.Symbol'
			| 'ESNext.WeakRef'
			| 'DOM'
			| 'DOM.AsyncIterable'
			| 'DOM.Iterable'
			| 'Decorators'
			| 'Decorators.Legacy'
			| 'ScriptHost'
			| 'WebWorker'
			| 'WebWorker.AsyncIterable'
			| 'WebWorker.ImportScripts'
			| 'WebWorker.Iterable'
			// Lowercase alternatives
			| 'es5'
			| 'es6'
			| 'es7'
			| 'es2015'
			| 'es2015.collection'
			| 'es2015.core'
			| 'es2015.generator'
			| 'es2015.iterable'
			| 'es2015.promise'
			| 'es2015.proxy'
			| 'es2015.reflect'
			| 'es2015.symbol.wellknown'
			| 'es2015.symbol'
			| 'es2016'
			| 'es2016.array.include'
			| 'es2017'
			| 'es2017.arraybuffer'
			| 'es2017.date'
			| 'es2017.intl'
			| 'es2017.object'
			| 'es2017.sharedmemory'
			| 'es2017.string'
			| 'es2017.typedarrays'
			| 'es2018'
			| 'es2018.asyncgenerator'
			| 'es2018.asynciterable'
			| 'es2018.intl'
			| 'es2018.promise'
			| 'es2018.regexp'
			| 'es2019'
			| 'es2019.array'
			| 'es2019.intl'
			| 'es2019.object'
			| 'es2019.string'
			| 'es2019.symbol'
			| 'es2020'
			| 'es2020.bigint'
			| 'es2020.date'
			| 'es2020.intl'
			| 'es2020.number'
			| 'es2020.promise'
			| 'es2020.sharedmemory'
			| 'es2020.string'
			| 'es2020.symbol.wellknown'
			| 'es2021'
			| 'es2021.intl'
			| 'es2021.promise'
			| 'es2021.string'
			| 'es2021.weakref'
			| 'es2022'
			| 'es2022.array'
			| 'es2022.error'
			| 'es2022.intl'
			| 'es2022.object'
			| 'es2022.regexp'
			| 'es2022.sharedmemory'
			| 'es2022.string'
			| 'es2023'
			| 'es2023.array'
			| 'es2023.collection'
			| 'es2023.intl'
			| 'es2024'
			| 'es2024.arraybuffer'
			| 'es2024.collection'
			| 'es2024.object'
			| 'es2024.promise'
			| 'es2024.regexp'
			| 'es2024.sharedmemory'
			| 'es2024.string'
			| 'esnext'
			| 'esnext.array'
			| 'esnext.asynciterable'
			| 'esnext.bigint'
			| 'esnext.collection'
			| 'esnext.decorators'
			| 'esnext.disposable'
			| 'esnext.error'
			| 'esnext.intl'
			| 'esnext.iterator'
			| 'esnext.object'
			| 'esnext.promise'
			| 'esnext.regexp'
			| 'esnext.string'
			| 'esnext.symbol'
			| 'esnext.weakref'
			| 'dom'
			| 'dom.asynciterable'
			| 'dom.iterable'
			| 'decorators'
			| 'decorators.legacy'
			| 'scripthost'
			| 'webworker'
			| 'webworker.asynciterable'
			| 'webworker.importscripts'
			| 'webworker.iterable';

		type Plugin = {
			/**
			Plugin name.
			*/
			name: string;
		};

		type ImportsNotUsedAsValues =
			| 'remove'
			| 'preserve'
			| 'error';

		type FallbackPolling =
			| 'fixedPollingInterval'
			| 'priorityPollingInterval'
			| 'dynamicPriorityPolling'
			| 'fixedInterval'
			| 'priorityInterval'
			| 'dynamicPriority'
			| 'fixedChunkSize';

		type WatchDirectory =
			| 'useFsEvents'
			| 'fixedPollingInterval'
			| 'dynamicPriorityPolling'
			| 'fixedChunkSizePolling';

		type WatchFile =
			| 'fixedPollingInterval'
			| 'priorityPollingInterval'
			| 'dynamicPriorityPolling'
			| 'useFsEvents'
			| 'useFsEventsOnParentDirectory'
			| 'fixedChunkSizePolling';

		type ModuleResolution =
			| 'classic'
			| 'node'
			| 'node10'
			| 'node16'
			| 'nodenext'
			| 'bundler'
			// Pascal-cased alternatives
			| 'Classic'
			| 'Node'
			| 'Node10'
			| 'Node16'
			| 'NodeNext'
			| 'Bundler';

		type ModuleDetection =
			| 'auto'
			| 'legacy'
			| 'force';

		type IgnoreDeprecations = '5.0';
	}

	type CompilerOptions = {
		/**
		The character set of the input files.

		@default 'utf8'
		@deprecated This option will be removed in TypeScript 5.5.
		*/
		charset?: string;

		/**
		Enables building for project references.

		@default true
		*/
		composite?: boolean;

		/**
		Generates corresponding d.ts files.

		@default false
		*/
		declaration?: boolean;

		/**
		Specify output directory for generated declaration files.
		*/
		declarationDir?: string;

		/**
		Show diagnostic information.

		@default false
		*/
		diagnostics?: boolean;

		/**
		Reduce the number of projects loaded automatically by TypeScript.

		@default false
		*/
		disableReferencedProjectLoad?: boolean;

		/**
		Enforces using indexed accessors for keys declared using an indexed type.

		@default false
		*/
		noPropertyAccessFromIndexSignature?: boolean;

		/**
		Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.

		@default false
		*/
		emitBOM?: boolean;

		/**
		Only emit `.d.ts` declaration files.

		@default false
		*/
		emitDeclarationOnly?: boolean;

		/**
		Differentiate between undefined and not present when type checking.

		@default false
		*/
		exactOptionalPropertyTypes?: boolean;

		/**
		Enable incremental compilation.

		@default `composite`
		*/
		incremental?: boolean;

		/**
		Specify file to store incremental compilation information.

		@default '.tsbuildinfo'
		*/
		tsBuildInfoFile?: string;

		/**
		Emit a single file with source maps instead of having a separate file.

		@default false
		*/
		inlineSourceMap?: boolean;

		/**
		Emit the source alongside the sourcemaps within a single file.

		Requires `--inlineSourceMap` to be set.

		@default false
		*/
		inlineSources?: boolean;

		/**
		Specify what JSX code is generated.

		@default 'preserve'
		*/
		jsx?: CompilerOptions.JSX;

		/**
		Specifies the object invoked for `createElement` and `__spread` when targeting `'react'` JSX emit.

		@default 'React'
		*/
		reactNamespace?: string;

		/**
		Specify the JSX factory function to use when targeting React JSX emit, e.g. `React.createElement` or `h`.

		@default 'React.createElement'
		*/
		jsxFactory?: string;

		/**
		Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'.

		@default 'React.Fragment'
		*/
		jsxFragmentFactory?: string;

		/**
		Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.

		@default 'react'
		*/
		jsxImportSource?: string;

		/**
		Print names of files part of the compilation.

		@default false
		*/
		listFiles?: boolean;

		/**
		Specifies the location where debugger should locate map files instead of generated locations.
		*/
		mapRoot?: string;

		/**
		Specify module code generation: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6', 'ES2015' or 'ESNext'. Only 'AMD' and 'System' can be used in conjunction with `--outFile`. 'ES6' and 'ES2015' values may be used when targeting 'ES5' or lower.

		@default ['ES3', 'ES5'].includes(target) ? 'CommonJS' : 'ES6'
		*/
		module?: CompilerOptions.Module;

		/**
		Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6).

		@default ['AMD', 'System', 'ES6'].includes(module) ? 'classic' : 'node'
		*/
		moduleResolution?: CompilerOptions.ModuleResolution;

		/**
		Specifies the end of line sequence to be used when emitting files: 'crlf' (Windows) or 'lf' (Unix).

		@default 'LF'
		*/
		newLine?: CompilerOptions.NewLine;

		/**
		Disable full type checking (only critical parse and emit errors will be reported).

		@default false
		*/
		noCheck?: boolean;

		/**
		Do not emit output.

		@default false
		*/
		noEmit?: boolean;

		/**
		Do not generate custom helper functions like `__extends` in compiled output.

		@default false
		*/
		noEmitHelpers?: boolean;

		/**
		Do not emit outputs if any type checking errors were reported.

		@default false
		*/
		noEmitOnError?: boolean;

		/**
		Warn on expressions and declarations with an implied 'any' type.

		@default false
		*/
		noImplicitAny?: boolean;

		/**
		Raise error on 'this' expressions with an implied any type.

		@default false
		*/
		noImplicitThis?: boolean;

		/**
		Report errors on unused locals.

		@default false
		*/
		noUnusedLocals?: boolean;

		/**
		Report errors on unused parameters.

		@default false
		*/
		noUnusedParameters?: boolean;

		/**
		Do not include the default library file (lib.d.ts).

		@default false
		*/
		noLib?: boolean;

		/**
		Do not add triple-slash references or module import targets to the list of compiled files.

		@default false
		*/
		noResolve?: boolean;

		/**
		Disable strict checking of generic signatures in function types.

		@default false
		@deprecated This option will be removed in TypeScript 5.5.
		*/
		noStrictGenericChecks?: boolean;

		/**
		@deprecated use `skipLibCheck` instead.
		*/
		skipDefaultLibCheck?: boolean;

		/**
		Skip type checking of declaration files.

		@default false
		*/
		skipLibCheck?: boolean;

		/**
		Concatenate and emit output to single file.
		*/
		outFile?: string;

		/**
		Redirect output structure to the directory.
		*/
		outDir?: string;

		/**
		Do not erase const enum declarations in generated code.

		@default false
		*/
		preserveConstEnums?: boolean;

		/**
		Do not resolve symlinks to their real path; treat a symlinked file like a real one.

		@default false
		*/
		preserveSymlinks?: boolean;

		/**
		Keep outdated console output in watch mode instead of clearing the screen.

		@default false
		*/
		preserveWatchOutput?: boolean;

		/**
		Stylize errors and messages using color and context (experimental).

		@default true // Unless piping to another program or redirecting output to a file.
		*/
		pretty?: boolean;

		/**
		Do not emit comments to output.

		@default false
		*/
		removeComments?: boolean;

		/**
		Rewrite '.ts', '.tsx', '.mts', and '.cts' file extensions in relative import paths to their JavaScript equivalent in output files.

		@default false
		*/
		rewriteRelativeImportExtensions?: boolean;

		/**
		Specifies the root directory of input files.

		Use to control the output directory structure with `--outDir`.
		*/
		rootDir?: string;

		/**
		Unconditionally emit imports for unresolved files.

		@default false
		*/
		isolatedModules?: boolean;

		/**
		Require sufficient annotation on exports so other tools can trivially generate declaration files.

		@default false
		*/
		isolatedDeclarations?: boolean;

		/**
		Generates corresponding '.map' file.

		@default false
		*/
		sourceMap?: boolean;

		/**
		Specifies the location where debugger should locate TypeScript files instead of source locations.
		*/
		sourceRoot?: string;

		/**
		Suppress excess property checks for object literals.

		@default false
		@deprecated This option will be removed in TypeScript 5.5.
		*/
		suppressExcessPropertyErrors?: boolean;

		/**
		Suppress noImplicitAny errors for indexing objects lacking index signatures.

		@default false
		@deprecated This option will be removed in TypeScript 5.5.
		*/
		suppressImplicitAnyIndexErrors?: boolean;

		/**
		Do not emit declarations for code that has an `@internal` annotation.
		*/
		stripInternal?: boolean;

		/**
		Specify ECMAScript target version.

		@default 'es3'
		*/
		target?: CompilerOptions.Target;

		/**
		Default catch clause variables as `unknown` instead of `any`.

		@default false
		*/
		useUnknownInCatchVariables?: boolean;

		/**
		Watch input files.

		@default false
		@deprecated Use watchOptions instead.
		*/
		watch?: boolean;

		/**
		Specify the polling strategy to use when the system runs out of or doesn't support native file watchers.

		@deprecated Use watchOptions.fallbackPolling instead.
		*/
		fallbackPolling?: CompilerOptions.FallbackPolling;

		/**
		Specify the strategy for watching directories under systems that lack recursive file-watching functionality.

		@default 'useFsEvents'
		@deprecated Use watchOptions.watchDirectory instead.
		*/
		watchDirectory?: CompilerOptions.WatchDirectory;

		/**
		Specify the strategy for watching individual files.

		@default 'useFsEvents'
		@deprecated Use watchOptions.watchFile instead.
		*/
		watchFile?: CompilerOptions.WatchFile;

		/**
		Enables experimental support for ES7 decorators.

		@default false
		*/
		experimentalDecorators?: boolean;

		/**
		Emit design-type metadata for decorated declarations in source.

		@default false
		*/
		emitDecoratorMetadata?: boolean;

		/**
		Do not report errors on unused labels.

		@default false
		*/
		allowUnusedLabels?: boolean;

		/**
		Report error when not all code paths in function return a value.

		@default false
		*/
		noImplicitReturns?: boolean;

		/**
		Add `undefined` to a type when accessed using an index.

		@default false
		*/
		noUncheckedIndexedAccess?: boolean;

		/**
		Report error if failed to find a source file for a side effect import.

		@default false
		*/
		noUncheckedSideEffectImports?: boolean;

		/**
		Report errors for fallthrough cases in switch statement.

		@default false
		*/
		noFallthroughCasesInSwitch?: boolean;

		/**
		Ensure overriding members in derived classes are marked with an override modifier.

		@default false
		*/
		noImplicitOverride?: boolean;

		/**
		Do not report errors on unreachable code.

		@default false
		*/
		allowUnreachableCode?: boolean;

		/**
		Disallow inconsistently-cased references to the same file.

		@default true
		*/
		forceConsistentCasingInFileNames?: boolean;

		/**
		Emit a v8 CPU profile of the compiler run for debugging.

		@default 'profile.cpuprofile'
		*/
		generateCpuProfile?: string;

		/**
		Generates an event trace and a list of types.
		*/
		generateTrace?: boolean;

		/**
		Base directory to resolve non-relative module names.
		*/
		baseUrl?: string;

		/**
		Specify path mapping to be computed relative to baseUrl option.
		*/
		paths?: Record<string, string[]>;

		/**
		List of TypeScript language server plugins to load.
		*/
		plugins?: CompilerOptions.Plugin[];

		/**
		Specify list of root directories to be used when resolving modules.
		*/
		rootDirs?: string[];

		/**
		Specify list of directories for type definition files to be included.
		*/
		typeRoots?: string[];

		/**
		Type declaration files to be included in compilation.
		*/
		types?: string[];

		/**
		Enable tracing of the name resolution process.

		@default false
		*/
		traceResolution?: boolean;

		/**
		Allow javascript files to be compiled.

		@default false
		*/
		allowJs?: boolean;

		/**
		Do not truncate error messages.

		@default false
		*/
		noErrorTruncation?: boolean;

		/**
		Allow default imports from modules with no default export. This does not affect code emit, just typechecking.

		@default module === 'system' || esModuleInterop
		*/
		allowSyntheticDefaultImports?: boolean;

		/**
		Do not emit `'use strict'` directives in module output.

		@default false
		@deprecated This option will be removed in TypeScript 5.5.
		*/
		noImplicitUseStrict?: boolean;

		/**
		Enable to list all emitted files.

		@default false
		*/
		listEmittedFiles?: boolean;

		/**
		Disable size limit for JavaScript project.

		@default false
		*/
		disableSizeLimit?: boolean;

		/**
		List of library files to be included in the compilation.
		*/
		lib?: CompilerOptions.Lib[];

		/**
		Enable strict null checks.

		@default false
		*/
		strictNullChecks?: boolean;

		/**
		The maximum dependency depth to search under `node_modules` and load JavaScript files. Only applicable with `--allowJs`.

		@default 0
		*/
		maxNodeModuleJsDepth?: number;

		/**
		Import emit helpers (e.g. `__extends`, `__rest`, etc..) from tslib.

		@default false
		*/
		importHelpers?: boolean;

		/**
		Specify emit/checking behavior for imports that are only used for types.

		@default 'remove'
		@deprecated Use `verbatimModuleSyntax` instead.
		*/
		importsNotUsedAsValues?: CompilerOptions.ImportsNotUsedAsValues;

		/**
		Parse in strict mode and emit `'use strict'` for each source file.

		@default false
		*/
		alwaysStrict?: boolean;

		/**
		Enable all strict type checking options.

		@default false
		*/
		strict?: boolean;

		/**
		Enable stricter checking of of the `bind`, `call`, and `apply` methods on functions.

		@default false
		*/
		strictBindCallApply?: boolean;

		/**
		Provide full support for iterables in `for-of`, spread, and destructuring when targeting `ES5` or `ES3`.

		@default false
		*/
		downlevelIteration?: boolean;

		/**
		Report errors in `.js` files.

		@default false
		*/
		checkJs?: boolean;

		/**
		Built-in iterators are instantiated with a `TReturn` type of undefined instead of `any`.

		@default false
		*/
		strictBuiltinIteratorReturn?: boolean;

		/**
		Disable bivariant parameter checking for function types.

		@default false
		*/
		strictFunctionTypes?: boolean;

		/**
		Ensure non-undefined class properties are initialized in the constructor.

		@default false
		*/
		strictPropertyInitialization?: boolean;

		/**
		Emit `__importStar` and `__importDefault` helpers for runtime Babel ecosystem compatibility and enable `--allowSyntheticDefaultImports` for typesystem compatibility.

		@default false
		*/
		esModuleInterop?: boolean;

		/**
		Allow accessing UMD globals from modules.

		@default false
		*/
		allowUmdGlobalAccess?: boolean;

		/**
		Resolve `keyof` to string valued property names only (no numbers or symbols).

		@default false
		@deprecated This option will be removed in TypeScript 5.5.
		*/
		keyofStringsOnly?: boolean;

		/**
		Emit ECMAScript standard class fields.

		@default false
		*/
		useDefineForClassFields?: boolean;

		/**
		Generates a sourcemap for each corresponding `.d.ts` file.

		@default false
		*/
		declarationMap?: boolean;

		/**
		Include modules imported with `.json` extension.

		@default false
		*/
		resolveJsonModule?: boolean;

		/**
		Have recompiles in '--incremental' and '--watch' assume that changes within a file will only affect files directly depending on it.

		@default false
		*/
		assumeChangesOnlyAffectDirectDependencies?: boolean;

		/**
		Output more detailed compiler performance information after building.

		@default false
		*/
		extendedDiagnostics?: boolean;

		/**
		Print names of files that are part of the compilation and then stop processing.

		@default false
		*/
		listFilesOnly?: boolean;

		/**
		Disable preferring source files instead of declaration files when referencing composite projects.

		@default true if composite, false otherwise
		*/
		disableSourceOfProjectReferenceRedirect?: boolean;

		/**
		Opt a project out of multi-project reference checking when editing.

		@default false
		*/
		disableSolutionSearching?: boolean;

		/**
		Print names of files which TypeScript sees as a part of your project and the reason they are part of the compilation.

		@default false
		*/
		explainFiles?: boolean;

		/**
		Preserve unused imported values in the JavaScript output that would otherwise be removed.

		@default true
		@deprecated Use `verbatimModuleSyntax` instead.
		*/
		preserveValueImports?: boolean;

		/**
		List of file name suffixes to search when resolving a module.
		*/
		moduleSuffixes?: string[];

		/**
		Control what method is used to detect module-format JS files.

		@default 'auto'
		*/
		moduleDetection?: CompilerOptions.ModuleDetection;

		/**
		Allows TypeScript files to import each other with a TypeScript-specific extension like .ts, .mts, or .tsx.

		@default false
		*/
		allowImportingTsExtensions?: boolean;

		/**
		Forces TypeScript to consult the exports field of package.json files if it ever reads from a package in node_modules.

		@default false
		*/
		resolvePackageJsonExports?: boolean;

		/**
		Forces TypeScript to consult the imports field of package.json files when performing a lookup that starts with # from a file whose ancestor directory contains a package.json.

		@default false
		*/
		resolvePackageJsonImports?: boolean;

		/**
		Suppress errors for file formats that TypeScript does not understand.

		@default false
		*/
		allowArbitraryExtensions?: boolean;

		/**
		List of additional conditions that should succeed when TypeScript resolves from package.json.
		*/
		customConditions?: string[];

		/**
		Anything that uses the type modifier is dropped entirely.

		@default false
		*/
		verbatimModuleSyntax?: boolean;

		/**
		Suppress deprecation warnings
		*/
		ignoreDeprecations?: CompilerOptions.IgnoreDeprecations;

		/**
		Do not allow runtime constructs that are not part of ECMAScript.

		@default false
		*/
		erasableSyntaxOnly?: boolean;

		/**
		Enable lib replacement.

		@default true
		*/
		libReplacement?: boolean;
	};

	namespace WatchOptions {
		type WatchFileKind =
			| 'FixedPollingInterval'
			| 'PriorityPollingInterval'
			| 'DynamicPriorityPolling'
			| 'FixedChunkSizePolling'
			| 'UseFsEvents'
			| 'UseFsEventsOnParentDirectory';

		type WatchDirectoryKind =
			| 'UseFsEvents'
			| 'FixedPollingInterval'
			| 'DynamicPriorityPolling'
			| 'FixedChunkSizePolling';

		type PollingWatchKind =
			| 'FixedInterval'
			| 'PriorityInterval'
			| 'DynamicPriority'
			| 'FixedChunkSize';
	}

	type WatchOptions = {

		/**
		Specify the strategy for watching individual files.

		@default 'UseFsEvents'
		*/
		watchFile?: WatchOptions.WatchFileKind | Lowercase<WatchOptions.WatchFileKind>;

		/**
		Specify the strategy for watching directories under systems that lack recursive file-watching functionality.

		@default 'UseFsEvents'
		*/
		watchDirectory?: WatchOptions.WatchDirectoryKind | Lowercase<WatchOptions.WatchDirectoryKind>;

		/**
		Specify the polling strategy to use when the system runs out of or doesn't support native file watchers.
		*/
		fallbackPolling?: WatchOptions.PollingWatchKind | Lowercase<WatchOptions.PollingWatchKind>;

		/**
		Enable synchronous updates on directory watchers for platforms that don't support recursive watching natively.
		*/
		synchronousWatchDirectory?: boolean;

		/**
		Specifies a list of directories to exclude from watch.
		*/
		excludeDirectories?: string[];

		/**
		Specifies a list of files to exclude from watch.
		*/
		excludeFiles?: string[];
	};

	/**
	Auto type (.d.ts) acquisition options for this project.
	*/
	type TypeAcquisition = {
		/**
		Enable auto type acquisition.
		*/
		enable?: boolean;

		/**
		Specifies a list of type declarations to be included in auto type acquisition. For example, `['jquery', 'lodash']`.
		*/
		include?: string[];

		/**
		Specifies a list of type declarations to be excluded from auto type acquisition. For example, `['jquery', 'lodash']`.
		*/
		exclude?: string[];

		/**
		Disable infering what types should be added based on filenames in a project.
		*/
		disableFilenameBasedTypeAcquisition?: boolean;
	};

	type References = {
		/**
		A normalized path on disk.
		*/
		path: string;

		/**
		The path as the user originally wrote it.
		*/
		originalPath?: string;

		/**
		True if the output of this reference should be prepended to the output of this project.

		Only valid for `--outFile` compilations.
		@deprecated This option will be removed in TypeScript 5.5.
		*/
		prepend?: boolean;

		/**
		True if it is intended that this reference form a circularity.
		*/
		circular?: boolean;
	};
}

/**
Type for [TypeScript's `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) (TypeScript 3.7).

@category File
*/
type TsConfigJson = {
	/**
	Instructs the TypeScript compiler how to compile `.ts` files.
	*/
	compilerOptions?: TsConfigJson.CompilerOptions;

	/**
	Instructs the TypeScript compiler how to watch files.
	*/
	watchOptions?: TsConfigJson.WatchOptions;

	/**
	Auto type (.d.ts) acquisition options for this project.
	*/
	typeAcquisition?: TsConfigJson.TypeAcquisition;

	/**
	Enable Compile-on-Save for this project.
	*/
	compileOnSave?: boolean;

	/**
	Path to base configuration file to inherit from.
	*/
	extends?: string | string[];

	/**
	If no `files` or `include` property is present in a `tsconfig.json`, the compiler defaults to including all files in the containing directory and subdirectories except those specified by `exclude`. When a `files` property is specified, only those files and those specified by `include` are included.
	*/
	files?: string[];

	/**
	Specifies a list of files to be excluded from compilation. The `exclude` property only affects the files included via the `include` property and not the `files` property.

	Glob patterns require TypeScript version 2.0 or later.
	*/
	exclude?: string[];

	/**
	Specifies a list of glob patterns that match files to be included in compilation.

	If no `files` or `include` property is present in a `tsconfig.json`, the compiler defaults to including all files in the containing directory and subdirectories except those specified by `exclude`.
	*/
	include?: string[];

	/**
	Referenced projects.
	*/
	references?: TsConfigJson.References[];
};

type TsConfigJsonResolved = Except<TsConfigJson, 'extends'>;
type TsConfigResult = {
    /**
     * The path to the tsconfig.json file
     */
    path: string;
    /**
     * The resolved tsconfig.json file
     */
    config: TsConfigJsonResolved;
};
type PathsMatcher = (specifier: string) => string[];
type Cache<value = any> = Map<string, value>;

/**
 * Searches for a tsconfig file by walking up the directory tree.
 *
 * @param searchPath Path to a source file or directory to search from (default: `process.cwd()`).
 * @param configName Config file name (default: `tsconfig.json`).
 * @param cache Cache for previous results (default: new `Map()`).
 * @param includes When true, validates that the tsconfig applies to the
 * `searchPath` file via `include`/`exclude`/`files`. See {@link getTsconfig}
 * for details. Default: `false`.
 * @returns The path to the found tsconfig file, or `undefined` if not found.
 */
declare const findTsconfig: (searchPath?: string, configName?: string, cache?: Cache, includes?: boolean) => string | undefined;
/**
 * Finds and reads a tsconfig file by walking up the directory tree.
 *
 * By default, returns the nearest tsconfig found (matching `tsc` CLI behavior).
 *
 * When `includes` is true and `searchPath` is a file path, validates
 * that the found tsconfig applies to the file (via `files`, `include`, and
 * `exclude`). If the file isn't matched, continues searching parent directories.
 * This matches VS Code's TypeScript Language Server behavior.
 *
 * Reference:
 * - `tsc` CLI uses `findConfigFile()` which returns the nearest tsconfig without validation:
 *   https://github.com/microsoft/TypeScript/blob/b19a9da2a3b8/src/compiler/program.ts#L328
 * - Language Server uses `isMatchedByConfig()` to verify the file belongs to the project:
 *   https://github.com/microsoft/TypeScript/blob/b19a9da2a3b8/src/server/editorServices.ts#L4486
 *
 * @param searchPath Path to a source file or directory to search from (default: `process.cwd()`).
 * @param configName Config file name (default: `tsconfig.json`).
 * @param cache Cache for previous results (default: new `Map()`).
 * @param includes When true, validates that the tsconfig applies to the
 * `searchPath` file via `include`/`exclude`/`files`. Default: `false`.
 * @returns The tsconfig file path and parsed contents, or `null` if not found.
 */
declare const getTsconfig: (searchPath?: string, configName?: string, cache?: Cache, includes?: boolean) => TsConfigResult | null;

/**
 * Parses a tsconfig file at a given path
 *
 * @param tsconfigPath - Path to the tsconfig file.
 * @param cache - Cache for storing parsed tsconfig results (default: new `Map()`).
 * @returns The parsed and resolved tsconfig JSON.
 */
declare const parseTsconfig: (tsconfigPath: string, cache?: Cache<string>) => TsConfigJsonResolved;

/**
 * Reference:
 * https://github.com/microsoft/TypeScript/blob/3ccbe804f850f40d228d3c875be952d94d39aa1d/src/compiler/moduleNameResolver.ts#L2465
 */
declare const createPathsMatcher: (tsconfig: TsConfigResult) => PathsMatcher | null;

type FileMatcher = (filePath: string) => (TsConfigJsonResolved | undefined);
declare const createFilesMatcher: ({ config, path: tsconfigPath, }: TsConfigResult, caseSensitivePaths?: boolean) => FileMatcher;

export { type Cache, type FileMatcher, type PathsMatcher, TsConfigJson, type TsConfigJsonResolved, type TsConfigResult, createFilesMatcher, createPathsMatcher, findTsconfig, getTsconfig, parseTsconfig };
