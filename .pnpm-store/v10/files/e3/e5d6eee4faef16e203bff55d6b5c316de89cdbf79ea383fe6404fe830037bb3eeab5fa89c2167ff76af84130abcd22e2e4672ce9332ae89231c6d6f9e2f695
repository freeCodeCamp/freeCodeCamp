/**
Declare locally scoped properties on `globalThis`.

When defining a global variable in a declaration file is inappropriate, it can be helpful to define a `type` or `interface` (say `ExtraGlobals`) with the global variable and then cast `globalThis` via code like `globalThis as unknown as ExtraGlobals`.

Instead of casting through `unknown`, you can update your `type` or `interface` to extend `GlobalThis` and then directly cast `globalThis`.

@example
```
import type {GlobalThis} from 'type-fest';

type ExtraGlobals = GlobalThis & {
	readonly GLOBAL_TOKEN: string;
};

const globalToken = (globalThis as ExtraGlobals).GLOBAL_TOKEN;
//=> string
```

@category Type
*/
export type GlobalThis = typeof globalThis;

export {};
