/**
Provides all values for a constant array or tuple.

Use-case: This type is useful when working with constant arrays or tuples and you want to enforce type-safety with their values.

@example
```
import type {ArrayValues, ArrayIndices} from 'type-fest';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

type WeekdayName = ArrayValues<typeof weekdays>;
type Weekday = ArrayIndices<typeof weekdays>;

const getWeekdayName = (day: Weekday): WeekdayName => weekdays[day];
```

@see {@link ArrayIndices}

@category Array
*/
export type ArrayValues<T extends readonly unknown[]> = T[number];

export {};
