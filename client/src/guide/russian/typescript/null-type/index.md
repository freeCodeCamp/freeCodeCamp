---
title: Null Type
localeTitle: Нулевой тип
---
## Нулевой тип

В TypeScript нулевой тип имеет значения null. Null - это допустимые значения для каждого типа.

```ts
let u: null = null; 
```

При использовании -strictNullChecks флаг null присваивается только void и их типу.

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 

```