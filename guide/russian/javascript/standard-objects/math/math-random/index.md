---
title: Math Random
localeTitle: Математический случай
---
## Математический случай

`Math.random()` возвращает число от 0 (включительно) и 1 (исключение).

#### Синтаксис

`Math.random()`

#### пример

```js
function randomInRange(min, max) { 
  return Math.random() * (max - min) + min; 
 } 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)