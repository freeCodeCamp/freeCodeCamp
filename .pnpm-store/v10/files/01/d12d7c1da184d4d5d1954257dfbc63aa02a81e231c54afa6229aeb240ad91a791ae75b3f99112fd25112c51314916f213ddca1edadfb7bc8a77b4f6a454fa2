/**
Revert the `Partial` modifier on an object type.

Use-case: Infer the underlying type `T` when only `Partial<T>` is available or the original type may not be directly accessible.

@example
```
import type {UnwrapPartial} from 'type-fest';

type Config = Partial<{
	port: number;
	host: string;
	secure?: boolean;
}>;

type InitializedConfig = UnwrapPartial<Config>;
//=> {port: number; host: string; secure?: boolean}
```

Note: If the provided type isn’t of `Partial<T>`, `UnwrapPartial` has no effect on the original type.

@category Object
*/
export type UnwrapPartial<PartialObjectType> =
	PartialObjectType extends Partial<infer ObjectType>
		? (
			Partial<ObjectType> extends PartialObjectType
				? ObjectType
				: PartialObjectType
		)
		: PartialObjectType;

export {};
