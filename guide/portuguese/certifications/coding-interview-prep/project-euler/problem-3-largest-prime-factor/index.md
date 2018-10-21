---
title: Largest prime factor
localeTitle: Maior fator primo
---
## Problema 3: Maior fator primordial

### Método:

*   Para encontrar o maior fator primo de um número, partimos do menor fator primo 2 e dividimos o número com ele.
*   Se o resto for 0, isso significa que o número é divisível por esse número primo, continuamos a dividir o número pelo mesmo número primo até que esse número não seja mais divisível por esse número primo.
*   Depois disso, incrementamos o fator primo em 1 e repetimos esse processo até que o número se torne 1.

### Solução:

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

*   [Executar código](https://repl.it/@ezioda004/Problem-3-Largest-prime-factor)

### Recursos:

*   [Wikipedia](https://en.wikipedia.org/wiki/Prime_number)