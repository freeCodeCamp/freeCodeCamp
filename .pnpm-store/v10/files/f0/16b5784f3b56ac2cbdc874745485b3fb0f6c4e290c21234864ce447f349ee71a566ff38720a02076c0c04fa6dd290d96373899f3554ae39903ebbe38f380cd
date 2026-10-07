import type {Opaque} from './opaque';

/**
Create an [invariant type](https://basarat.gitbook.io/typescript/type-system/type-compatibility#footnote-invariance), which is a type that does not accept supertypes and subtypes.

Use-case:
- Prevent runtime errors that may occur due to assigning subtypes to supertypes.
- Improve type signature of object methods like [`Object.keys()` or `Object.entries()`](https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208) by sealing the object type.

@example
```
import type {InvariantOf} from 'type-fest';

class Animal {
	constructor(public name: string){}
}

class Cat extends Animal {
	meow() {}
}

let animalArray: Animal[] = [animal];
let catArray: Cat[] = [cat];

animalArray = catArray; // Okay if covariant
animalArray.push(new Animal('another animal')); // Pushed an animal into catArray
catArray.forEach(c => c.meow()); // Allowed but, error at runtime

let invariantAnimalArray: InvariantOf<Animal>[] = [animal] as InvariantOf<Animal>[];
let invariantCatArray: InvariantOf<Cat>[] = [cat] as InvariantOf<Cat>[];

invariantAnimalArray = invariantCatArray; // Error: Type 'InvariantOf<Cat>[]' is not assignable to type 'InvariantOf<Animal>[]'.
```

@example
```
import type {InvariantOf} from 'type-fest';

// In covariance (default)

interface FooBar {
	foo: number;
	bar: string
}

interface FooBarBaz extends FooBar {
	baz: boolean
}

declare const fooBar: FooBar
declare const fooBarBaz: FooBarBaz

function keyOfFooBar(fooBar: FooBar) {
	return Object.keys(fooBar) as (keyof FooBar)[]
}

keyOfFooBar(fooBar) //=> (keyof FooBar)[]
keyOfFooBar(fooBarBaz) //=> (keyof FooBar)[] but, (keyof FooBarBaz)[] at runtime

// In invariance

export function invariantOf<Type>(value: Type): InvariantOf<Type> {
	return value as InvariantOf<Type>;
}

function keyOfInvariantFooBar(fooBar: InvariantOf<FooBar>) {
	return Object.keys(fooBar) as (keyof FooBar)[]
}

keyOfInvariantFooBar(invariantOf(fooBar)); // (keyof FooBar)[]
keyOfInvariantFooBar(invariantOf(fooBarBaz)); // Error: Argument of type 'InvariantOf<FooBarBaz>' is not assignable to parameter of type 'InvariantOf<FooBar>'.
```

@category Type
*/
export type InvariantOf<Type> = Opaque<Type, (argument: Type) => Type>;
