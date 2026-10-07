/**
Create a union of types that share a common discriminant property.

Use-case: A shorter way to declare tagged unions with multiple members.

@example
```
import type {TaggedUnion} from 'type-fest';

type Tagged<Fields extends Record<string, Record<string, unknown>>> = TaggedUnion<'type', Fields>;

// The TaggedUnion utility reduces the amount of boilerplate needed to create a tagged union with multiple members, making the code more concise.
type EventMessage = Tagged<{
	OpenExternalUrl: {
		url: string;
		id: number;
		language: string;
	};
	ToggleBackButtonVisibility: {
		visible: boolean;
	};
	PurchaseButtonPressed: {
		price: number;
		time: Date;
	};
	NavigationStateChanged: {
		navigation?: string;
	};
}>;

// Here is the same type created without this utility.
type ManualEventMessage =
	| {
		type: 'OpenExternalUrl';
		url: string;
		id: number;
		language: string;
	}
	| {type: 'ToggleBackButtonVisibility'; visible: boolean}
	| {type: 'PurchaseButtonPressed'; price: number; time: Date}
	| {type: 'NavigationStateChanged'; navigation?: string};
```

@category Utilities
*/
export type TaggedUnion<
	TagKey extends string,
	UnionMembers extends Record<string, Record<string, unknown>>,
> = {
	[Name in keyof UnionMembers]: {[Key in TagKey]: Name} & UnionMembers[Name];
}[keyof UnionMembers];

export {};
