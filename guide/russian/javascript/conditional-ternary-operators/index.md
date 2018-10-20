---
title: Conditional Ternary Operators
localeTitle: Условные тернарные операторы
---
## Условные тернарные операторы

### Основное использование

Тернарный оператор - это компактный способ записи if-else внутри выражения.

```js
const thing = (condition) ? <if true> : <if false>; 
```

Например

```js
const cappedInput = input > 50 ? 50 : input // this will cap the input at 50 
```

### Else if

Вы также можете сцеплять тернарные операторы, таким образом вы будете иметь поведение if-else if-else

```js
<first condition> ? <value if first true> 
 : <second condition> ? <value if second is true> 
 : <fallback value> 
```

> **Pro tip** : Как вы видите, вы можете разделить тернарный оператор на несколько строк Например
```
const wealth = housesOwned > 3 ? "rich" 
             : housesOwned > 1 ? "nothing to complain" 
             : "poor" 

```
