import type {Except} from './except.d.ts';
import type {ConditionalKeys} from './conditional-keys.d.ts';

/**
Exclude keys from a shape that matches the given `Condition`.

This is useful when you want to create a new type with a specific set of keys from a shape. For example, you might want to exclude all the primitive properties from a class and form a new shape containing everything but the primitive properties.

@example
```
import type {Primitive, ConditionalExcept} from 'type-fest';

class Awesome {
	constructor(public name: string, public successes: number, public failures: bigint) {}

	run() {
		// do something
	}
}

type ExceptPrimitivesFromAwesome = ConditionalExcept<Awesome, Primitive>;
//=> {run: () => void}
```

@example
```
import type {ConditionalExcept} from 'type-fest';

type Example = {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
};

type NonStringKeysOnly = ConditionalExcept<Example, string>;
//=> {b: string | number; c: () => void; d: {}}
```

@category Object
*/
export type ConditionalExcept<Base, Condition> = Except<
	Base,
	ConditionalKeys<Base, Condition>
>;

export {};
