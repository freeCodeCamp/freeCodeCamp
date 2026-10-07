import type {NonRecursiveType, StringToNumber} from './internal/index.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {NonNullableDeep} from './non-nullable-deep.d.ts';
import type {Paths} from './paths.d.ts';
import type {SetNonNullable} from './set-non-nullable.d.ts';
import type {Simplify} from './simplify.d.ts';
import type {UnionToTuple} from './union-to-tuple.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Create a type that makes the specified keys non-nullable (removes `null` and `undefined`), supports deeply nested key paths, and leaves all other keys unchanged.

NOTE: Optional modifiers (`?`) are not removed from properties. For example, `SetNonNullableDeep<{foo?: string | null | undefined}, 'foo'>` will result in `{foo?: string}`. To remove both optional modifiers and nullables, use {@link SetRequiredDeep} in conjunction with this type.

@example
```
import type {SetNonNullableDeep} from 'type-fest';

type User = {
	name: string;
	address: {
		city: string | undefined;
		street?: string | null;
	};
	contact: {
		email?: string | null | undefined;
		phone: string | undefined;
	};
};

type UpdatedUser = SetNonNullableDeep<User, 'address.street' | 'contact.email' | 'contact.phone'>;
//=> {
// 	name: string;
// 	address: {
// 		city: string | undefined;
// 		street?: string;
// 	};
// 	contact: {
// 		email?: string;
// 		phone: string;
// 	};
// }
```

@example
```
import type {SetNonNullableDeep} from 'type-fest';

// Set specific indices in an array to be non-nullable.
type ArrayExample1 = SetNonNullableDeep<{a: [number | null, number | null, number | undefined]}, 'a.1' | 'a.2'>;
//=> {a: [number | null, number, number]}

// Optional modifier (`?`) is not removed.
type ArrayExample2 = SetNonNullableDeep<{a: [(number | null)?, (number | null)?]}, 'a.1'>;
//=> {a: [(number | null)?, number?]}
```

@category Object
*/
export type SetNonNullableDeep<BaseType, KeyPaths extends Paths<BaseType>> = IsAny<KeyPaths> extends true
	? NonNullableDeep<BaseType>
	: SetNonNullableDeepHelper<BaseType, UnionToTuple<KeyPaths>>;

/**
Internal helper for {@link SetNonNullableDeep}.

Recursively transforms the `BaseType` by applying {@link SetNonNullableDeepSinglePath} for each path in `KeyPathsTuple`.
*/
type SetNonNullableDeepHelper<BaseType, KeyPathsTuple extends UnknownArray> =
	KeyPathsTuple extends [infer KeyPath, ...infer RestPaths]
		? SetNonNullableDeepHelper<SetNonNullableDeepSinglePath<BaseType, KeyPath>, RestPaths>
		: BaseType;

/**
Makes a single path non-nullable in `BaseType`.
*/
type SetNonNullableDeepSinglePath<BaseType, KeyPath> =
	BaseType extends NonRecursiveType | ReadonlySet<unknown> | ReadonlyMap<unknown, unknown> // Also distributes `BaseType`
		? BaseType
		: KeyPath extends `${infer Property}.${infer RestPath}`
			? {
				[Key in keyof BaseType]: Property extends `${Key & (string | number)}`
					? SetNonNullableDeepSinglePath<BaseType[Key], RestPath>
					: BaseType[Key];
			}
			: Simplify<SetNonNullable<BaseType, (KeyPath | StringToNumber<KeyPath & string>) & keyof BaseType>>;

export {};
