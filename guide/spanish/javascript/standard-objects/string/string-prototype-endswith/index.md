---
title: String.prototype.endsWith
localeTitle: String.prototype.endsWith
---
## String.prototype.endsWith

El método `endsWith()` verifica si la cadena termina con su entrada de cadena y devuelve un valor booleano.

### Por ejemplo

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld") // true 
 bool = str.endsWith("llo") // false 
```

Este método también puede aceptar otro parámetro, la `length` que determina antes de qué carácter buscar la cadena.

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld", 5) // false, it's the same as "Hello".endsWith("ld") 
 bool = str.endsWith("llo", 5) // true, it's the same as "Hello".endsWith("llo") 

```