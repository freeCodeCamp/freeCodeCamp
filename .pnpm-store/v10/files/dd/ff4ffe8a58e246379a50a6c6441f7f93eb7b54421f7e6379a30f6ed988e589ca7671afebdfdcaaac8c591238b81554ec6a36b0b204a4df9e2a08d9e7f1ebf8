import type {IsNumericLiteral} from './is-literal.d.ts';
import type {IsNegative} from './numeric.d.ts';

/**
Returns a new string which contains the specified number of copies of a given string, just like `String#repeat()`.

@example
```
import type {StringRepeat} from 'type-fest';

declare function stringRepeat<
	Input extends string,
	Count extends number,
>(input: Input, count: Count): StringRepeat<Input, Count>;

// The return type is the exact string literal, not just `string`.

stringRepeat('foo', 2);
//=> 'foofoo'

stringRepeat('=', 3);
//=> '==='
```

@category String
@category Template literal
*/
export type StringRepeat<
	Input extends string,
	Count extends number,
> = StringRepeatHelper<Input, Count>;

type StringRepeatHelper<
	Input extends string,
	Count extends number,
	Counter extends never[] = [],
	Accumulator extends string = '',
> =
	IsNegative<Count> extends true
		? never
		: Input extends ''
			? ''
			: Count extends Counter['length']
				? Accumulator
				: IsNumericLiteral<Count> extends false
					? string
					: StringRepeatHelper<Input, Count, [...Counter, never], `${Accumulator}${Input}`>;

export {};
