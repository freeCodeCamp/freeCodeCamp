---
title: String.prototype.repeat
localeTitle: String.prototype.repeat
---
## String.prototype.repeat

O `.repeat(n)` obtém um paramentador inteiro e retorna a string repetida `n` vezes.

### Por exemplo

```js
  let str = "test"; 
  console.log(str.repeat(3)); // "testtesttest", test is repeated 3 times 
 
  // NB 
  console.log(str.repeat(2.5)); // "testtest", 2.5 is converted to an integer and test is repeated 2 times 
```

#### Mais Informações

[MDN - String.prototype.repeat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)