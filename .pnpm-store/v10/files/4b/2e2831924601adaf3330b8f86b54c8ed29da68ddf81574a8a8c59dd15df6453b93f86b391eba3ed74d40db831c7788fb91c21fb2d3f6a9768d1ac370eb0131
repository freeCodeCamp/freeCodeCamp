import type {Except} from './except.d.ts';
import type {HomomorphicPick} from './internal/index.d.ts';
import type {Simplify} from './simplify.d.ts';

/**
Create a type that makes the given keys optional, while keeping the remaining keys as is.

Use-case: You want to define a single model where the only thing that changes is whether or not some of the keys are optional.

@example
```
import type {SetOptional} from 'type-fest';

type Foo = {
	a: number;
	b?: string;
	c: boolean;
};

type SomeOptional = SetOptional<Foo, 'b' | 'c'>;
//=> {a: number; b?: string; c?: boolean}
```

@category Object
*/
export type SetOptional<BaseType, Keys extends keyof BaseType> =
	(BaseType extends (...arguments_: never) => any
		? (...arguments_: Parameters<BaseType>) => ReturnType<BaseType>
		: unknown)
	& _SetOptional<BaseType, Keys>;

type _SetOptional<BaseType, Keys extends keyof BaseType> =
	BaseType extends unknown // To distribute `BaseType` when it's a union type.
		? Simplify<
			// Pick just the keys that are readonly from the base type.
			Except<BaseType, Keys>
			// Pick the keys that should be mutable from the base type and make them mutable.
			& Partial<HomomorphicPick<BaseType, Keys>>
		>
		: never;

export {};
