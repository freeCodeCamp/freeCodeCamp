---
title: Null Type
localeTitle: Tipo nulo
---
## Tipo nulo

Em TypeScript, o tipo nulo tem os valores nulos. Nulo é valores válidos de todo tipo.

```ts
let u: null = null; 
```

Ao usar o sinalizador --strictNullChecks, null é somente atribuível para void e seu tipo.

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 

```