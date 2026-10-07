import type {UnionToIntersection} from './union-to-intersection.d.ts';

/**
Create a union of all keys from a given type, even those exclusive to specific union members.

Unlike the native `keyof` keyword, which returns keys present in **all** union members, this type returns keys from **any** member.

@link https://stackoverflow.com/a/49402091

@example
```
import type {KeysOfUnion} from 'type-fest';

type A = {
	common: string;
	a: number;
};

type B = {
	common: string;
	b: string;
};

type C = {
	common: string;
	c: boolean;
};

type Union = A | B | C;

type CommonKeys = keyof Union;
//=> 'common'

type AllKeys = KeysOfUnion<Union>;
//=> 'common' | 'a' | 'b' | 'c'
```

@category Object
*/
export type KeysOfUnion<ObjectType> =
	// Hack to fix https://github.com/sindresorhus/type-fest/issues/1008
	keyof UnionToIntersection<ObjectType extends unknown ? Record<keyof ObjectType, never> : never>;

export {};
