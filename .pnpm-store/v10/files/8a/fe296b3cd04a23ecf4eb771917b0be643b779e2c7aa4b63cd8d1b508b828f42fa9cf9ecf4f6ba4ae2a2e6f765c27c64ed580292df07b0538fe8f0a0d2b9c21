import type {IsEqual} from './is-equal.d.ts';
import type {ConditionalExcept} from './conditional-except.d.ts';
import type {ConditionalSimplifyDeep} from './conditional-simplify-deep.d.ts';
import type {UnknownRecord} from './unknown-record.d.ts';
import type {EmptyObject} from './empty-object.d.ts';
import type {ApplyDefaultOptions, IsPlainObject} from './internal/index.d.ts';

/**
Used to mark properties that should be excluded.
*/
declare const conditionalPickDeepSymbol: unique symbol;

/**
Assert the condition according to the {@link ConditionalPickDeepOptions.condition|condition} option.
*/
type AssertCondition<Type, Condition, Options extends ConditionalPickDeepOptions> = Options['condition'] extends 'equality'
	? IsEqual<Type, Condition>
	: Type extends Condition
		? true
		: false;

/**
ConditionalPickDeep options.

@see {@link ConditionalPickDeep}
*/
export type ConditionalPickDeepOptions = {
	/**
	The condition assertion mode.

	@default 'extends'
	*/
	condition?: 'extends' | 'equality';
};

type DefaultConditionalPickDeepOptions = {
	condition: 'extends';
};

/**
Pick keys recursively from the shape that matches the given condition.

@see {@link ConditionalPick}

@example
```
import type {ConditionalPickDeep} from 'type-fest';

type Example = {
	a: string;
	b: string | boolean;
	c: {
		d: string;
		e: {
			f?: string;
			g?: boolean;
			h: string | boolean;
			i: boolean | bigint;
		};
		j: boolean;
	};
};

type StringPick = ConditionalPickDeep<Example, string>;
//=> {a: string; c: {d: string}}

type StringPickOptional = ConditionalPickDeep<Example, string | undefined>;
//=> {a: string; c: {d: string; e: {f?: string}}}

type StringPickOptionalOnly = ConditionalPickDeep<Example, string | undefined, {condition: 'equality'}>;
//=> {c: {e: {f?: string}}}

type BooleanPick = ConditionalPickDeep<Example, boolean | undefined>;
//=> {c: {e: {g?: boolean}; j: boolean}}

type NumberPick = ConditionalPickDeep<Example, number>;
//=> never

type StringOrBooleanPick = ConditionalPickDeep<Example, string | boolean>;
//=> {
// 	a: string;
// 	b: string | boolean;
// 	c: {
// 		d: string;
// 		e: {
// 			h: string | boolean;
// 		};
// 		j: boolean;
// 	};
// }

type StringOrBooleanPickOnly = ConditionalPickDeep<Example, string | boolean, {condition: 'equality'}>;
//=> {b: string | boolean; c: {e: {h: string | boolean}}}
```

@category Object
*/
export type ConditionalPickDeep<
	Type,
	Condition,
	Options extends ConditionalPickDeepOptions = {},
> = _NeverIfEmpty<_ConditionalPickDeep<
	Type,
	Condition,
	ApplyDefaultOptions<ConditionalPickDeepOptions, DefaultConditionalPickDeepOptions, Options>
>>;

type _NeverIfEmpty<Type> = Type extends EmptyObject ? never : Type;

type _ConditionalPickDeep<
	Type,
	Condition,
	Options extends Required<ConditionalPickDeepOptions>,
> = ConditionalSimplifyDeep<ConditionalExcept<{
	[Key in keyof Type]: AssertCondition<Type[Key], Condition, Options> extends true
		? Type[Key]
		: IsPlainObject<Type[Key]> extends true
			? _ConditionalPickDeep<Type[Key], Condition, Options>
			: typeof conditionalPickDeepSymbol;
}, (typeof conditionalPickDeepSymbol | undefined) | EmptyObject>, never, UnknownRecord>;

export {};
