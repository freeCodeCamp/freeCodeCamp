---
title: Smallest multiple
localeTitle: Menor múltiplo
---
## Problema 5: menor múltiplo

### Método:

*   Neste desafio, precisamos encontrar o MMC de 1 a n números.
*   Para encontrar o LCM de um número, usamos a seguinte fórmula:
*   ![lcm](https://wikimedia.org/api/rest_v1/media/math/render/svg/9453a93953efe119b7502c1827aeeb869ab121d6)
*   Para encontrar o GCD (maior divisor comum) de dois números, usamos o algoritmo euclidiano.
*   Uma vez que recebemos o LCM de dois números, podemos obter o LCM dos números de 1 a n.

### Solução:

```js
//LCM of two numbers 
 function lcm(a, b){ 
  return (a*b)/gcd(a, b); 
 } 
 
 //Euclidean recursive algorithm 
 function gcd(a, b){ 
  if (b === 0) return a; 
  return gcd(b, a%b); 
 } 
 
 function smallestMult(n){ 
  let maxLCM = 1; 
 
  //Getting the LCM in the range 
  for (let i = 2; i <= n; i++){ 
    maxLCM = lcm(maxLCM, i); 
  } 
  return maxLCM; 
 } 
```

*   [Executar código](https://repl.it/@ezioda004/Problem-5-Smallest-multiple)

### Referências:

*   [Algoritmo Euclidiano](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [LCM](https://en.wikipedia.org/wiki/Least_common_multiple)