import type {Except} from './except';
import type {RequiredKeysOf} from './required-keys-of';
import type {Simplify} from './simplify';

type SpreadObject<FirstType extends object, SecondType extends object> = {
	[Key in keyof FirstType]: Key extends keyof SecondType
		? FirstType[Key] | Required<SecondType>[Key]
		: FirstType[Key];
} & Pick<
	SecondType,
	RequiredKeysOf<SecondType> | Exclude<keyof SecondType, keyof FirstType>
>;

type TupleOrArray = readonly [...unknown[]];

type SpreadTupleOrArray<
	FirstType extends TupleOrArray,
	SecondType extends TupleOrArray,
> = Array<FirstType[number] | SecondType[number]>;

type Spreadable = object | TupleOrArray;

/**
Mimic the type inferred by TypeScript when merging two objects or two arrays/tuples using the spread syntax.

@example
```
import type {Spread} from 'type-fest';

type Foo = {
	a: number;
	b?: string;
};

type Bar = {
	b?: number;
	c: boolean;
};

const foo = {a: 1, b: '2'};
const bar = {c: false};
const fooBar = {...foo, ...bar};

type FooBar = Spread<Foo, Bar>;
// type FooBar = {
// 	a: number;
// 	b?: string | number | undefined;
// 	c: boolean;
// }

const baz = (argument: FooBar) => {
	// Do something
}

baz(fooBar);
```

@example
```
import type {Spread} from 'type-fest';

const foo = [1, 2, 3];
const bar = ['4', '5', '6'];

const fooBar = [...foo, ...bar];
type FooBar = Spread<typeof foo, typeof bar>;
// FooBar = (string | number)[]

const baz = (argument: FooBar) => {
	// Do something
};

baz(fooBar);
```

@category Object
*/
export type Spread<
    FirstType extends Spreadable,
    SecondType extends Spreadable,
> = FirstType extends TupleOrArray
	? SecondType extends TupleOrArray
		? SpreadTupleOrArray<FirstType, SecondType>
		: Simplify<SpreadObject<FirstType, SecondType>>
	: Simplify<SpreadObject<FirstType, SecondType>>;
