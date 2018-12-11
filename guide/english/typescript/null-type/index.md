---
title: Null Type
---
## Null Type

In TypeScript, null type has the values null. Null is valid values of every type. 

```ts
let u: null = null;
```

When using --strictNullChecks flag, null is only assignable to void and their type.
```ts
let s = "foo";
s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok
```
