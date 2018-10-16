---
title: String.prototype.endsWith
localeTitle: String.prototype.endsWith
---
## String.prototype.endsWith

O método `endsWith()` verifica se a string termina com sua entrada de string e retorna um valor booleano.

### Por exemplo

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld") // true 
 bool = str.endsWith("llo") // false 
```

Esse método também pode aceitar outro parâmetro, o `length` que determina antes de qual caractere pesquisar a string.

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld", 5) // false, it's the same as "Hello".endsWith("ld") 
 bool = str.endsWith("llo", 5) // true, it's the same as "Hello".endsWith("llo") 

```