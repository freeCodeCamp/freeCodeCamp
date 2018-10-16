---
title: Undefined Type
localeTitle: Неопределенный тип
---
## Неопределенный тип

В TypeScript, том же с нулевым типом, неопределенный тип имеет значения undefined. Undefined - допустимые значения для каждого типа.

```ts
let u: undefined = undefined; 
```

При использовании `--strictNullChecks` флага undefined `--strictNullChecks` только void и их типу.

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 
 
 sn = undefined; // error, 'undefined' is not assignable to 'string | null' 
```

С помощью `--strictNullChecks` , дополнительный параметр автоматически добавляет `| undefined` :

```ts
function f(x: number, y?: number) { 
    return x + (y || 0); 
 } 
 f(1, 2); 
 f(1); 
 f(1, undefined); 
 f(1, null); // error, 'null' is not assignable to 'number | undefined' 

```