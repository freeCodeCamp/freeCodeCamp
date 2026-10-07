import type {JsonPrimitive} from './json-value.d.ts';

type JsonifiableObject = {[Key in string]?: Jsonifiable} | {toJSON: () => Jsonifiable};
type JsonifiableArray = readonly Jsonifiable[];

/**
Matches a value that can be losslessly converted to JSON.

Can be used to type values that you expect to pass to `JSON.stringify`.

`undefined` is allowed in object fields (for example, `{a?: number}`) as a special case even though `JSON.stringify({a: undefined})` is `{}` because it makes this class more widely useful and checking for undefined-but-present values is likely an anti-pattern.

@example
```
import type {Jsonifiable} from 'type-fest';

// @ts-expect-error
const error: Jsonifiable = {
	map: new Map([['a', 1]]),
};

console.log(JSON.stringify(error)); // {"map": {}}

const good: Jsonifiable = {
	number: 3,
	date: new Date('2025-12-25'),
	missing: undefined,
};

console.log(JSON.stringify(good)); // {"number": 3, "date": "2025-12-25T00:00:00.000Z"}
```

@category JSON
*/
export type Jsonifiable = JsonPrimitive | JsonifiableObject | JsonifiableArray;

export {};
