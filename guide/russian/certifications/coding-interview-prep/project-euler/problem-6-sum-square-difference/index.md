---
title: Sum square difference
localeTitle: Суммарный квадрат
---
## Задача 6: Суммарный квадрат

### Метод:

*   Сумма первых n натуральных чисел может быть рассчитана с использованием этой формулы:
    
*   ![сумма n чисел](https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2)
    
*   Сумма квадратов n натуральных чисел может быть рассчитана с использованием этой формулы:
    
*   ![сумма n квадратов](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae043bef33d41161541238bdbf4feca9f5e179dd)
    
*   Мы можем вычислить значения, используя приведенную выше формулу, и вычесть их для получения результата.
    

### Решение:

```js
function sumSquareDifference(n) { 
  const sumOfN = (n*(n+1))/2; 
  const sumOfNSquare = (n*(n+1)*(2*n+1))/6; 
 
  //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)` 
  return (sumOfN ** 2) - sumOfNSquare; 
 } 
```

*   [Код запуска](https://repl.it/@ezioda004/Problem-6-Sum-square-difference)

### Рекомендации:

*   [Сумма чисел n - Википедия](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
*   [Сумма n квадратных чисел - Википедия](https://en.wikipedia.org/wiki/Square_pyramidal_number)