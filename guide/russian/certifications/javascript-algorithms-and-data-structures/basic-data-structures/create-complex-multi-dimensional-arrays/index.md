---
title: Create complex multi-dimensional arrays
localeTitle: Создание сложных многомерных массивов
---
## Создание сложных многомерных массивов

*   Первая строка - `deep` - должна быть вставлена ​​на три уровня. Это означает, что в пределах ровных множеств `[square-brackets]` .

```javascript
let threeLevelArray = ["first level", ["Two levels deep", ["Three levels deep"]]]; 
```

*   Используя эту логику вставки строки `deep` , `deeper` и самого `deepest` в матрице три уровней, четыре уровня глубокой и пять уровней глубоко соответственно.

## Решение:

```javascript
let myNestedArray = [ 
  // change code below this line 
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], 
  ['loop', 'shift', 6, 7, 1000, 'method'], 
  ['concat', false, true, 'spread', 'array',["deep"]], 
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]], 
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ] 
  // change code above this line 
 ]; 

```