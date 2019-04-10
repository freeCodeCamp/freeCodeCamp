---
title: Smallest multiple
localeTitle: Múltiplo más pequeño
---
## Problema 5: el múltiplo más pequeño

### Método:

*   En este desafío, necesitamos encontrar el MCM de 1 a n números.
*   Para encontrar el MCM de un número usamos la siguiente fórmula:
*   ![mcm](https://wikimedia.org/api/rest_v1/media/math/render/svg/9453a93953efe119b7502c1827aeeb869ab121d6)
*   Para encontrar GCD (el Divisor común más grande) de dos números usamos el algoritmo euclidiano.
*   Una vez que obtenemos LCM de dos números, podemos obtener LCM de los números de 1 a n.

### Solución:

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

*   [Ejecutar código](https://repl.it/@ezioda004/Problem-5-Smallest-multiple)

### Referencias:

*   [Algoritmo euclidiano](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [LCM](https://en.wikipedia.org/wiki/Least_common_multiple)