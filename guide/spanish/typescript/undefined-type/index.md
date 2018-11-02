---
title: Undefined Type
localeTitle: Tipo Indefinido
---
## Tipo indefinido

En TypeScript, igual con el tipo nulo, el tipo indefinido tiene los valores no definidos. Undefined son valores válidos de cada tipo.

```ts
let u: undefined = undefined; 
```

Cuando se usa el indicador `--strictNullChecks` , undefined solo se puede asignar a void y su tipo.

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 
 
 sn = undefined; // error, 'undefined' is not assignable to 'string | null' 
```

Con `--strictNullChecks` , un parámetro opcional agrega automáticamente `| undefined`

```ts
function f(x: number, y?: number) { 
    return x + (y || 0); 
 } 
 f(1, 2); 
 f(1); 
 f(1, undefined); 
 f(1, null); // error, 'null' is not assignable to 'number | undefined' 

```