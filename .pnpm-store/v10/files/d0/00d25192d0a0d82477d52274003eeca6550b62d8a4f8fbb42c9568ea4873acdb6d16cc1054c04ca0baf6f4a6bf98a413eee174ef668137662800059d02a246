import type {If} from './if.d.ts';
import type {IfNotAnyOrNever, MapsSetsOrArrays, NonRecursiveType} from './internal/type.d.ts';
import type {IsUnknown} from './is-unknown.d.ts';
import type {KeysOfUnion} from './keys-of-union.d.ts';
import type {Simplify} from './simplify.d.ts';

/**
Ensure mutual exclusivity in object unions by adding other members’ keys as `?: never`.

Use-cases:
- You want each union member to be exclusive, preventing overlapping object shapes.
- You want to safely access any property defined across the union without additional type guards.

@example
```
import type {ExclusifyUnion} from 'type-fest';

type FileConfig = {
	filePath: string;
};

type InlineConfig = {
	content: string;
};

declare function loadConfig1(options: FileConfig | InlineConfig): void;

// Someone could mistakenly provide both `filePath` and `content`.
loadConfig1({filePath: './config.json', content: '{ "name": "app" }'}); // No errors

// Use `ExclusifyUnion` to prevent that mistake.
type Config = ExclusifyUnion<FileConfig | InlineConfig>;
//=> {
// 	filePath: string;
// 	content?: never;
// } | {
// 	content: string;
// 	filePath?: never;
// }

declare function loadConfig2(options: Config): void;

// @ts-expect-error
loadConfig2({filePath: './config.json', content: '{ "name": "app" }'});
// Error: Argument of type '{ filePath: string; content: string; }' is not assignable to parameter of type '{ filePath: string; content?: never; } | { content: string; filePath?: never; }'.

loadConfig2({filePath: './config.json'}); // Ok

loadConfig2({content: '{ "name": "app" }'}); // Ok
```

@example
```
import type {ExclusifyUnion} from 'type-fest';

type CardPayment = {
	amount: number;
	cardNumber: string;
};

type PaypalPayment = {
	amount: number;
	paypalId: string;
};

function processPayment1(payment: CardPayment | PaypalPayment) {
	// @ts-expect-error
	const details = payment.cardNumber ?? payment.paypalId; // Cannot access `cardNumber` or `paypalId` directly
}

type Payment = ExclusifyUnion<CardPayment | PaypalPayment>;
//=> {
// 	amount: number;
// 	cardNumber: string;
// 	paypalId?: never;
// } | {
// 	amount: number;
// 	paypalId: string;
// 	cardNumber?: never;
// }

function processPayment2(payment: Payment) {
	const details = payment.cardNumber ?? payment.paypalId; // Ok
	//=> string
}
```

@example
```
import type {ExclusifyUnion} from 'type-fest';

type A = ExclusifyUnion<{a: string} | {b: number}>;
//=> {a: string; b?: never} | {b: number; a?: never}

type B = ExclusifyUnion<{a: string} | {b: number} | {c: boolean}>;
//=> {
// 	a: string;
// 	b?: never;
// 	c?: never;
// } | {
// 	b: number;
// 	a?: never;
// 	c?: never;
// } | {
// 	c: boolean;
// 	a?: never;
// 	b?: never;
// }

type C = ExclusifyUnion<{a: string; b: number} | {b: string; c: number}>;
//=> {
// 	a: string;
// 	b: number;
// 	c?: never;
// } | {
// 	b: string;
// 	c: number;
// 	a?: never;
// }

type D = ExclusifyUnion<{a?: 1; readonly b: 2} | {d: 4}>;
//=> {a?: 1; readonly b: 2; d?: never} | {d: 4; a?: never; b?: never}
```

@category Object
@category Union
*/
export type ExclusifyUnion<Union> = IfNotAnyOrNever<Union,
	If<IsUnknown<Union>, Union,
		Extract<Union, NonRecursiveType | MapsSetsOrArrays> extends infer SkippedMembers
			? SkippedMembers | _ExclusifyUnion<Exclude<Union, SkippedMembers>>
			: never
	>
>;

type _ExclusifyUnion<Union, UnionCopy = Union> = Union extends unknown // For distributing `Union`
	? Simplify<
		Union & Partial<
			Record<
				Exclude<KeysOfUnion<UnionCopy>, keyof Union>,
				never
			>
		>
	>
	: never; // Should never happen

export {};
