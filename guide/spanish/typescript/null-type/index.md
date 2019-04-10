---
title: Null Type
localeTitle: Tipo nulo
---
## Tipo nulo

En TypeScript, el tipo nulo tiene los valores nulos. Los valores nulos son válidos de cada tipo.

```ts
let u: null = null; 
```

Cuando se utiliza el indicador --strictNullChecks, null solo se puede asignar a void y su tipo.

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 

```