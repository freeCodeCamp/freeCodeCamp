---
title: Largest prime factor
localeTitle: Factor primordial más grande
---
## Problema 3: el factor primordial más grande

### Método:

*   Para encontrar el factor primo más grande de un número, partimos del factor primo 2 más pequeño y dividimos el número con él.
*   Si el resto es 0, significa que el número es divisible por ese número primo, seguimos dividiendo el número por el mismo número primo hasta que ese número no sea más divisible por ese número primo.
*   Después de eso, incrementamos el factor primo en 1 y repetimos este proceso hasta que el número se convierte en 1.

### Solución:

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

*   [Ejecutar código](https://repl.it/@ezioda004/Problem-3-Largest-prime-factor)

### Recursos:

*   [Wikipedia](https://en.wikipedia.org/wiki/Prime_number)