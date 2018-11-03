---
title: Undefined Type
localeTitle: Tipo indefinido
---
## Tipo indefinido

Em TypeScript, igual ao tipo nulo, o tipo indefinido possui os valores indefinidos. Indefinido são valores válidos de todos os tipos.

```ts
let u: undefined = undefined; 
```

Ao usar o sinalizador `--strictNullChecks` , undefined é somente atribuível para void e seu tipo.

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 
 
 sn = undefined; // error, 'undefined' is not assignable to 'string | null' 
```

Com `--strictNullChecks` , um parâmetro opcional adiciona automaticamente `| undefined` :

```ts
function f(x: number, y?: number) { 
    return x + (y || 0); 
 } 
 f(1, 2); 
 f(1); 
 f(1, undefined); 
 f(1, null); // error, 'null' is not assignable to 'number | undefined' 

```