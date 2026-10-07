import type {SomeExtend} from './some-extend.d.ts';

/**
Returns a boolean for whether any of the given elements is `true`.

Use-cases:
- Check if at least one condition in a list of booleans is met.

@example
```
import type {OrAll} from 'type-fest';

type FFT = OrAll<[false, false, true]>;
//=> true

type FFF = OrAll<[false, false, false]>;
//=> false
```

Note: When `boolean` is passed as an element, it is distributed into separate cases, and the final result is a union of those cases.
For example, `OrAll<[false, boolean]>` expands to `OrAll<[false, true]> | OrAll<[false, false]>`, which simplifies to `true | false` (i.e., `boolean`).

@example
```
import type {OrAll} from 'type-fest';

type A = OrAll<[false, boolean]>;
//=> boolean

type B = OrAll<[true, boolean]>;
//=> true
```

Note: If `never` is passed as an element, it is treated as `false` and the result is computed accordingly.

@example
```
import type {OrAll} from 'type-fest';

type A = OrAll<[never, never, true]>;
//=> true

type B = OrAll<[never, never, false]>;
//=> false

type C = OrAll<[never, never, never]>;
//=> false

type D = OrAll<[never, never, boolean]>;
//=> boolean
```

Note: If `any` is passed as an element, it is treated as `boolean` and the result is computed accordingly.

@example
```
import type {OrAll} from 'type-fest';

type A = OrAll<[false, any]>;
//=> boolean

type B = OrAll<[true, any]>;
//=> true
```

Note: `OrAll<[]>` evaluates to `false` because there are no `true` elements in an empty tuple. See [Wikipedia: Clause (logic) > Empty clauses](https://en.wikipedia.org/wiki/Clause_(logic)#Empty_clauses:~:text=The%20truth%20evaluation%20of%20an%20empty%20disjunctive%20clause%20is%20always%20false.).

@see {@link Or}
@see {@link AndAll}
*/
export type OrAll<T extends readonly boolean[]> = SomeExtend<T, true>;

export {};
