---
title: Multiples of 3 and 5
localeTitle: Мультипликации 3 и 5
---
## Проблема 1: Умножения 3 и 5

### Метод:

*   Мы можем найти, если число делится на другое число с помощью оператора `%` modulo.
*   `num1 % num2` возвращает `0` если при выполнении `num1/num2` нет остатка.
*   Начиная с `i = 3` потому что это первое число, которое делится на 3 или 5, мы прокручиваем до указанного `number` .
*   Если число делится на 3 или 5, мы добавляем это к переменной `sum` и, наконец, возвращаем его.

### Решение:

```js
function multiplesOf3and5(number) { 
  let sum = 0, i = 3; 
  while (i < number){ 
    if (i % 3 == 0 || i % 5 == 0) sum += i; 
    i++; 
  } 
  return sum; 
 } 
```

*   [Код запуска](https://repl.it/@ezioda004/Project-Euler-Problem-1-Multiples-of-3-and-5)

### Справка:

*   [Оператор Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())