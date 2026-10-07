import type {AllExtend} from './all-extend.d.ts';

/**
Returns a boolean for whether all of the given elements are `true`.

Use-cases:
- Check if all conditions in a list of booleans are met.

@example
```
import type {AndAll} from 'type-fest';

type TTT = AndAll<[true, true, true]>;
//=> true

type TTF = AndAll<[true, true, false]>;
//=> false

type TFT = AndAll<[true, false, true]>;
//=> false
```

Note: When `boolean` is passed as an element, it is distributed into separate cases, and the final result is a union of those cases.
For example, `AndAll<[true, boolean]>` expands to `AndAll<[true, true]> | AndAll<[true, false]>`, which simplifies to `true | false` (i.e., `boolean`).

@example
```
import type {AndAll} from 'type-fest';

type A = AndAll<[true, boolean]>;
//=> boolean

type B = AndAll<[false, boolean]>;
//=> false
```

Note: If any of the elements is `never`, the result becomes `false`.

@example
```
import type {AndAll} from 'type-fest';

type A = AndAll<[true, true, never]>;
//=> false

type B = AndAll<[false, never, never]>;
//=> false

type C = AndAll<[never, never, never]>;
//=> false

type D = AndAll<[boolean, true, never]>;
//=> false
```

Note: If `any` is passed as an element, it is treated as `boolean` and the result is computed accordingly.

@example
```
import type {AndAll} from 'type-fest';

type A = AndAll<[false, any]>;
//=> false

type B = AndAll<[true, any]>;
//=> boolean
```

Note: `AndAll<[]>` evaluates to `true` due to the concept of [vacuous truth](https://en.wikipedia.org/wiki/Logical_conjunction#:~:text=In%20keeping%20with%20the%20concept%20of%20vacuous%20truth%2C%20when%20conjunction%20is%20defined%20as%20an%20operator%20or%20function%20of%20arbitrary%20arity%2C%20the%20empty%20conjunction%20(AND%2Ding%20over%20an%20empty%20set%20of%20operands)%20is%20often%20defined%20as%20having%20the%20result%20true.), i.e., there are no `false` elements in an empty tuple.

@see {@link And}
@see {@link OrAll}
*/
export type AndAll<T extends readonly boolean[]> = AllExtend<T, true>;

export {};
