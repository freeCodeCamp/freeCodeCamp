---
title: Largest prime factor
localeTitle: Наибольший простой коэффициент
---
## Задача 3: Наибольший простой коэффициент

### Метод:

*   Чтобы найти наибольший простой множитель числа, мы начинаем с наименьшего простого множителя 2 и делим на него число.
*   Если остаток равен 0, это означает, что число делится на это простое число, мы продолжаем делить число на одно и то же простое число, пока это число больше не делится на это простое число.
*   После этого мы увеличиваем простой коэффициент на 1 и повторяем этот процесс до тех пор, пока число не станет равным 1.

### Решение:

```js
function largestPrimeFactor(number) { 
  let prime = 2, max = 1; 
  while (prime <= number){ 
    if (number % prime == 0) { 
      max = prime; 
      number = number/prime; 
    } 
    else prime++; //Only increment the prime number if the number isn't divisible by it 
  } 
  return max; 
 } 
```

*   [Код запуска](https://repl.it/@ezioda004/Problem-3-Largest-prime-factor)

### Ресурсы:

*   [Википедия](https://en.wikipedia.org/wiki/Prime_number)