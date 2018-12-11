---
title: Multiples of 3 and 5
localeTitle: Múltiplos de 3 y 5
---
## Problema 1: Múltiplos de 3 y 5

### Método:

*   Podemos encontrar si un número es divisible por otro número con la ayuda de `%` modulo operator.
*   `num1 % num2` devuelve `0` si no hay ningún resto al hacer `num1/num2` .
*   Comenzando desde `i = 3` porque ese es el primer número que se divide por 3 o 5, hacemos un bucle hasta el `number` proporcionado.
*   Si el número es divisible por 3 o 5, lo sumamos a la `sum` variable y finalmente lo devolvemos.

### Solución:

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

*   [Ejecutar código](https://repl.it/@ezioda004/Project-Euler-Problem-1-Multiples-of-3-and-5)

### Referencia:

*   [Operador modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())