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

// @ts-expect-error
const keyed: Record<'foo', unknown> = {}; // Error
// TS2739: Type '{}' is missing the following properties from type 'Record<"foo" | "bar", unknown>': foo, bar
```

Instead of causing a type error like the above, you can also use a [conditional type](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html) to test whether a type is assignable to another:

```
type Indexed = {} extends Record<string, unknown>
	? '✅ `{}` is assignable to `Record<string, unknown>`'
	: '❌ `{}` is NOT assignable to `Record<string, unknown>`';

type IndexedResult = Indexed;
//=> '✅ `{}` is assignable to `Record<string, unknown>`'

type Keyed = {} extends Record<'foo' | 'bar', unknown>
	? '✅ `{}` is assignable to `Record<\'foo\' | \'bar\', unknown>`'
	: '❌ `{}` is NOT assignable to `Record<\'foo\' | \'bar\', unknown>`';

type KeyedResult = Keyed;
//=> '❌ `{}` is NOT assignable to `Record<\'foo\' | \'bar\', unknown>`'
```

Using a [mapped type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#further-exploration), you can then check for each `KeyType` of `ObjectType`...

```
type OmitIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType // Map each key of `ObjectType`...
	]: ObjectType[KeyType]; // ...to its original value, i.e. `OmitIndexSignature<Foo> == Foo`.
};
```

...whether an empty object (`{}`) would be assignable to an object with that `KeyType` (`Record<KeyType, unknown>`)...

```
type OmitIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType
	// Is `{}` assignable to `Record<KeyType, unknown>`?
	as {} extends Record<KeyType, unknown>
		? never // ✅ `{}` is assignable to `Record<KeyType, unknown>`
		: KeyType // ❌ `{}` is NOT assignable to `Record<KeyType, unknown>`
	]: ObjectType[KeyType];
};
```

If `{}` is assignable, it means that `KeyType` is an index signature and we want to remove it. If it is not assignable, `KeyType` is a "real" key and we want to keep it.

@example
```
import type {OmitIndexSignature} from 'type-fest';

type Example = {
	// These index signatures will be removed.
	[x: string]: any;
	[x: number]: any;
	[x: symbol]: any;
	[x: `head-${string}`]: string;
	[x: `${string}-tail`]: string;
	[x: `head-${string}-tail`]: string;
	[x: `${bigint}`]: string;
	[x: `embedded-${number}`]: string;

	// These explicitly defined keys will remain.
	foo: 'bar';
	qux?: 'baz';
};

type ExampleWithoutIndexSignatures = OmitIndexSignature<Example>;
//=> {foo: 'bar'; qux?: 'baz'}
```

@see {@link PickIndexSignature}
@category Object
*/
export type OmitIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
		? never
		: KeyType]: ObjectType[KeyType];
};

export {};
