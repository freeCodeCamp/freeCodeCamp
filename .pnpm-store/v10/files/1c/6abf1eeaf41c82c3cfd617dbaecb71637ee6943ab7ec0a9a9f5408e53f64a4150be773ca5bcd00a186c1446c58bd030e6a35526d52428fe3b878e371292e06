/**
Provides valid indices for a constant array or tuple.

Use-case: This type is useful when working with constant arrays or tuples and you want to enforce type-safety for accessing elements by their indices.

@example
```
import type {ArrayIndices, ArrayValues} from 'type-fest';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

type Weekday = ArrayIndices<typeof weekdays>;
type WeekdayName = ArrayValues<typeof weekdays>;

const getWeekdayName = (day: Weekday): WeekdayName => weekdays[day];
```

@see {@link ArrayValues}

@category Array
*/
export type ArrayIndices<Element extends readonly unknown[]> =
	Exclude<Partial<Element>['length'], Element['length']>;

export {};
