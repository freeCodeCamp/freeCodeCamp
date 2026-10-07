import type {ConditionalSimplifyDeep} from './conditional-simplify-deep.d.ts';
import type {MapsSetsOrArrays, NonRecursiveType} from './internal/index.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Deeply simplifies an object type.

You can exclude certain types from being simplified by providing them in the second generic `ExcludeType`.

Useful to flatten the type output to improve type hints shown in editors.

@example
```
import type {SimplifyDeep} from 'type-fest';

type PositionX = {
	left: number;
	right: number;
};

type PositionY = {
	top: number;
	bottom: number;
};

type Properties1 = {
	height: number;
	position: PositionY;
};

type Properties2 = {
	width: number;
	position: PositionX;
};

type Properties = Properties1 & Properties2;
// In your editor, hovering over `Props` will show the following:
//
// type Properties = Properties1 & Properties2;

type SimplifyDeepProperties = SimplifyDeep<Properties1 & Properties2>;
// But if wrapped in SimplifyDeep, hovering over `SimplifyDeepProperties` will show a flattened object with all the properties:
//
// SimplifyDeepProperties = {
// 	height: number;
// 	width: number;
// 	position: {
// 		top: number;
// 		bottom: number;
// 		left: number;
// 		right: number;
// 	};
// };
```

@example
```
import type {SimplifyDeep} from 'type-fest';

// A complex type that you don't want or need to simplify
type ComplexType = {
	a: string;
	b: 'b';
	c: number;
};

type PositionX = {
	left: number;
	right: number;
};

type PositionY = {
	top: number;
	bottom: number;
};

// You want to simplify all other types
type Properties1 = {
	height: number;
	position: PositionY;
	foo: ComplexType;
};

type Properties2 = {
	width: number;
	position: PositionX;
	foo: ComplexType;
};

type SimplifyDeepProperties = SimplifyDeep<Properties1 & Properties2, ComplexType>;
// If wrapped in `SimplifyDeep` and set `ComplexType` to exclude, hovering over `SimplifyDeepProperties` will
// show a flattened object with all the properties except `ComplexType`:
//
// SimplifyDeepProperties = {
// 	height: number;
// 	width: number;
// 	position: {
// 		top: number;
// 		bottom: number;
// 		left: number;
// 		right: number;
// 	};
//	foo: ComplexType;
// };
```

@see {@link Simplify}
@category Object
*/
export type SimplifyDeep<Type, ExcludeType = never> =
	ConditionalSimplifyDeep<
		Type,
	ExcludeType | NonRecursiveType | Exclude<MapsSetsOrArrays, UnknownArray>,
	object
	>;

export {};
