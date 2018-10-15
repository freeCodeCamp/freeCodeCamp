---
title: String.prototype.repeat
localeTitle: String.prototype.repeat
---
## String.prototype.repeat

Метод `.repeat(n)` получает целочисленный аргумент и возвращает строку, повторяющуюся `n` раз.

### Например

```js
  let str = "test"; 
  console.log(str.repeat(3)); // "testtesttest", test is repeated 3 times 
 
  // NB 
  console.log(str.repeat(2.5)); // "testtest", 2.5 is converted to an integer and test is repeated 2 times 
```

#### Больше информации

[MDN - String.prototype.repeat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)