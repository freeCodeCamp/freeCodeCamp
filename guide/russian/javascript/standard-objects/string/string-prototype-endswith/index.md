---
title: String.prototype.endsWith
localeTitle: String.prototype.endsWith
---
## String.prototype.endsWith

Метод `endsWith()` проверяет, заканчивается ли строка с вашим строковым вводом и возвращает логическое значение.

### Например

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld") // true 
 bool = str.endsWith("llo") // false 
```

Этот метод также может принимать другой параметр - `length` , определяющую перед тем, какой символ следует искать в строке.

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld", 5) // false, it's the same as "Hello".endsWith("ld") 
 bool = str.endsWith("llo", 5) // true, it's the same as "Hello".endsWith("llo") 

```