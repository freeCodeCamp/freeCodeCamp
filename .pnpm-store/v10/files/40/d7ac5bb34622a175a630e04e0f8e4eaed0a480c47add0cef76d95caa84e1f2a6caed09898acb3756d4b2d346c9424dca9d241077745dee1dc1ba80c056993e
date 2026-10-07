import type {IsAny} from './is-any.d.ts';
import type {NonRecursiveType, StringToNumber} from './internal/index.d.ts';
import type {Paths} from './paths.d.ts';
import type {SetRequired} from './set-required.d.ts';
import type {SimplifyDeep} from './simplify-deep.d.ts';
import type {UnionToTuple} from './union-to-tuple.d.ts';
import type {RequiredDeep} from './required-deep.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Create a type that makes the given keys required, with support for deeply nested key paths, while keeping the remaining keys as is.

Use-case: Selectively make nested properties required in complex types like models.

@example
```
import type {SetRequiredDeep} from 'type-fest';

type Foo = {
	a?: number;
	b?: string;
	c?: Array<{
		d?: number;
	}>;
};

type SomeRequiredDeep = SetRequiredDeep<Foo, 'a' | `c.${number}.d`>;
//=> {b?: string; c?: {d: number}[]; a: number}

// Set specific indices in an array to be required.
type ArrayExample = SetRequiredDeep<{a: [number?, number?, number?]}, 'a.0' | 'a.1'>;
//=> {a: [number, number, number?]}
```

@category Object
*/
export type SetRequiredDeep<BaseType, KeyPaths extends Paths<BaseType>> = IsAny<KeyPaths> extends true
	? SimplifyDeep<RequiredDeep<BaseType>>
	: SetRequiredDeepHelper<BaseType, UnionToTuple<KeyPaths>>;

/**
Internal helper for {@link SetRequiredDeep}.

Recursively transforms the `BaseType` by applying {@link SetRequiredDeepSinglePath} for each path in `KeyPathsTuple`.
*/
type SetRequiredDeepHelper<BaseType, KeyPathsTuple extends UnknownArray> =
	KeyPathsTuple extends [infer KeyPath, ...infer RestPaths]
		? SetRequiredDeepHelper<SetRequiredDeepSinglePath<BaseType, KeyPath>, RestPaths>
		: BaseType;

/**
Makes a single path required in `BaseType`.
*/
type SetRequiredDeepSinglePath<BaseType, KeyPath> = BaseType extends NonRecursiveType
	? BaseType
	: KeyPath extends `${infer Property}.${infer RestPath}`
		? {
			[Key in keyof BaseType]: Property extends `${Key & (string | number)}`
				? SetRequiredDeepSinglePath<BaseType[Key], RestPath>
				: BaseType[Key];
		}
		: SetRequired<BaseType, (KeyPath | StringToNumber<KeyPath & string>) & keyof BaseType>;

export {};
