---
title: Undefined Type
---
## Undefined Type

In TypeScript, same with null type, undefined type has the values undefined. Undefined is valid values of every type. 

```ts
let u: undefined = undefined;
```

When using `--strictNullChecks` flag, undefined is only assignable to void and their type.
```ts
let s = "foo";
s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok

sn = undefined; // error, 'undefined' is not assignable to 'string | null'
```
With `--strictNullChecks`, an optional parameter automatically adds `| undefined`:
```ts
function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null); // error, 'null' is not assignable to 'number | undefined'
```

